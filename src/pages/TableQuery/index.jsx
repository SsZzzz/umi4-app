import { useRequest, useSetState } from 'ahooks';
import { Button, DatePicker, Form, Input, Table } from 'antd';
import service from './service';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'nickName',
    dataIndex: 'nickName',
  },
  {
    title: 'gender',
    dataIndex: 'gender',
    sorter: true,
  },
];

export default () => {
  const [form] = Form.useForm();

  const [params, setParams] = useSetState({ current: 1, pageSize: 10 });

  const { data, loading } = useRequest(() => service.queryUserList(params), {
    refreshDeps: [params],
  });

  function onFinish(values) {
    setParams({ ...values, current: 1 });
  }

  function handleTableChange({ current, pageSize }, filters, { field, order }) {
    setParams({ current, pageSize, field, order });
  }

  return (
    <div>
      <Form form={form} name="filter" layout="inline" onFinish={onFinish}>
        <Form.Item label="搜索项A" name="A">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="搜索项B" name="B">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="时间筛选C" name="date">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>

      <Table
        rowKey="key"
        size="small"
        dataSource={data?.list}
        columns={columns}
        loading={loading}
        onChange={handleTableChange}
        pagination={{
          current: params.current,
          pageSize: params.pageSize,
          total: data?.total,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 条`,
        }}
        bordered
      />
    </div>
  );
};

import { Lock, User } from '@icon-park/react';
import { Button, Col, Form, Input, Row } from 'antd';
import styles from './index.less';
import quotations from './quotations';

const quotation = quotations[Math.floor(Math.random() * quotations.length)];

export default () => {
  const [form] = Form.useForm();

  function onFinish() {}

  return (
    <Row>
      <Col span={16} className={styles.left}>
        <div className={styles.systemName} />
        <div className={styles.slogan}>
          <p>{quotation}</p>
          <p>杭千高速发展有限公司</p>
        </div>
      </Col>
      <Col span={8} className={styles.right}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>欢迎回来</h1>
          <Form form={form} name="form" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input
                size="large"
                prefix={<User size="18" fill="#C8C9CC" />}
                placeholder="请输入用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                size="large"
                prefix={<Lock size="18" fill="#C8C9CC" />}
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item noStyle>
              <Form.Item
                name="capture"
                rules={[{ required: true, message: '请输入验证码' }]}
                className={styles.captureItem}
              >
                <Input size="large" placeholder="请输入验证码" />
              </Form.Item>
              <div className={styles.captureContainer}></div>
            </Form.Item>
            <Form.Item>
              <Button
                className={styles.button}
                size="large"
                type="primary"
                htmlType="submit"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

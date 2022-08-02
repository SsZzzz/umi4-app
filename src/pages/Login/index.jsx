import { Lock, User } from '@icon-park/react';
import { useRequest } from 'ahooks';
import { Button, Col, Form, Input, Row, Spin } from 'antd';
import styles from './index.less';
import quotations from './quotations';
import service from './service';

const quotation = quotations[Math.floor(Math.random() * quotations.length)];

export default () => {
  const [form] = Form.useForm();

  const {
    data: verificationObj,
    refresh,
    loading,
  } = useRequest(service.getGraphicVerificationCode);

  const { run, loading: loginLoading } = useRequest(service.login, {
    manual: true,
    onError: () => refresh(),
  });

  function onFinish(values) {
    run({ ...values, codeKey: verificationObj.codeKey });
  }

  return (
    <Row className={styles.loginContainer}>
      <Col span={16} className={styles.left}>
        <div className={styles.systemName} />
        <div className={styles.slogan}>
          <p>{quotation}</p>
        </div>
      </Col>
      <Col span={8} className={styles.right}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>欢迎回来</h1>
          <Form form={form} name="form" onFinish={onFinish}>
            <Form.Item
              name="account"
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
                name="code"
                rules={[{ required: true, message: '请输入验证码' }]}
                className={styles.verificationItem}
              >
                <Input size="large" placeholder="请输入验证码" />
              </Form.Item>
              <Spin
                spinning={loading}
                wrapperClassName={styles.verificationContainer}
              >
                <img src={verificationObj?.base64} onClick={refresh} />
              </Spin>
            </Form.Item>
            <Form.Item>
              <Button
                className={styles.button}
                size="large"
                type="primary"
                htmlType="submit"
                loading={loginLoading}
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

import React from 'react'

import { Button, Form, Input, InputNumber } from 'antd';

import './contact.css'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
function Contact() {

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form style={{ width: '70%', margin: 40 }} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input placeholder='Enter your Email' />
      </Form.Item>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='Enter your name' />
      </Form.Item>

      <Form.Item name={['user', 'introduction']} label="Subject">
        <Input.TextArea placeholder='Enter your Subject' />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Message">
        <Input.TextArea
          style={{
            height: 120,
          }}
          placeholder='Enter your Message' />
      </Form.Item>
      <Form.Item style={{ marginBottom: 20 }} wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact
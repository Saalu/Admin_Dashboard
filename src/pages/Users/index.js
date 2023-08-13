import { useState } from "react";
import { Button, Space, Form, Input, Select } from "antd";
// import type { FormInstance } from 'antd/es/form';

const Users = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name, email);
  return (
    <Form name="control-ref" style={{ maxWidth: 600 }}>
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Users;

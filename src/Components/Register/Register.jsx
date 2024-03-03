// src/Register.js
import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
// import './Register.css';

const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Received values:", values);
    // Here you can implement your register logic
    // For demo purpose, we just log the values
    setLoading(false);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        {/* <h1>Register</h1> */}
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input placeholder="Address" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            rules={[
              {
                required: true,
                message: "Please select your date of birth!",
              },
            ]}
          >
            <DatePicker placeholder="Date of Birth" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{backgroundColor:"#f26a21"}} loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;

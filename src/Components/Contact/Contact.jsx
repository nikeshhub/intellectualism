import React from "react";
import { Row, Col, Card, Divider, Typography, Form, Input, Button } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./Contact.css";

const { Title, Text } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="contact-container" >
      <Title>Contact Us</Title>
      <Divider />
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={10} order={2}>
          <Card>
            <Title level={4}>
              <PhoneOutlined /> Phone
            </Title>
            <Text>+1 234 567 890</Text>
          </Card>
          <Card style={{ marginTop: "1rem" }}>
            <Title level={4}>
              <MailOutlined /> Email
            </Title>
            <Text>info@intellectualism.com</Text>
          </Card>
          <Card style={{ marginTop: "1rem" }}>
            <Title level={4}>
              <EnvironmentOutlined /> Address
            </Title>
            <Text>123 Main Street, City, Country</Text>
          </Card>
        </Col>
        {/* Contact form */}
        <Col xs={24} sm={12} md={14} order={1}>
          <Card>
            <Form name="contact-form" onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

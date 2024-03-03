import React from "react";
import { Row, Col, Typography, Card, Collapse, Divider } from "antd";
import { RocketOutlined, ToolOutlined, TeamOutlined } from "@ant-design/icons";
import "./About.css";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const AboutUs = () => {
  return (
    <div className="about-container">
      <Title level={2}>About "Intellectualism"</Title>
      <Divider></Divider>
      {/* Overview */}
      <Title level={3}>Overview</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: "5rem" }}>
        <Col xs={24} md={18}>
          {/* <Card style={{ height: "100%" }}> */}
          <Paragraph>
            "Intellectualism" is a philosophical exploration of the power of
            ideas and the importance of intellectual inquiry in society. It
            delves into various topics such as the nature of truth, the role of
            reason, and the pursuit of wisdom. Through engaging narratives and
            thought-provoking arguments, the book challenges readers to rethink
            their assumptions and deepen their understanding of the world. ideas
            and the importance of intellectual inquiry in society. It delves
            into various topics such as the nature of truth, the role of reason,
            and the pursuit of wisdom. Through engaging narratives and
            thought-provoking arguments, the book challenges readers to rethink
            their assumptions and deepen their understanding of the world.
            reason, and the pursuit of wisdom. Through engaging narratives and
            thought-provoking arguments, the book challenges readers to rethink
            their assumptions and deepen their understanding of the world.
          </Paragraph>
          {/* </Card> */}
        </Col>
        <Col
          xs={24}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1707325354/4aa56f11d45_cbxoak.png"
            alt="Overview"
            style={{ width: "10rem" }}
          />
        </Col>
      </Row>
      {/* Core Values */}
      <Title level={3}>Core Values</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: "5rem" }}>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ height: "100%" }}>
            <RocketOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
            <Title level={4}>Intellectual Curiosity</Title>
            <Paragraph>
              We value the pursuit of knowledge and continuous learning.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ height: "100%" }}>
            <ToolOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
            <Title level={4}>Critical Thinking</Title>
            <Paragraph>
              We promote analytical thinking and questioning of assumptions.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ height: "100%" }}>
            <TeamOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
            <Title level={4}>Open-mindedness</Title>
            <Paragraph>
              We embrace diverse perspectives and seek to understand different
              viewpoints.
            </Paragraph>
            <Paragraph>Hiiii</Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Mission */}
      <Title level={3}>Mission</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: "5rem" }}>
        <Col xs={24} md={18}>
          <Paragraph>
            Our mission is to foster a community of intellectuals who engage in
            thoughtful discourse and contribute to the advancement of knowledge
            and understanding. Our mission is to foster a community of
            intellectuals who engage in thoughtful discourse and contribute to
            the advancement of knowledge and understanding. Our mission is to
            foster a community of intellectuals who engage in thoughtful
            discourse and contribute to the advancement of knowledge and
            understanding.
          </Paragraph>
          <Collapse accordion>
            <Panel
              header="Encourage critical thinking and intellectual curiosity"
              key="1"
            >
              <Paragraph>
                We strive to create an environment that fosters critical
                thinking and encourages individuals to explore new ideas and
                concepts.
              </Paragraph>
            </Panel>
            <Panel
              header="Promote the exchange of diverse perspectives"
              key="2"
            >
              <Paragraph>
                We believe that diversity of thought leads to richer discussions
                and deeper insights. By promoting the exchange of diverse
                perspectives, we aim to broaden our understanding of the world.
              </Paragraph>
            </Panel>
            <Panel header="Support lifelong learning and education" key="3">
              <Paragraph>
                Learning is a lifelong journey, and we are committed to
                supporting individuals in their pursuit of knowledge and
                education. Whether through formal education or self-directed
                learning, we encourage continuous growth and development.
              </Paragraph>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} md={6}>
          <img
            src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1707842133/WhatsApp_Image_2024-02-11_at_23.22.11_qdskgi.jpg"
            alt="Mission"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;

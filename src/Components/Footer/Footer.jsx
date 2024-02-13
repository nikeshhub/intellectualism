import React from "react";
import { Layout, Row, Col } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TikTokFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer className="footer">
      <div className="container">
        <Row gutter={24}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h4>About Intellectualism</h4>
            <p>
              Intellectualism is your premier destination for intellectual
              exploration. With a vast array of resources at your fingertips,
              Intellectualism empowers you to delve into the depths of knowledge
              and curiosity. Whether you're seeking insightful articles or
              exploring profound ideas, Intellectualism is your trusted
              companion in the pursuit of enlightenment. Join us on a journey of
              intellectual discovery and let Intellectualism be your gateway to
              a world of thought-provoking content.
            </p>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h4 style={{ textAlign: "center" }}>Quick Links</h4>
            <ul className="footer-menu" style={{ textAlign: "center" }}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h4>Stay Updated</h4>
            <p>
              Subscribe to our newsletter or follow us on social media to stay
              updated with the latest content and announcements.
            </p>
            <div className="social-icons">
              <button
                onClick={() =>
                  window.open("https://github.com/nikeshhub", "_blank")
                }
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  color: "#05b4f7",
                }}
              >
                <FacebookFilled
                  style={{ fontSize: "1.5rem", color: "#f26a21" }}
                />
              </button>
              <button
                onClick={() =>
                  window.open("https://linkedin.com/in/nikeshhub", "_blank")
                }
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  color: "#05b4f7",
                }}
              >
                <InstagramFilled
                  style={{ fontSize: "1.5rem", color: "#f26a21" }}
                />
              </button>
              <button
                onClick={() =>
                  window.open("https://linkedin.com/in/nikeshhub", "_blank")
                }
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  color: "#05b4f7",
                }}
              >
                <TwitterCircleFilled
                  style={{ fontSize: "1.5rem", color: "#f26a21" }}
                />
              </button>
              <button
                onClick={() =>
                  window.open("https://linkedin.com/in/nikeshhub", "_blank")
                }
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  color: "#05b4f7",
                }}
              >
                <TikTokFilled
                  style={{ fontSize: "1.5rem", color: "#f26a21" }}
                />
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}

export default AppFooter;

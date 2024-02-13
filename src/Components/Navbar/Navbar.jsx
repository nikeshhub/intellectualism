import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import {
  HomeOutlined,
  ContactsOutlined,
  InfoCircleOutlined,
  PictureOutlined,
  TeamOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col xs={20} sm={20} md={4}>
            <a href="/">
              <div
                className="logo"
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  maxWidth: "150px",
                }}
              >
                Intellectualism
              </div>
            </a>
          </Col>
          <Col xs={0} sm={0} md={20}>
            <div
              className="nav-buttons"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{ flexGrow: 1 }}
              >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <NavLink to="/">Home</NavLink>
                  {/* <a href="/">Home</a> */}
                </Menu.Item>
                <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                  <a href="/about">About</a>
                </Menu.Item>
                <Menu.Item key="3" icon={<PictureOutlined />}>
                  <a href="/gallery">Gallery</a>
                </Menu.Item>
                <Menu.Item key="4" icon={<TeamOutlined />}>
                  <a href="/community">Community</a>
                </Menu.Item>
                <Menu.Item key="5" icon={<ContactsOutlined />}>
                  <a href="/contact">Contact</a>
                </Menu.Item>
              </Menu>

              <Button
                style={{ color: "white", marginLeft: "10px" }}
                type="link"
              >
                Login
              </Button>
              <Button
                style={{ backgroundColor: "#f26a21", marginLeft: "10px" }}
                type="primary"
                danger
              >
                Sign Up
              </Button>
            </div>
          </Col>
          <Col xs={4} sm={4} md={0}>
            <Button
              style={{
                backgroundColor: "#05b4f7",
                color: "white",
                border: "none",
              }}
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              style={{ background: "transparent !important" }}
            >
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<InfoCircleOutlined />}
              className="nav-item"
            >
              <a href="/about"> About </a>
            </Menu.Item>
            <Menu.Item key="3" icon={<PictureOutlined />} className="nav-item">
              <a href="/gallery">Gallery </a>
            </Menu.Item>
            <Menu.Item key="4" icon={<ContactsOutlined />} className="nav-item">
              <a href="/contacts">Contacts </a>
            </Menu.Item>
            <Menu.Item key="5" icon={<TeamOutlined />} className="nav-item">
              <a href="/community">Community </a>
            </Menu.Item>
            <Menu.Item key="5" className="nav-item">
              <Button
                style={{
                  color: "white",
                  marginLeft: "10px",
                  backgroundColor: "black",
                  fontWeight: "bold",
                }}
                type="link"
              >
                Login
              </Button>
            </Menu.Item>
            <Menu.Item key="5" className="nav-item">
              <Button
                style={{
                  backgroundColor: "#f26a21",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
                type="primary"
              ></Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;

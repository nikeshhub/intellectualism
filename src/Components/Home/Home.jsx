import React, { useState } from "react";
import { Row, Col, Button, Space, Carousel, Modal } from "antd";
import {
  ArrowRightOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Typist from "react-typist";
import "./Home.css";
import iFrame from "../iFrame/iFrame";
import VideoPopup from "../iFrame/iFrame";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleWatchVideoButtonClick = () => {
    // Set the selected video and open the video popup
    setSelectedVideo({ name: "Video Name", key: "NfL66wzWvyg" });
    setShowVideoPopup(true);
  };
  const handlePlayButtonClick = () => {
    // Set the selected video and open the video popup
    setSelectedVideo({ name: "Video Name", key: "NfL66wzWvyg" });
    setShowVideoPopup(true);
  };

  const handleCloseVideoPopup = () => {
    // Close the video popup
    setShowVideoPopup(false);
  };
  const textContent = (
    <div className="text-content">
      {/* <h1 className="header">Intellectualism</h1> */}
      <h1 style={{ fontSize: "2.8rem", marginBottom: "1.5rem" }}>
        Every
        <span style={{ color: "#007A7A", fontWeight: "bold" }}>
          {" "}
          Individual's, Society 's and Country's
        </span>{" "}
        Destination <br />{" "}
        <Typist avgTypingDelay={200} cursor={{ hideWhenDone: true }}>
          <span
            style={{
              backgroundColor: "#f26a21",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Intellectualism
          </span>
        </Typist>
      </h1>
      {/* <h2 className="header">Intellectualism </h2> */}
      <p style={{ fontSize: "2rem", color: "grey", marginBottom: "1.5rem" }}>
        A political ideology that assures every kind of freedom to every
        individual of this world
      </p>
      <div>
        <Space style={{ gap: "2rem" }}>
          <img
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1707077912/bigyan_dnd3k1.jpg"
            alt="Bigyan Gautam"
          />
          <div>
            <p
              style={{ color: "#f26a21", fontSize: "1rem", fontWeight: "bold" }}
            >
              WRITTEN BY{" "}
            </p>
            <p style={{ fontSize: "1rem" }}>Bigyan Gautam</p>
          </div>
        </Space>
      </div>
      <div className="button-container">
        <Space direction="vertical" style={{ gap: "2rem" }}>
          {" "}
          <Button
            type="primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#C80815",
              fontSize: "18px",
              padding: "25px 25px",
              fontWeight: "bold",
            }}
          >
            <ArrowRightOutlined />
            Buy the book
          </Button>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              borderColor: "#f26a21 !important",
              color: "#f26a21 ",
              fontSize: "18px",
              fontWeight: "bold",
              padding: "25px 25px",
            }}
            onClick={handleWatchVideoButtonClick}
          >
            <VideoCameraOutlined />
            Watch Video
          </Button>
        </Space>
      </div>
    </div>
  );

  const carouselContent = (
    <Carousel autoplay dots={false}>
      <div>
        <img
          src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1707319902/WhatsApp_Image_2024-02-07_at_01.58.27_mts5fw.jpg"
          alt="Carousel Image 1"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1707319902/WhatsApp_Image_2024-02-07_at_01.58.27_mts5fw.jpg"
          alt="Carousel Image 2"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1707319902/WhatsApp_Image_2024-02-07_at_01.58.33_vwnghk.jpg"
          alt="Carousel Image 3"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Carousel>
  );
  const modalContent = showModal ? (
    <iframe
      title="Embedded Video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ) : null;

  const howThisBookWillChangeHowYouThink = (
    <div>
      <h1 className="heading">
        <span style={{ color: "#007A7A" }}>HOW THIS BOOK</span> will change{" "}
        <span style={{ color: "#42296e", fontWeight: "bold" }}>
          {" "}
          <br />
          HOW YOU LIVE
        </span>
      </h1>
      <p style={{ fontSize: "1.3rem", color: "grey" }}>
        {" "}
        Political parties worldwide, often adopting leftist ideologies such as
        socialism and communism, aim to control all sources of power in the
        state, promising equal benefits for all individuals. However, even after
        five hundred or a thousand years, the leadership of any political party
        has not been able to make decisions according to their ideology.
        Consequently, despite many communist (socialist) countries having
        amassed personal wealth entirely at the state's expense, the success of
        the communist ideology, both in the past and present, is questionable.
      </p>
    </div>
  );
  const orderBook = (
    <div>
      <h1 className="heading">
        <span style={{ color: "#007A7A" }}>Explore a New World of Ideas</span>
      </h1>
      <p style={{ fontSize: "1.3rem", color: "grey", lineHeight: "1.8" }}>
        <span style={{ fontWeight: "bold", color: "black" }}>
          Are you tired of the same old political rhetoric?
        </span>{" "}
        <br />
        <span style={{ fontWeight: "bold", color: "black" }}>
          Do you seek a fresh perspective on the world's most pressing issues?
        </span>
        <br /> Intellectualism offers a compelling exploration of political
        ideologies and their impact on society. From socialism to communism,
        discover the ideologies shaping our world and envision a future of true
        equality and freedom.
      </p>
      <Button className="button-orderbook">
        <ArrowRightOutlined />
        Order the book now
      </Button>
    </div>
  );

  return (
    <div>
      <div className="home-container">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div> {textContent}</div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="carousel-image-container"> {carouselContent}</div>
          </Col>
        </Row>
      </div>
      <div className="why-container">
        <Row gutter={[16, 16]} justify="space-between">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="image-container">
              <img
                className="image"
                src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1707324287/Untitled_design_accsyo.png"
                alt=""
              />
              <div
                onClick={handlePlayButtonClick}
                className="play-icon-container"
              >
                <PlayCircleFilled className="play-icon" />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {howThisBookWillChangeHowYouThink}
          </Col>
        </Row>
      </div>
      <div className="order-the-book">
        <Row gutter={[16, 16]} justify="space-between">
          <Col xs={24} sm={24} md={12} lg={14} xl={14}>
            {orderBook}
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="book-container">
              <img
                className="book-image-container"
                src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1707325354/4aa56f11d45_cbxoak.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
      {showVideoPopup && (
        <VideoPopup video={selectedVideo} onClose={handleCloseVideoPopup} />
      )}
    </div>
  );
};

export default HomePage;

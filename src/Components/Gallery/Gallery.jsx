import React from "react";
import { Row, Col, Card, Image, Divider } from "antd";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1707324287/Untitled_design_accsyo.png",
      title: "Image 1",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1707319902/WhatsApp_Image_2024-02-07_at_01.58.27_mts5fw.jpg",
      title: "Image 2",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1707319902/WhatsApp_Image_2024-02-07_at_01.58.33_vwnghk.jpg",
      title: "Image 3",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1707080894/pexels-mart-production-7251488_l3epun.jpg",
      title: "Image 3",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/duaz5kg1m/image/upload/v1707319902/WhatsApp_Image_2024-02-07_at_01.58.33_vwnghk.jpg",
      title: "Image 3",
    },
  ];

  return (
    <div style={{ padding: "4rem 2rem" }}>
      <h1>Gallery</h1>
      <Divider/>
      <Row gutter={[16, 16]}>
        {galleryItems.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <Image
                  alt={item.title}
                  src={item.src}
                //   style={{ width: "100%", height: "22rem", objectFit:"contain" }}
                />
              }
              hoverable
            >
              <Card.Meta title={item.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;

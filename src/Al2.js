import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

// Manually define image paths for each category
const wildImages = [
  '/images/wild/baby.png',
  '/images/wild/image3.jpg',
  '/images/wild/image4.jpg',
  '/images/wild/image5.jpg',
  '/images/wild/image6.jpg',
];

const babyImages = [
  '/images/baby/baby.png',
  '/images/baby/image2.jpg',
  '/images/baby/image3.jpg',
  '/images/baby/image4.jpg',
  '/images/baby/image5.jpg',
  '/images/baby/image6.jpg',
];

const weddingImages = [
  '/images/wedding/image1.jpg',
  '/images/wedding/image2.jpg',
  '/images/wedding/image3.jpg',
  '/images/wedding/image4.jpg',
  '/images/wedding/image5.jpg',
  '/images/wedding/image6.jpg',
];

const modelImages = [
  '/images/model/image1.jpg',
  '/images/model/image2.jpg',
  '/images/model/image3.jpg',
  '/images/model/image4.jpg',
  '/images/model/image5.jpg',
  '/images/model/image6.jpg',
];

const otherImages = [
  '/images/other/image1.jpg',
  '/images/other/image2.jpg',
  '/images/other/image3.jpg',
  '/images/other/image4.jpg',
  '/images/other/image5.jpg',
  '/images/other/image6.jpg',
];

const Albums = () => {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');

  // Function to handle the class click and load images based on category
  const handleClassClick = (folderName) => {
    switch (folderName) {
      case 'wild':
        setImages(wildImages);
        break;
      case 'baby':
        setImages(babyImages);
        break;
      case 'wedding':
        setImages(weddingImages);
        break;
      case 'model':
        setImages(modelImages);
        break;
      case 'other':
        setImages(otherImages);
        break;
      default:
        setImages([]);
    }
    setCategory(folderName);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setImages([]);
    setCategory('');
  };

  return (
    <Container className="album-container m-5 p-5">
      <Row className="g-5">
        {/* Wild */}
        <Col sm={12} md={6} lg={2}>
          <div
            className="wild"
            onClick={() => handleClassClick('wild')}
            style={{ cursor: 'pointer' }}
          >
            <h1>Wild Life</h1>
            <div className="hover-wild"></div>
          </div>
        </Col>

        {/* Baby */}
        <Col sm={12} md={6} lg={2}>
          <div
            className="baby"
            onClick={() => handleClassClick('baby')}
            style={{ cursor: 'pointer' }}
          >
            <h1>Baby</h1>
            <div className="hover-baby"></div>
          </div>
        </Col>

        {/* Wedding */}
        <Col sm={12} md={6} lg={2}>
          <div
            className="wedding"
            onClick={() => handleClassClick('wedding')}
            style={{ cursor: 'pointer' }}
          >
            <h1>Wedding/ PreWedding</h1>
            <div className="hover-wedding"></div>
          </div>
        </Col>

        {/* Model */}
        <Col sm={12} md={6} lg={2}>
          <div
            className="model"
            onClick={() => handleClassClick('model')}
            style={{ cursor: 'pointer' }}
          >
            <h1>Fashion</h1>
            <div className="hover-model"></div>
          </div>
        </Col>

        {/* Other */}
        <Col sm={12} md={6} lg={2}>
          <div
            className="other"
            onClick={() => handleClassClick('other')}
            style={{ cursor: 'pointer' }}
          >
            <h1>Others</h1>
            <div className="hover-other"></div>
          </div>
        </Col>
      </Row>

      {/* Modal to display images */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{category.charAt(0).toUpperCase() + category.slice(1)} Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {images.map((image, index) => (
              <Col xs={12} sm={4} md={4} lg={2} key={index} className="mb-3">
                <img
                  src={image}
                  alt={`${category}-${index}`}
                  className="img-fluid"
                  style={{ borderRadius: '5px', border: '1px solid #ddd' }}
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Albums;

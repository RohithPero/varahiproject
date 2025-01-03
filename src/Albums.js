import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

// Dynamically import images
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const wildImages = importAll(require.context('./images/wild', false, /\.(png|jpe?g|svg)$/));
const babyImages = importAll(require.context('./images/baby', false, /\.(png|jpe?g|svg)$/));
const weddingImages = importAll(require.context('./images/wedding', false, /\.(png|jpe?g|svg)$/));
const modelImages = importAll(require.context('./images/model', false, /\.(png|jpe?g|svg)$/));
const otherImages = importAll(require.context('./images/other', false, /\.(png|jpe?g|svg)$/));

const Albums = () => {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [category, setCategory] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClassClick = (folderName) => {
    switch (folderName) {
      case 'wild':
        setGalleryImages(wildImages);
        break;
      case 'baby':
        setGalleryImages(babyImages);
        break;
      case 'wedding':
        setGalleryImages(weddingImages);
        break;
      case 'model':
        setGalleryImages(modelImages);
        break;
      case 'other':
        setGalleryImages(otherImages);
        break;
      default:
        setGalleryImages([]);
    }
    setCategory(folderName);
    setShowGalleryModal(true);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const handleCloseGallery = () => {
    setShowGalleryModal(false);
    setGalleryImages([]);
    setCategory('');
  };

  const handleCloseImage = () => {
    setShowImageModal(false);
    setSelectedImage('');
  };

  return (
    <Container className="album-container m-5 p-5">
      <Row className="g-5">
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
        <Col sm={12} md={6} lg={2}>
          <div
            className="wedding"
            onClick={() => handleClassClick('wedding')}
            style={{ cursor: 'pointer' }}
          >
            <h1>Wedding</h1>
            <div className="hover-wedding"></div>
          </div>
        </Col>
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

      {/* Modal to display gallery */}
      <Modal show={showGalleryModal} onHide={handleCloseGallery} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{category.charAt(0).toUpperCase() + category.slice(1)} Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {galleryImages.map((image, index) => (
              <Col xs={12} sm={4} md={4} lg={2} key={index} className="mb-3">
                <img
                  src={image}
                  alt={`${category}-${index}`}
                  className="img-fluid"
                  style={{ borderRadius: '5px', border: '1px solid #ddd', cursor: 'pointer' }}
                  onClick={() => handleImageClick(image)}
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>

      {/* Modal to display full-screen image */}
      <Modal show={showImageModal} onHide={handleCloseImage} size="xl" centered>
        <Modal.Body className="text-center">
          <Button
            variant="secondary"
            onClick={handleCloseImage}
            style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}
          >
            Close
          </Button>
          <img
            src={selectedImage}
            alt="Full Screen"
            className="img-fluid"
            style={{ maxHeight: '90vh', borderRadius: '5px' }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Albums;

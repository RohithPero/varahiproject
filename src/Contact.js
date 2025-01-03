import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { InputGroup, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const [isClosed, setIsClosed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElement = event.target;

    emailjs
      .sendForm(
        'service_s4pvuo1', // Your EmailJS service ID
        'template_v3a42k7', // Your EmailJS template ID
        formElement, // This is the correct reference to the form element
        'BPWIja3BgYj4dGyT5' // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.log('Error sending email:', error.text);
          alert('Failed to send your message. Please try again later.');
        }
      );
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null; // This will effectively hide the component if 'x' is clicked
  }

  return (
    <div
      className="contact-page"
      style={{
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="contact-form-container"
        style={{
          background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
          padding: '30px',
          borderRadius: '10px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          color: '#fff', // White text color inside the form
          marginTop: '-200px',
          position: 'relative',
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        <h1
          className="text-uppercase fs-1 font-weight-bold mb-4 text-center"
          style={{ borderBottom: '2px solid #4ca1af', paddingBottom: '10px' }}
        >
          Contact Us
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Label className="mb-0 mt-2">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              background: 'transparent',
              color: '#fff',
              borderColor: '#4ca1af',
            }}
          />
          <Form.Label className="mt-3 mb-0">Email address</Form.Label>
          <InputGroup>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                background: 'transparent',
                color: '#fff',
                borderColor: '#4ca1af',
              }}
            />
            <InputGroup.Text
              style={{
                background: '#4ca1af',
                color: '#fff',
                border: 'none',
              }}
            >
              @gmail.com
            </InputGroup.Text>
          </InputGroup>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mt-3"
          >
            <Form.Control
              as="textarea"
              name="comments"
              placeholder="Leave a Comment here"
              style={{
                height: '100px',
                background: 'transparent',
                color: '#fff',
                borderColor: '#4ca1af',
              }}
              value={formData.comments}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <div className="d-flex justify-content-center align-items-center">
            <Button
              variant="outline-light"
              type="submit"
              className="mt-4 mb-2 px-5"
            >
              Submit
            </Button>
          </div>
        </Form>

        <div className="d-flex justify-content-center align-items-center mt-4">
          <a
            href="https://www.instagram.com/varahi_photography_/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <FaInstagram size={30} style={{ color: '#E1306C' }} />
          </a>
          <a href="mailto:bhargav30066@gmail.com" className="mx-3">
            <FaEnvelope size={30} style={{ color: '#0072C6' }} />
          </a>
          <a
            href="https://wa.me/+916305524159"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <FaWhatsapp size={30} style={{ color: '#25D366' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

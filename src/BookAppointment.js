import React, { useState } from 'react';
import { Button, Form, InputGroup, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isClosed, setIsClosed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_s4pvuo1', 'template_khke6ui', e.target, 'BPWIja3BgYj4dGyT5')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Your appointment request has been sent!');
      }, (error) => {
        console.log('Error sending email:', error.text);
        alert('There was an error sending your request.');
      });
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null; // This hides the form when the close button is clicked
  }

  return (
    <div
      className="appointment-page"
      style={{
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="appointment-form-container"
        style={{
          background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
          padding: '30px',
          borderRadius: '10px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          color: '#fff', // White text color inside the form
          marginTop: '-170px',
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
          Book an Appointment
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

          <Form.Label className="mt-3 mb-0">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              background: 'transparent',
              color: '#fff',
              borderColor: '#4ca1af',
            }}
          />

          <Form.Label className="mt-3 mb-0">Service</Form.Label>
          <Form.Select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            style={{
              background: 'transparent',
              color: '#fff',
              borderColor: '#4ca1af',
            }}
          >
            <option value="Wedding / Prewedding">Wedding/Pre Wedding</option>
            <option value="Baby">Baby</option>
            <option value="Fashion">Fashion</option>
          </Form.Select>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Extra Information (optional)"
            className="mt-3"
          >
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Leave a message here"
              style={{
                height: '100px',
                background: 'transparent',
                color: '#fff',
                borderColor: '#4ca1af',
              }}
              value={formData.message}
              onChange={handleChange}
            />
          </FloatingLabel>

          <div className="d-flex justify-content-center align-items-center">
            <Button
              variant="outline-light"
              type="submit"
              className="mt-4 mb-2 px-5"
              style={{
                borderColor: '#4ca1af',
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookAppointment;

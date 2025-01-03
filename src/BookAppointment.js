// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import { InputGroup, Form } from 'react-bootstrap';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const BookAppointment = () => {
//   return (
//     <div className='appointment'>
//         <h1 className='text-uppercase fs-1 font-weight-bold mt-5'>Book an Appointmemnt</h1>
//       <Form>
//        <Form.Label className='mb-0 mt-2'>Name</Form.Label>
//        <Form.Control type='text' placeholder='Enter your Name' required/>
//        <Form.Label className='mt-1 mb-0'>Email address</Form.Label>

//        <InputGroup >
//         <Form.Control
//           placeholder="Email ID"
//           aria-label="Email Id"
//           aria-describedby="basic-addon2"
//           required
//         />
//         <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
//       </InputGroup> 
       
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
    
//     <Form.Label className='mt-1 mb-0'>Phone Number</Form.Label>
// <Form.Control
//   type="tel"
//   placeholder="Enter your phone number "
//   pattern="^\+?[1-9]\d{1,14}$"
//   title="Please enter a valid phone number with the country code (e.g., +91 9999999999)"
//   required
// />
// <Form.Text className="text-muted">
//   Include the country code, e.g., +91 9999999999.
// </Form.Text>
// <br></br>

//         <Form.Label className='mt-1 mb-0'>Service</Form.Label>
//         <Form.Select aria-label="Default select example">
    
//       <option value="1">Wedding/Pre Wedding</option>
//       <option value="2">Baby</option>
//       <option value="3">Fashion</option>
//     </Form.Select>

     
//     <FloatingLabel
//         controlId="floatingTextarea"
//         label="Extra Information(optional)"
//         className="mt-3"
//       >
//         <Form.Control as="textarea" placeholder="Leave a message here" 
//         style={{ height: '100px' }}
//         />
//       </FloatingLabel>
// <div className='d-flex justify-content-center align-items-center'>
// <Button variant="primary" type="submit" className='mt-4 mb-2'>
//         Submit
//       </Button>
// </div>
      
    
//       </Form>

      
//     </div>
//   )
// }

// export default BookAppointment



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

  return (
    <div className='appointment'>
      <h1 className='text-uppercase fs-1 font-weight-bold mt-5'>Book an Appointment</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label className='mb-0 mt-2'>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter your Name'
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Form.Label className='mt-1 mb-0'>Email address</Form.Label>
        <InputGroup>
          <Form.Control
            placeholder="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputGroup.Text>@gmail.com</InputGroup.Text>
        </InputGroup>

        <Form.Label className='mt-1 mb-0'>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <Form.Label className='mt-1 mb-0'>Service</Form.Label>
        <Form.Select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
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
            placeholder="Leave a message here"
            style={{ height: '100px' }}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </FloatingLabel>

        <div className='d-flex justify-content-center align-items-center'>
          <Button variant="primary" type="submit" className='mt-4 mb-2'>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BookAppointment;

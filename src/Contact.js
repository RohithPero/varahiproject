// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import { InputGroup, Form } from 'react-bootstrap';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <div className='contact'>
//         <h1 className='text-uppercase fs-1 font-weight-bold mt-5'>Contact Us</h1>
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
       
        


//     <FloatingLabel
//         controlId="floatingTextarea"
//         label="Comments"
//         className="mt-3"
//       >
//         <Form.Control as="textarea" placeholder="Leave a Comment here" 
//         style={{ height: '100px' }} required
//         />
//       </FloatingLabel>
// <div className='d-flex justify-content-center align-items-center'>
// <Button variant="primary" type="submit" className='mt-4 mb-2'>
//         Submit
//       </Button>
// </div>
      
    
//       </Form>

      

// <div className="d-flex justify-content-center align-items-center mt-4">
//   {/* Instagram Icon */}
//   <a
//     href="https://www.instagram.com/varahi_photography_/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="mx-3"
//   >
//     <FaInstagram size={30} style={{ color: '#E1306C' }} />
//   </a>

//   {/* Mail Icon */}
//   <a
//     href="mailto:bhargav30066@gmail.com"
//     className="mx-3"
//   >
//     <FaEnvelope size={30} style={{ color: '#0072C6' }} />
//   </a>

//   {/* WhatsApp Icon */}
//   <a
//     href="https://wa.me/+916305524159"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="mx-3"
//   >
//     <FaWhatsapp size={30} style={{ color: '#25D366' }} />
//   </a>
// </div>



//     </div>



//   )
// }

// export default Contact







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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Use event.target to get the form element
    const formElement = event.target;

    // Send form data using EmailJS
    emailjs.sendForm(
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

  return (
    <div className="contact">
      <h1 className="text-uppercase fs-1 font-weight-bold mt-5">Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label className="mb-0 mt-2">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Form.Label className="mt-1 mb-0">Email address</Form.Label>

        <InputGroup>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputGroup.Text>@gmail.com</InputGroup.Text>
        </InputGroup>

        <FloatingLabel controlId="floatingTextarea" label="Comments" className="mt-3">
          <Form.Control
            as="textarea"
            name="comments"
            placeholder="Leave a Comment here"
            style={{ height: '100px' }}
            value={formData.comments}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <div className="d-flex justify-content-center align-items-center">
          <Button variant="primary" type="submit" className="mt-4 mb-2">
            Submit
          </Button>
        </div>
      </Form>

      <div className="d-flex justify-content-center align-items-center mt-4">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/varahi_photography_/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <FaInstagram size={30} style={{ color: '#E1306C' }} />
        </a>

        {/* Mail Icon */}
        <a href="mailto:bhargav30066@gmail.com" className="mx-3">
          <FaEnvelope size={30} style={{ color: '#0072C6' }} />
        </a>

        {/* WhatsApp Icon */}
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
  );
};

export default Contact;

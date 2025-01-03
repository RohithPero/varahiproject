// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const About = () => {
//   return (
//     <div className='about mt-5'>
        
//       <h1 className='text-uppercase fs-1 font-weight-bold mt-5'>About Us</h1>
//       <p>
    
// Imagine seeing something truly amazing and unique, something natural and carefree, like visiting beautiful landscapes or encountering majestic creatures in their natural habitat. Did you ever feel you could not capture in its truest what you just witnessed? Do you wish to take stunning and crisp pictures of nature and wildlife?<br></br>

// As a part of varahi photography, we aspire to bridge the experiential gap between ‘seen by the eyes’ versus ‘seen by the lens’. Whether you are a newbie in wildlife photography or a pro photographer, join us on one of our all-inclusive photography tour packages in India guided by seasoned wildlife photographers. On the trip, as you calmly focus on a majestic creature with your camera, prepare to feel the thrill and meditative contemplation simultaneously. By the end of the trip, you will get the feel of taking nature and wildlife back with you as captivating captures, each having a story of its own...<br></br>

//  We interact with you in every step of your wedding and assist you in choosing costumes, hairstyles and locations to deliver the finest footage. we ensure that we capture your wedding beautifully and wrap it up with our magical skills of candid photography and cinematography thus making memories that remain etched on the sands of time.<br></br>

// while photography continues to transform in its style and technology, we stay focused on what really matters...capturing the essence of your moment and your spirit.<br></br>

//       In weddings, things never happen as they are planned. But our team of photographers are capable of producing better output in any kind of situations.
        


// </p>
//     </div>
//   )
// }

// export default About


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from './images/Untitled-1.jpg'; // Import the image

const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
          {/* Image */}
          <img
            src={image} // Use the imported image here
            alt="Example"
            className="img-fluid"
          />
        </Col>
        <Col lg={8} md={12} sm={12}>
          {/* Text */}
          <h1 className='text-uppercase fs-1 font-weight-bold mt-5'>About Us</h1>
       <p>
    
 Imagine seeing something truly amazing and unique, something natural and carefree, like visiting beautiful landscapes or encountering majestic creatures in their natural habitat. Did you ever feel you could not capture in its truest what you just witnessed? Do you wish to take stunning and crisp pictures of nature and wildlife?<br></br>

 As a part of varahi photography, we aspire to bridge the experiential gap between ‘seen by the eyes’ versus ‘seen by the lens’. Whether you are a newbie in wildlife photography or a pro photographer, join us on one of our all-inclusive photography tour packages in India guided by seasoned wildlife photographers. On the trip, as you calmly focus on a majestic creature with your camera, prepare to feel the thrill and meditative contemplation simultaneously. By the end of the trip, you will get the feel of taking nature and wildlife back with you as captivating captures, each having a story of its own...<br></br>

 We interact with you in every step of your wedding and assist you in choosing costumes, hairstyles and locations to deliver the finest footage. we ensure that we capture your wedding beautifully and wrap it up with our magical skills of candid photography and cinematography thus making memories that remain etched on the sands of time.<br></br>

while photography continues to transform in its style and technology, we stay focused on what really matters...capturing the essence of your moment and your spirit.<br></br>

     In weddings, things never happen as they are planned. But our team of photographers are capable of producing better output in any kind of situations.
        


 </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

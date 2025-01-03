import './App.css';
import Menu from './Menu';
import About from './About';
import BookAppointment from './BookAppointment';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Albums from './Albums';
import Quote from './Quote';

function App() {
  return (
    <>
    <Router>


    <div className='app'>
     <Menu />
     </div>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Albums />
      <Quote />
            </Router>
    
    
    </>
   
    
    
    
  );
}

export default App;

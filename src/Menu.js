import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import photo from './images/hover/Subject.png';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility on small screens
  const nav = useNavigate();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Book Appointment', path: '/bookappointment' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className='menu'>
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Use a button for accessibility instead of an anchor tag */}
        <button 
          className="navbar-brand p-1"
          style={{ color: 'black', border: 'none', background: 'none' }}
          onClick={() => nav('/')}
          aria-label="Go to homepage"
        >
          <img src={photo} alt='logo' className='ii' />
          <span className='me'>VARAHI PHOTOGRAPHY</span>
        </button>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{ position: 'absolute', right: '10px', top:'5px' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                {/* Use button instead of anchor for navigation */}
                <button
                  className="nav-link btn btn-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => nav(item.path)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

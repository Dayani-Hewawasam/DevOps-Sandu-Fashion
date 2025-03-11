import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import facebook_icon from '../Assets/facebook_icon.png';
import gmail_icon from '../Assets/gmail_icon.png';

export const Footer = () => {
  return (
    <div className='footer'>
      {/* First Column: Logo */}
      <div className="footer-logo">
        <img src={footer_logo} alt="Sandu Fashion Logo" />
        <p>SANDU FASHION</p>
      </div>

      {/* Second Column: Footer Links */}
      <div className="footer-links-container">
      <a href="mailto:sandufashion40@gmail.com" className="footer-link" target="_blank" rel="noopener noreferrer"> <p><img src={gmail_icon} alt="Gmail Icon" className="icon-gap" />sandufashion40@gmail.com</p></a>
      <a href="https://wa.me/7607685774" className="footer-link" target="_blank" rel="noopener noreferrer"><p><img src={whatsapp_icon} alt="WhatsApp Icon" className="icon-gap" />0767685774</p></a>
      <a href="https://web.facebook.com/sandufashion40" className="footer-link" target="_blank" rel="noopener noreferrer"><p><img src={facebook_icon} alt="Facebook Icon" className="icon-gap" />Sandu Fashion</p></a>
        <p><img src={instagram_icon} alt="Instagram Icon" className="icon-gap" />sandu_fashion40</p>
      </div>

      {/* Third Column: Newsletter */}
      <div className="footer-newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get the latest news and updates right in your inbox.</p>
        <input type="email" placeholder="Enter your email" />
        <button type="Submit">Subscribe</button>
      </div>

      {/* Footer Copyright Section */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

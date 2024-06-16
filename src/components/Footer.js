import React from 'react';
import './Footer.css'; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-main">
        <div className="footer-section">
          <h4>ROBOFACTORY</h4>
          <div className="footer-social">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            {/* <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li> */}
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li><a href="/customer-support">Customer Support</a></li>
            {/* <li><a href="#">Delivery Details</a></li> */}
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/returns-and-refunds">Returns & Refunds</a></li>

          </ul>
        </div>
    
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li><a href="#"><i class='fas fa-phone-alt'></i> +91 72000 61904</a></li>
            <li><a href="#"><i class='fas fa-envelope'></i>info@robofactory.com</a> </li>
            <li><a href="#"><i class="fa fa-map-marker"></i>Binary Autobots Private Limited,
              <br />
              10-5-111, Gandhi Bazaar, Surandai, Tirunelveli-627859</a></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All Rights Reserved @RoboFactory</p>
      </div>
    </footer>
  );
}

export default Footer;

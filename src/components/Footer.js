import React from "react";
import './Footer.css'; // Optional: if you want to style the footer separately

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SAHNEC WebSite. All rights reserved.</p>
      <p>
        <a href="/privacy" className="footer-link">Privacy Policy</a> | 
        <a href="/terms" className="footer-link">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;

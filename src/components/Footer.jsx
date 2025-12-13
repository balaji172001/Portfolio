import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Balaji G</h3>
          <p>Junior Software Developer</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:balaji32001@gmail.com">
            Email
          </a>

          <a href="tel:+916383783573">
            Phone
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with <span>❤️</span> by Balaji</p>
        <p>© 2025 All rights reserved. Built with React & CSS</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">DUCAT INDIA</h5>
            <p className="text-light">
              We build modern, fast, and responsive websites using the latest technologies.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">LINKS</h6>
            <ul className="list-unstyled text-light">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">SERVICES</h6>
            <ul className="list-unstyled text-light">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>SEO</li>
              <li>Hosting</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">CONTACT</h6>
            <ul className="list-unstyled text-light">
              <li>📍 Jaipur, India</li>
              <li>📧 info@example.com</li>
              <li>📞 +91 98765 43210</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        <p className="text-center text-light mb-0">
          © 2025 <span className="fw-bold text-white">My Website</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

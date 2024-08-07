import React from "react";

const UserFooter = () => {
  return (
    <div>
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: support@gearly.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <a href="#" className="text-light me-3">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                GearPoly is a leading e-commerce platform providing a variety of
                products at competitive prices. Our mission is to deliver the
                best shopping experience for our customers.
              </p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2024 GearPoly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default UserFooter;

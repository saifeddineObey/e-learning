import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" data-testid="contact">
      <div className="title">
        <h4>contact</h4>
      </div>
      <div className="description">
        <div className="credentials">
          <h5>Technical support</h5>
          <p>John Doe</p>
          <a href="it@exemple.com">it@exemple.com</a>
        </div>

        <div className="credentials">
          <h5>Content-didactic topic</h5>
          <p>Jane Roe</p>
          <a href="content@exemple.com">content@exemple.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

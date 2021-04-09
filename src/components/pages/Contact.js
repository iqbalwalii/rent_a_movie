import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div class="container">
        <h2 className="head">Contact us</h2>
        <div class="contact">
          <form action="#" className="contact-form">
            <input type="text" name="" id="" placeholder="Enter Your Name" />
            <input type="email" name="" id="" placeholder="Enter Your Email" />
            <textarea
              name=""
              id=""
              cols="10"
              rows="10"
              placeholder="Query"
            ></textarea>
            <input type="submit" />
          </form>
          <img src="/assets/images/message.svg" alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

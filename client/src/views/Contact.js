import React from "react";
// import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Contact</h1>
        <div className="d-flex justify-content-center text-left">
          <form id="contact_form" onSubmit={event => event.preventDefault()}>
            <div className="form-group">
              <label>Your name</label>
              <input className="form-control" type="text" name="" id="" />
              <label>Your email</label>
              <input className="form-control" type="text" name="" id="" />
              <label>Subject</label>
              <input className="form-control" type="text" name="" id="" />
              <label>Message</label>
              <input className="form-control" type="text" name="" id="" />
              <label>Are you human? Enter the characters from the image</label>
              <input className="form-control" type="text" name="" id="" />
            </div>
            <button className="btn btn-outline-secondary">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;

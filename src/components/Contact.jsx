import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact_scroll" className="pages">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 left animated slideInLeft" id="contact_left">
            {/*    <img
              className="img-responsive img-rabbit"
              src="assets/images/contact.jpg"
            /> */}
          </div>

          <div
            className="col-md-6 right animated slideInRight"
            id="contact_right"
          >
            <Link to="/" className="btn btn-rabbit back">
              <FontAwesomeIcon icon={faAngleLeft} />
              Back to Home
            </Link>
            <div id="watermark">
              <h2 className="page-title text-center">Contact</h2>
              <div className="marker">c</div>
            </div>
            <p className="subtitle">Get in touch!</p>
            <form className="form_edit">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-rabbit submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

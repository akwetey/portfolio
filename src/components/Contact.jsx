import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
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
            <form className="form_edit" onSubmit={handleSubmit}>
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" type="text" className="validate" />
                <label htmlFor="name" style={{ fontSize: "18px" }}>
                  Name
                </label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" />
                <label htmlFor="email" style={{ fontSize: "18px" }}>
                  Email
                </label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  id="icon_prefix2"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="icon_prefix2" style={{ fontSize: "18px" }}>
                  Message
                </label>
              </div>
              {/* <button type="submit" className="btn btn-rabbit submit">
                Send Message
              </button> */}
              <button
                className="btn btn-rabbit submit"
                type="submit"
                name="action"
              >
                Send Message
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div id="work_scroll" className="pages">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 animated slideInLeft" id="work_left">
            <div id="owl-demo" className="owl-carousel owl-theme">
              <div className="item">
                {/*  <img
                  className="img-responsive img-rabbit"
                  src="assets/images/work.jpg"
                /> */}
              </div>
              <div className="item">
                {/*    <img
                  className="img-responsive img-rabbit"
                  src="assets/images/home.jpg"
                /> */}
              </div>
              <div className="item">
                {/*  <img
                  className="img-responsive img-rabbit"
                  src="assets/images/contact.jpg"
                /> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 animated slideInRight" id="work_right">
            <Link to="/" className="btn btn-rabbit back">
              <FontAwesomeIcon icon={faAngleLeft} />
              Back to Home
            </Link>
            <div id="watermark">
              <h2 className="page-title text-center">Recent Works</h2>
              <div className="marker">w</div>
            </div>
            <p className="subtitle">
              This is a selection of my web development works.
            </p>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                {/* <img className="activator" src="images/office.jpg" /> */}
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Card Title<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="/#">This is a link</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

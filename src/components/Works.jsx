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
              <h2 className="page-title" text-center>
                Recent Works
              </h2>
              <div className="marker">w</div>
            </div>
            <p className="subtitle">
              This is a selection of my web design and development work. I've
              been involve in many different types of project.
            </p>
            <p className="info">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

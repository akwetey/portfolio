import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div id="index">
      <div className="container main">
        <div className="row home" id="home_scroll">
          <div id="index_left" className="col-md-6 left animated slideInLeft">
            {/* <img
              className="img-responsive img-rabbit"
              src="assets/images/home.jpg"
            /> */}
          </div>
          <div
            id="index_right"
            className="col-md-6 text-center right animated slideInRight"
          >
            <div className="logo">
              {/*  <img src="assets/images/logo.png" /> */}
              <h4>I am a software developer</h4>
            </div>
            <p className="home-description">
              Hi, I am Akwetey, software developer from Ghana. I am passionate
              about solving problems with code. My focus is to write clean and
              efficient code. I love to work with javaScript, React ,Vue,
              Laravel and PHP. An ardent lover of football and a pan africanist.
            </p>
            <div className="btn-group-vertical custom_btn animated slideinright">
              <div id="about" className="btn btn-rabbit">
                Resume
              </div>
              <Link
                to="/works"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div
                  id="work"
                  className="btn btn-rabbit"
                  style={{ width: "100%", maxWidth: "100%" }}
                >
                  Works
                </div>
              </Link>
              <Link
                to="/contact"
                style={{
                  color: "black",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div
                  id="contact"
                  className="btn btn-rabbit"
                  style={{ width: "100%", maxWidth: "100%" }}
                >
                  Contact
                </div>
              </Link>
            </div>
            <div className="social">
              <a href="https://twitter.com/JonathanAkwetey">
                <FontAwesomeIcon icon={faTwitter} className="svg" />
              </a>
              <a href="https://github.com/akwetey">
                <FontAwesomeIcon icon={faGithub} className="svg" />
              </a>
              <a href="https://www.linkedin.com/in/jonathan-akwetey-okine-b12a31103/">
                <FontAwesomeIcon icon={faLinkedin} className="svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

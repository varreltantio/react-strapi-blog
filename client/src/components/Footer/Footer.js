import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.png";

import "./index.scss";

library.add(fab);

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container-xl">
        <div className="row pb-5 justify-content-between">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="footer-about mb-4">
              <a href="#" className="logo">
                <img src={logo} alt="logo leravio" />
              </a>
              <p className="text">
                Leravio merupakan tempat yang <br /> membantu anda dalam
                membangun
                <br /> sebuah website
              </p>
              <ul className="social list-unstyled">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={["fab", "youtube"]} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg">
            <div className="footer-explore">
              <h4 className="footer-title">Jelajahi</h4>

              <ul className="explore list-unstyled">
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginRight: 5 }}
                    />
                    <span>Tentang Kami</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginRight: 5 }}
                    />
                    <span>Privacy</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginRight: 5 }}
                    />
                    <span>Terms & Conditions</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginRight: 5 }}
                    />
                    <span>Feedbacks</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg">
            <div className="footer-contact">
              <h4 className="footer-title">Hubungi Kami</h4>
              <ul className="contact list-unstyled">
                <li>082340372702</li>
                <li>leravio@gmail.com</li>
                <li>www.leravio.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer-copyright text-center">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved
                | this template is made by <a href="#">Varrel Tantio</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link as LinkReactRouter } from "react-router-dom";
import { Link } from "react-scroll";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo1.png";

import "./index.scss";

const Navbar = () => {
  const [btn, setBtn] = useState(false);

  const handleBtn = (bool) => {
    setBtn(bool);
  };

  return (
    <nav className="navbar navbar-content navbar-expand-lg navbar-dark">
      <div className="container">
        <LinkReactRouter className="navbar-brand" to="/">
          <img src={logo} style={{ width: 200 }} />
        </LinkReactRouter>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleBtn(true)}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
        </button>
        <div
          className={
            btn
              ? "navbar-collapse justify-content-end active"
              : "navbar-collapse justify-content-end"
          }
          id="navbarNav"
        >
          <div className="btn-back">
            <a onClick={() => handleBtn(false)}>
              <h5>Back</h5>
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">
                <FontAwesomeIcon icon={faCaretDown} className="icon-dropdown" />
                Home
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    activeClass="active"
                    to="section-benefit"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <LinkReactRouter className="dropdown-item" to="/">
                      Features
                    </LinkReactRouter>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section-theme"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <LinkReactRouter className="dropdown-item" to="/">
                      Theme
                    </LinkReactRouter>
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="dropdown-item"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="dropdown">
                <FontAwesomeIcon icon={faCaretDown} className="icon-dropdown" />
                Blogs
              </a>
              <ul className="dropdown-menu">
                <Query
                  query={gql`
                    {
                      categories {
                        name
                      }
                    }
                  `}
                >
                  {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;

                    return data.categories.map((currentCategory) => (
                      <li>
                        <Link
                          activeClass="active"
                          to="blog"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <LinkReactRouter
                            className="dropdown-item"
                            to={`/blog?category=${currentCategory.name}`}
                          >
                            {currentCategory.name}
                          </LinkReactRouter>
                        </Link>
                      </li>
                    ));
                  }}
                </Query>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link"
                to="footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

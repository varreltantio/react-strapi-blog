import React from "react";
import { Link as LinkReactRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import "./index.scss";

const Category = ({ category }) => {
  return (
    <li className="item-category">
      <Link
        activeClass="active"
        to="blog"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <LinkReactRouter to={`/blog?category=${category.name}`}>
          <FontAwesomeIcon icon={faAngleRight} />
          <span>{category.name}</span>
        </LinkReactRouter>
      </Link>
    </li>
  );
};

export default Category;

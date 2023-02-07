import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const Blog = ({ blog }) => {
  const [newPublished, setNewPublished] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    const date = new Date(blog.published_at);
    const month = date.toLocaleString("default", { month: "long" });

    setNewPublished(date.getDate() + " " + month + " " + date.getFullYear());

    const newDesc = blog.description.substr(0, 100);

    setNewDescription(newDesc);
  }, [blog]);

  return (
    <div className="col-12 blog-list" key={blog.id}>
      <div className="blog-item">
        <div className="row blog-card">
          <div className="col-lg-4 col-md-6 col-xl-3 p-0">
            <Link to={`/blog/${blog.url}`}>
              <img
                className="img-fluid blog-thumbnail"
                src={process.env.REACT_APP_BACKEND_URL + blog.thumbnail.url}
                alt={blog.title}
              />
            </Link>
          </div>

          <div className="col-lg-8 col-md-6 col-xl-9">
            <div className="blog-content">
              <div className="blog-info">
                <div className="datePublished">
                  <FontAwesomeIcon className="icon" icon={faClock} />
                  <span>{newPublished}</span>
                </div>
                <Link to={`/blog/${blog.url}`} className="title">
                  {blog.title}
                </Link>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: newDescription + "...." }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

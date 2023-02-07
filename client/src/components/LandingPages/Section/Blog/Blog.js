import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Blog = ({ blog }) => {
  const [newPublished, setNewPublished] = useState("");

  useEffect(() => {
    const date = new Date(blog.published_at);
    const month = date.toLocaleString("default", { month: "long" });

    setNewPublished(date.getDate() + " " + month + " " + date.getFullYear());
  }, [blog]);

  return (
    <div className="col-lg-4 col-md-7 mt-5 blog-item" key={blog.id}>
      <Link to={`/blog/${blog.url}`} className="blog-thumbnail">
        <img
          src={process.env.REACT_APP_BACKEND_URL + blog.thumbnail.url}
          alt={blog.title}
        />
      </Link>
      <div className="blog-content">
        <Link to={`/blog/${blog.url}`} className="title">
          {blog.title}
        </Link>
        <p className="meta mt-3">
          <span className="text-secondary">{newPublished}</span>
          <a href="#">By Leravio</a>
        </p>
      </div>
    </div>
  );
};

export default Blog;

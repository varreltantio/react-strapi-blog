import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Blog from "./Blog/Blog";

const SectionBlog = () => {
  return (
    <div className="section-blog">
      <div className="container">
        <div className="title">
          <div className="line"></div>
          <h3>Postingan Blog Terbaru</h3>
        </div>

        <div className="row">
          <Query
            query={gql`
              {
                blogs(limit: 3, sort: "published_at:desc") {
                  id
                  thumbnail {
                    url
                  }
                  title
                  published_at
                  url
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error</p>;

              return data.blogs.map((currentBlog) => (
                <Blog blog={currentBlog} />
              ));
            }}
          </Query>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <Link to="/blog" className="text-view">
              View More Blog Post
              <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 5 }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;

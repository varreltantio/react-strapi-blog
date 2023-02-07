import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../LandingPages/Navbar/Navbar";
import Blog from "./Blog/Blog";
import Category from "./Category/Category";

import "./index.scss";

const Blogs = ({ location }) => {
  const [search, setSearch] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    const { category } = queryString.parse(location.search);

    setCategory(category);
  }, [location.search]);

  return (
    <>
      <Navbar />

      <div className="jumbotron-blogs">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="search">
                <div className="search-box mx-auto">
                  <button className="btn-search">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Type to Search..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              {search && (
                <Query
                  query={gql`
                {
                  blogs(where: { title_contains: "${search}" }, limit: 5) {         
                    title  
                    url       
                  }
                }
              `}
                >
                  {({ loading, error, data }) => {
                    if (loading) return <p className="info">Loading...</p>;
                    if (error) return <p className="info">Error</p>;

                    return data.blogs.map((currentBlog) => (
                      <div className="list-search">
                        <Link to={`/blog/${currentBlog.url}`}>
                          {currentBlog.title}
                        </Link>
                      </div>
                    ));
                  }}
                </Query>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="blog-sidebar" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row m-0">
                {category ? (
                  <Query
                    query={gql`
                      {
                        blogs(
                          limit: 10
                          sort: "published_at:desc"
                          where: { categories: { name: "${category}" } }
                        ) {
                          id
                          thumbnail {
                            url
                          }
                          title
                          url
                          description
                          published_at
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
                ) : (
                  <Query
                    query={gql`
                      {
                        blogs(limit: 10, sort: "published_at:desc") {
                          id
                          thumbnail {
                            url
                          }
                          title
                          url
                          description
                          published_at
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
                )}
              </div>
            </div>

            <div className="col-lg-3">
              <div className="blog-category">
                <div className="header">
                  <h5 className="title">Categories</h5>
                  <div className="line"></div>
                </div>
                <div className="list">
                  <ul>
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
                          <Category category={currentCategory} />
                        ));
                      }}
                    </Query>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

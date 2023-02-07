import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import hljs from "highlight.js/lib";
import "highlight.js/styles/atom-one-dark.css";

import Navbar from "../Navbar/Navbar";

import "./index.scss";

const Article = (props) => {
  const [url, setUrl] = useState("");
  const [content, setContent] = useState();
  const [newPublished, setNewPublished] = useState("");

  useEffect(() => {
    setUrl(props.match.params.title);
  }, [props]);

  useEffect(() => {
    document.querySelectorAll("pre.ql-syntax").forEach((el) => {
      hljs.highlightElement(el);
    });

    if (content) {
      const date = new Date(content.blogs[0].published_at);
      const month = date.toLocaleString("default", { month: "long" });

      setNewPublished(date.getDate() + " " + month + " " + date.getFullYear());
    }
  }, [content]);

  return (
    <>
      <Navbar />

      <Query
        query={gql`
        {
          blogs(where: {url: "${url}"}) {
            id
            thumbnail {
              url
            }
            title
            description
            published_at
          }
        }
      `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error...</p>;

          setContent(data);

          return data.blogs.map((blog) => (
            <article className="detail-article" key={blog.id}>
              <div className="item">
                <h1 className="title">{blog.title}</h1>
                <div className="datePublished">Published on {newPublished}</div>
                <img
                  className="thumbnail"
                  alt={blog.title}
                  src={process.env.REACT_APP_BACKEND_URL + blog.thumbnail.url}
                />
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: blog.description,
                  }}
                ></div>
              </div>
            </article>
          ));
        }}
      </Query>

      <div className="related-post">
        <div className="container">
          <div className="line-label">
            <h1>Related Post</h1>
          </div>

          <ul className="detail-post">
            <Query
              query={gql`
                query {
                  blogs {
                    id
                    thumbnail {
                      url
                    }
                    title
                    url
                  }
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading</p>;
                if (error) return <p>Error</p>;

                return data.blogs.map((blog) => {
                  if (blog.url !== url) {
                    return (
                      <li className="item" key={blog.id}>
                        <Link to={`/blog/${blog.url}`} className="content">
                          <img
                            src={
                              process.env.REACT_APP_BACKEND_URL +
                              blog.thumbnail.url
                            }
                          />

                          <h1>{blog.title}</h1>
                        </Link>
                      </li>
                    );
                  }
                });
              }}
            </Query>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Article;

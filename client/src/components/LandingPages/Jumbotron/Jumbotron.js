import React from "react";

import poster from "../../../assets/jumbotron/poster.svg";

import "./index.scss";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="content">
              <h1 className="header">Tempat Buat Website Terbaik</h1>
              <p className="body">Mudah, Cepat dan Aman</p>
              <button className="btn btn-custom">Buat Websitemu</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="poster">
              <img src={poster} className="img-fluid" alt="poster leravio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

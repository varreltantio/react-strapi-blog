import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Theme from "./Theme/Theme";

const SectionTheme = () => {
  return (
    <div className="section-theme" id="section-theme">
      <div className="container">
        <h3 className="text-center">Pilih Tema Website kamu</h3>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            992: {
              items: 3,
            },
          }}
          dots
        >
          <Theme />
        </OwlCarousel>

        <div className="row justify-content-center">
          <div className="col-lg-4 text-center">
            <a href="#" className="btn btn-custom">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTheme;

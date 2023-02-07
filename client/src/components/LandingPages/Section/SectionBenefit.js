import React from "react";
import Benefit from "./Benefit/Benefit";

const SectionBenefit = () => {
  return (
    <div className="section-benefit" id="section-benefit">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="line m-auto"></div>
            <h3 className="mt-3">Manfaat Memilih Leravio</h3>
            <p className="text-desc text-secondary mt-3">
              Buat website mu sendiri dengan mudah sekarang. Deskripsikan
              website apa yang anda inginkan dan kami akan buat secepat mungkin
              dengan harga yang terjangkau
            </p>
          </div>
        </div>
        <Benefit />
      </div>
    </div>
  );
};

export default SectionBenefit;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import benefit1 from "../../../../assets/benefit/benefit1.png";
import benefit2 from "../../../../assets/benefit/benefit2.png";
import benefit3 from "../../../../assets/benefit/benefit3.png";
import benefit4 from "../../../../assets/benefit/benefit4.png";

import "./index.scss";

const Benefit = () => {
  const [item, setItem] = useState(0);
  const [lastImg, setLastImg] = useState(1);

  const handleItem = (noItem, bool) => {
    if (bool) {
      setItem(noItem);
      setLastImg(noItem);
    } else {
      setItem(0);
    }
  };

  return (
    <div className="row justify-content-center content">
      <div className={item === 0 ? "col-md-5 add-padding" : "col-md-5"}>
        <div className="list-item">
          <h5
            className="item-title"
            style={{ cursor: "pointer" }}
            onClick={
              item === 1
                ? () => handleItem(1, false)
                : () => handleItem(1, true)
            }
          >
            Tampilan Website modern
            <FontAwesomeIcon
              style={{ float: "right", marginRight: 10 }}
              icon={item === 1 ? faCaretUp : faCaretDown}
            />
          </h5>
          <div className={item === 1 ? "collapse show" : "collapse"}>
            <p className="text-secondary item-desc">
              Website yang kami buat memiliki tampilan yang modern dan juga
              customizable dengan keinginan client. Jika masih bingung dengan
              tampilan website yang diinginkan, anda bisa mencari referensi di
              bagian theme. Di sana terdapat banyak pilihan tampilan website.
            </p>
            <img
              src={benefit1}
              style={{ width: "60%" }}
              className="item-img mx-auto"
            />
          </div>
        </div>

        <div className="list-item">
          <h5
            className="item-title"
            style={{ cursor: "pointer" }}
            onClick={
              item === 2
                ? () => handleItem(2, false)
                : () => handleItem(2, true)
            }
          >
            Keamanan website terjamin
            <FontAwesomeIcon
              style={{ float: "right", marginRight: 10 }}
              icon={item === 2 ? faCaretUp : faCaretDown}
            />
          </h5>
          <div className={item === 2 ? "collapse show" : "collapse"}>
            <p className="text-secondary item-desc">
              Website yang kami buat juga memiliki tingkat keamanan yang tinggi.
              Jadi anda tidak perlu khawatir tentang keamanan website. Kami juga
              siap membantu anda 24 jam, jika suatu saat terdapat masalah atau
              bug pada website.
            </p>
            <img
              src={benefit2}
              style={{ width: "60%" }}
              className="item-img mx-auto"
            />
          </div>
        </div>

        <div className="list-item">
          <h5
            className="item-title"
            style={{ cursor: "pointer" }}
            onClick={
              item === 3
                ? () => handleItem(3, false)
                : () => handleItem(3, true)
            }
          >
            Website SEO Friendly
            <FontAwesomeIcon
              style={{ float: "right", marginRight: 10 }}
              icon={item === 3 ? faCaretUp : faCaretDown}
            />
          </h5>
          <div className={item === 3 ? "collapse show" : "collapse"}>
            <p className="text-secondary item-desc">
              SEO Friendly merupakan hal penting agar website masuk ke peringkat
              teratas di hasil mesin pencarian dan juga bisa menaikkan trafik
              website. Oleh karena itu, kami selalu membuat website fully
              accessible dan indexable oleh mesin pencarian.
            </p>
            <img
              src={benefit3}
              style={{ width: "60%" }}
              className="item-img mx-auto"
            />
          </div>
        </div>

        <div className="list-item">
          <h5
            className="item-title"
            style={{ cursor: "pointer" }}
            onClick={
              item === 4
                ? () => handleItem(4, false)
                : () => handleItem(4, true)
            }
          >
            Harga murah meriah
            <FontAwesomeIcon
              style={{ float: "right", marginRight: 10 }}
              icon={item === 4 ? faCaretUp : faCaretDown}
            />
          </h5>
          <div className={item === 4 ? "collapse show" : "collapse"}>
            <p className="text-secondary item-desc">
              Jika anda ingin membuat website dengan harga yang murah, pilihan
              yang tepat adalah di Leravio. Semakin kompleks website yang
              diinginkan maka akan semakin mahal harganya. Tapi tenang, anda
              bisa negosiasi harganya terlebih dahulu dengan kami
            </p>
            <img
              src={benefit4}
              style={{ width: "60%" }}
              className="item-img mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="col-md-7 active">
        <img
          src={benefit1}
          style={{ width: "80%", marginTop: -20 }}
          className={
            lastImg === 1
              ? "rounded mx-auto d-block show"
              : "rounded mx-auto d-block"
          }
        />
        <img
          src={benefit2}
          style={{ width: "80%", marginTop: -20 }}
          className={
            lastImg === 2
              ? "rounded mx-auto d-block show"
              : "rounded mx-auto d-block"
          }
        />
        <img
          src={benefit3}
          style={{ width: "80%", marginTop: -20 }}
          className={
            lastImg === 3
              ? "rounded mx-auto d-block show"
              : "rounded mx-auto d-block"
          }
        />
        <img
          src={benefit4}
          style={{ width: "80%", marginTop: -20 }}
          className={
            lastImg === 4
              ? "rounded mx-auto d-block show"
              : "rounded mx-auto d-block"
          }
        />
      </div>
    </div>
  );
};

export default Benefit;

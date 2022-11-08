import React from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Content/Modal";

const MobileGetInTouch = ({ mobildat }) => {

  const [open, setOpen] = useState(false);

  const openModal = (e) => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };




  const [data] = UseFetch("../assets/settings.json");

  let navigateHome = useNavigate();
  const myNavigateHome = () => {
    navigateHome("/");
  };
  return (
    <div className="container__gt">
      <div className="splitter">
        <div className="backbtn">
          <img
            className="back-bar"
            src={mobildat.content[0].back}
            alt=""
            onClick={myNavigateHome}
          />
        </div>
        <div className="navigation-btn__gt">
          {data &&
            data.content.map((data, index) => (
              <Link
                className={"button" + index}
                to={data.mobiledirection}
                key={index}
              >
                <img
                  className={"buttons" + index}
                  src={data.btnimg}
                  key={index}
                />
              </Link>
            ))}
          <img className="active-bar" src={mobildat.content[2].active} alt="" />
        </div>
      </div>
      <div className="design-box">
        <img
          className="whatwedo-logo cover"
          src={mobildat.content[2].mobileimg}
          alt=""
        />
        <div className="description">
          <h1>
            {mobildat.content[2].headers}
            <span className="gt-color"> {mobildat.content[2].spanner}</span> ...
          </h1>
          <p className="text">{mobildat.content[2].description}</p>
          <div className="contact-container">
          <Modal isOpen={open} onClose={closeModal} />
            {data &&
              data.content.map((data, index) => (
                <div className="contact-logos" key={index}>
                  <img onClick={openModal} src={data.contactlogo} alt="" />
                  <div className="contact-email">{data.contactemail}</div>
                </div>
              ))}
          </div>
          <div className="nuo">
            <img src={mobildat.content[0].nuologo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileGetInTouch;

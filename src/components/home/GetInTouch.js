import React from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hook/useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../Content/Modal";

const GetInTouch = ({ deskdata }) => {
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
    <>
      <div className="container__gt">
        <div className="navigation-btn__gt">
          <img
            className="back-bar"
            src={deskdata.content[0].back}
            alt="backbutton"
            onClick={myNavigateHome}
          />
          {data &&
            data.content.map((data, index) => (
              <Link to={data.direction} key={index}>
                <img src={data.btnimg} key={index} />
              </Link>
            ))}
          <img
            className="active-bar-gt"
            src={deskdata.content[2].active}
            alt="active-site"
          />
        </div>
        <div className="design-box">
          <img
            className="whatwedo-logo cover"
            src={deskdata.content[2].banner}
            alt=""
          />
          <div className="description-gt">
            <h1>
              {deskdata.content[2].headers}
              <span className="gt-color">
                {" "}
                {deskdata.content[2].spanner}
              </span>{" "}
              ...
            </h1>
            <p className="text">{deskdata.content[2].description}</p>
            <div className="contact-container">
              <Modal isOpen={open} onClose={closeModal} />
              {data &&
                data.content.map((data, index) => (
                  <div className="contact-logos">
                    <img onClick={openModal} src={data.contactlogo} alt="" />
                    <div className="contact-email">{data.contactemail}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="placement-box">
          <div className="slogan-wwd">
            <p>{deskdata.content[2].slogan}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;

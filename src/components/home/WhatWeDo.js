import React from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

const WhatWeDo = ({ deskdata }) => {
  const [data] = UseFetch("../assets/settings.json");

  let navigateHome = useNavigate();
  const myNavigateHome = () => {
    navigateHome("/");
  };

  return (
    <>
      <div className="container__wwd">
        <div className="navigation-btn__wwd">
          <img
            className="back-bar"
            src={deskdata.content[0].back}
            alt=""
            onClick={myNavigateHome}
          />
          {data &&
            data.content.map((data, index) => (
              <Link to={data.direction} key={index}>
                <img src={data.btnimg} key={index} />
              </Link>
            ))}
          <img className="active-bar" src={deskdata.content[0].active} alt="" />
        </div>
        <div className="design-box">
          <img
            className="whatwedo-logo cover"
            src={deskdata.content[0].banner}
            alt=""
          />
          <div className="description">
            <h1>
              {deskdata.content[0].headers}
              <span> {deskdata.content[0].spanner}</span> ...
            </h1>
            {data &&
              data.content.map((data, index) => (
                <p className="text" key={index}>
                  {data.description}
                </p>
              ))}
          </div>
        </div>
        <div className="placement-box">
          <div className="slogan-wwd">
            <p>{deskdata.content[0].slogan}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

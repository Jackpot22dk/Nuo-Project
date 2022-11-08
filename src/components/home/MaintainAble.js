import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UseFetch from "../hook/useFetch";

const MaintainAble = ({ deskdata }) => {
  const [data] = UseFetch("../assets/settings.json");
  let navigateHome = useNavigate();

  const myNavigateHome = () => {
    navigateHome("/");
  };
  return (
    <>
      <div className="container__mt">
        <div className="navigation-btn__mt">
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
          <img
            className="active-bar-mt"
            src={deskdata.content[1].active}
            alt=""
          />
        </div>
        <div className="design-box">
          <img
            className="maintainable-logo cover"
            src={deskdata.content[1].banner}
            alt=""
          />
          <div className="description-mt">
            <h1>
              {deskdata.content[1].headers}
              <span className="mt-color"> {deskdata.content[1].spanner}</span>
              ...
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
          <div className="slogan-mt">
            <p>{deskdata.content[1].slogan}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaintainAble;

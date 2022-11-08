import React from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

const MobileMaintainAble = ({ mobildat }) => {
  const [data] = UseFetch("../assets/settings.json");

  let navigateHome = useNavigate();
  const myNavigateHome = () => {
    navigateHome("/");
  };
  return (
    <div className="container__mt">
      <div className="splitter">
        <div className="backbtn">
          <img
            className="back-bar"
            src={mobildat.content[0].back}
            alt=""
            onClick={myNavigateHome}
          />
        </div>
        <div className="navigation-btn__mt">
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
          <img className="active-bar" src={mobildat.content[1].active} alt="" />
        </div>
      </div>
      <div className="design-box">
        <img
          className="whatwedo-logo cover"
          src={mobildat.content[1].mobileimg}
          alt=""
        />
        <div className="description">
          <h1>
            {mobildat.content[1].headers}
            <span className="mt-color"> {mobildat.content[1].spanner}</span> ...
          </h1>
          {data &&
            data.content.map((data, index) => (
              <p className="text" key={index}>
                {data.description}
              </p>
            ))}
          <div className="nuo">
            <img src={mobildat.content[0].nuologo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMaintainAble;

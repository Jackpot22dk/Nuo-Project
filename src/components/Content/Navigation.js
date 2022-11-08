import React from "react";
import { Link } from "react-router-dom";
import UseFetch from "../hook/useFetch";
const Navigation = () => {
  const [data] = UseFetch("../assets/router.json");
  return (
    <div className="navigation">
      <nav>
        {data &&
        data.content.map((data, index) => (
          
          <Link to={data.direction}><img src={data.btnimg} alt="" /></Link>
        ))
        }
      </nav>
    </div>
  );
};

export default Navigation;

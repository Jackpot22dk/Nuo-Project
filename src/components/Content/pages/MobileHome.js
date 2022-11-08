import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UseFetch from "../../hook/useFetch";

const MobileHome = ({ mobildat }) => {
  const [data] = UseFetch("../assets/settings.json");

  return (
    <>
      <div className="container">
        <div className="mobile-logo">
          <img src={mobildat.content[0].nuomobile} alt="" />
        </div>
        {data &&
          data.content.map((data, index) => (
            <div className={"images" + index} key={index}>
              <Link to={data.mobiledirection}>
                <img src={data.mobileimg} alt="" key={index} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default MobileHome;

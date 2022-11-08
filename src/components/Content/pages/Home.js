import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UseFetch from "../../hook/useFetch";

const Home = () => {
  const [data] = UseFetch("../assets/settings.json");

  return (
    <>
      <div className="container">
        <div className="navigation-btn">
          {data &&
            data.content.map((data, index) => (
              <Link to={data.direction} key={index}>
                <img src={data.btnimg} key={index} />
              </Link>
            ))}
        </div>
        {data &&
          data.content.map((data, index) => (
            <div className={"images" + index} key={index}>
              <Link to={data.direction}>
                <img src={data.img} alt="" key={index} />
              </Link>
            </div>
          ))}
        <div className="slogan">
          <p>And yet... more to come</p>
        </div>
      </div>
    </>
  );
};

export default Home;

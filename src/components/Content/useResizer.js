import { useEffect, useState } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const UseResizer = ({ item, data }) => {
  const [resizer, setResizer] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setResizer(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const breakpoint = 768;

  console.log(resizer);

  return resizer < breakpoint ? (
    <MobileView items={item} mobiledata={data} />
  ) : (
    <DesktopView items={item} desktopdata={data} />
  );
};

export default UseResizer;

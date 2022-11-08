import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileHome from "./pages/MobileHome";
import MobileWhatWeDo from "../home/MobileWhatWeDo";
import MobileMaintainAble from "../home/MobileMaintainAble";
import MobileGetInTouch from "../home/MobileGetInTouch";

const MobileView = ({ mobiledata }) => {
  return (
    <Routes>
      <Route path="/" element={<MobileHome mobildat={mobiledata} />} />
      <Route
        path="/MobileWhatWeDo"
        element={<MobileWhatWeDo mobildat={mobiledata} />}
      />
      <Route
        path="/MobileMaintainAble"
        element={<MobileMaintainAble mobildat={mobiledata} />}
      />
      <Route
        path="/MobileGetInTouch"
        element={<MobileGetInTouch mobildat={mobiledata} />}
      />
    </Routes>
  );
};

export default MobileView;

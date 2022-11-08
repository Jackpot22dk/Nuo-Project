import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import WhatWeDo from "../home/WhatWeDo";
import MaintainAble from "../home/MaintainAble";
import GetInTouch from "../home/GetInTouch";

const DesktopView = ({ desktopdata }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/WhatWeDo" element={<WhatWeDo deskdata={desktopdata} />} />
      <Route
        path="/MaintainAble"
        element={<MaintainAble deskdata={desktopdata} />}
      />
      <Route
        path="/GetInTouch"
        element={<GetInTouch deskdata={desktopdata} />}
      />
    </Routes>
  );
};

export default DesktopView;

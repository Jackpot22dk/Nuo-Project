import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Content/Navigation";
import Home from "./components/Content/pages/Home";
import DesktopView from "./components/Content/DesktopView";
import UseResizer from "./components/Content/useResizer";
import myData from "../src/text.json";

console.log(myData);

function App() {
  return (
    <Router>
      <UseResizer data={myData} />
    </Router>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Homepage from "./component/jsxComponents/Homepage.jsx";
import Pingweb from "./component/jsxComponents/Web/main.jsx";
import PingDownload from "./component/jsxComponents/Download/main.jsx";
import AboutUs from "./component/jsxComponents/AboutUs";

const Router = () => {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Homepage />} />
      <Route exact={true} path="/PingWeb" element={<Pingweb />} />
      <Route exact={true} path="/PingDownload" element={<PingDownload />} />
      <Route exact={true} path="/Aboutus" element={<AboutUs />} />
    </Routes>
  );
};

export default Router;

import { Routes, Route } from "react-router-dom";
import LandingPage from "./presentation/pages/landingpage/LandingPage";
import FindMePage from "./presentation/pages/findMePage/FindMe";
import AboutPage from "./presentation/pages/aboutPage/AboutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/find-me" element={<FindMePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default AppRoutes;

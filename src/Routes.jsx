import { Routes, Route } from "react-router-dom";
import LandingPage from "./presentation/pages/landingpage/LandingPage";
import FindMePage from "./presentation/pages/findMePage/FindMe";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/find-me" element={<FindMePage />} />
    </Routes>
  );
}

export default AppRoutes;

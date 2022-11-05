import { Routes, Route } from "react-router-dom";
import LandingPage from "./presentation/pages/landingpage/LandingPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default AppRoutes;

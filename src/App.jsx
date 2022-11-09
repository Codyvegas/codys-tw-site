import React, { useEffect } from "react";
import Header from "./presentation/header/Header";
import Footer from "./presentation/footer/Footer";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AuthModal from "./components/Auth/AuthModal";
import Ads from "./pages/Ads";

const App = () => {
  const [authModal, setAuthModal] = useState(false);


  useEffect(() => {
    document.body.style.overflow = authModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [authModal]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setAuthModal(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-primary">
        <NavBar setAuthModal={setAuthModal} />
        <main  className="flex-grow flex">
          <MainLayout />
        </main>
        <Footer />
      </div>

      {authModal && <AuthModal setAuthModal={setAuthModal} />}
    </Router>
  );
};
const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/obiavi" element={<Ads />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;

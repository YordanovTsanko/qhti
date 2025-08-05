import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-primary">
        <NavBar />
        <main className="flex-grow flex">
          <MainLayout />
        </main>
        <Footer />
      </div>
    </Router>
  );
};
const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("auth") === "true";
  
  
};

export default ProtectedRoute;

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loaded } = useContext(AuthContext);
  const location = useLocation();
if(loaded){
  return <span className="loading loading-ring loading-lg"></span>
}
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

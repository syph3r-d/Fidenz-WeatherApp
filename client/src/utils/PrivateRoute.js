import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";
import MoonLoader from "react-spinners/MoonLoader";

const Protected = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="loading-container">
        <MoonLoader color="#fff" size={30} />
      </div>
    );
  } else if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default Protected;

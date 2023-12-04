import React, { useEffect } from "react";
import { images } from "../../utils/images";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import MoonLoader from "react-spinners/MoonLoader";

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
  return (
    <div className="card-container">
      <div className="card card-landing">
        {isLoading ? (
          <MoonLoader color={"#fff"} size={50} />
        ) : (
          <>
            <img src={images.logo} alt="" />
            <h2>Welcome to Weather App</h2>
            <p>Please login to continue</p>
            <button
              className="btn btn-primary"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;

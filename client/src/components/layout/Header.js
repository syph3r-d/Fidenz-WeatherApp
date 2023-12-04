import React from "react";
import { images } from "../../utils/images";
import { useAuth0 } from "@auth0/auth0-react";
import MoonLoader from "react-spinners/MoonLoader";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, isLoading, logout, user } =
    useAuth0();
  return (
    <header>
      <div className="logo">
        <img src={images.logo} alt="Logo" />
        <h1>Weather App</h1>
      </div>
      <div className="login">
        {isLoading ? (
          <></>
        ) : (
          isAuthenticated && (
            <button
              className="btn btn-outline"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              Logout
            </button>
          )
        )}
      </div>
    </header>
  );
};

export default Header;

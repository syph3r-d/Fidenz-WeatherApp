import React from "react";
import CityCard from "./cityCard/CityCard";
import { useAuth0 } from "@auth0/auth0-react";
import BeatLoader from "react-spinners/BeatLoader";

const Dashboard = () => {
  let cities = require("../../config/cities.json");
  const { user, isLoading, isAuthenticated } = useAuth0();
  cities.List.sort((a, b) => {
    return a.Temp - b.Temp;
  });
  return (
    <div className="dashboard">
      <div className="profile">
        {isLoading ? (
          <BeatLoader color={"#fff"} size={10} />
        ) : (
          isAuthenticated && (
            <>
              <img src={user.picture} alt={user.name} />
              <h3>{user.name}</h3>
            </>
          )
        )}
      </div>
      <div className="search">
        <input type="text" placeholder="Enter a City" />
        <button className="btn btn-primary">
          <p>Add City</p>
        </button>
      </div>
      
      <div className="card-grid">
        {cities.List.map((city, index) => {
          return <CityCard city={city} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;

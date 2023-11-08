import React from "react";
import CityCard from "./cityCard/CityCard";

const Dashboard = () => {
  let cities = require("../../config/cities.json");
  return (
    <div className="dashboard">
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

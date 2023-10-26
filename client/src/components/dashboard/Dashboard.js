import React from "react";
import CityCard from "./cityCard/CityCard";
import { Cities } from "../../utils/cities";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const colors = ["#388ee7", "#6249cc", "#40b681", "#de944e", "#9c3a3a"];
  return (
    <div className="dashboard">
      <div className="search">
        <input type="text" placeholder="Enter a City" />
        <button className="btn btn-primary">
          <p>Add City</p>
        </button>
      </div>
      <div className="card-grid">
        {Cities.List.map((city) => {
          return (
            <CityCard
              color={colors[Math.floor(Math.random() * colors.length)]}
              city={city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

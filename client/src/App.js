import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherViewCard from "./components/weatherView/WeatherViewCard";
import { DASHBOARD_ROUTE, WEATHER_VIEW_ROUTE } from "./config/constants";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Router>
        <Routes>
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
          <Route path={WEATHER_VIEW_ROUTE} element={<WeatherViewCard />} />
          <Route path="*" element={<Navigate to={DASHBOARD_ROUTE} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

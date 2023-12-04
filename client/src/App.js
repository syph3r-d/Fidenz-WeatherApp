import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherViewCard from "./components/weatherView/WeatherViewCard";
import {
  DASHBOARD_ROUTE,
  LANDING_ROUTE,
  WEATHER_VIEW_ROUTE,
} from "./config/constants";
import LandingPage from "./components/layout/LandingPage";
import { Navigate } from "react-router-dom";
import Protected from "./utils/PrivateRoute";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Router>
        <Routes>
          <Route
            path={DASHBOARD_ROUTE}
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path={WEATHER_VIEW_ROUTE}
            element={
              <Protected>
                <WeatherViewCard />{" "}
              </Protected>
            }
          />
          <Route path={LANDING_ROUTE} element={<LandingPage />} />
          <Route path="*" element={<Navigate to={DASHBOARD_ROUTE} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

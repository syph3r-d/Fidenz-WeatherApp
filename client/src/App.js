import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherViewCard from "./components/weatherView/WeatherViewCard";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/weather/:city" element={<WeatherViewCard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

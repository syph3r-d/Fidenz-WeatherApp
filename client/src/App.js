import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WeatherView from "./components/weatherView/WeatherView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/weather/:city" element={<WeatherView />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

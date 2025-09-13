import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";

function App() {
  return (
    <>
      <div className="loader-bg">
        <div className="loader-track">
          <div className="loader-fill"></div>
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

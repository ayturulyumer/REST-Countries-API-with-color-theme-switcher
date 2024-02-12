import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Details from "./components/Details/Details.jsx";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:countryName" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

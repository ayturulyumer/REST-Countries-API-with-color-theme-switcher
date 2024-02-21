import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Details from "./components/Details/Details.jsx";
import ThemeContext from "./contexts/ThemeContext.jsx";
import { useContext } from "react";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
 

  return (
    <>
      <Router>
        <div className="App" id={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details/:countryName" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

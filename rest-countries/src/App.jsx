import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Details from "./components/Details/Details.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <div className="App" id="light">
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/details/:countryName" element={<Details />} />
            </Routes>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;

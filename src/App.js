import "./App.css";

import { useState, createContext } from "react";
import ScrollToTop from "react-scroll-to-top";

import Sidebar from "../src/Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import NavbarMobileView from "./Components/Sidebar/NavbarMobile/Navbar-Mobileview";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const changeThemeHandler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeThemeHandler }}>
      <div className="App">
        <div id={theme}>
          <NavbarMobileView theme={theme} changeTheme={changeThemeHandler} />

          <Sidebar theme={theme} changeTheme={changeThemeHandler} />
          <About />
          <WorkExperience />
          <TechStack />
          <Education />
          <Project />
          <Testimonial />
          <Contact />

          <ScrollToTop
            smooth="true"
            height="20"
            width="20"
            color="white"
            style={{ backgroundColor: "#282828" }}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

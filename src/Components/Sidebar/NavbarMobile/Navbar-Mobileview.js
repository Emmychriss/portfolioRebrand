import { useState } from "react";
import "./Navbar-Mobileview.css";

import {
  FcHome,
  FcAbout,
  FcAcceptDatabase,
  FcBiotech,
  FcGraduationCap,
  FcIdea,
  FcBarChart,
  FcContacts,
} from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = (props) => {
  const [showNavbarmobile, setshowNavbarmobile] = useState(false);

  const toggleNavHandler = () => {
    setshowNavbarmobile(!showNavbarmobile);
  };

  return (
    <>
      <nav className="container-fluid navbar-header">
        <header>
          <p>
            <GiHamburgerMenu size={30} onClick={toggleNavHandler} />
          </p>

          <div className="toggleSwitch">
            <Switch
              onChange={props.changeTheme}
              checked={props.theme === "light"}
              uncheckedIcon={false}
              checkedIcon={false}
              // onColor={"#FFFDD0"}
              // offColor={"#5A5A5A"}
            />
          </div>
        </header>

        {showNavbarmobile && (
          <div className="nav-mobile">
            <ul>
              <li className="nav-item-mobile">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                >
                  <FcHome size={25} /> Home
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to="about"
                >
                  <FcAbout size={25} /> About
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to="workExperience"
                >
                  <FcAcceptDatabase size={25} /> Work Experience
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to="techStack"
                >
                  <FcBiotech size={25} /> Tech Stack
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to="education"
                >
                  <FcGraduationCap size={25} /> Education
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to="projects"
                >
                  <FcIdea size={25} /> Projects
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to="testimonial"
                >
                  <FcBarChart size={25} /> Testimonial
                </Link>
              </li>
              <li className="nav-item-mobile">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  to="contact"
                >
                  <FcContacts size={25} /> Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarMobileView;

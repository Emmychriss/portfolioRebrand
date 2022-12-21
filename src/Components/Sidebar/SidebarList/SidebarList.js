import "./SidebarList.css";
import profilePic from "../../../assets/Images/emmy.jpg";
import { Link } from "react-scroll";
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

const SidebarList = (props) => {
  return (
    <div className="nav-items">
      {props.expandSidebar ? (
        <>
          <div className="sidebar-profile-pic">
            <img src={profilePic} alt="Profile Pic"></img>
          </div>

          <ul>
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
        </>
      ) : (
        <div className="navItems-iconsOnly">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
                to="about"
              >
                <FcAbout size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
                to="workExperience"
              >
                <FcAcceptDatabase size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
                to="techStack"
              >
                <FcBiotech size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
                to="education"
              >
                <FcGraduationCap size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
                to="projects"
              >
                <FcIdea size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
                to="testimonial"
              >
                <FcBarChart size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                to="contact"
              >
                <FcContacts size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarList;

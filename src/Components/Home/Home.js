import "./Home.css";
import Typewritter from "typewriter-effect";
import myCV from "../../assets/CV/Emmanuel_Nduka_CV.pdf";
import { Link } from "react-scroll";
import { WiMoonAltThirdQuarter, WiMoonAltFirstQuarter } from "react-icons/wi";
import Fade from "react-reveal/Fade";

const Home = (props) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="themeChange" onClick={props.changeTheme}>
        {props.theme === "light" ? (
          <WiMoonAltThirdQuarter size={40} />
        ) : (
          <WiMoonAltFirstQuarter size={40} />
        )}
      </div>

      <div className="container home-content">
        <Fade top>
          <h1>Hi,</h1>
          <h2>
            <Typewritter
              options={{
                strings: [
                  "I'm a Software Engineer",
                  "I'm a Tech. Enthusiast",
                  "I solve problems",
                  "I'm a Resourceful Youth",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </Fade>

        <Fade bottom>
          <div className="action-button">
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              to="contact"
            >
              <div className="hire-me-btn">Hire Me</div>
            </Link>
            <div className="getResume-btn">
              <a href={myCV} target="_">
                Get My Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;

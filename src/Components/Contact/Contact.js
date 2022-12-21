import "./Contact.css";

import comtactFormImage from "../../assets/Images/contact-form-image.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="contact-title">
        <h5>Contact</h5>
        <span className="line"></span>
      </div>

      <div className="row img-and-form">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-image">
              <img src={comtactFormImage} alt="contact-form Pic"></img>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-main">
              <div className="text-center">
                <h5>Contact Me</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control"></input>
                </div>

                <div className="contact-form">
                  <label className="form-label">E-mail</label>
                  <input type="text" className="form-control"></input>
                </div>

                <div className="contact-form">
                  <label className="form-label">Job Types</label>
                  <select className="select-dropDown">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Student</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-label">Your Message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>

                <div className="submit-btn">
                  <p>
                    Send <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;

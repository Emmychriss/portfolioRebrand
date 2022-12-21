import "./ProjectList.css";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { useState } from "react";

const ProjectList = (props) => {
  const [show, setShow] = useState(false);

  const showAndCollapseHandler = () => {
    setShow(!show);
  };

  return (
    <div
      className={show ? "projectList-active projectList" : "projectList"}
      onClick={showAndCollapseHandler}
    >
      <div className="title-and-CollapseBtn">
        <h5>{props.name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      {show ? (
        <div className="description">
          <p>{props.description}</p>
        </div>
      ) : null}

      <div className="row">
        {props.techUsed &&
          props.techUsed.map((techObj, index, arr) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                  <p>{techObj.techName}</p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="liveDemo-btn">
        <a target="_" href={props.projectLink}>
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;

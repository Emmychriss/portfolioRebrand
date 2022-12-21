import "./Education.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  const data = [
    {
      name: "Yaba College Of Technology",
      certification: "ND Computer science",
      grade: "Distinction (3.61)",
      year: "2020-2022",
      description: "",
      color: "#36454F",
    },

    {
      name: "Mivara Secondary School",
      certification: "WASSCE certification",
      year: "2014-2017",
      description: "",
      color: "#6E2C0D",
    },
  ];

  return (
    <div className="container education-section" id="education">
      <div className="education-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>

      <VerticalTimeline lineColor="black">
        {data.map((item, index, arr) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: item.color, color: "#fff" }}
              contentArrowStyle={{
                borderRight: `8px solid ${item.color}`,
              }}
              date={item.year}
              dateClassName="dateClass"
              iconStyle={{ background: item.color, color: "#fff" }}
              icon={<FaUserGraduate />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h6 className="vertical-timeline-element-subtitle">
                {item.certification}
              </h6>
              {item.grade && <span>{item.grade}</span>}
              <p>{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Education;

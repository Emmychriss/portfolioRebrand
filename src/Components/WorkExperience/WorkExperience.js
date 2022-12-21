import "./WorkExperience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      orgName: "Google",
      position: "Full stack developer",
      description:
        "I wrote a lot of code and data manipulations for several use-cases",
      techSkills: [
        {
          techName: "Node JS",
        },
        {
          techName: "Express JS",
        },
        {
          techName: "UI/UX",
        },
      ],
      year: "2019-2020",
      color: "#E67E24",
    },

    {
      orgName: "Amazon",
      position: "Front end developer",
      description:
        "I was actively involved with building the e-commerce website for users and good UX",
      techSkills: [
        {
          techName: "React JS",
        },
        {
          techName: "Express JS",
        },
        {
          techName: "QA Testing",
        },
      ],
      year: "2016-2018",
      color: "#717D7E",
    },

    {
      orgName: "Instagram",
      position: "back end developer",
      description:
        "We designed and implemented new variety of instagram interfaces",
      techSkills: [
        {
          techName: "Firebase",
        },
        {
          techName: "Angular JS",
        },
        {
          techName: "UI/UX",
        },
      ],
      year: "2014-2016",
      color: "#9B59B6",
    },
  ];

  return (
    <div className="container workExperience-section" id="workExperience">
      <div className="workExperience-title">
        <h5>Work Experience</h5>
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
              icon={<MdGroupWork />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">
                {item.orgName}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {item.position}
              </h5>
              <div className="row">
                {item.techSkills.map((techSkill, index, arr) => {
                  return (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="techSkills">
                        <p>{techSkill.techName}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;

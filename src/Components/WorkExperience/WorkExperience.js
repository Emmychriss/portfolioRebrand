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
      orgName: "Algorism Ltd.",
      position: "Front-end dev. Intern",
      description:
        "I worked with the development team, testing and sanity checks, bug fixes and UI improvement",
      techSkills: [
        {
          techName: "React Js",
        },
        {
          techName: "Express Js",
        },
        {
          techName: "UI/UX",
        },
      ],
      year: "2022-date",
      color: "#E67E24",
    },

    {
      orgName: "HTS",
      position: "IT support",
      description:
        "I was actively involed with self learning processes, attended meet standups, added new UI features on enterprise platforms at that moment",
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
      year: "2021",
      color: "#717D7E",
    },

    {
      orgName: "Word Alive Schools",
      position: "Senior Level Science Teacher",
      description:
        "I taught school pupils with alignment to science related subjects",
      techSkills: [
        {
          techName: "Maths",
        },
        {
          techName: "Physics",
        },
        {
          techName: "Chemistry",
        },
      ],
      year: "2017-2020",
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

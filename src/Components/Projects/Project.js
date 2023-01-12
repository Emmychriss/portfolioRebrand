import "./Project.css";
import ProjectList from "./ProjectList/ProjectList";

const Project = () => {
  const data = [
    {
      name: "Swift Bank App",
      description:
        "A dummy simple bank app for transfer and receival of amounts(figures)",
      projectLink: "",
      techUsed: [
        {
          techName: "Firebase",
        },
        {
          techName: "Html",
        },
        {
          techName: "CSS",
        },
        {
          techName: "Javascript",
        },
      ],
    },

    {
      name: "Insta-Clone App",
      description: "This is a simple Instagram clone application",
      projectLink: "",
      techUsed: [
        {
          techName: "ReactJS",
        },
        {
          techName: "Javascript",
        },
        {
          techName: "CSS",
        },
        {
          techName: "next JS",
        },
      ],
    },

    {
      name: "Burger Builder Project",
      description:
        "A Web Application built for users to specify how they want thier burger to be before purchase",
      projectLink: "",
      techUsed: [
        {
          techName: "ReactJS",
        },
        {
          techName: "Javascript",
        },
        {
          techName: "CSS",
        },
        {
          techName: "Mongo Db",
        },
      ],
    },

    {
      name: "Bank App Marketing",
      description:
        "A  marketing website for the simple bank app created for transfer and receival of cash",
      projectLink: "",
      techUsed: [
        {
          techName: "Html",
        },
        {
          techName: "CSS",
        },
        {
          techName: "Javascript",
        },
      ],
    },

    {
      name: "Food Order App",
      description:
        "This is a dummy application that enables users to select from available foods before ordering",
      projectLink: "https://order-emeals.netlify.app/",
      techUsed: [
        {
          techName: "ReactJS",
        },
        {
          techName: "Javascript",
        },
        {
          techName: "CSS",
        },
        {
          techName: "next JS",
        },
      ],
    },

    {
      name: "Portfolio Project",
      description:
        "My very own portfolio project inclusive is part of projects which have been up my sleeve!",
      projectLink: "https://emmanuelnduka.netlify.app",
      techUsed: [
        {
          techName: "ReactJS",
        },
        {
          techName: "Javascript",
        },
        {
          techName: "CSS",
        },
        {
          techName: "Node JS",
        },
      ],
    },
  ];

  return (
    <div className="container project-section" id="projects">
      <div className="techStack-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index, arr) => {
          return (
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
              <ProjectList {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

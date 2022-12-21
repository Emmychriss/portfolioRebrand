import { useState } from "react";
import "./TechStack.css";
import { Fade } from "react-reveal";

const TechStack = () => {
  const data = [
    {
      name: "Front-end developer",
      color: "#F0B041",
    },
    {
      name: "React js",
      color: "#68D68D",
    },
    {
      name: "Javascript(vanilla)",
      color: "#7D3C98",
    },
    {
      name: "Typescript",
      color: "#76D7C4",
    },
    {
      name: "SQL",
      color: "#6E2C0D",
    },
    {
      name: "mySQL server",
      color: "#F1C410",
    },
    {
      name: "Node js",
      color: "#CD6155",
    },
    {
      name: "Next js",
      color: "#DC7633",
    },
    {
      name: "Express js",
      color: "#3F80BA",
    },
    {
      name: "Mongo Db",
      color: "#306B3B",
    },
    {
      name: "Firebase",
      color: "#B7950B",
    },
    {
      name: "Git",
      color: "#AF7AC5",
    },
  ];
  const [loadMoreTechStack, setLoadMoreTechStack] = useState(6);
  const loadMore = () => {
    setLoadMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techStack-section" id="techStack">
      <div className="techStack-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, loadMoreTechStack).map((item, index, arr) => {
          return (
            <Fade right key={index}>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="techStack-content">
                  <span
                    className="techStack-number"
                    style={{ backgroundColor: data[index].color }}
                  >
                    {index + 1}
                  </span>
                  {<p>{item.name}</p>}
                </div>
              </div>
            </Fade>
          );
        })}
      </div>

      {loadMoreTechStack >= data.length ? null : (
        <span className="techStack-loadMore" onClick={loadMore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default TechStack;

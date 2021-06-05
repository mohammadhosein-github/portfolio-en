import React from "react";

function EachProject(props) {
  const data = props.project_data;
  return (
    <div className="text-left my-card">
      <img src={data.project_img} alt="project_1"></img>
      <div className="text-container">
        <h4 className="pj-title-margin">{data.name}</h4>
        <p>Technologies:</p>
        <div className="tec-icons">
          {data.technologies.map((item) => {
            let icon;
            switch (item) {
              case "html":
                icon = <i className="fab fa-html5"></i>;
                break;
              case "css":
                icon = <i className="fab fa-css3"></i>;
                break;
              case "javascript":
                icon = <i className="fab fa-js"></i>;
                break;
              case "bootstrap":
                icon = <i className="fab fa-bootstrap"></i>;
                break;
              case "sass":
                icon = <i className="fab fa-sass"></i>;
                break;
              case "jquery":
                icon = <i className="fab fa-js"></i>;
                break;
              case "react":
                icon = <i className="fab fa-react"></i>;
                break;
              case "git":
                icon = <i className="fab fa-github"></i>;
                break;
              case "mongodb":
                icon = <i className="fa fa-database"></i>;
                break;
              case "node js":
                icon = <i class="fab fa-node-js"></i>;
                break;
              case "next js":
                icon = <i class="fab fa-react"></i>;
                break;

              default:
                break;
            }
            return (
              <span className="text-capitalize">
                {icon}
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className="buttons">
        <a href={data.demo_link} target="_blank" rel="noopener noreferrer">
          demo
        </a>
        <a href={data.github_link} target="_blank" rel="noopener noreferrer">
          github
        </a>
      </div>
    </div>
  );
}

export default EachProject;

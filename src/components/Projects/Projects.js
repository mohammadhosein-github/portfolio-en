import React from "react";
import { skills, projects_data } from "./Data";
import EachProject from "./EachProject";
import MySkills from "./MySkills";

function Project() {
  return (
    <div className="container p-container section-padding" id="projects">
      <div className="row text-left">
        <div className="col-md-3 skills">
          <h3 className="text-capitalize">my skills</h3>
          {skills.map((skill) => (
            <MySkills skill_data={skill} />
          ))}
        </div>

        <div className="col-md-9 projects">
          <h3 className="pj-section-title text-capitalize">my projects</h3>
          {projects_data.map((p) => {
            return (
              <React.Fragment key={p.name}>
                <EachProject project_data={p} />
                {p !== projects_data[projects_data.length - 1] && (
                  <div className="card-hr"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;

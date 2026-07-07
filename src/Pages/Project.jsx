// ============================================================
// File Name : Projects.jsx
// Folder    : src/pages
// Purpose   : Display Project Cards
// ============================================================

import { projects } from "../Data/Projects";
import PageTransition from "../ComponentsTemp/PageTransition";

function Project() {
  return (
    <PageTransition>
      <section className="projects" id="projects">
        <h1>Projects</h1>

        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              {/* Title */}
              <h2>{project.title}</h2>

              {/* Description */}
              <p>{project.description}</p>

              {/* Technologies */}
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span className="tech" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

export default Project;
// ======================================================
// File Name : Skills.jsx
// Folder    : Pages
// Purpose   : Show Skills
// ======================================================

import { Skills } from "../Data/Skills";
import PageTransition from "../Components/PageTransition";
function SkillsPage() {
  return (
    <PageTransition>
    <section className="skills">

      <h1>Technical Skills</h1>

      <div className="skill-container">

        {Skills.map((skill) => {

          const Icon = skill.icon;

          return (
            <div
              className="skill-card"
              key={skill.id}
            >
              <Icon size={60} />

              <h3>{skill.name}</h3>
            </div>
          );
        })}

      </div>

    </section>
    </PageTransition>
  );
}

export default SkillsPage;
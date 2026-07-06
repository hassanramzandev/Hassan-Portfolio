import PageTransition from "../Components/PageTransition";
function About() {
  return (
    <PageTransition>
    <section className="about">
      <h1>About Me</h1>

      {/* FRONTEND */}
      <div className="about-card">
        <h2>Frontend Developer</h2>
        <p>
          I specialize Angular, React, Typescript, Javascript, Bootstrap .
          I build responsive and user-friendly interfaces with clean code.
        </p>
      </div>

      {/* API / BACKEND */}
      <div className="about-card">
        <h2>API / Backend Interaction</h2>
        <p>
          I work with REST APIs, Axios, and Fetch to integrate frontend with backend services
          and handle dynamic data efficiently.
        </p>
      </div>

      {/* UI / UX */}
      <div className="about-card">
        <h2>UI / UX Designer</h2>
        <p>
          I design clean and modern user interfaces using Figma and follow UI/UX principles
          for better user experience.
        </p>
      </div>

      {/* AI / AUTOMATION */}
      <div className="about-card">
        <h2>AI & Automation</h2>
        <p>
          I explore AI tools, automation workflow, and smart development techniques
          to improve productivity and build intelligent applications.
        </p>
      </div>

      {/* FULL STACK */}
      <div className="about-card highlight">
        <h2>Full Stack Learning Path</h2>
        <p>
          Currently learning full stack development including frontend, backend (Node.js),
          databases (Mysql), and deployment tools.
        </p>
      </div>
    </section>
    </PageTransition>
  );
}

export default About;
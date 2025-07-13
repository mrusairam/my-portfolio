import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import recipeApp from "../../Assets/Projects/recipeApp.jpeg";
import blog from "../../Assets/Projects/blog.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some sample projects showcasing my frontend development skills.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Store"
              description="An online store built using Next.js and Tailwind CSS with dynamic product pages, cart functionality, and smooth UX."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Developer Portfolio"
              description="Personal portfolio site designed using React and Bootstrap. Highlights my skills, projects, and contact information."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Admin Dashboard"
              description="A responsive admin dashboard UI with charts, tables, and theme support built in React and Chart.js."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog System"
              description="A markdown-based blog application using Next.js, perfect for publishing content with dark mode and SEO features."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipeApp}
              isBlog={false}
              title="Recipe Finder"
              description="Food recipe search app built with React and Edamam API, helping users explore dishes by ingredients and cuisine."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

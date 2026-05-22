import React from "react";
import { Project } from "../models/ProjectModel";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps): React.JSX.Element {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
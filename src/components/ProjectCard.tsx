import React from "react";
import { Project } from "../models/ProjectModel";

type ProjectCardProps = Omit<Project, "id">;

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps): React.JSX.Element {
  return (
    <div className="project-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="project-link">
          Ver Código →
        </a>
      </div>
    </div>
  );
}
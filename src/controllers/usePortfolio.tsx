// src/controllers/usePortfolio.ts
import { useState, useEffect } from "react";
import { ProjectModel, Project } from "../models/ProjectModel";

interface UsePortfolioReturn {
  projects: Project[];
  selectedTag: string | null;
  filterProjectsByTag: (tag: string | null) => void;
  cvUrlEs: string;
  cvUrlEn: string;
}

export function usePortfolio(): UsePortfolioReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const data = ProjectModel.getAllProjects();
    setProjects(data);
  }, []);

  const filterProjectsByTag = (tag: string | null): void => {
    setSelectedTag(tag);
  };

  const displayedProjects = selectedTag
    ? projects.filter(p => p.tags.includes(selectedTag))
    : projects;

  // REEMPLAZA ESTOS ENLACES por los links reales de compartir de tu Google Drive:
  const cvUrlEs = "https://drive.google.com/file/d/1y1u3F1ZSpA4hsN4OXwqQ10ftO8-TJUis/view?usp=sharing";
  const cvUrlEn = "https://drive.google.com/file/d/1ASgjBNOHwhIuKDsgh4Xx4PCZWHdxJfdB/view?usp=sharing";

  return {
    projects: displayedProjects,
    selectedTag,
    filterProjectsByTag,
    cvUrlEs,
    cvUrlEn
  };
}
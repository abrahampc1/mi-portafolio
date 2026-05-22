export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const rawProjects: Project[] = [
  {
    id: 1,
    title: "PetClass : Aplicación para collar inteligente de mascota",
    description: "Aplicación conectada a collar inteligente para monitoreo y rastero de perros.",
    tags: ["Kotlin", "Android Nativo"],
    link: "https://github.com/abrahampc1/AplicationPetClass"
  },
  {
    id: 2,
    title: "Página para Refaccionaria - FrontEnd",
    description: "Página para ver catálogo de refaccionaria y con ello ayudar a la experiencia del cliente al buscar refacciones para equipo pesado (diesel).",
    tags: ["React"],
    link: "https://github.com/abrahampc1?tab=repositories"
  },
  {
    id: 3,
    title: "Página para Refaccionaria - BackEnd",
    description: "Back-End que consulta base de datos en la nube para obtener inforamción del producto o refacción en específico",
    tags: ["Node.js", "PostGreSQL"],
    link: "https://github.com/abrahampc1/refaccionaria-back"
  }
];

export const ProjectModel = {
  getAllProjects: (): Project[] => {
    return [...rawProjects];
  }
};
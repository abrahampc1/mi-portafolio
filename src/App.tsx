import React from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import ProjectsList from "./components/ProjectsList.tsx";
import Contact from "./components/Contact.tsx";
import { usePortfolio } from "./controllers/usePortfolio.tsx";

export default function App(): React.JSX.Element {
  const { projects, cvUrlEs, cvUrlEn } = usePortfolio();

  return (
    <div className="portfolio-container">
      <Navbar />
      <main>
        <Hero cvUrlEs={cvUrlEs} cvUrlEn={cvUrlEn} />
        <ProjectsList projects={projects} />
      </main>
      <Contact />
    </div>
  );
}
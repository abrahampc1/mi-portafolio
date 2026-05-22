import React from "react";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="navbar">
      <h1>Mi portafolio</h1>
      <div className="nav-links">
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  );
}
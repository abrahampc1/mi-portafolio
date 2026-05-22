import React from "react";

interface HeroProps {
  cvUrlEs: string;
  cvUrlEn: string;
}

export default function Hero({ cvUrlEs, cvUrlEn }: HeroProps): React.JSX.Element {
  return (
    <header id="about" className="hero">
      <h2>Hola, soy Jesús Abraham Pérez Castro</h2>
      <h1>Ing. Tecnologías de la Información y Comunicaciones</h1>
      <h3>Construyendo aplicaciones web, móviles y backend de alto impacto.</h3>
      <p>
        Con más de dos años de experiencia en la industria, me apasiona transformar 
        problemas lógicos en interfaces limpias y sistemas eficientes. Me especializo 
        en desarrollos frontend y backend escalables, desarrollo móvil y la optimización de 
        bases de datos relacionales.
      </p>
      
      <div className="hero-actions">
        <a href="#contact" className="cta-button">Vamos a hablar</a>
        <div className="cv-buttons-group">
          <a href={cvUrlEs} target="_blank" rel="noreferrer" className="cv-link-btn">
            📄 Ver CV (Español)
          </a>
          <a href={cvUrlEn} target="_blank" rel="noreferrer" className="cv-link-btn language-en">
            🌐 View CV (English)
          </a>
        </div>
      </div>
    </header>
  );
}
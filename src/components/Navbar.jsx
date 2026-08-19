import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar__logo">
        NOVA CAPS
      </div>

      <div className={`navbar__links ${menuAbierto ? "navbar__links--open" : ""}`}>
        <a href="#coleccion">Colección</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </div>

      <button className="navbar__button">
        Ver colección
      </button>

      <button
        className="navbar__toggle"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        {menuAbierto ? "✕" : "☰"}
      </button>

    </nav>
  );
}

export default Navbar;
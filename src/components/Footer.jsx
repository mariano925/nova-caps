import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__brand">
        NOVA CAPS
      </div>

      <p className="footer__text">
        cual es tu color.
      </p>

      <div className="footer__links">
        <a href="#coleccion">Colección</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </div>

      <div className="footer__bottom">
        <span>© 2026 NOVA CAPS</span>
        <span>Made in Gualeguay.</span>
      </div>

    </footer>
  );
}

export default Footer;
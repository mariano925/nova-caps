import "./Hero.css";
import gorra1 from "../assets/images/gorra1.jpg";

function Hero() {
  return (
    <section className="hero">

      {/* Elementos decorativos */}
      <div className="hero__shape hero__shape--purple"></div>
      <div className="hero__shape hero__shape--orange"></div>
      <div className="hero__shape hero__shape--yellow"></div>

      <span className="hero__sticker">
        ¡ATRÉVETE!
      </span>

      <div className="hero__content">
        <span className="hero__tag">NOVEDAD</span>

        <h1>
          NOVA
          <span className="hero__title-accent">CAPS</span>
        </h1>

        <p className="hero__subtitle">
          Llevá tu color.
        </p>

        <p className="hero__description">
          Gorras diseñadas para expresar tu estilo,
          tu energía y tu personalidad.
        </p>

        <a href="#coleccion" className="hero__button">
          Explorar colección
        </a>
      </div>

      <div className="hero__image">
        <img
          src={gorra1}
          alt="Gorra de la colección Nova Caps"
        />
      </div>

      <span className="hero__number">01 / 06</span>

    </section>
  );
}

export default Hero;
import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto" id="contacto">

      <div className="contacto__content">

        <span className="contacto__tag">
          DI HOLA
        </span>

        <h2>
          TENÉS
          <span>PREGUNTAS?</span>
        </h2>

        <p>
          ¿Querés saber más sobre NOVA CAPS?
          Escribime y contanos qué color te representa.
        </p>

        <a
          href="mailto:hola@novacaps.com"
          className="contacto__email"
        >
          hola@novacaps.com
        </a>

      </div>

    </section>
  );
}

export default Contacto;
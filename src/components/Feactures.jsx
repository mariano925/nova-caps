import "./Feactures.css";

function Features() {
  return (
    <section className="features">

      <div className="features__header">
        <span className="features__tag">
          ¿POR QUÉ NOVA?
        </span>

        <h2>
          HECHO PARA PERSONAS QUE QUIEREN
          <br />
          <span>DESTACARSE</span>
          </h2>
      </div>

      <div className="features__grid">

        <article className="features__card features__card--pink">
          <span className="features__number">01</span>

          <h3>COLOR</h3>

          <p>
            Colores intensos para que tu estilo
            nunca pase desapercibido.
          </p>
        </article>

        <article className="features__card features__card--yellow">
          <span className="features__number">02</span>

          <h3>ACTITUD</h3>

          <p>
            Diseños pensados para personas
            que se animan a marcar la diferencia.
          </p>
        </article>

        <article className="features__card features__card--cyan">
          <span className="features__number">03</span>

          <h3>ESTILO</h3>

          <p>
            Una gorra puede ser el detalle
            que define todo tu look.
          </p>
        </article>

      </div>

    </section>
  );
}

export default Features;
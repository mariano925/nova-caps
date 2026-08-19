import "./Lookbook.css";

import gorra1 from "../assets/images/gorra1.jpg";
import gorra2 from "../assets/images/gorra2.jpg";
import gorra3 from "../assets/images/gorra3.jpg";
import gorra4 from "../assets/images/gorra4.jpg";

function Lookbook() {
  return (
    <section className="lookbook" id="lookbook">

      <div className="lookbook__header">

        <span className="lookbook__tag">
        CATALOGO NOVA
        </span>

        <h2>
          MIRÁ EL
          <span>CATÁLOGO</span>
        </h2>

        <p>
          Cuatro estilos. Una misma actitud.
        </p>

      </div>

      <div className="lookbook__grid">

        <div className="lookbook__item lookbook__item--one">
          <img src={gorra1} alt="NOVA CAPS estilo 1" />
        </div>

        <div className="lookbook__item lookbook__item--two">
          <img src={gorra2} alt="NOVA CAPS estilo 2" />
        </div>

        <div className="lookbook__item lookbook__item--three">
          <img src={gorra3} alt="NOVA CAPS estilo 3" />
        </div>

        <div className="lookbook__item lookbook__item--four">
          <img src={gorra4} alt="NOVA CAPS estilo 4" />
        </div>

      </div>

    </section>
  );
}

export default Lookbook;
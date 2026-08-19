import "./Collection.css";

import gorra1 from "../assets/images/gorra1.jpg";
import gorra2 from "../assets/images/gorra2.jpg";
import gorra3 from "../assets/images/gorra3.jpg";
import gorra4 from "../assets/images/gorra4.jpg";

import ProductCard from "./ProductCard";

function Collection() {
  return (
    <section className="collection" id="coleccion">

      <div className="collection__header">

        <span className="collection__tag">
          NOVA COLECCIÓN
        </span>

        <h2>
        ENCONTRÁ TU <br />
          <span>COLOR</span>
        </h2>

        <p>
          Una colección creada para que cada color
          diga algo sobre vos.
        </p>

      </div>

      <div className="collection__products">

         <ProductCard
  nombre="NOVA CLASSIC"
  descripcion="Tu color diario."
  precio="$45"
  imagen={gorra1}
/>

<ProductCard
  nombre="NOVA WAVE"
  descripcion="Sigue tu onda."
  precio="$48"
  imagen={gorra2}
/>

<ProductCard
  nombre="NOVA POP"
  descripcion="Coloreá tu mundo."
  precio="$50"
  imagen={gorra3}
/>

<ProductCard
  nombre="NOVA BOLD"
  descripcion="Destacate."
  precio="$52"
  imagen={gorra4}
/>

      </div>

    </section>
  );
}

export default Collection;
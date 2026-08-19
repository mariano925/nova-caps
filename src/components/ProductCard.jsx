import "./ProductCard.css";

function ProductCard({ nombre, descripcion, precio, imagen }) {
  return (
    <div className="collection__product">

      <div className="collection__product-image">

        <img
          src={imagen}
          alt={nombre}
        />

        <span className="collection__product-tag">
          NUEVO
        </span>

      </div>

      <div className="collection__product-info">

        <h3>{nombre}</h3>

        <p>{descripcion}</p>

        <strong>{precio}</strong>

        <button>
          Mira la colección
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
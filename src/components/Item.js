import { useState } from "react";

export default function Item({ item, agregar }) {
  const [unidad, setUnidad] = useState(item.stock);

  const modificar = () => {
    agregar();
    setUnidad(unidad - 1);
  };

  return (
    <div className="producto">
      <h3>{item.producto.nombre}</h3>
      <p>{item.producto.descripcion}</p>
      <h5>
        En stock:
        {unidad > 0 ? unidad : <span>Agotado</span>}
      </h5>
      <button disabled={unidad <= 0} onClick={modificar}>
        {unidad > 0 ? "COMPRAR" : "SIN STOCK"}
      </button>
    </div>
  );
}

import React from "react";
import producto from "./data.json";
import Item from "./Item";

export default function Listado({ agregar }) {
  return (
    <div className="container">
      {producto.map((item, i) => (
        <Item key={i + item.producto.nombre} agregar={agregar} item={item} />
      ))}
    </div>
  );
}

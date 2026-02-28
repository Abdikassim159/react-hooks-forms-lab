import React from "react";

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span className="category">{item.category}</span>
          <button className="add">Add to Cart</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
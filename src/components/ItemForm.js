import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
  e.preventDefault();
  onItemFormSubmit({
    id: uuid(),
    name,
    category,  // include selected category
  });
  setName("");
  setCategory("Produce"); // reset after submit
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
  id="category"
  value={category}           // controlled input
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="Produce">Produce</option>
  <option value="Dairy">Dairy</option>
  <option value="Bakery">Bakery</option>
  <option value="Meat">Meat</option>
  <option value="Dessert">Dessert</option> {/* Add Dessert option */}
</select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
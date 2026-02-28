import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

function App() {
 const [items, setItems] = useState([
  { id: uuid(), name: "Yogurt", category: "Dairy" },
  { id: uuid(), name: "Lettuce", category: "Produce" },
  { id: uuid(), name: "Swiss Cheese", category: "Dairy" },
  { id: uuid(), name: "String Cheese", category: "Dairy" },
]);

  const [searchText, setSearchText] = useState("");

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div>
      <h1>Shopping List</h1>

      <Filter search={searchText} onSearchChange={setSearchText} />

      <ItemForm onItemFormSubmit={handleAddItem} />

      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;
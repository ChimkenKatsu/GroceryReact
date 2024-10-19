import React, { useState } from "react";
import GroceryList from "./GroceryList";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <h1>Grocery List App</h1>
        <GroceryList items={items} removeItem={removeItem} />
      </div>
    </>
  );
}

export default App;

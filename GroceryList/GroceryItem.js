import React from "react";

const GroceryItem = ({ item, index, removeItem }) => {
  return (
    <div className="grocery-item">
      <span>{item}</span>
      <button onClick={() => removeItem(index)}>Remove</button>
    </div>
  );
};

export default GroceryItem;

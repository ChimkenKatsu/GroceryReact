import React from "react";
import GroceryItem from "./GroceryItem";

const GroceryList = ({ items, removeItem }) => {
  return (
    <div className="grocery-list">
      {items.length > 0 ? (
        items.map((item, index) => (
          <GroceryItem
            key={index}
            item={item}
            index={index}
            removeItem={removeItem}
          />
        ))
      ) : (
        <p>Your grocery list is empty.</p>
      )}
    </div>
  );
};

export default GroceryList;

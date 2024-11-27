//import { useState } from "react";

const IngredientsList = ({ availableIngredients, addToBurger }) => {
  return (
    <ul>
      {availableIngredients.length > 0 ? (
        availableIngredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}> + </button>
          </li>
        ))
      ) : (
        <p>Not Found</p>
      )}
    </ul>
  );
};

export default IngredientsList;

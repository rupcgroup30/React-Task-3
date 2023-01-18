import React from "react";
import CustomModal from "./CustomModal";

export default function CustomRecipe({ image, name, cookingMethod, time, id }) {
  return (
    <div className="ingredient_container">
      <div key={id}>
        <img src={image} />
        <p>Dish name: {name}</p>
        <p>Cooking method: {cookingMethod}</p>
        <p>Total cooking time: {time} minuets</p>
        <CustomModal recipeId={id} />
      </div>
    </div>
  );
}

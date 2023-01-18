import React from "react";

export default function CustomIngredient({ id, name, image, calories, isHidden, isChecked }) {
  return (
   
      <div key={id} className="ingredient_container">
        <h3>Ingredient details</h3>
       <p>Ingredient name: {name}</p>
        <img src={image} />
        <p>{calories} calories</p>
        add
        <br />
        <input type="checkbox" value={id} hidden={isHidden} checked={isChecked}/>
      </div>
   
  );
}

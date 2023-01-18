import React, { useState } from "react";
import CustomIngredient from "./CustomIngredient";

export default function CustomModal({ recipeId }) {
  const apiUrlIngredients =
    "https://localhost:7060/api/Ingredients/" + recipeId.toString();
  const [isOpen, setIsOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const openModal = () => {
    async function fetchData() {
      const response = await fetch(apiUrlIngredients);
      const data = await response.json();
      setIngredients(data);
    }
    fetchData();
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Show ingredients</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="RecipeIngredients_container">
              {ingredients.map((ingredient) => (
                <CustomIngredient
                  key={ingredient.id}
                  id={ingredient.id}
                  name={ingredient.name}
                  image={ingredient.image}
                  calories={ingredient.calories}
                  isHidden={true}
                />
              ))}
            </div>
            <div id="MyButton">
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

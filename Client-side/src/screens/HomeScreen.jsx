import React, { useEffect, useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomRecipe from "../components/CustomRecipe";

const apiUrlRecipes = "https://localhost:7060/api/Recipes/";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrlRecipes);
      const data = await response.json();
      setRecipes(data);
    }
    fetchData();
  }, []);

  return (
    <div >
      <CustomHeader/>
      <div className="homeScreen_container">
             {recipes.map((recipe) => (
        <CustomRecipe
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          name={recipe.name}
          cookingMethod={recipe.cookingMethod}
          time={recipe.time}
          onClick={recipe.onClick}
        />
      ))}
      </div>
    </div>
  );
}

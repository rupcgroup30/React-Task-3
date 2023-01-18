import React, { useEffect, useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomIngredient from "../components/CustomIngredient";

const apiUrlIngredients = "https://localhost:7060/api/Ingredients";
const apiUrlRecipes = "https://localhost:7060/api/Recipes/";

export default function CreateNewRecipeScreen() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [cookingMethod, setCookingMethod] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [ingredientForRecipe, setIngredientForRecipe] = useState([]);

  const AddIngredientToList = () => {};

  const onClickBtnClearForm = () => {
    setName("");
    setCookingMethod("");
    setTime("");
    setImage("");
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrlIngredients);
      const data = await response.json();
      setIngredients(data);
    }
    fetchData();
  }, []);

  const onClickCreateRecipeBtn = () => {
    const s = {
      image: image,
      name: name,
      cookingMethod: cookingMethod,
      time: time,
    };

    fetch(apiUrlRecipes, {
      method: "POST",
      body: JSON.stringify(s),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      })
    } ).catch((error) => console.log('fail', error))
      .then((res) => {
        return res.json();
      })
      .then((recipeId) => {
        ingredients.map((ingredient) => {
          const apiIngredientInRecipe = `https://localhost:7060/api/Ingredients/${recipeId}/${ingredient.id}`;
          if (ingredient.isChecked) {
            fetch(apiIngredientInRecipe, {
              method: "POST",
              body: JSON.stringify(recipeId, ingredient.id),
              headers: { "Content-type": "application/json; charset=UTF-8" },
              Accept: "application/json; charset=UTF-8",
            }).then((res) => {
              console.log(res);
              return res.json();
            });
          }
        });
      });

  };

  
  return (
    <div className="newRecipe_container">
      <CustomHeader />
      <div>
        <form>
          <h2>New Recipe</h2>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="enter recipe name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Cooking method</label>
          <br />
          <input
            type="text"
            placeholder="enter cooking method"
            required
            value={cookingMethod}
            onChange={(e) => setCookingMethod(e.target.value)}
          />
          <br />
          <label>Time</label>
          <br />
          <input
            type="number"
            placeholder="enter cooking time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <label>Image</label>
          <br />
          <input
            type="url"
            placeholder="enter image url"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <button onClick={onClickCreateRecipeBtn}>Create new Recipe</button>
          <button onClick={onClickBtnClearForm}>Clear form</button>
        </form>
      </div>
      <div className="homeScreen_container">
        {ingredients.map((ingredient) => (
          <CustomIngredient
            key={ingredient.id}
            image={ingredient.image}
            name={ingredient.name}
            calories={ingredient.calories}
            isChecked={ingredient.isChecked}
          />
        ))}
      </div>
    </div>
  );
}

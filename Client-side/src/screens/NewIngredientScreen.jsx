import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";

const apiUrlIngredients = "https://localhost:7060/api/Ingredients";

export default function NewIngredientScreen() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");

  const onClickBtnClearForm = () => {
    setName("");
    setImage("");
    setCalories("");
  };

  const onClickNewIngredientBtn = () => {
    const s = {
      name: name,
      image: image,
      calories: calories
    };

    fetch(apiUrlIngredients, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
      'Content-type': 'application/json; charset=UTF-8' 
      })
      })
  };

  return (
    <div className="newIngredient_container">
      <CustomHeader />
      <form>
        <h2>New Ingredient</h2>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="enter ingredient name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Image</label>
        <br />
        <input
          type="text"
          placeholder="enter image URL"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <label>Calories</label>
        <br />
        <input
          type="text"
          placeholder="enter calories"
          required
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <br />
        <button onClick={onClickNewIngredientBtn}>Add new Ingredient</button>
        <button onClick={onClickBtnClearForm}>Clear form</button>
      </form>
    </div>
  );
}

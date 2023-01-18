import React from "react";
import Logo from "./../images/logo.png";
import {Link} from 'react-router-dom';

export default function CustomHeader() {
  return (
    <div className="header">
      <img src={Logo} />
      <div id="headerContainer">
        <Link to='/'>My kitchen</Link>
        <Link to='/NewRecipe'>Create new recipe</Link>
        <Link to='/NewIngredient'>Create new ingredient</Link>
      </div>
    </div>
  );
}

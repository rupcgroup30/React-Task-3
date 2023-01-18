import "./App.css";
import CreateNewRecipeScreen from "./screens/CreateNewRecipeScreen";
import NewIngredientScreen from "./screens/NewIngredientScreen";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App-header">
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/NewIngredient" element={<NewIngredientScreen />} />
          <Route path="/NewRecipe" element={<CreateNewRecipeScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

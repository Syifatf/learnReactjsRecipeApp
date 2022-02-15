/* eslint-disable no-undef */
import './App.css';
import Axios from "axios";
import { useState } from "react";
import RecipleTile from './RecipleTile';

function App() {

const [query, setquery] = useState("");
const [recipes, setrecipes] = useState([])
const [healthLabels, sethealthLabels] = useState("vegan");

const YOUR_APP_ID = "2f3f840e";
const YOUR_APP_KEY = "1c51c59e56cd171e1c201c8706c7bed7";
 
  // eslint-disable-next-line no-unused-vars
  var url = `
  https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabels}`;
  
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits)
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>FOOD RECIPLE</h1>
        <form className="app__searchForm" onSubmit={onSubmit}>
          <input 
            className="app__input"
            type="text" 
            placeholder="enter ingridient" 
            value={query}
            onChange={(e) => setquery(e.target.value)} 
          />

          <input className="app__submit" type="submit" value="Search" />
          <select className="app_healthLabels">
            <option onClick={() => sethealthLabels("vegan")}>vegan</option>
            <option onClick={() => sethealthLabels("vegetarian")}>paleo</option>            
            <option onClick={() => sethealthLabels("dairy-free")}>dairy-free</option>            
            <option onClick={() => sethealthLabels("gluten-free")}>gluten-free</option> 
            <option onClick={() => sethealthLabels("wheat-free")}>wheat-free</option>            
            <option onClick={() => sethealthLabels("low-sugar")}>low-sugar</option> 
            <option onClick={() => sethealthLabels("egg-free")}>egg-free</option>            
            <option onClick={() => sethealthLabels("peanut-free")}>peanut-free</option>            
            <option onClick={() => sethealthLabels("tree-nut-free")}>tree-nut-free</option>            
            <option onClick={() => sethealthLabels("soy-free")}>soy-free</option>            
            <option onClick={() => sethealthLabels("fish-free")}>fish-free</option>            
            <option onClick={() => sethealthLabels("shellfish-free")}>shellfish-free</option>            

          </select>
        </form>

        <div className="app__recipes">
          {recipes.map((recipe) => {
           return <RecipleTile recipe={recipe} /> ;
          })}
        </div>
      </div>
  );
}

export default App;

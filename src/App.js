import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Recipes from './component/Recipe';

const App = () => {
  const APP_ID = '';
  const APP_KEY = '';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await axios(url);
    const data = await response.data;
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          protein={recipe.recipe.totalNutrients.PROCNT.quantity}
          carbs={recipe.recipe.totalNutrients.CHOCDF.quantity}
          fiber={recipe.recipe.totalNutrients.FIBTG.quantity}
          fat={recipe.recipe.totalNutrients.FAT.quantity}
          sugar={recipe.recipe.totalNutrients.SUGAR.quantity}
          dietlabel={recipe.recipe.dietLabels}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;

import React from 'react';
import style from '../recipe.module.css';

const Recipe = ({
  title,
  calories,
  image,
  protein,
  carbs,
  fat,
  fiber,
  sugar,
  dietlabel,
  ingredients
}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}: </h1>
      <h3>{dietlabel}</h3>
      <ol>
        {ingredients.map((ingredient, recipe) => (
          <li key={recipe}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{Math.round(calories)} Calories</p>
      {/* <p>Protein {Math.round(protein)} grams</p>
      <p>Carbs {Math.round(carbs)} grams</p>
      <p>Fat {Math.round(fat)} grams</p>
      <p>Fiber {Math.round(fiber)} grams</p>
      <p>Sugar {Math.round(sugar)} grams</p> */}
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;

import React from 'react';

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
    <div>
      <h1>{title}: </h1>
      <h3>{dietlabel}</h3>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{Math.round(calories)} Calories</p>
      <p>Protein {Math.round(protein)} grams</p>
      <p>Carbs {Math.round(carbs)} grams</p>
      <p>Fat {Math.round(fat)} grams</p>
      <p>Fiber {Math.round(fiber)} grams</p>
      <p>Sugar {Math.round(sugar)} grams</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;

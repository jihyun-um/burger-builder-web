import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map(ingredientKey =>
      [...Array(ingredients[ingredientKey])].map((_, index) => (
        <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
      ))
    )
    .reduce((array, element) => array.concat(element), []);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

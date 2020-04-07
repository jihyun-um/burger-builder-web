import React, { useState } from 'react';

import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/BurgerBuildControls/BurgerBuildControls';

const burgerBuilder = props => {
  const initialState = {
    ingredients: {
      salad: 1,
      cheese: 2,
      meat: 2,
      bacon: 1
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState(initialState);

  const addIngredientHandler = type => {
    const { ingredients } = state;
    const ingredientCount = ingredients[type];

    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = ingredientCount + 1;
    setState({ ingredients: updatedIngredients });
  };

  return (
    <>
      <Burger ingredients={state.ingredients} />
      <BurgerBuildControls
        addIngredient={addIngredientHandler}
      />
    </>
  );
};

export default burgerBuilder;

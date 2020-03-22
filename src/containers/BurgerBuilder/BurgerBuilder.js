import React, { useState } from 'react';

import Burger from '../../components/Burger/Burger';

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

  return (
    <>
      <Burger ingredients={state.ingredients} />
    </>
  );
};

export default burgerBuilder;

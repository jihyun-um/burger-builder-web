import React from 'react';

import classes from './BurgerBuildControls.module.css';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const burgerBuildControls = props => (
  <div className={classes.BurgerBuildControls}>
    {controls.map(control => (
      <BurgerBuildControl key={control.label} label={control.label} />
    ))}
  </div>
);

export default burgerBuildControls;

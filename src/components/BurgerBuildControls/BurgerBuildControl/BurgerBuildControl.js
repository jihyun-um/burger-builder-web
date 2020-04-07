import React from 'react';

import classes from './BurgerBuildControl.module.css';

const burgerBuildControl = props => (
  <div className={classes.BurgerBuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More} onClick={props.addIngredient}>More</button>
  </div>
);

export default burgerBuildControl;

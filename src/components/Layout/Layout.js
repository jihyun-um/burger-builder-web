import React from 'react';

import classes from './Layout.module.css';

const layout = props => {
  return (
    <>
      <h1>Toolbar, SideDrawer, Backdrop</h1>
      <main className={classes.Main}>{props.children}</main>
    </>
  );
};

export default layout;

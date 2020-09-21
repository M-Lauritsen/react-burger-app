import React from 'react';
import classes from './Layout.module.css';

import Aux from '../../hoc/Auxi';

const layout = props => (
  <Aux>
    <div>Toolbar,SideDrawer, Backdrop</div>
    <div className={classes.Content}>{props.children}</div>
  </Aux>
);

export default layout;

import React from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toobar';

import Aux from '../../hoc/Auxi';

const layout = props => (
  <Aux>
    <Toolbar />
    <div>Toolbar,SideDrawer, Backdrop</div>
    <div className={classes.Content}>{props.children}</div>
  </Aux>
);

export default layout;

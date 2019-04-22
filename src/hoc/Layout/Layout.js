import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

  const sideDrawerCloseHandler = () => {
    setSideDrawerVisible(false);
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawerVisible(!sideDrawerVisible);
  }

  return (
    <Aux>
      <Toolbar
        isAuthenticated={props.isAuthenticated}
        toggleSideDrawer={sideDrawerToggleHandler} />
      <SideDrawer
        isAuthenticated={props.isAuthenticated}
        opened={sideDrawerVisible} 
        close={sideDrawerCloseHandler} />
      <main className={classes.content}>
        {props.children}
      </main>
    </Aux>
  )

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  }
}

export default connect(mapStateToProps)(layout);

import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => { 
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render () {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer
          opened={this.state.showSideDrawer} 
          close={this.sideDrawerCloseHandler} />
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;

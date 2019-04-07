import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <Toolbar
          isAuthenticated={this.props.isAuthenticated}
          toggleSideDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer
          isAuthenticated={this.props.isAuthenticated}
          opened={this.state.showSideDrawer} 
          close={this.sideDrawerCloseHandler} />
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  }
}

export default connect(mapStateToProps)(Layout);

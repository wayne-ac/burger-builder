import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

  cancelCheckoutHandler = () => {
    this.props.history.goBack();
  }

  continueCheckoutHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Redirect to='/' />
    if (this.props.ingredients) {
      const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ingredients}
            cancelCheckout={this.cancelCheckoutHandler}
            continueCheckout={this.continueCheckoutHandler} />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData} />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
    purchased: state.orderReducer.purchased
  };
}

export default connect(mapStateToProps)(Checkout);

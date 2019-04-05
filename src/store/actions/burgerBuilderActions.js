import axios from '../../axios-orders';

import * as actionTypes from './actionTypes';

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
}

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
}

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
}

export const fetchIngredientsFail = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios.get('https://react-burger-builder-d5be8.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFail());
      });
  };
}

import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  CLEAN_CART = 'CLEAN_CART',
}

export function addCoffeeToCartAction(newCoffee: CartItem) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function changeCartItemQuantityAction(
  cartItemId: string,
  typeOfChange: 'increase' | 'decrease',
) {
  return {
    type: ActionTypes.CHANGE_CART_ITEM_QUANTITY,
    payload: {
      cartItemId,
      typeOfChange,
    },
  }
}

export function removeCartItemAction(cartItemId: string) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      cartItemId,
    },
  }
}

export function cleanCartAction() {
  return {
    type: ActionTypes.CLEAN_CART,
  }
}

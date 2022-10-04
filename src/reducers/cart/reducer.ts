import { produce } from 'immer'
import { Coffee } from '../../pages/Home/components/CoffeeCard'
import { ActionTypes } from './actions'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartState {
  cartItems: CartItem[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const coffeeAlreadyExistsInCart = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.newCoffee.id,
      )

      const newCartState = produce(state, (draft) => {
        if (coffeeAlreadyExistsInCart < 0) {
          draft.cartItems.push(action.payload.newCoffee)
        } else {
          draft.cartItems[coffeeAlreadyExistsInCart].quantity +=
            action.payload.newCoffee.quantity
        }
      })
      return newCartState
    }
    case ActionTypes.CHANGE_CART_ITEM_QUANTITY: {
      const coffeeExistsInCart = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      const newCartState = produce(state, (draft) => {
        if (coffeeExistsInCart >= 0) {
          const item = draft.cartItems[coffeeExistsInCart]
          draft.cartItems[coffeeExistsInCart].quantity =
            action.payload.typeOfChange === 'increase'
              ? item.quantity + 1
              : item.quantity - 1
        }
      })
      return newCartState
    }
    case ActionTypes.REMOVE_CART_ITEM: {
      const coffeeExistsInCart = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      const newCartState = produce(state, (draft) => {
        if (coffeeExistsInCart >= 0) {
          draft.cartItems.splice(coffeeExistsInCart, 1)
        }
      })
      return newCartState
    }
    case ActionTypes.CLEAN_CART: {
      const newCartState = produce(state, (draft) => {
        draft.cartItems = []
      })
      return newCartState
    }
    default:
      return state
  }
}

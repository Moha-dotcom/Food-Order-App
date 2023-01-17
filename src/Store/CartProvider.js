import React from 'react'
import { useReducer } from 'react'
import CartContext from './CartContext'

const defaultStart = {
    item : [],
    totalAmount : 0
}
const cartReducer = (state, action) => {
  if(action.type === "ADD_TO_CART"){
    const updatedTotalamount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.item.findIndex((items) => items.id === action.items.id)
  
    let updatedItems ;
    const existingCartItem = state.item[existingCartItemIndex]

    if(existingCartItem){
      const updatedItem  = {...existingCartItem, amount : existingCartItem.amount + action.item.amount};
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    }else{
    
       updatedItems = state.item.concat(action.item);
    }

  


    
    

    

      return {
        item : updatedItems,
        totalAmount : updatedTotalamount
      };
  }
  if(action.type === "REMOVEITEM"){
    
  }

 

}



function CartProvider (props) {
  const [CartState, dispatchCartAction ] = useReducer(cartReducer, defaultStart);


  const addCartHandler = (item) => {
    dispatchCartAction({type : "ADD_TO_CART", item : item})

  }

  const removeCartHandler = (id) => {
    dispatchCartAction({type : "REMOVEITEM", id : id})
    
  }


  const cartContext = {
    items : CartState.item,
    totalAmount : CartState.totalAmount,
    addItem : addCartHandler,
    removeItem : removeCartHandler

  }
  return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
  )
}

export default CartProvider;
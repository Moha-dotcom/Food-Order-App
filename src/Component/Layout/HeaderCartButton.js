import React, { Fragment } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../Store/CartContext'
function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberofCartItem = cartCtx.items.reduce((currVal, item) => {return currVal + item.amount}, 0)
  console.log(numberofCartItem)
  return (
    <Fragment>
        <button className={classes.button} onClick={props.onClick}>
          <span className={classes.icon}><CartIcon /></span>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberofCartItem}</span>
        </button>
    </Fragment>
  )
}

export default HeaderCartButton

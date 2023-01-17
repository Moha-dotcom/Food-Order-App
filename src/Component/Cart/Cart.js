import React from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css'


export default function Cart(props) {
    const cartItems = (
    <ul k className={classes['cart-items']}>
        {[
                {id : 'c1', name:'Sushi', amount : 2, price : 12.99}
            ].map((item) => <li key={item.id}>{item.name}</li>)
        }
    </ul>
    );
  return (
    <Modal onClose={props.isHideCart}>
            {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.33</span>
        </div >
        <div className = {classes.actions}>
            <button className={classes['button--alt']} onClick={props.isHideCart}>Close</button>
            <button className={classes.button}>Order</button>
            </div> 
    </Modal>
  )
}

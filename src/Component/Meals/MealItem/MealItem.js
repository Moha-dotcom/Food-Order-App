import React from 'react'
import clasees from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import Cart_Context from '../../../Store/CartContext'


export default function MealItem(props) {
    const cartCxt = useContext(Cart_Context)
    const price = `$${props.price}`

    const addToCartHandler = (amount) => {
            cartCxt.addItem({
                id: props.id,
                name : props.name,
                amount : amount,
                price : props.price
            })
    }
  return (
        <li  className={clasees.meal}>
            <div className={clasees.divClass} >
                <div>
                      <img style={{width : "500px"}}src={props.image} alt="Rac" />
                </div>
                <h3 >{props.name}</h3>
                <div className={clasees.description}>{props.description}</div>
                <div className={clasees.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart = {addToCartHandler} />
            </div>
        </li>
  )
}

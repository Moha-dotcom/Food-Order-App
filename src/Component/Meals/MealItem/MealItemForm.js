import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react'

export default function MealItemForm(props) {
  const amountInputRef = useRef();
  const [amountIsvalid, setAmountIsvalid] = useState(true);
  const SubmitHandler = (event) => {
  
    event.preventDefault();
   
    const enteredamount = amountInputRef.current.value;
    const enteredamountNumer = +enteredamount;

    if(enteredamount.trim().length === 0  || enteredamountNumer < 1 || enteredamountNumer > 5){
      setAmountIsvalid(false);
      return;
    }

    props.onAddToCart(enteredamountNumer);
   }
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
        <Input  
        label="Amount" 
        ref={amountInputRef}
        input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step : '1',
            defaultValue : '1'
        }}
        />
        
        <button className={classes.button}> + add</button>
        {!amountIsvalid && <p>please enter valid number from (1 - 5 ) </p>}
     
    </form>
  )
}


import {React, Fragment} from 'react'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1 >Home Meals</h1>
            <HeaderCartButton onClick={props.isShowCart} ></HeaderCartButton>
        </header> 
        <div className={classes['main-image']}>
            <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt='Table Full of Delicious Food' />
        </div>
    </Fragment>
  )
}

export default Header

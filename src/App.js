import Header from "./Component/Layout/Header";
import {  useState } from "react";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)
  const showCarthandler  = () => {
    setCartIsShown(true)
  }

  const HideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
   <CartProvider>
    {cartIsShown &&  <Cart  isHideCart={HideCartHandler} />}
      <Header isShowCart={showCarthandler}  />
      <main>
        <Meals />
      </main>
   </CartProvider>
  
 
  );
}

export default App;

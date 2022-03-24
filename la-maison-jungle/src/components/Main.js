import '../styles/Main.css'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import { useState } from 'react'

function Main() {
  const [cart, updateCart] = useState([])

    return <div className="mpj-main">
    <Cart cart={cart} updateCart={updateCart} />
    <ShoppingList cart={cart} updateCart={updateCart} />
  </div>
}

export default Main
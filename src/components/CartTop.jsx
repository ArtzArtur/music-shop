import React from 'react'
import { Link } from 'react-router-dom'
function CartTop() {
  return (
    <div>
      <Link to="CartView">
        <i className="fa fa-shopping-cart"></i>
      </Link>
    </div>
  )
}

export default CartTop
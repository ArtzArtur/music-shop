import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { qtyCounter } from '../store/cartSlice'
function CartTop() {
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.cart.counter)
  const cart = useSelector(state=>state.cart.cart)
  useEffect(()=>{
    dispatch(qtyCounter())
  },[cart])
  return (
    <div className='cart-top'>
      <Link to="CartView">
        <i className="fa fa-shopping-cart">
        <span>{counter}</span>
        </i>
      </Link>
    </div>
  )
}

export default CartTop
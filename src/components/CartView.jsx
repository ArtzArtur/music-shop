import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { incrementQty,decrementQty } from '../store/cartSlice'

function CartView() {
  const cart = useSelector(state=>state.cart.cart)
  const dispatch = useDispatch()
const [fullPrice,setFullPrice] = useState()
  const handleFullPrice = () =>{
    const total = cart.reduce((sum,item)=>{
    return sum+item.collectionPrice*item.qty 
    },0)
    setFullPrice(oldVal=>oldVal=total)
  }
useEffect(()=>{
  handleFullPrice()
},[cart])

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        {cart ? cart.map((product,idx)=>
        <div key={product.collectionId}>
          <img src={product.artworkUrl100} alt="album image" />
          <p>{product.artistName}</p>
          <p>{product.collectionName}</p>

          <p>{product.qty}</p>
          {product.collectionPrice > 0 ? <p>{product.collectionPrice} $</p> : null}
          <div>
            <button onClick={()=>dispatch(incrementQty(product.collectionId))}>+</button>
            <button onClick={()=>dispatch(decrementQty(product.collectionId))}>-</button>
          </div>
        </div>
        )
        : null}
      </div>
      <div>
        <p>Total to pay: {fullPrice > 0 ? fullPrice.toFixed(2) : 0} $</p>
      </div>
      </div>

  )
}

export default CartView
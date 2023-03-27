import { createSlice, current } from '@reduxjs/toolkit'
current
const initialState = {
  cart: [],
  counter:null
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const temp = { ...action.payload, qty: 1 }
      const addedItem = state.cart.findIndex(item => item.collectionId === temp.collectionId)
      if (addedItem >= 0) {
        state.cart[addedItem].qty++
      }
      else {
        state.cart = [...state.cart, temp]
      }
    },
    incrementQty: (state, action) => {
      const productIndex = state.cart.findIndex(item => item.collectionId === action.payload)
      if (productIndex >= 0) {
        state.cart[productIndex].qty++
      }
    },
    handleRemove: (state,action) => {
      state.cart = state.cart.filter(item => item.collectionId !== action.payload)
    },
    decrementQty: (state, action) => {
      const productIndex = state.cart.findIndex(item => item.collectionId === action.payload)
      if (state.cart[productIndex].qty == 1) {
        state.cart = state.cart.filter(item => item.collectionId !== action.payload)
      }

      else {
        state.cart[productIndex].qty--
      }
    },
  qtyCounter:(state) => {
      const temp = state.cart.reduce((sum,item)=>{
        return sum+item.qty
      },0)
      state.counter = temp
    }
  },
})

export default cartSlice.reducer
export const { addToCart, incrementQty, decrementQty, qtyCounter,handleRemove } = cartSlice.actions


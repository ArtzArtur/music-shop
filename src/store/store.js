import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import searchSlice from "./searchSlice"

const store = configureStore({
reducer:{
  search:searchSlice,
  cart:cartSlice
}
})

export default store
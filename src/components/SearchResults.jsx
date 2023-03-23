import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function SearchResults() {
  const dispatch = useDispatch()
  const results = useSelector(state=>state.search.data) 
  const loading = useSelector(state=>state.search.loading) 
  const error = useSelector(state=>state.search.error) 
  const noResults = useSelector(state=>state.search.noResults) 
  const cart = useSelector(state=>state.cart.cart)
  const handleCart = (payload) =>{
    dispatch(addToCart(payload))
  }
  return (
    <div>
      <div>
        {loading ? <div>Loading...</div> : null}
        {noResults ? <div>{noResults}</div> : null}
        {results ? results.map(result=>
        <div key={result.collectionId}>
          <p>{result.artistName}</p>
          <p>{result.collectionName}</p>
          <img src={result.artworkUrl100} />
          <button onClick={()=>handleCart(result)}>Buy</button>
        </div>
          )
        : null
        }
        {error ? <div>
          <p>{error.message}</p>
          <p>{error.name}</p>
        </div> : null}
      </div>
    </div>
  )
}

export default SearchResults
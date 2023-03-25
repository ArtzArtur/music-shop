import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function SearchResults() {
  const dispatch = useDispatch()
  const results = useSelector(state=>state.search.data) 
  const loading = useSelector(state=>state.search.loading) 
  const error = useSelector(state=>state.search.error) 
  const noResults = useSelector(state=>state.search.noResults) 
  const cart = useSelector(state=>state.cart.cart)
  return (
    <div>
      <div className='results'>
        {loading ? <div className='loader'>
        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div> : null}
        {noResults ? <div className='no_result'>{noResults}</div> : null}
        {results ? results.map(result=>
        <div className='results_item' key={result.collectionId}>
          <div className='container'>

          <p className='results_item_data'>Artist: {result.artistName.length<50 ? result.artistName : result.artistName.substr(0,50) + '...'}</p>
          <p className='results_item_data'>Album: {result.collectionName.length<75 ? result.collectionName : result.collectionName.substr(0,75) + '...'}</p>
          <p className='results_item_data'>Genre:{result.primaryGenreName}</p>

          <p className='results_item_data'>Tracks: {result.trackCount}</p>

          </div>
          <div className='container'>

          <img src={result.artworkUrl100} />
          {result.collectionPrice>0 ? 
          <p className='results_item_data'>Price: {result.collectionPrice} $</p> : <p className='results_item_data'>Product temporary unavailable</p>}
          {result.collectionPrice>0 ? <button type='button' className='btn btn-buy' onClick={()=>dispatch(addToCart(result))}>Buy</button> : null}
          </div>
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
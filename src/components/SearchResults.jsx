import React from 'react'
import { useSelector } from 'react-redux'

function SearchResults() {
  const results = useSelector(state=>state.search.data) 
  const loading = useSelector(state=>state.search.loading) 
  const error = useSelector(state=>state.search.error) 
  const noResults = useSelector(state=>state.search.noResults) 
  return (
    <div>
      <div>
        {loading ? <div>Loading...</div> : null}
        {noResults ? <div>{noResults}</div> : null}
        {results ? results.map(result=>
        <div>
          <p>{result.artistName}</p>
          <img src={result.artworkUrl100} />
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
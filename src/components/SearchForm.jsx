import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleSearch } from '../store/searchSlice'
import SearchResults from './SearchResults'
useState

function SearchForm() {
  const [searchTitle,setSearchTitle] = useState()
  const dispatch = useDispatch()
  return (
    <div>
      Search form
      <input type="text" onChange={(e)=>setSearchTitle(old=>old=e.target.value)}/>
      <button onClick={()=>dispatch(handleSearch(searchTitle))}>Search</button>
      <div>
        <SearchResults />
      </div>
    </div>
  )
}

export default SearchForm
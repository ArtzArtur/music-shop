import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleSearch } from '../store/searchSlice'
import SearchResults from './SearchResults'
useState

function SearchForm() {
  const [searchTitle,setSearchTitle] = useState()
  const dispatch = useDispatch()
  return (
    <>
    <form className='form' onSubmit={(e)=>{e.preventDefault()
      dispatch(handleSearch(searchTitle))
    }}>
      <input 
      placeholder='Album title or artist'
      className='form_field' type="text" onChange={(e)=>setSearchTitle(old=>old=e.target.value)}/>
      <button className='btn btn-submit'>Search</button>
    </form>
      <div>
        <SearchResults />
      </div>
      </>
  )
}

export default SearchForm
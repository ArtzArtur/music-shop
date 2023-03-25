import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const handleSearch = createAsyncThunk('searching', async (title) => {
  const resp = await fetch(`https://itunes.apple.com/search?term=${title}&entity=album&media=music`)
  return await resp.json()
})

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
    loading: null,
    error: null,
    noResults: null
  },
  extraReducers: (builder) => {
    builder.addCase(handleSearch.pending, (state, action) => {
      state.loading = true
      state.data = []
    })
    builder.addCase(handleSearch.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload.results.length > 0) {
        state.error = null
        state.noResults = null
        state.data = action.payload.results
      }
      else {
        state.data = []
        state.noResults = 'No results found'
      }
    })
    builder.addCase(handleSearch.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error
    })
  }
})

export default searchSlice.reducer






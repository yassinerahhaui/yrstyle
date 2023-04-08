import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
}
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
  }
)
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true
      state.hasError = false  
    },
    [fetchProducts.fulfilled]: (state,{payload}) => {
      state.isLoading = false
      state.hasError = false
      state.data = payload
    },
    [fetchProducts.rejected]: (state) => {
      state.isLoading = false
      state.hasError = true
    }
  }
})

export default productsSlice.reducer

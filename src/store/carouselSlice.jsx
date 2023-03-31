import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  description: '',
  image: '',
}

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    carouselStart: (state) => {
      return state
    }, 
    carouselSuccess: (state,action) => {
      state = action.payload
    },
    carouselError: (state) => {
      return state
    }
  }
})
export const {carouselStart,carouselSuccess,carouselError} = carouselSlice.actions
export default carouselSlice.reducer
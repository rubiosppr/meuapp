import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  name: null
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialValues,
  reducers: {
    reducerSetSearch: (state, action) => {
      state.name = action.payload.name
    }
  }

})

export const {reducerSetSearch} = searchSlice.actions

export default searchSlice.reducer
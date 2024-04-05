import { createSlice } from '@reduxjs/toolkit'


const initialStateValue = [];

export const userListSlice = createSlice({
  name : 'userList',
  initialState : { value : initialStateValue},
  reducers : {
    list : (state, action) => {
      state.value = action.payload
    }
  },
});


export const { list } = userListSlice.actions;

export default userListSlice.reducer;
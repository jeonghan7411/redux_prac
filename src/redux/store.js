import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import themeReducer from './theme'
import userList from './userList'

export default configureStore({
  reducer: {
    user : userReducer,
    theme : themeReducer,
    userList : userList,
  },
})
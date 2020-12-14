//import {createStore, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebookReducer';

// с тулзами 
const defaultMiddlewae = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware: [...defaultMiddlewae, ],
})

export default store;
import { configureStore } from '@reduxjs/toolkit';
import categoryFilterReducer from './redux/categoryFilterSlice';

const store = configureStore({
  reducer: {
    categoryFilter: categoryFilterReducer,
  },
});

export default store;

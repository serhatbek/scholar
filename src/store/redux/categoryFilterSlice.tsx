import { createSlice } from '@reduxjs/toolkit';
import { dataCourses } from '../../assets/data/dataCourses';

const initialState = {
  cards: dataCourses.cards,
};

const categoryFilterSlice = createSlice({
  name: 'categoryFilter',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCategoryFilter } = categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;

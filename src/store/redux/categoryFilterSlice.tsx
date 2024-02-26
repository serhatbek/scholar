import { createSlice } from '@reduxjs/toolkit';
import { dataCourses } from '../../assets/data/dataCourses';

const initialState = {
  courses: dataCourses.cards,
};

const categoryFilterSlice = createSlice({
  name: 'categoryFilter',
  initialState,
  reducers: {
    setCategoryFilter: (state, { payload }) => {
      if (payload === 'Show All') {
        state.courses = dataCourses.cards;
      } else {
        state.courses = dataCourses.cards.filter(
          (item) => item.category === payload
        );
      }
    },
  },
});

export const { setCategoryFilter } = categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;

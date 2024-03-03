import { createSlice } from '@reduxjs/toolkit';
import { dataCourses } from '../../assets/data/dataCourses';

const initialState = {
  courses: dataCourses.cards,
  filterButtons: dataCourses.filterBtnList,
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
    setFilterBtnState: (state, { payload }) => {
      const newState = state.filterButtons.map((item) => {
        if (item.category === payload) {
          return { ...item, btnState: true };
        } else {
          return { ...item, btnState: false };
        }
      });

      state.filterButtons = newState;
    },
  },
});

export const { setCategoryFilter, setFilterBtnState } =
  categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    data: [],
    filteredData: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMenuStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMenuSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    fetchMenuFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    filterMenuItems(state, action) {
      const searchQuery = action.payload;

      if (searchQuery === "All") {
        state.filteredData = state.data;
      } else {
        state.filteredData = {
          ...state.data,
          categories: state.data.categories.filter(
            (a) => a.name[0].value == searchQuery
          ),
        };
      }
    },
  },
});

export const {
  fetchMenuStart,
  fetchMenuSuccess,
  fetchMenuFailure,
  filterMenuItems,
} = menuSlice.actions;

export default menuSlice.reducer;

import { getData } from "../../action";

export const fetchMenu = () => async (dispatch) => {
  dispatch(fetchMenuStart());
  try {
    const data = await getData();
    dispatch(fetchMenuSuccess(data));
  } catch (error) {
    dispatch(fetchMenuFailure(error.toString()));
  }
};

export const filterMenu = (searchQuery) => (dispatch) => {
  dispatch(filterMenuItems(searchQuery));
};

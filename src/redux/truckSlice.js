import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTruckById } from "./truckThunks";

const initialFilters = { location: "", form: "", engine: "", transmission: "" };

const initialState = {
  items: [],
  selectedTruck: null,
  loading: false,
  error: null,
  filters: initialFilters,
};

const truckSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialFilters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchTrucks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchTruckById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTruckById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTruck = action.payload;
      })
      .addCase(fetchTruckById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setFilters, clearFilters } = truckSlice.actions;
export default truckSlice.reducer;

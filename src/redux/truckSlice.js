import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTruckById } from "./truckThunks";

const initialFilters = {
  location: "",
  form: "",
  engine: "",
  transmission: "",
  features: [],
};

const initialState = {
  items: [],
  selectedTruck: null,
  loading: false,
  error: null,
  filters: initialFilters,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
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
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const exists = state.favorites.includes(id);
      state.favorites = exists
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id];
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
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

export const { setFilters, clearFilters, toggleFavorite } = truckSlice.actions;
export default truckSlice.reducer;

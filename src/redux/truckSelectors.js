export const selectItems = (state) => state.trucks.items;
export const selectLoading = (state) => state.trucks.loading;
export const selectFilters = (state) => state.trucks.filters;
export const selectSelectedTruck = (state) => state.trucks.selectedTruck;

export const selectFilteredTrucks = (state) => {
  const { items, filters } = state.trucks;
  return items.filter(
    (truck) =>
      (!filters.location ||
        truck.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())) &&
      (!filters.form || truck.form.toLowerCase() === filters.form.toLowerCase()) &&
      (!filters.engine ||
        truck.engine.toLowerCase() === filters.engine.toLowerCase()) &&
      (!filters.transmission ||
        truck.transmission.toLowerCase() ===
          filters.transmission.toLowerCase()),
  );
};

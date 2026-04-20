import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export const fetchTrucks = createAsyncThunk(
  "/trucks/fetchAll",
  async (filters = {}) => {
    const params = {};
    if (filters.location) params.location = filters.location;
    if (filters.form) params.form = filters.form;
    if (filters.engine) params.engine = filters.engine;
    if (filters.transmission) params.transmission = filters.transmission;

    const res = await axios.get(BASE_URL, { params });
    return res.data;
  },
);

export const fetchTruckById = createAsyncThunk(
  "/trucks/fetchById",
  async (id) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
  },
);

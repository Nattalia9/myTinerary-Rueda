import { getAllCities, getCity } from "../../services/citiesQueries.js"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const getCities = createAsyncThunk ('get_cities', async () => {
  try {
    const response = await getAllCities()
    console.log("response", response)
    return response
  }catch (error) {
    console.log(error)
  }
})

export const getCityById = createAsyncThunk ('get_city', async (id) => {
  try {
    const city = await getCity(id)
    return city
  }catch (error) {
    console.log(error)
  }
})

export const resetCity = createAction ('reset_city', () => {
  return {
      payload : null
    }
  
})

export const filterCities = createAsyncThunk("filter_cities", async (searchQuery) => {
  try {
    const response = await getAllCities(`?city=${searchQuery}`);
    return response;
  } catch (error) {
    console.log(error);
  }
});

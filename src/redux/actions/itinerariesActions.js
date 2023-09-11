import { getItinerariesByCity } from "../../services/itinerariesQueries.js"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getItineraries = createAsyncThunk ('get_itineraries', async (cityId) => {
  try {
    const itineraries = await getItinerariesByCity(cityId)
    return itineraries
  }catch (error) {
    console.log(error)
  }
})
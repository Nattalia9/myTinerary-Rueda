import axios from "axios";

const itineraries = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getItinerariesByCity = async ( cityId ) => {
  try {
      const {data} = await itineraries(`/itineraries/city/${cityId}`);
      return data.itineraries
  } catch (error) {
    console.log(error);
      return []
  }
}

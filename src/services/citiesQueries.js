import axios from "axios";

const cities = axios.create({
  baseURL: 'http://localhost:3000/api/cities',
});

export const getAllCities = async ( queryParams="" ) => {
  try {
      const {data} = await cities( queryParams )
      return data.cities
  } catch (error) {
      return []
  }
}

export const getCity = async (id) => {
  try {
      const {data} = await cities("/"+id)
      return data.cityFound
  } catch (error) {
      return {}
  }
}
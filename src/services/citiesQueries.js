import axios from "axios";

const cities = axios.create({
  baseURL: 'http://localhost:3000/api/cities',
  // headers: {'X-Custom-Header': 'foobar'}
});

export const getAllCities = async ( queryParams="" ) => {
  try {
      const {data} = await cities( queryParams )
      // const {data} = await cities("/api/cities")
      return data.cities
  } catch (error) {
      return []
  }
}

export const getCity = async (id) => {
  try {
      const {data} = await cities("/"+id)
      // const {data} = await cities("/api/cities/"+id)
      return data.cityFound
  } catch (error) {
      return {}
  }
}
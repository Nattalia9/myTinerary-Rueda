import { getAllCities, getCity } from "../../services/citiesQueries.js"
// import axios from 'axios'
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const getCities = createAsyncThunk ('get_cities', async () => {
  try {
    // const response = await axios.get('http://localhost:3000/api/cities')
    const response = await getAllCities()
    console.log("response", response)
    // console.log("response", response.data.cities)
    return response
    // return response.data.cities
    // return {
    //   cities: response
    // }
  }catch (error) {
    console.log(error)
  }
})

export const getCityById = createAsyncThunk ('get_city', async (id) => {
  try {

    const city = await getCity(id)
    // console.log("response", city)
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

  // export const filtrarEventos = createAction( 'filtrar_eventos', ( category, search ) => {
  //   return {
  //       payload : {
  //           selectedCategory : category,
  //           inputValue : search
  //       }
  //   }
  // })

// const filterCities = createAsyncThunk ('filter_cities', async () => {
//   try {
//     const response = await getAllCities()
//     // const response = await getAllCities()
//     // console.log("response", response.data)
//     return {
//       cities: response
//       // cities: response.data
//     }
//   }catch (error) {
//     console.log(error)
//   }
// })

// export default getCities








// const citiesActions = {getCities}

// export default citiesActions



// import { createAsyncThunk } from "@reduxjs/toolkit";

// const get_cities = createAsyncThunk('get_cities', async(cities) => {

//   return {
//       payload: cities  
//   }
// })

// const citiesActions = {get_cities}

// export default citiesActions
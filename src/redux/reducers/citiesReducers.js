import { createReducer} from "@reduxjs/toolkit";
import {getCities, getCityById, filterCities, resetCity} from "../actions/citiesActions.js";


const initialState = {
  allCities : [],
  filteredCities : [],
  city: {}
  // itineraries : [],
}

const citiesReducer= createReducer( initialState,
  ( builder ) => builder
    .addCase(getCities.fulfilled, (state, action)=>{
      return {
        ...state,
        allCities: action.payload,
        filteredCities: action.payload
        // allCities: action.payload.cities,
        // filteredCities: action.payload.cities,
      }
    })
    .addCase(filterCities.fulfilled, (state, action)=>{
      return {
        ...state,
        allCities: action.payload,
        filteredCities: action.payload,
      };
    })
    .addCase(getCityById.fulfilled, (state, action)=>{
      return {
        ...state,
        city: action.payload,
      };
    })
    .addCase(resetCity, (state, action)=>{
      return {
        ...state,
        city: action.payload,
      };
    })
    )
    
    export default citiesReducer






    // .addCase(citiesActions.getCities, (state, action)=>{
    //   const newState = {...state}
    //   newState.allCities = action.payload
    //   newState.filteredCities = action.payload
      
      // return newState



    
    // allCities: action.payload.cities,
    //  filteredCities : action.payload


// const citiesReducer= createReducer( initialState, ( builder )=>{
//   return builder
//   .addCase(citiesActions.get_cities, (state, action)=>{
//     const newState = {...state, cities: action.payload.cities}
//     return newState
//   })

// })

// export default citiesReducer


// const citiesReducer= createReducer( initialState, ( builder )=>{
//   return builder
//   .addCase(citiesActions.getCities, (state, action)=>{
//     const newState = {...state}
//     newState.allCities = action.payload
//     newState.filteredCities = action.payload
    
//     return newState
//   })

// })

// export default citiesReducer
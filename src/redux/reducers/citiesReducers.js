import { createReducer} from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";

const initialState = {
  allCities : [],
  filteredCities : [],
  itineraries : []

  // cities: [
  //   {
  //     name: "",
  //     lastName: "",
  //     age: 0
  //   }
  // ]

}

const citiesReducer= createReducer( initialState, ( builder )=>{
  return builder
  .addCase(citiesActions.getCities, (state, action)=>{
    const newState = {...state}
    newState.allCities = action.payload
    newState.filteredCities = action.payload
    
    return newState
  })

})

export default citiesReducer

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
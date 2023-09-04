import { createReducer} from "@reduxjs/toolkit";
import {getCities, getCityById, filterCities, resetCity} from "../actions/citiesActions.js";

const initialState = {
  allCities : [],
  filteredCities : [],
  city: {}
}

const citiesReducer= createReducer( initialState,
  ( builder ) => builder
    .addCase(getCities.fulfilled, (state, action)=>{
      return {
        ...state,
        allCities: action.payload,
        filteredCities: action.payload
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

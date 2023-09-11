import { createReducer} from "@reduxjs/toolkit";
import {getItineraries} from "../actions/itinerariesActions.js";

const initialState = {
  itineraries : []
}

const itinerariesReducer= createReducer( initialState,
  ( builder ) => builder
    .addCase(getItineraries.fulfilled, (state, action)=>{
      return {
        ...state,
        itineraries: action.payload,
      }
    })
    )
    
    export default itinerariesReducer
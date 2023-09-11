import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import itinerariesReducer from "./reducers/itinerariesReducers";
import { userReducer } from "./reducers/userReducers";

const store = configureStore({
  reducer: {
    citiesReducer: citiesReducer,
    itinerariesReducer: itinerariesReducer,
    userReducer: userReducer
  }
})

export default store

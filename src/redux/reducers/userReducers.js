import { createReducer } from "@reduxjs/toolkit";
import { loadUser, signUp, signIn, authenticate , logout } from '../actions/userActions.js'

const initialState = {
  user: null,
  token : null
}

export const userReducer = createReducer( initialState, ( builder ) => 
  builder
    .addCase( loadUser, ( state, action ) => {
      return {
        ...state,
        user : action.payload
      }
    } )
    .addCase( signUp.fulfilled, ( state, action ) => {
      return {
        ...state,
        user : action.payload.user,
        token : action.payload.token
      }
    } )
    .addCase( signIn.fulfilled, (state, action) => {
      return {
        ...state,
        user : action.payload.user,
        token : action.payload.token
      }
      } )
      .addCase( authenticate.fulfilled, (state, action) => {
        return {
        ...state,
        user : action.payload.user,
        token : action.payload.token
        }
      })
    // .addCase( signInWithToken.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     user : action.payload.user,
    //     token : action.payload.token
    //   }
    // } )
    .addCase( logout, (state, action) => {
      return  {
        ...state,
        user : null,
        token : null
      }
    } )
)
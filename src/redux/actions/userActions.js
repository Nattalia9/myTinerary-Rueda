import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const loadUser = createAction( 'load_user', (user) => {
  return {
    payload : user
    }
} )

export const signUp = createAsyncThunk( "register_user", async ( body ) => {
  try {
    const response = await axios.post( 'http://localhost:3000/api/user/register', body )
    localStorage.setItem( 'token', response.data.token )
    return response.data
  } catch (error) {
    console.log( error )
  }
} )

export const signIn = createAsyncThunk( "logear", async ( body ) => {
  try {
    const response = await axios.post( 'http://localhost:3000/api/user/login', body )
    localStorage.setItem( 'token', response.data.token )
    return response.data
  } catch (error) {
    console.log( error )
  }
} )

export const signInWithToken = createAsyncThunk( "logear_token", async ( ) => {
  try {
    const token = localStorage.getItem( 'token' )
    const response = await axios.post( 'http://localhost:3000/api/user/login',{}, {
      headers: {
        Authorization : "Bearer " + token
      }
    })
    return {
      user : response.data.user,
      token : token
    }
  } catch (error) {
    console.log( error )
  }
} )


export const logout = createAction( "reset", () => {
  localStorage.removeItem('token')
  return {
    payload : null
  }
} )
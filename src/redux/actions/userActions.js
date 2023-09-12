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

// export const signInWithToken = createAsyncThunk( "logear_token", async ( ) => {
//   try {
//     const token = localStorage.getItem( 'token' )
//     const response = await axios.post( 'http://localhost:3000/api/user/authenticated',{}, {
//       headers: {
//         Authorization : "Bearer " + token
//       }
//     })
//     console.log("neee",response)
//     return {
//       user : response.data.user,
//       token : token
//     }
//   } catch (error) {
//     console.log( error )
//   }
// } )

export const authenticate = createAsyncThunk("authenticate", async ()=>{

  try {
    let token = localStorage.getItem("token");
    let user = await axios.post("http://localhost:3000/api/user/authenticated", null, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then((response) => {
      console.log("authenticated successfully");
      localStorage.setItem("token", response.data.token)
      return response.data.user
    })

    return {
      user: user
    }
  } catch (error) {
    console.log(error.message);
  }
})


export const logout = createAction( "reset", () => {
  localStorage.removeItem('token')
  return {
    payload : null
  }
} )
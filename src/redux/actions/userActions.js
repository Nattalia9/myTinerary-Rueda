import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const loadUser = createAction( 'load_user', (user) => {
  return {
    payload : user
    }
} )

export const signUp = createAsyncThunk( "register_user", async ( body ) => {
  try {
    const response = await axios.post( 'http://localhost:3000/api/user/register', body )
    response.data.token && localStorage.setItem( 'token', response.data.token );
    Toastify({
      text: "Successfully registered",
      duration: 3000,
      newWindow: false,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true, 
      avatar:"https://cdn-icons-png.flaticon.com/128/8832/8832108.png",
      style: {
        background: "linear-gradient(160deg, #f0f1f4 0%, #e4e6eb 100%)",
        borderRadius: "0.9rem",
        color: "#000000bb",
      },
      // onClick: function(){}
    }).showToast();
    return response.data
  } catch (error) {
    // console.log( error )
    let errorMessages = error.response.data.message
    console.log("err", errorMessages)

    Toastify({
      text: errorMessages,
      duration: 3000,
      newWindow: false,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true, 
      avatar:"https://cdn-icons-png.flaticon.com/128/5910/5910314.png",
      style: {
        background: "linear-gradient(160deg, #f0f1f4 0%, #e4e6eb 100%)",
        borderRadius: "0.9rem",
        color: "#000000bb",
      },
      // onClick: function(){}
    }).showToast();

  }
} )

export const signIn = createAsyncThunk( "logear", async ( body ) => {
  try {
    const response = await axios.post( 'http://localhost:3000/api/user/login', body )
    localStorage.setItem( 'token', response.data.token );
    Toastify({
      text: "Successfully logged in",
      duration: 3000,
      newWindow: false,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true, 
      avatar:"https://cdn-icons-png.flaticon.com/128/8832/8832108.png",
      style: {
        background: "linear-gradient(160deg, #f0f1f4 0%, #e4e6eb 100%)",
        borderRadius: "0.9rem",
        color: "#000000bb",
      },
      // onClick: function(){}
    }).showToast();
    return response.data
  } catch (error) {
    // console.log( error )
    let errorMessages = error.response.data.message
    console.log("err", errorMessages)

    Toastify({
      text: errorMessages,
      duration: 3000,
      newWindow: false,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true, 
      avatar:"https://cdn-icons-png.flaticon.com/128/5910/5910314.png",
      style: {
        background: "linear-gradient(160deg, #f0f1f4 0%, #e4e6eb 100%)",
        borderRadius: "0.9rem",
        color: "#000000bb",
      },
      // onClick: function(){}
    }).showToast();
    
  }
} )

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
      return response.data?.user
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
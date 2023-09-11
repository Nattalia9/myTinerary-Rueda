import React, { useEffect } from 'react'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './pages/Cities'
import CityDetail from './pages/CityDetail'
import SignUp from './pages/signUp'
import SignIn from './pages/SignIn'
import { useDispatch } from "react-redux";
import { signInWithToken } from "./redux/actions/userActions";

const router = createBrowserRouter([
  {path:'/',element: <Layout />,
    children:[
      {path:'/',element: <Home />},
      {path:'/cities',element: <Cities />},
      {path:'/cities/:id',element: <CityDetail />},
      {path:'/user/register',element: <SignUp />},
      {path:'/user/login',element: <SignIn />}
    ]
  }
])

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(signInWithToken());
    }
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

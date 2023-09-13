import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <GoogleOAuthProvider clientId="268276994365-ig4nn1l4ibhe0j2168nnhpp38va9gfe1.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
)

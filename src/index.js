import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc3NGRhNjUwOGMwMjVlOTBjNzY0NTUwYmYzM2JjOCIsInN1YiI6IjY1MTgyMGM0ZWE4NGM3MDBhZWU5OGY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WQHVdE2waTdnOl18f1-zNeMuFihwZ0b9iJm_Bt6o6L0';

// Debugging: Check if the access token is loaded
console.log('Access Token:', accessToken);

if (!accessToken) {
  console.error('REACT_APP_ACCESS_TOKEN is not defined in your .env file');
}

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

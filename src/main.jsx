import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'

import { RouterApp } from './Router/RouterApp';
import { store } from './Store/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store} >
      {/* <RouterProvider router={router} />  */}
      <BrowserRouter>
        <RouterApp/>
      </BrowserRouter>
     </Provider>       
  </React.StrictMode>
)

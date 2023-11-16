// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store/store.ts'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './views/ErrorPage/ErrorPage.tsx'
import Home from './views/Home/Home.tsx'
import Detail from './views/Detail/Detail.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "detail/:id",
        element: <Detail/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    
    <RouterProvider router={router} />

  </Provider>
  ,
)

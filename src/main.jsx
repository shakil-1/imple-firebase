import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from "/src/layout/Main.jsx";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
const router = createBrowserRouter([
{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

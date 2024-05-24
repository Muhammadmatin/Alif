import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './Layout/Layout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Useparams from './pages/Useparams/Useparams'

const App = () => {
  const routes = createBrowserRouter([
    { path:"/",
    element:<Layout/>,
    children:[{
      index:true,
      element:<Home/>,
      },
      {
        path:"/Useparams",
        element:<Useparams/>
      },
      {
        path:"/Register",
        element:<Register/>
      },
      {
        path:"/Login",
        element:<Login/>
      }
     
      
      
      
    ]
    },
   
    
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Start from './pages/Start.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Start />
      },
      {
        path : "login",
        element : <Login />
      },
      {
        path : "Signup",
        element : <Signup />
      },
      {
        path : "Home",
        element : <Home />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

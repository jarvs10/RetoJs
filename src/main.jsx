import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Batman1 from './pages/Batman1'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/batman1',
    element: <Batman1 />
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

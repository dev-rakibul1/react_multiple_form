import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import router from './routes/Routes'

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  )
}

export default App
import { useState } from 'react'

import{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Download from './pages/Download'
import PageNotFound from './pages/PageNotFound'


export default function App() {
    const router = createBrowserRouter(createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route 
          index 
          element={<Home />} 
        />
        <Route 
          path='download' 
          element={<Download />} 
        />
        <Route
        path='*'
        element={<PageNotFound />}
        />

      </Route>
    ))
  return (
   <RouterProvider router={router}/>
  )
}

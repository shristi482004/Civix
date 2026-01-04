import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import BrowseIssues from './pages/BrowseIssues.jsx'
import ReportIssues from './pages/ReportIssues.jsx'
import HomePage from './pages/HomePage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element= { <App /> }>
    <Route path='' element={<HomePage />}/>
    <Route path='browse' element={<BrowseIssues />}/>
    <Route path='report' element={<ReportIssues />}/>
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

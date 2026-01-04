import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
      <Navbar/>
    <Toaster
  position="top-center"
  toastOptions={{
    style: {
      background: "#ECFDFB",
      color: "#065F46",
      border: "1px solid #99F6E4",
    },
    success: {
      iconTheme: {
        primary: "#14B8A6",
        secondary: "#ECFDFB",
      },
    },
    error: {
      iconTheme: {
        primary: "#EF4444",
        secondary: "#ECFDFB",
      },
    },
  }}
/>

      <Outlet />
    </>
  )
}

export default App

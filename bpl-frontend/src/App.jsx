import { useState } from 'react'
import Dashboard from './components/admin/dashboard'



//import './App.css'

function App() {


  return (
    <>
        <div className="loader-bg">
          <div className="loader-track">
            <div className="loader-fill"></div>
          </div>
        </div>


    <Dashboard />

    </>
  )
}

export default App

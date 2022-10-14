import useAxios from 'hooks/useAxios'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'

function App() {
  useAxios()

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App

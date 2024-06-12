import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Blogs from './Blog';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Blogs />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

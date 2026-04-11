import React from 'react'
import Navigation from './components/Navigation'
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'


const App = () => {
  return (
    <div>
      <Navigation/>
      {/* all the routes com here */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<h1>project</h1>}/>
        <Route path='/project/:id' element={<h1>project details</h1>}/>
        <Route path='/contact' element={<h1>contact</h1>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
       
      </Routes>


    </div>
  )
}

export default App

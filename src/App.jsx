import React from 'react'
import Navigation from './components/Navigation'
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Contact from './pages/Contact'
import { Toaster } from '@/components/ui/sonner';
import Projects from './pages/Project'

import ProjectDetail from './pages/ProjectDetails'



const App = () => {
  return (
    <div>
      <Navigation/>
      <Toaster/>
      {/* all the routes com here */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project/:id' element={<ProjectDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
       
      </Routes>


    </div>
  )
}

export default App

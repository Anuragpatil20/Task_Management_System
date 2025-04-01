import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Users from './Component/Users'
import CreateUser from './Component/CreateUser'
import UpdateUser from './Component/UpdateUser'
import Dashpage from './pages/Dashpage'
import Createpage from './pages/Createpage'
import Updatepage from './pages/Updatepage'

function App() {
  return (
    <div>
    <BrowserRouter>

    <Routes>

    <Route path='' element = {<Dashboard/>}></Route>
    <Route path='/user' element = {<Dashpage/>}></Route>
    <Route path='/create' element = {<Createpage/>}></Route>
    <Route path='/update/:id' element = {<Updatepage/>}></Route>
    
    
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
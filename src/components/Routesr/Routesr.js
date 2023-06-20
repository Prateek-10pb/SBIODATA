import React from 'react'
import {Routes, Route} from "react-router-dom"
import Hindu from '../Hindu/hindu'
import Muslim from '../Muslim/muslim'
import Christian from '../Christian/christian'
import Jain from '../Jain/jain'
import CreateMTemp from '../Muslim/CreateMTemp/CreateMTemp1'
import CreateCTemp from '../Christian/CreateCTemp/CreateCTemp'
import CreateHTemp from '../Hindu/CreateHTemp/CreateHTemp'
import CreateJTemp from '../Jain/CreateJTemp/CreateJTemp'

function Routesr() {
  return (
    <>
    <Routes>
        <Route path='/CreateMTemp' element={<CreateMTemp/>}></Route>
        <Route path='/CreateCTemp' element={<CreateCTemp/>}></Route>
        <Route path='/CreateHTemp' element={<CreateHTemp/>}></Route>
        <Route path='/CreateJTemp' element={<CreateJTemp/>}></Route>

    <Route path='/hinduReg' element={<Hindu/>} ></Route>
      <Route path='/muslim' element={<Muslim/>} ></Route>
      <Route path='/jain' element={<Jain/>} ></Route>
      <Route path='/christain' element={<Christian/>} ></Route>
    </Routes>
    </>
  )
}

export default Routesr
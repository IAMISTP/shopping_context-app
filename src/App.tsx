import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'


const App:React.FC = () =>  {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default App
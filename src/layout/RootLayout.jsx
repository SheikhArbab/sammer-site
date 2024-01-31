import React from 'react'
import { Footer, Header } from '../components/index'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout

import React from 'react'
import BottomNavbar from './BottomNavbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
       <BottomNavbar />
       <Outlet />
    </>
  )
}

export default Layout

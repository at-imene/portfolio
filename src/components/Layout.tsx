import React from 'react'
import BottomNavbar from './BottomNavbar'
import { Outlet } from 'react-router'
import { Toaster } from './Toaster'

function Layout() {
  return (
    <>
       <BottomNavbar />
       <Outlet />
       <Toaster />
    </>
  )
}

export default Layout

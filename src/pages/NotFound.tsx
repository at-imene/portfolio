import React from 'react'

function NotFound() {
  return (
    <div className='h-screen w-screen bg-baground flex items-center justify-center space-x-3'>
      <h3 className='text-2xl font-medium'>404</h3>
      <div className='h-13 w-px border '></div>
      <p className='text-sm font-light'>This page could not be found</p>
       
    </div>
  )
}

export default NotFound
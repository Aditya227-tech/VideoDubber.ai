import Navbar from '@/components/Navbar'
import UserList from '@/components/UserList'
import React from 'react'

const Adduser = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <div className='p-20'>
      <UserList/>
    </div>
    </div>
  )
}

export default Adduser

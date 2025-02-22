import React from 'react'
import Navbar from '@/components/NavBar'
import AdminPage from './admin/page'
import AdminOrders from './adminOrder/page'

const page = () => {
  return (
    <div>
      <Navbar/>
      <AdminPage/>
      <AdminOrders/>
    </div>
  )
}

export default page

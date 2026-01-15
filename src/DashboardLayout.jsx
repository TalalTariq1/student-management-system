import React from 'react'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='app'>
       <Sidebar/>
       <div className="main">
        <Topbar/>
        <div className="content">
            <Outlet/>
        </div>
        </div> 
      
    </div>
  )
}

export default DashboardLayout

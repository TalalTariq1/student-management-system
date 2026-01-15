import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2>Admin</h2>
      <ul>
        <li><Link to={"/dashboard"} className="sidebar-link" >Dashboard</Link></li>
        <li><Link to={"/students"} className="sidebar-link" >Students</Link></li>
        <li><Link to={"/find"} className="sidebar-link" >Find Student</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar

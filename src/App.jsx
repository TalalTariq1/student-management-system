import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Students from './Pages/Students'
import DashboardLayout from './DashboardLayout'
import AddStudent from './Pages/AddStudent'
import FindStudent from './Pages/FindStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<DashboardLayout/>}>
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/find" element={<FindStudent />} />
        <Route path="/addStudent" element={<AddStudent />}/>
        </Route>
      </Routes>
    
      
    </>
  )
}

export default App

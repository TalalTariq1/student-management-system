import React, { useEffect,useState,useContext } from 'react'
import SummaryCard from '../Components/SummaryCard'
import { StudentContext } from '../Context/StudentContext.jsX';

const Dashboard = () => {

  const {Students,setStudents}=useContext(StudentContext);
  const [counter, setcounter] = useState(0);
  const total_students=Students.length;
  let popular_dept="";

  function find_popular(){
    let dept_count={}

    Students.forEach(student => {
      if(dept_count[student.department]){
        dept_count[student.department]++;

      }
      else{
        dept_count[student.department]=1;

      }
      
    });
    let max=0;

    for(let x in dept_count){
      if(dept_count[x]>max){
        max=dept_count[x];
        popular_dept=x;

      }
      
    }
  }

  find_popular();
  

  return (
    <div>
    <div className="dashboard-heading">
        <h2>Welcome Back, Admin</h2>

    </div>
    <div className='main-dashboard' >
        <SummaryCard heading={"Total Students"} value={total_students}/>
        <SummaryCard heading={"Total Departments"} value={5}/>
        <SummaryCard  heading={"Most Popular "} value={popular_dept}/>
      
    </div>
    </div>
  )
}

export default Dashboard

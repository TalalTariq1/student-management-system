import React from 'react';
import  { useContext } from 'react'
import { useState } from 'react'
import { StudentContext } from '../Context/StudentContext.jsX';

const Settings = () => {
  const [Search, setSearch] = useState("");
   const {Students,setStudents}=useContext(StudentContext);
   const [filtered, setfiltered] = useState([]);

  function handle_submit(){
    const result=Students.filter(student=>{
      const matches=student.name.toLowerCase().includes(Search.toLowerCase())||
      student.roll.toLowerCase().includes(Search.toLowerCase());
      return matches;
    })

    setfiltered(result);

  }

  return (
    <div className='main-cont'>
      <div className="heading">
        <h1 className="fw-bold  mb-4">Find Student</h1>
      </div>

      <div className='searching' >
        <input onChange={(e)=>setSearch(e.target.value)}  type="text" placeholder='🔍 Type a name or roll number ' />

        <button
          onClick={handle_submit}
          className="btn btn-sm btn-primary"
          style={{
            borderRadius: "8px",
            padding: "6px 15px",
            fontSize: "0.9rem",
          }}
        >
          Search
        </button>
      </div>


      <div className="table-content">
        <table className="table  table-hover">
          <thead>
            <tr>
              <th scope="col">Roll-Number</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>



          {filtered.map((element)=>(
            
            <tr>
              <td scope="row">{element.roll}</td>
              <td>{element.name}</td>
              <td>{element.department}</td>
            </tr>
          ))}
           </tbody>
          </table>
          
      </div>








    </div>
  )
}

export default Settings

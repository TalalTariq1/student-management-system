import React, { useContext } from 'react'
import StudentsData from '../Data/StudentData'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from '../Context/StudentContext.jsX';

const Students = () => {

  const {Students,setStudents}=useContext(StudentContext);
  const navigate=useNavigate();


  function delete_student(value){

    const filtered_result=Students.filter((student)=>student.roll!=value);
    setStudents(filtered_result);

  }

  return (
    <div>
      <div className="student-header">
        <h2>Students</h2>
        <button   className="btn btn-primary" onClick={()=> navigate("/addStudent")}>Add Student</button>
      </div>


      <div className="table-content">
        <table className="table  table-hover">
          <thead>
            <tr>
              <th scope="col">Roll-Number</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Action</th>
            </tr>
          </thead>


          {Students.map((element)=>(
            <tbody>
            <tr>
              <td scope="row">{element.roll}</td>
              <td>{element.name}</td>
              <td>{element.department}</td>
              <td>
                 <button onClick={()=>delete_student(element.roll)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
           
          </tbody>
          ))}
          </table>
          
      </div>




    </div>
  )
}

export default Students

import React, { useState } from 'react'
import { useContext } from 'react';
import { StudentContext } from '../Context/StudentContext.jsX';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [roll, setroll] = useState("");
    const [name, setname] = useState("");
    const [department, setdepartment] = useState("");
    const {Students,setStudents}=useContext(StudentContext);

    const navigate=useNavigate();


    function handle_submit(){

        const new_Student={roll,name,department};
        setStudents([...Students,new_Student]);

        navigate("/students");

    }
    return (
        <div className='input-form'>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Name</label>
                <input autoComplete='off' type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter your name" onChange={(e) => setname(e.target.value)}  />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Roll-Number</label>
                <input autoComplete='off' type="text" class="form-control" id="formGroupExampleInput2" placeholder="Please enter your roll-num" onChange={(e) => setroll(e.target.value)} />

            </div>

            <select class="form-select" aria-label="Default select example" onChange={(e) => setdepartment(e.target.value)} value={department}  >
                <option selected>Select Your Department</option>
                <option value="CS" >CS</option>
                <option value="AI">AI</option>
                <option value="CE">CE</option>
                <option value="Data Science">Data Science</option>
                <option value="Cyber Security">Cyber Security</option>
            </select>



            <button onClick={handle_submit}
                className="btn btn-success mt-3 "   disabled={name === "" || roll === "" || department === ""}>
                Add Student
            </button>
        </div>
    )
}

export default AddStudent

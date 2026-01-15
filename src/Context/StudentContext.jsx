import { createContext, useEffect } from "react";
import { useContext,useState } from "react";
import StudentsData from "../Data/StudentData";
import Students from "../Pages/Students";

export const StudentContext=createContext();


export function StudentProvider({children}){

 const [Students, setStudents] = useState(()=>{
  const saved=localStorage.getItem("students");
  if(saved){
    return JSON.parse(saved);
  }
  else{
    return StudentsData;
  }
 })

    


    useEffect(() => {
    localStorage.setItem("students",JSON.stringify(Students));
    }, [Students])
    




  return (
    <StudentContext.Provider value={{Students, setStudents}}>
        {children}
    </StudentContext.Provider>
  );

}


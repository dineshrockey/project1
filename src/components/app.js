import { useState } from "react";
import React from "react";
import StudentForm from "./addpage";
import List from "./listpage";

const App = () => {

    const [students, setStudents] = useState([]);
    const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
  
    const handleAddStudent = (newStudent) =>{
      setStudents([...students, newStudent]);
  
    };
  
    const handleEdit = (index) =>{
      setSelectedStudentIndex(index);
    
    };
  
    const handleView = (index)=>{
      // implkementation view
  console.log(students[index]);
    };
    return(
      <div>
        <StudentForm onSubmit={handleAddStudent} />
        <List students={students} onEdit = {handleEdit} onView={handleView} />
      </div>
    );
  };
  
export default App;  
import React, { useState } from 'react';
// import './App.css';
import './Term.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

function Term1() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    stuname: '',
    tamil: '',
    english: '',
    maths: '',
    science: '',
    social: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const handleAdd = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      stuname: '',
      tamil: '',
      english: '',
      maths: '',
      science: '',
      social: '',
    });
  };

  const handleEdit = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].editing = true;
    setStudents(updatedStudents);
  };

  const handleSave = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].editing = false;
    setStudents(updatedStudents);
  };

  return (
    
    <div className="App">
        <h2 className='h2-title'>MID TERM I</h2>
      <div className="input-div">
     <div style={{marginLeft:'-117px'}} >   <span> Stu_Name = </span>  <input 
          type="text"
          name="stuname"
          value={newStudent.stuname}
          onChange={handleChange}
          placeholder="Name"
        />
        </div>
        {/* science */}
        <div style={{marginLeft:'100px'}}>  <span>Science = </span> <input
          type="number"
          name="science"
          value={newStudent.science}
          onChange={handleChange}
          placeholder="0"
        /> </div>

         {/* tamil */}
         <div  style={{marginLeft:'-82px'}}>
       <span>Tamil = </span> <input
          type="number"
          name="tamil"
          value={newStudent.tamil}
          onChange={handleChange}
          placeholder="0"
        />
        </div>
              
{/* social */}
       <div style={{marginLeft:'110px'}}> <span>Social = </span> <input
          type="number"
          name="social"
          value={newStudent.social}
          onChange={handleChange}
          placeholder="0"
        /></div>


        {/* eng */}
               <div style={{marginLeft:'-97px'}}> <span>English = </span>
        <input
          type="number"
          name="english"
          value={newStudent.english}
          onChange={handleChange}
          placeholder="0"
        /> </div>
          {/* tot  */}
      <div style={{marginLeft:'120px'}}>  <span>Total =</span> <input
          type="number"
          name="total"
          value={Number(newStudent.tamil) + Number(newStudent.english) + Number(newStudent.maths) + Number(newStudent.science) + Number(newStudent.social)}
          readOnly
        /> </div>
    
       {/* maths */}
        <div style={{marginLeft:'-90px'}}>  <span>Maths = </span>
        <input
          type="number"
          name="maths"
          value={newStudent.maths}
          onChange={handleChange}
          placeholder="0"
        /></div>
        <button id='enter-btn' className='enter-button1' onClick={handleAdd}>ENTER</button>
     {/* new button */}
     {/* <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>ENTER</span>
      </button> */}
     
      </div>

<h2 className='h2-title'>
    MARK LIST
</h2>

      <table className='tablefordisplay'>
        <thead>
          <tr id='th-list'>
            <th>Sl.no</th>
            <th>Student Name</th>
            <th>Tamil</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Social</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {student.editing ? (
                  <input style={{width:'100px'}}
                    type="text"
                    value={student.stuname}
                    onChange={(e) => {
                      const updatedStudents = [...students];
                      updatedStudents[index].stuname = e.target.value;
                      setStudents(updatedStudents);
                    }}
                  />
                ) : (
                  student.stuname
                )}
              </td>
              <td>
                {student.editing ? (
                  <input style={{width:'100px'}}
                    type="number"
                    value={student.tamil}
                    onChange={(e) => {
                      const updatedStudents = [...students];
                      updatedStudents[index].tamil = e.target.value;
                      setStudents(updatedStudents);
                    }}
                  />
                ) : (
                  student.tamil
                )}
              </td>
              <td>
                {student.editing ? (
                  <input style={{width:'100px'}}
                    type="number"
                    value={student.english}
                    onChange={(e) => {
                      const updatedStudents = [...students];
                      updatedStudents[index].english = e.target.value;
                      setStudents(updatedStudents);
                    }}
                  />
                ) : (
                  student.english
                )}
              </td>
              <td>
                {student.editing ? (
                  <input style={{width:'100px'}}
                    type="number"
                    value={student.maths}
                    onChange={(e) => {
                      const updatedStudents = [...students];
                      updatedStudents[index].maths = e.target.value;
                      setStudents(updatedStudents);
                    }}
                  />
                ) : (
                  student.maths
                )}
              </td>
              <td>
                {student.editing ? (
                  <input style={{width:'100px'}}
                    type="number"
                    value={student.science}
                    onChange={(e) => {
                      const updatedStudents = [...students];
                      updatedStudents[index].science = e.target.value;
                      setStudents(updatedStudents);
                    }}
                  />
                ) : (
                  student.science
                )}
              </td>
              <td>
                {student.editing ? (
                  <input style={{width:'100px'}}
                    type="number"
                    value={student.social}
                    onChange={(e) => {
                      const updatedStudents = [...students];
                      updatedStudents[index].social = e.target.value;
                      setStudents(updatedStudents);
                    }}
                  />
                ) : (
                  student.social
                )}
              </td>
              <td>{Number(student.tamil) + Number(student.english) + Number (student.maths) + Number(student.science) + Number(student.social)}</td>
              <td>
                {student.editing ? (
                  <button id='option-save' onClick={() => handleSave(index)}><FontAwesomeIcon icon={faSave} /></button>
                ) : (
                  <button id='option-edit' onClick={() => handleEdit(index)}><FontAwesomeIcon icon={'file-edit'} /></button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Term1;

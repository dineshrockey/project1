import React from 'react'

const List  = ({ students, onEdit, onView }) => {
  return (
    <div>
        <h2>Student List</h2>
        <ul>

          {students && students.length > 0 ? (
          students.map((student, index) => (
             <li key={index}>
              <strong>Name: </strong> {`${student.firstName} ${student.lastName}`} <br />
              <strong>Age:</strong> {student.age} <br />
              <strong>DOB:</strong> {student.Dob} <br />
              <strong>Email:</strong> {student.email} <br />
               <strong>Mobile No:</strong> {student.mobile} <br />
               <strong>Community:</strong> {student.community} <br />
               <strong>Adhaar No:</strong> {student.adhaarno} <br />
               <strong>Account No:</strong> {student.Accountno} <br />
               <strong>Address:</strong> {student.address} <br />
console.log();
               {/* edit button */}
               <button onClick={() => onEdit(index) }>Edit</button>

                  {/* view button */}
                  <button onClick={() => onView(index) }>View</button>
             </li>
          ))
          ) : (
            <li>No students found.</li>
          )}
        </ul>
    </div>
  );
};
console.log('jihi');

export default List;
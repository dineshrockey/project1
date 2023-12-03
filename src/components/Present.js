import React, {  useReducer, useEffect } from 'react';
import './mainpage.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';



const initialState = {
  attendanceData: [],
  newEntry: { stuName: '', present: false, absent: false },
  isEditing: false,
  editIndex: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ATTENDANCE_DATA':
      return { ...state, attendanceData: action.payload };
    case 'SET_NEW_ENTRY':
      return { ...state, newEntry: action.payload };
    case 'SET_EDIT_MODE':
      return { ...state, isEditing: action.payload.isEditing, editIndex: action.payload.editIndex };
    default:
      return state;
  }
};

const AttendanceTable = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Load attendance data from local storage on initial render
    const storedData = JSON.parse(localStorage.getItem('attendanceData'));
    if (storedData) {
      dispatch({ type: 'SET_ATTENDANCE_DATA', payload: storedData });
    }
  }, []);

  useEffect(() => {
    // Save attendance data to local storage whenever it changes
    localStorage.setItem('attendanceData', JSON.stringify(state.attendanceData));
  }, [state.attendanceData]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      dispatch({
        type: 'SET_NEW_ENTRY',
        payload: { ...state.newEntry, [name]: checked },
      });
    } else {
      dispatch({
        type: 'SET_NEW_ENTRY',
        payload: { ...state.newEntry, [name]: value },
      });
    }
  };

  const handleAddEntry = () => {
    if (state.newEntry.stuName && (state.newEntry.present || state.newEntry.absent)) {
      if (state.isEditing) {
        // Update existing entry
        const updatedData = [...state.attendanceData];
        updatedData[state.editIndex] = state.newEntry;
        dispatch({ type: 'SET_ATTENDANCE_DATA', payload: updatedData });
        dispatch({ type: 'SET_EDIT_MODE', payload: { isEditing: false, editIndex: null } });
      } else {
        // Add new entry
        dispatch({ type: 'SET_ATTENDANCE_DATA', payload: [...state.attendanceData, state.newEntry] });
      }
      dispatch({ type: 'SET_NEW_ENTRY', payload: { stuName: '', present: false, absent: false } });
    }
  };

  const handleEditEntry = (index) => {
    const entryToEdit = state.attendanceData[index];
    dispatch({ type: 'SET_NEW_ENTRY', payload: entryToEdit });
    dispatch({ type: 'SET_EDIT_MODE', payload: { isEditing: true, editIndex: index } });
  };

  return (
    <div>
<h1 className='heading-1'>Student Attendance</h1>


      <table id='table-contain'>
        <thead>
          <tr className='row1'>
            <th>SL.no</th>
            <th>Stu name</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id='tbody-contain'>
          {state.attendanceData.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.stuName}</td>
              <td>
                <input 

                  type="checkbox"
                  name={`present-${index}`}
                  checked={entry.present}
                  onChange={handleInputChange}
                  className={entry.present ? 'green-checkbox' : ''}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name={`absent-${index}`}
                  checked={entry.absent}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <button className='btn-edit' onClick={() => handleEditEntry(index)}>
 <FontAwesomeIcon icon= 'edit' />              </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>{state.attendanceData.length + 1}</td>
            <td>
              <input
                type="text"
                name="stuName"
                value={state.newEntry.stuName}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="present"
                checked={state.newEntry.present}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="absent"
                checked={state.newEntry.absent}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <button className='btn-add' onClick={handleAddEntry}>
                <FontAwesomeIcon icon='add' />
                {state.isEditing ? 'Update' : ''}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;

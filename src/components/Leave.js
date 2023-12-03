import React, { useState } from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';  
// import { FileAddFilled } from '@ant-design/icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';


const LeaveTable = () => {

    const [leaveData, setLeaveData] = useState([]);
    const [newEntry,setNewEntry ] = useState({stuName:'',date:'', leaveReason:''});

    const handleInputChange =(event) =>{
        const {name,value} = event.target;
        setNewEntry({ ...newEntry, [name]: value });
    };
     
    const handleAddEntry =( ) =>{
        if(newEntry.stuName && newEntry.date && newEntry.leaveReason){
            setLeaveData([ ...leaveData,newEntry]);
            setNewEntry({ stuName:'', date:'',leaveReason:''});
        }
    };

    const handleEditEntry = (index) =>{

        // console.log(`edit entry at index ${index}`);
const entryToEdit = leaveData[index];
setNewEntry(entryToEdit);


    };

    const handleDeleteEntry = (index) => {
        const updatedData = [ ...leaveData];
        updatedData.splice(index, 1);
        setLeaveData(updatedData);
    };


    return(
        <div>
            <table className='tablecontainer'>
                <thead>
                    <tr className='tr-headers'>
                        <th>Sl.no</th>
                        <th>Stu name</th>
                        <th>Date</th>
                        <th>LeaveReason</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='tbody-header'>
                    {leaveData.map((entry,index) => (
                        <tr key={index} className='tr-subheaders'>
                            <td>{index + 1}</td>
                            <td>{entry.stuName}</td>
                            <td>{entry.date}</td>
                            <td>{entry.leaveReason}</td>
                            <td><button onClick={() => handleEditEntry(index) } className='editbtn'>  
                        <FontAwesomeIcon icon={'user-edit'}  />  </button></td>
                            <td><button onClick={() => handleDeleteEntry(index)} className='delbtn'>
                            <FontAwesomeIcon icon={'delete-left'}  />         </button></td>
                        </tr>
                    ))}
                    <tr className='tr-subheaders2'>
                        <td>
                            {leaveData.length + 1}
                        </td>
                        <td className='name1'> 
                            <input type='text'
                            name='stuName'
                            value={newEntry.stuName}
                            onChange={handleInputChange} />
                        </td >
                        <td className='date1'>
                            <input type='date' 
                            name='date' placeholder=''
                            value={newEntry.date} onChange={handleInputChange}/>
                        </td>
                        <td className='reason1'>
                            <input type='text'
                            name='leaveReason'
                            value={newEntry.leaveReason}
                            onChange={handleInputChange}/>

                        </td>
                        <td className='tdadd'>
                            <button onClick={handleAddEntry} className='addbtn'><FontAwesomeIcon icon={faAdd}  /></button>

                        </td>
                        <td>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LeaveTable;
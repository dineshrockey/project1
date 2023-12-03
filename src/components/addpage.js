import React, { useState } from 'react'
import './mainpage.css';


const StudentForm = ({ onSubmit }) => {
  // state for this form

  const [ formData,setFormData ] = useState({
   firstName:'',
   lastName:'',
   age:'',
   Dob :'',
   email:'',
   mobile:'',
   community:'',
   adhaarno:'',
   Accountno:'', 
   address:'',   
  });

// handle input chnages

const handleChange = (event) =>{
  const { name, value } = event.target;
    setFormData({ ...formData,[name]: value});
};

// handle form submission 

const handleSubmit = (event) =>{

  event.preventDefault();
  // pass the form data to parent component
  onSubmit(formData);

  // reset the form  after submit
setFormData({

  firstName:"",
  lastName:"",
  age:'',
  Dob:'',
  email:'',
  mobile:'',
  community:'',
  adhaarno:'',
  Accountno:'',
  address:'',   
});

};

return(
   
  <div>
    <h2>Student Details Form</h2>
    <form className='formcontainer'>
      <div>
        <label>First Name:</label>
        <input type='text'name='firstName' value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type='text'name='lastName' value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Age:</label>
        <input type='number'name='age' value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <label>D.O.B:</label>
        <input type='date'name='Dob' value={formData.Dob} onChange={handleChange} required />
    
      </div>
      <div>
        <label>Email:</label>
        <input type='email'name='email' value={formData.email} onChange={handleChange} required />
    
      </div>
      <div>
        <label>Mobile No:</label>
        <input type='tel'name='mobile' value={formData.mobile} onChange={handleChange} required />
    
      </div>
      <div>
        <label>Community:</label>
        <input type='text'name='community' value={formData.community} onChange={handleChange} required />
    
      </div>
      <div>
        <label>Adhaar No:</label>
        <input type='tel'name='adhaarno' value={formData.adhaarno} onChange={handleChange} required />
    
      </div>
      <div>
        <label>Account No:</label>
        <input type='tel'name='Accountno' value={formData.Accountno} onChange={handleChange} required />
    
      </div>
      <div>
        <label>Address</label>
        <input name='address' value={formData.address} onChange={handleChange} required></input>
      </div>
      <button type='submit' onSubmit = {handleSubmit}  className='submit1'> Submit </button>
    </form>
  </div>

);


  // end student form
};

export default StudentForm;




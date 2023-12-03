import React, { useState } from "react";

const Addform = () => {
	const [name, setName] = useState("");
  const [ dob, setDob ] = useState("");
  const [Fname, setFname] = useState("");
  const [gender, setGender] = useState("");
  const [acno, setAcno] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	// const [skills, setSkills] = useState("");
	// const [education, setEducation] = useState("");
	// const [interests, setInterests] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(name,dob,Fname,gender,acno, email, phone, address);
	};
	return (
		<div>
			<h1>Resume Form</h1>
			<form id="form1" onSubmit={handleSubmit}>
				<label for="name">Name:</label>
				<input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
				<br />
        <label for="dob">D.O.B:</label>
				<input type="date" id="dob" value={dob} onChange={(event) => setDob(event.target.value)} />
				<br />
        <label for="Fname">Father Name:</label>
				<input type="text" id="Fname" value={Fname} onChange={(event) => setFname(event.target.value)} />
				<br />
        <label for="gender">Gender:</label>
				<input type="text" id="gender" value={gender} onChange={(event) => setGender(event.target.value)} />
				<br />
        <label for="acno">Account no:</label>
				<input type="number" id="acno" value={acno} onChange={(event) => setAcno(event.target.value)} />
				<br />
				<label for="email">Email:</label>
				<input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
				<br />
				<label for="phone">Phone:</label>
				<input type="tel" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
				<br />
				<label for="address">Address:</label>
				<textarea id="address" value={address} onChange={(event) => setAddress(event.target.value)}></textarea>
        <br />
				
        </form>
        <button onClick={handleSubmit}>Enter</button>
        </div> );
}

export default Addform;


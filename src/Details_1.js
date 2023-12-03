import React, { useState, useEffect } from "react";

const Display = () => {
	
  const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/data")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
			<h1>Data Display</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Address</th>
						<th>Experience</th>
						{/* <th>Skills</th> */}
						{/* <th>Education</th> */}
						{/* <th>Interests</th> */}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item._id}>
							<td>{item.name}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
							<td>{item.address}</td>
							<td>{item.experience}</td>
							{/* <td>{item.skills}</td> */}
							{/* <td>{item.education}</td> */}
							{/* <td>{item.interests}</td> */}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default Display;
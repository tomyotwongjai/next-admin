/** @format */
import { useState, useEffect } from "react";
import axios from "axios";

const EditStudent = ({ closeModal, student }) => {
	const [firstName, setFirstName] = useState(student.firstName);
	const [lastName, setLastName] = useState(student.lastName);
	const [classItem, setClassItem] = useState(student.classes.id);
	const [year, setYear] = useState(student.year);
	const [classData, setClassData] = useState([]);

	const id = student.id;
	const updateStudent = { id, firstName, lastName, year, classItem };

	// Edit student Data
	const handleEditStudent = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(`/api/student/edit`, updateStudent);
			console.log(response);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
		console.log(updateStudent);
	};

	// Fetch Existing Classes
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/api/class/get/`);
				setClassData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	});

	return (
		<div className="modal">
			<div className="modal-backdrop" onClick={closeModal}></div>
			<div className="modal-content">
				<div className="modal-header">
					<h3>Add Student</h3>
					<span
						style={{ padding: "10px", cursor: "pointer" }}
						onClick={() => closeModal()}>
						X
					</span>
				</div>
				<div className="modal-body content">
					<form>
						<div
							style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
							className="inputField">
							<label className="label" htmlFor="firstName">
								First Name
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								defaultValue={student.firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div
							style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
							className="inputField">
							<label className="label" htmlFor="lastName">
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								defaultValue={student.lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
						<div
							style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
							className="inputField">
							<label className="label" htmlFor="year">
								Current Year
							</label>
							<input
								type="text"
								id="year"
								name="year"
								defaultValue={student.year}
								onChange={(e) => setYear(e.target.value)}
							/>
						</div>

						<div
							style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
							className="inputField">
							<label className="label" htmlFor="course">
								Class
							</label>
							<div className="custom_select">
								<select
									style={{
										width: "150px",
										height: "30px",
										border: "1px solid rgb(227, 233, 243)",
									}}
									name="course"
									id="course"
									onChange={(e) => setClassItem(e.target.value)}>
									<option value="class">Select a class</option>
									{classData.map((classData) => (
										<option key={classData.id} value={classData.id}>
											{classData.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="modal-footer">
							<button style={{ margin: "0 5px" }} onClick={() => closeModal()}>
								Cancel
							</button>
							<button onClick={handleEditStudent} style={{ margin: "0 5px" }}>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditStudent;

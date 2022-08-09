/** @format */

import { useEffect, useState } from "react";
import axios from "axios";

const EditClass = ({ closeModal, classes }) => {
	const [name, setName] = useState(classes.name);
	const [courseDetails, setCourseDetails] = useState(classes.courseDetails);
	const [assignments, setAssignments] = useState(classes.assignments);
	// const [studentItem, setStudentItem] = useState(classes.members.id);
	// const [studentData, setStudentData] = useState([]);

	const id = classes.id;
	const updateClass = { id, name, courseDetails, assignments, studentItem };

	const handleEditClass = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(`/api/class/edit`, updateClass);
			console.log(response);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
		console.log(updateClass);
	};

	// Fetch Existing students
	// optional function

	{
		/*useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/api/student/get/`);
				setStudentData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}); */
	}

	return (
		<div className="modal">
			<div className="modal-backdrop" onClick={closeModal}></div>
			<div className="modal-content">
				<div className="modal-header">
					<h3>Edit Class</h3>
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
							<label className="label" htmlFor="Name">
								Name
							</label>
							<input
								type="text"
								id="Name"
								name="Name"
								defaultValue={classes.name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div
							style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
							className="inputField">
							<label className="label" htmlFor="courseDetails">
								Course Details
							</label>
							<input
								type="text"
								id="details"
								name="details"
								defaultValue={classes.courseDetails}
								onChange={(e) => setCourseDetails(e.target.value)}
							/>
						</div>
						<div
							style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
							className="inputField">
							<label className="label" htmlFor="courseDetails">
								Assignments
							</label>
							<input
								type="text"
								id="details"
								name="details"
								defaultValue={classes.assignments}
								onChange={(e) => setAssignments(e.target.value)}
							/>
						</div>

						{/* Mapping through existing students */}
						{/* <div className="custom_select">
							<select
								style={{
									width: "150px",
									height: "30px",
									border: "1px solid rgb(227, 233, 243)",
								}}
								name="course"
								id="course"
								onChange={(e) => setStudentItem(e.target.value)}>
								<option>Select a student</option>
								{studentData.map((student) => (
									<option value={student.id}>
										{student.firstName} {student.lastName}
									</option>
								))}
							</select>
						</div>  */}
						<div className="modal-footer">
							<button style={{ margin: "0 5px" }} onClick={() => closeModal()}>
								Cancel
							</button>
							<button onClick={handleEditClass} style={{ margin: "0 5px" }}>
								Add
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditClass;

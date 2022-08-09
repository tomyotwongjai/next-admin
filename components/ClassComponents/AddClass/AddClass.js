/** @format */

import { useEffect, useState } from "react";
import axios from "axios";

const AddClass = ({ closeModal }) => {
	const [formData, setFormData] = useState({});
	const [studentData, setStudentData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/api/student/get/`);
				setStudentData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post(`/api/class/add`, formData);
		console.log(response);
		window.location.reload();
	};

	return (
		<div className="modal">
			<div className="modal-backdrop" onClick={closeModal}></div>
			<div className="modal-content">
				<div className="modal-header">
					<h3>Add Class</h3>
					<span
						style={{ padding: "10px", cursor: "pointer" }}
						onClick={() => closeModal()}>
						X
					</span>
				</div>
				<div className="modal-body content">
					<form onSubmit={handleSubmit}>
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
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
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
								onChange={(e) =>
									setFormData({ ...formData, courseDetails: e.target.value })
								}
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
								onChange={(e) =>
									setFormData({ ...formData, assignments: e.target.value })
								}
							/>
						</div>
						<div className="modal-footer">
							<button style={{ margin: "0 5px" }} onClick={() => closeModal()}>
								Cancel
							</button>
							<button style={{ margin: "0 5px" }}>Add</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddClass;

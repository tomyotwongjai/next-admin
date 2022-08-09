/** @format */

import { useState } from "react";
import axios from "axios";

const AddStudent = ({ closeModal }) => {
	const [formData, setFormData] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`/api/student/add`, formData);
			console.log(response);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

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
					<form onSubmit={handleSubmit}>
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
								onChange={(e) =>
									setFormData({ ...formData, firstName: e.target.value })
								}
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
								onChange={(e) =>
									setFormData({ ...formData, lastName: e.target.value })
								}
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
								onChange={(e) =>
									setFormData({ ...formData, year: e.target.value })
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

export default AddStudent;

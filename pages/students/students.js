/** @format */

import { useState, useEffect } from "react";
import Router from "next/router";
import AddStudent from "../../components/StudentComponents/AddStudent/AddStudent";
import StudentCard from "../../components/StudentComponents/StudentCard/StudentCard";
import axios from "axios";

const Classes = () => {
	const [addStudent, setAddStudent] = useState(false);
	const [data, setData] = useState([]);

	// fetch data from prisma to show on page
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/student/get");
				setData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	// Navigate to students page
	const handleNavigate = () => {
		Router.push("/classes");
	};

	return (
		<>
			<main className="container">
				<div>
					<button
						className="btn"
						styles={{
							paddingLeft: "10px",
							paddingRight: "10px",
							fontWeight: "500",
						}}
						onClick={() => setAddStudent((prevState) => !prevState)}>
						Add Students
					</button>
					<button
						className="btn"
						styles={{
							paddingLeft: "10px",
							paddingRight: "10px",
							fontWeight: "500",
						}}
						onClick={handleNavigate}>
						Go to Class
					</button>
				</div>

				{addStudent ? (
					<AddStudent closeModal={() => setAddStudent(false)} />
				) : null}
			</main>
			<div className="card_container">
				{data.map((student, id) => (
					<StudentCard key={id} student={student} />
				))}
			</div>
		</>
	);
};

export default Classes;

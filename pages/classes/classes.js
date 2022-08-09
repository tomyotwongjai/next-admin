/** @format */

import { useState, useEffect } from "react";
import Router from "next/router";
import AddClass from "../../components/ClassComponents/AddClass/AddClass";
import ClassCard from "../../components/ClassComponents/ClassCard/ClassCard";
import axios from "axios";

const Classes = () => {
	const [addClass, setAddClass] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/class/get");
				setData(response.data);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	// Navigate to students page
	const handleNavigate = () => {
		Router.push("/");
	};

	return (
		<>
			<div className="container">
				<div>
					<button
						className="btn"
						styles={{
							paddingLeft: "10px",
							paddingRight: "10px",
							fontWeight: "500",
						}}
						onClick={() => setAddClass((prevState) => !prevState)}>
						Add Classes
					</button>
					<button
						className="btn"
						styles={{
							paddingLeft: "10px",
							paddingRight: "10px",
							fontWeight: "500",
						}}
						onClick={handleNavigate}>
						Go to Student
					</button>
				</div>

				{addClass ? <AddClass closeModal={() => setAddClass(false)} /> : null}
			</div>
			<div className="card_container">
				{data.map((classes, id) => (
					<ClassCard key={id} classes={classes} />
				))}
			</div>
		</>
	);
};

export default Classes;

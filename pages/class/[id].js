/** @format */

import { useState } from "react";
import { useRouter } from "next/router";
import { prisma } from "../../db/prisma";
import EditClass from "../../components/ClassComponents/EditClass/EditClass";
import ClassStudentData from "../../components/ClassComponents/ClassStudentData/ClassStudentData";
import styles from "./Class.module.css";
import axios from "axios";
import Classes from "../students/students";

const Class = ({ classes }) => {
	const [editClass, setEditClass] = useState(false);
	const router = useRouter();

	// Route back to main page
	const handleNavigate = () => {
		router.push("/classes");
	};

	// Delete Handler

	async function deleteClass() {
		if (window.confirm("Delete will be permanent. Are you sure?")) {
			await axios.post("/api/class/delete", { id: parseInt(classes?.id) });
			router.push("/classes");
		}
	}

	return (
		<>
			<div className="container">
				<div className={styles.card}>
					<button className={styles.back_button} onClick={handleNavigate}>
						Go back
					</button>
					<h2 className={styles.card_title}>{classes.name}</h2>
					<h3>{classes.courseDetails}</h3>

					<h4>This week Assignment</h4>
					<p>{classes.assignments}</p>
					<div className={styles.student_data}>
						<h3>Current Student Enrolled</h3>
						{classes && classes.members.length > 0 ? (
							<ClassStudentData classes={classes} />
						) : (
							<p>No students enrolled</p>
						)}
					</div>
					<button
						className={styles.back_button}
						onClick={() => setEditClass((prevState) => !prevState)}>
						Edit
					</button>
					<button className={styles.back_button} onClick={deleteClass}>
						Delete
					</button>
				</div>
			</div>
			<div>
				{editClass ? (
					<EditClass classes={classes} closeModal={() => setEditClass(false)} />
				) : null}
			</div>
		</>
	);
};

export async function getServerSideProps(context) {
	const { id } = context.params;
	const classes = await prisma.class.findUnique({
		where: { id: parseInt(id) },
		include: { members: { select: { student: true } } },
	});

	return {
		props: {
			classes,
		},
	};
}

export default Class;

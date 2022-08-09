/** @format */

import { useState } from "react";
import { prisma } from "../../db/prisma";
import styles from "./Student.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import EditStudent from "../../components/StudentComponents/EditStudent/EditStudent";
import StudentClassData from "../../components/StudentComponents/StudentClassData/StudentClassData";


const Student = ({ student }) => {
	const [editStudent, setEditStudent] = useState(false);
	const router = useRouter();

	// Route back to main page
	const handleNavigate = () => {
		router.push("/");
	};

	// Delete Handler

	async function deleteStudent() {
		if (window.confirm("Delete will be permanent. Are you sure?")) {
			await axios.post("/api/student/delete", { id: parseInt(student?.id) });
			router.push("/");
		}
	}

	return (
		<>
			<div className="container">
				<div className={styles.card}>
					<button className={styles.back_button} onClick={handleNavigate}>
						Go back
					</button>
					<h1 className={styles.card_title}>
						{student.firstName} {student.lastName}
					</h1>
					<h3>{student.year}</h3>
					<div className={styles.student_data}>
						<h3>Current Class Enrolled</h3>
						{student && student.classes.length > 0 ? (
							<StudentClassData student={student} />
						) : (
							<p>No classes enrolled</p>
						)}
					</div>

					<button
						className={styles.back_button}
						onClick={() => setEditStudent((prevState) => !prevState)}>
						Edit
					</button>
					<button className={styles.back_button} onClick={deleteStudent}>
						Delete
					</button>
				</div>
				{editStudent ? (
					<EditStudent
						student={student}
						closeModal={() => setEditStudent(false)}
					/>
				) : null}
			</div>
		</>
	);
};

export async function getServerSideProps(context) {
	const { id } = context.params;
	const student = await prisma.student.findUnique({
		where: { id: parseInt(id) },
		include: { classes: { select: { class: true } } },
	});

	return {
		props: {
			student,
		},
	};
}

export default Student;

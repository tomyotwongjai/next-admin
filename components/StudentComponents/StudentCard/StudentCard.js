/** @format */
import React from "react";
import Link from "next/link";


const ClassCard = ({ student }) => {

	return (
		// Link will navigate to student with unique id
		<div className="card">
			<div className="card_body">
				<div className="card_title">
					<h3>
						{student.firstName} {student.lastName}
					</h3>
					<h4>{student.year}</h4>
					<div className="card_wrapper">
						<Link href={`/student/${student.id}`}>
							<button>view</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClassCard;

/** @format */

import React from "react";
import Link from "next/link";

const ClassCard = ({ classes }) => {
	return (
		// Link will navigate to student with unique id
		<div className="card">
			<div className="card_body">
				<div className="card_title">
					<h3>{classes.name}</h3>
					<h4>{classes.courseDetails}</h4>
				</div>
				<div className="card_wrapper">
					<Link href={`/class/${classes.id}`}>
						<button>view</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ClassCard;

/** @format */

import React from "react";

const StudentClassData = ({ student }) => {
	return (
		<div>
			<ul>
				{student.classes.map((classItem) => (
					<li key={classItem.id}>{classItem.class.name}</li>
				))}
			</ul>
		</div>
	);
};

export default StudentClassData;

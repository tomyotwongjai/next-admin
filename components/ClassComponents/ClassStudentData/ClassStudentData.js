import React from 'react'

const ClassStudentData = ({classes}) => {
  return (
    <div>
        	<ul>
					{classes.members.map((memberItem) => (
						<li key={memberItem.student.id}>
							{memberItem.student.firstName} {memberItem.student.lastName}
						</li>
					))}
				</ul> 
    </div>
  )
}

export default ClassStudentData
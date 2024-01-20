import React from "react";

const Total = ({ parts }) => {
	return (
		<>
			<strong>
				{"Number of Exercises"}{" "}
				{parts.reduce((acc, cur) => acc + cur.exercises, 0)}
			</strong>
		</>
	);
};

export default Total;

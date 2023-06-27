import React from "react";
import Parts from "./Parts";

function Content({ course }) {
	return (
		<>
			<Parts part={course.parts[0]}></Parts>
			<Parts part={course.parts[1]}></Parts>
			<Parts part={course.parts[2]}></Parts>
		</>
	);
}

export default Content;

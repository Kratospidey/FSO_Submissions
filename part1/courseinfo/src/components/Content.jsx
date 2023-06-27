import React from "react";
import Parts from "./Parts";

function Content({ part1, part2, part3 }) {
	return (
		<>
			<Parts part={part1}></Parts>
			<Parts part={part2}></Parts>
			<Parts part={part3}></Parts>
		</>
	);
}

export default Content;

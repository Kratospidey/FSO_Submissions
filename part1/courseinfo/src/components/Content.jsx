import React from "react";
import Parts from "./Parts";

function Content({ parts }) {
	return (
		<>
			<Parts part={parts[0]}></Parts>
			<Parts part={parts[1]}></Parts>
			<Parts part={parts[2]}></Parts>
		</>
	);
}

export default Content;

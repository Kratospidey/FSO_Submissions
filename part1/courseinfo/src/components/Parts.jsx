import React from "react";

function Parts({ part }) {
	return (
		<>
			<p>
				{part.name} {part.exercises}
			</p>
		</>
	);
}

export default Parts;

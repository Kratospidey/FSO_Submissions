import React from "react";

function Persons({ persons }) {
	return (
		<>
			{persons.map((person) => (
				<p key={person.id} style={{ margin: 0 }}>
					{person.name} {person.number}
				</p>
			))}
		</>
	);
}

export default Persons;

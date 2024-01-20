import React from "react";

function Persons({ persons, deletePerson }) {
	return (
		<>
			{persons.map((person) => (
				<p key={person.id} style={{ margin: 0 }}>
					{person.name} {person.number}{" "}
					<button
						onClick={() => {
							deletePerson(person.name, person.number);
						}}
					>
						delete
					</button>
				</p>
			))}
		</>
	);
}

export default Persons;

import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		console.log("effect");
		axios.get("http://localhost:3001/persons").then((response) => {
			console.log("promise fulfilled");
			setPersons(response.data);
		});
	}, []);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	const personsToShow =
		filter !== ""
			? persons.filter((note) =>
					note.name.toLowerCase().includes(filter.toLowerCase())
			  )
			: persons;

	const handleNameChange = (event) => {
		// console.log(event.target.value);
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		// console.log(event.target.value);
		setNewNumber(event.target.value);
	};

	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};

	const addName = (event) => {
		event.preventDefault();
		if (persons.some((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		setPersons(
			persons.concat({
				name: newName,
				number: newNumber,
				id: persons.length + 1,
			})
		);
		setNewName("");
		setNewNumber("");
		setFilter("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filter={filter} handleFilterChange={handleFilterChange}></Filter>
			<h2>add a new</h2>
			<PersonForm
				addName={addName}
				newName={newName}
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
				newNumber={newNumber}
			></PersonForm>
			<h2>Numbers</h2>
			<Persons persons={personsToShow}></Persons>
		</div>
	);
};

export default App;

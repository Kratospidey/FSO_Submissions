import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [notifMessage, setNotifMessage] = useState({
		message: null,
		messageType: null,
	});
	console.log(notifMessage);

	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);
	// fetches all the data

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
		let personToReplace = persons.find(
			(person) => person.name === newName && person.number !== newNumber
		);
		if (personToReplace) {
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace the old number with a new one?`
				)
			) {
				const replacePersonObject = {
					name: newName,
					number: newNumber,
				};
				personService
					.update(personToReplace.id, replacePersonObject)
					.then((updatedPerson) => {
						setNotifMessage(`Updated ${updatedPerson.name}`, "success");
						setTimeout(() => {
							setNotifMessage({ message: null, messageType: null });
						}, 5000);
						setPersons(
							persons.map((person) =>
								person.name != newName ? person : updatedPerson
							)
						);
						setNewName("");
						setNewNumber("");
						setFilter("");
					});
			}
		} else if (persons.some((person) => person.name === newName)) {
			setNotifMessage({
				message: `${personName} is already added to phonebook`,
				messageType: "error",
			});
			setTimeout(() => {
				setNotifMessage({ message: null, messageType: null });
			}, 5000);
			return;
		}

		const personObject = {
			name: newName,
			number: newNumber,
		};

		personService.create(personObject).then((returnedPerson) => {
			setNotifMessage({
				message: `Added ${returnedPerson.name}`,
				messageType: "success",
			});
			setTimeout(() => {
				setNotifMessage(null);
			}, 5000);
			setPersons(persons.concat(returnedPerson));
			setNewName("");
			setNewNumber("");
			setFilter("");
		});
	};

	const deletePerson = (personName, personNumber) => {
		const personToDelete = persons.find(
			(person) => person.name === personName && person.number === personNumber
		);
		if (!personToDelete) {
			alert(`${personName} is already not in the phonebook`);
			return;
		}

		if (window.confirm(`Delete ${personName}?`)) {
			personService
				.remove(personToDelete.id, personToDelete)
				.then(() => {
					setPersons(
						persons.filter((person) => person.id !== personToDelete.id)
					);
				})
				.catch((error) => {
					setNotifMessage({
						message: `Information of ${personName} has already been removed from server`,
						messageType: "error",
					});
					setTimeout(() => {
						setNotifMessage({ message: null, messageType: null });
					}, 5000);
					return;
				});
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification
				message={notifMessage.message}
				messageType={notifMessage.messageType}
			></Notification>
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
			<Persons persons={personsToShow} deletePerson={deletePerson}></Persons>
		</div>
	);
};

export default App;

import { useState } from "react";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040 - 1234567", id: 0 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [idCounter, setIdCounter] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const newContact = {
    name: newName,
    phone: newNumber,
    id: idCounter,
  };
  //console.log(newContact);

  const handleUserInput = (e) => {
    const inputElementName = e.target.name;
    const inputElementValue = e.target.value;
    if (inputElementName === "contactName") {
      setNewName(inputElementValue);
    } else if (inputElementName === "contactTel") {
      setNewNumber(inputElementValue);
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  //name of person
  const contactNames = filteredPersons.map((person) => (
    <p key={person.id}>
      {person.name} {person.phone}
    </p>
  ));
  //console.log(contactNames);

  const addPerson = () => {
    const isDuplicated = persons.some(
      (person) => person.name === newName && person.phone === newNumber
    );

    if (isDuplicated) {
      alert(
        `Either ${newName} or ${newNumber} or both parameters are already added to the phonebook`
      );
      return;
    }

    if (newName === "" || newNumber === "") {
      alert(`You cannot add a blank contact`);
      return;
    }

    setPersons([...persons, newContact]);
    setIdCounter(idCounter + 1);
    setNewName("");
    setNewNumber("");
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchInput={searchInput} handleSearch={handleSearch} />
      <h2>add new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleUserInput={handleUserInput}
      />
      <h2>Numbers</h2>
      <Persons contactNames={contactNames} />
    </div>
  );
};

export default App;

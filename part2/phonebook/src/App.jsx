import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040 - 1234567", id: 0 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [idCounter, setIdCounter] = useState(1);

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

  //name of person
  const contactNames = persons.map((person) => (
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          name:{" "}
          <input
            name="contactName"
            value={newName}
            onChange={handleUserInput}
          />
          <br /> <br />
          number:
          <input
            name="contactTel"
            value={newNumber}
            onChange={handleUserInput}
            type="tel"
          />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{contactNames}</div>
    </div>
  );
};

export default App;

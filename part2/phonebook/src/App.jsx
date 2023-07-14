import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // newName state connected to hold the input from user
  const handleUserInput = (e) => {
    return setNewName(e.target.value);
  };

  //name of person
  const contactNames = persons.map((person, index) => (
    <p key={index}>{person.name}</p>
  ));
  //console.log(contactNames);

  // add new person operation and empty field and duplicity validation
  // console.log(persons.concat({ name: newName }));
  const addPerson = () => {
    const arr = persons.map((person, index) => person.name);
    console.log(arr);
    const isDuplicated = arr.includes(newName);
    console.log(isDuplicated);
    if (isDuplicated) {
      alert(`${newName} is already added to the phonebook`);
      setNewName("");
    } else if (newName === "") {
      alert(`You cannot add a blank contact`);
    } else {
      setPersons([...persons, { name: newName }]);
      setNewName("");
    }
  };
  //console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          name: <input value={newName} onChange={handleUserInput} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{contactNames}</div>
      ...
    </div>
  );
};

export default App;

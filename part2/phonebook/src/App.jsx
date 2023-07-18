import { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./component/Persons";
import PersonForm from "./component/PersonForm";
import Filter from "./component/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  //useEffect fetches data and fulfilled promise from JSONserver
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const savedContacts = response.data;
      setPersons(savedContacts); //fetched data is then passed to the persons States.
    });
  }, []);

  // search filter operation
  const phoneBook =
    searchInput.trim() === ""
      ? persons // Return the entire array when searchInput is empty
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchInput.toLowerCase())
        );

  //console.log(phoneBook);

  //Search field control 2 way binding
  const handleSearch = (e) => {
    const searchParameter = e.target.value;
    setSearchInput(searchParameter);
  };

  //user input operations are defined here for the form controls
  const handleUserInputs = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if (inputName === "contactsName") {
      setNewName(inputValue);
    } else if (inputName === "contactsNumber") {
      setNewNumber(inputValue);
    }
  };

  //defining the newPerson payload
  const newPerson = {
    name: newName,
    number: newNumber,
  };

  // console.log(newPerson);

  //Adding new contact operation
  const addPerson = (e) => {
    e.preventDefault();
    //duplicate checker operation
    const isDuplicated = persons.some(
      (person) =>
        person.name === newPerson.name && person.number === newPerson.number
    );
    console.log(isDuplicated);

    // Logical conditionals to interact with user
    if (newName === "" || newName === "") {
      alert("you cannot add a empty contact");
    } else if (isDuplicated) {
      alert(
        `Either ${newName} or ${newNumber} already exists on the phone book`
      );
      setNewName("");
      setNewNumber("");
    } else {
      //post request carrying the new person payload;
      axios
        .post(" http://localhost:3001/persons", newPerson)
        .then((response) => {
          //console.log(response.data);
          setPersons([...persons, response.data]);
          setNewName("");
          setNewNumber("");
        });
    }
  };

  return (
    <div>
      <h1>My PhoneBook</h1>
      <Filter searchInput={searchInput} handleSearch={handleSearch} />
      <h3>Add New</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleUserInputs={handleUserInputs}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons phoneBook={phoneBook} />
    </div>
  );
};

export default App;

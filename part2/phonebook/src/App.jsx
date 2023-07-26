import { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./component/Persons";
import PersonForm from "./component/PersonForm";
import Filter from "./component/Filter";
import phoneServices from "./api/phoneServices";

// console.log(phoneServices.getAll());
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  //useEffect fetches data and fulfilled promise from JSONserver
  useEffect(() => {
    phoneServices.getAll().then((savedContacts) => setPersons(savedContacts)); //fetched data is then passed to the persons States.
  }, []);

  // search filter operation
  const phoneBook =
    searchInput.trim() === ""
      ? persons // Return the entire array when searchInput is empty
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchInput.toLowerCase())
        );

  //console.log(phoneBook);

  //Search field control for 2 way binding
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
    const isDuplicatedName = persons.some((person) => person.name === newName);
    const isDuplicatedNumber = persons.some(
      (person) => person.number === newNumber
    );
    //console.log(isDuplicated);

    // Logical conditionals to interact with user if empty fields were added
    if (newName.trim() === "" || newNumber.trim() === "") {
      alert("you cannot add a empty contact");
      return;
    }

    // checks if both fields are empty and interact with user
    if (isDuplicatedName && isDuplicatedNumber) {
      alert(
        `Either ${newName} or ${newNumber} already exists on the phone book`
      );
      setNewName("");
      setNewNumber("");
    }

    // check if name already exists and ask user if they wish to update phone number
    else if (isDuplicatedName && !isDuplicatedNumber) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook, do you wish to replace the old number with a new one?`
      );
      if (confirmUpdate) {
        // finds and holds the name of the person entered
        const personToUpdate = persons.find(
          (person) => person.name === newName
        );

        // holds the the name of the person and the new phone number as an object
        const updatedPerson = { ...personToUpdate, number: newNumber };

        // updates the phone number on the server upon locating the persons id
        phoneServices
          .update(personToUpdate.id, updatedPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.error("Error updating person:", error);
          });
      }
    } else {
      // Post new contact to the server and then re-render phone book
      phoneServices.create(newPerson).then((newPerson) => {
        console.log(newPerson);
        setPersons([...persons, newPerson]);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  //Deletion operations
  const deletePerson = (id, name) => {
    //console.log(id);
    if (window.confirm(`Delete ${name}?`)) {
      phoneServices
        .remove(id)
        .then(setPersons(persons.filter((person) => person.id !== id)))
        .catch((error) => {
          "Error deleting person:", error;
        });
    } else {
      return;
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
      <Persons phoneBook={phoneBook} deletePerson={deletePerson} />
    </div>
  );
};

export default App;

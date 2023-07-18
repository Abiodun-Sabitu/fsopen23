const PersonForm = ({ newName, newNumber, handleUserInputs, addPerson }) => {
  //console.log(props);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      name: <br />
      <input
        type="text"
        name="contactsName"
        value={newName}
        onChange={handleUserInputs}
      />
      <br />
      <br />
      phone number: <br />
      <input
        type="tel"
        name="contactsNumber"
        value={newNumber}
        onChange={handleUserInputs}
      />
      <br />
      <br />
      <button type="submit" onClick={addPerson}>
        Add Contact
      </button>
    </form>
  );
};

export default PersonForm;

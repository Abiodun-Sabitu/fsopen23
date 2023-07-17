const PersonForm = ({ newName, newNumber, handleUserInput, addPerson }) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          name:
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
    </>
  );
};

export default PersonForm;

const Persons = ({ phoneBook, deletePerson }) => {
  return phoneBook.map((person) => {
    return (
      <p key={person.id}>
        {person.name} {person.number}
        &nbsp;&nbsp;
        <span>
          <button
            type="button"
            onClick={() => deletePerson(person.id, person.name)}
          >
            Delete
          </button>
        </span>
      </p>
    );
  });
};

export default Persons;

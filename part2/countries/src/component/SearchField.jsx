const Search = ({ handleUserInput, searchQuery }) => {
  return (
    <>
      <label htmlFor="label">Filter</label>
      &nbsp;&nbsp;
      <input
        type="search"
        id="label"
        value={searchQuery}
        onChange={handleUserInput}
      />
    </>
  );
};

export default Search;

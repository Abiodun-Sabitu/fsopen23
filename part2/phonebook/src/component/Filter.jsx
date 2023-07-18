const Filter = ({ searchInput, handleSearch }) => {
  return (
    <div>
      Search: <br />
      <input type="search" value={searchInput} onChange={handleSearch} />
    </div>
  );
};

export default Filter;

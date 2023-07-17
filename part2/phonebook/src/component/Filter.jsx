const Filter = ({ searchInput, handleSearch }) => {
  // console.log(props);
  return (
    <>
      Filter by contact name:
      <input type="search" value={searchInput} onChange={handleSearch} />
    </>
  );
};
export default Filter;

const CountryList = ({ countries, setSelectedCountry }) => {
  return countries.map((country) => (
    <ul key={country.cca3}>
      <li>
        {country.name.common}
        <button type="button" onClick={() => setSelectedCountry([country])}>
          Show
        </button>
      </li>
    </ul>
  ));
};

export default CountryList;

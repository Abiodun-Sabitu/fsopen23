const FullDetails = ({ selectedCountry }) => {
  const country = selectedCountry[0]; // Assuming selectedCountry is an array

  if (!country) {
    return null; // Return null or a placeholder if no country is selected
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <h4>
        Capital: <span>{country.capital}</span>
      </h4>
      <h4>
        Area:{" "}
        <small>
          {country.area} km<sup>2</sup>
        </small>
      </h4>
      <h2>Languages</h2>
      <ul>
        {country.languages &&
          Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default FullDetails;

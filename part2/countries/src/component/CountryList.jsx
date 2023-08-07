import React from "react";

const CountryList = ({ countries }) => {
  const query = countries.map((country) => (
    <ul key={country.cca3}>
      <li>
        {country.name.common}
        <button type="button">Show</button>
      </li>
    </ul>
  ));

  const basicCountryFacts = countries.map((country) => (
    <ul key={country.cca3}>
      <h2>{country.name.common}</h2>
      <h4>
        Capital: <small>{country.capital}</small>
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
    </ul>
  ));

  const fullDetails =
    (basicCountryFacts,
    countries.map((country) => console.log(country.maps.googleMaps)));

  if (countries.length > 1 && countries.length <= 10) {
    return query;
  } else if (countries.length === 1) {
    return basicCountryFacts;
  } else {
    return null;
  }
};

export default CountryList;

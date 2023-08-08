import React from "react";

const BasicDetails = ({ countries }) => {
  return countries.map((country) => (
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
};

export default BasicDetails;

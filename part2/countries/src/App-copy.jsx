import React, { useState, useEffect } from "react";

function App() {
  // State variables to manage search query and retrieved countries data
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState([]);

  // useEffect hook to fetch data from the API whenever the searchQuery changes
  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        // Check if searchQuery is not empty
        try {
          // Fetch data from the REST API based on the search query
          const response = await fetch();
          const data = await response.json();

          if (data.status !== 404) {
            // Check if valid data is returned
            setCountries(data); // Set the retrieved countries data to state
          } else {
            setCountries([]); // If no valid data, set countries to an empty array
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setCountries([]); // If searchQuery is empty, reset countries to an empty array
      }
    };

    fetchData(); // Call the fetch function
  }, [searchQuery]); // Watch for changes in searchQuery to trigger useEffect

  return (
    <div className="App">
      <h1>Country Info App</h1>
      {/* Input field to enter the search query */}
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Conditional rendering based on the number of retrieved countries */}
      {countries.length === 1 ? ( // If there's exactly one country
        <div className="country-details">
          {/* Display detailed information about the country */}
          <h2>{countries[0].name.common}</h2>
          <p>Capital: {countries[0].capital}</p>
          <p>Area: {countries[0].area} km²</p>
          <p>Languages: {Object.values(countries[0].languages).join(", ")}</p>
          <img
            src={countries[0].flags.png}
            alt={`Flag of ${countries[0].name.common}`}
          />
        </div>
      ) : (
        countries.length > 1 &&
        countries.length <= 10 && ( // If there are 2 to 10 countries
          <ul className="country-list">
            {/* Display a list of countries */}
            {countries.map((country) => (
              <li key={country.cca3}>
                <h2>{country.name.common}</h2>
              </li>
            ))}
          </ul>
        )
      )}

      {/* Display message if there are too many matches */}
      {countries.length > 10 && (
        <p>Too many matches, please make your query more specific.</p>
      )}
    </div>
  );
}

export default App;

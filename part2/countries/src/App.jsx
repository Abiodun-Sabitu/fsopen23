import SearchField from "./component/SearchField";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { searchCountries } from "./api";
import CountryList from "./component/CountryList";
import AboutCountry from "./component/AboutCountry";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(-1);

  //bind search field here
  const handleUserInput = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      searchCountries(searchQuery)
        .then((data) => {
          const countries = data;
          setCountries(countries);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    } else {
      setCountries([]);
    }
  }, [searchQuery]);

  const prompt = `Too many matches, specify another filter`;
  const notFound = `Error fetching data, please check your query`;

  return (
    <>
      <SearchField
        searchQuery={searchQuery}
        handleUserInput={handleUserInput}
      />

      <CountryList countries={countries} />

      {/* <AboutCountry about={about} /> */}
    </>
  );
};

export default App;

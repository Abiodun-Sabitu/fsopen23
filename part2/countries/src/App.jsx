import SearchField from "./component/SearchField";
import "./index.css";
import { useEffect, useState } from "react";
import { searchCountries } from "./api";
import CountryList from "./component/CountryList";
import BasicDetails from "./component/BasicDetails";
import FullDetails from "./component/FullDetails";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

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
      setSelectedCountry([]);
    }
  }, [searchQuery]);

  const prompt = `Too many matches, specify another filter`;
  const notFound = `Error fetching data, please check your query`;
  //console.log(selectedCountry);
  let content;

  if (countries.length > 1 && countries.length <= 10) {
    content = (
      <CountryList
        countries={countries}
        setSelectedCountry={setSelectedCountry}
      />
    );
  } else if (countries.length === 1) {
    content = <BasicDetails countries={countries} />;
  }

  if (selectedCountry.length > 0) {
    content = <FullDetails selectedCountry={selectedCountry} />;
  }

  return (
    <>
      <SearchField
        searchQuery={searchQuery}
        handleUserInput={handleUserInput}
      />
      {content}
    </>
  );
};

export default App;

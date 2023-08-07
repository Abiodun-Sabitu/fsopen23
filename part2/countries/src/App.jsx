import Search from "./component/Search";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tooManyPrompts, setTooManyPrompts] = useState(false);
  const [feedback, setFeedback] = useState([]);

  //bind search field here
  const handleUserInput = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const prompt = `Too many matches, specify another filter`;
  const notFound = `Error fetching data, please check your query`;

  //countries api call
  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchQuery}`)
        .then((response) => {
          response.data;
          const data = response.data;

          // checks if the feedback returned is more than 10
          if (data.length > 10) {
            setFeedback(prompt);
          }

          // checks if feedback is not more than 1
          else if (data.length === 1) {
            const countries = data.map((country) => {
              return (
                <ul key={country.cca3}>
                  <h2>{country.name.common}</h2>
                  <h5>Capital: {country.capital}</h5>
                  <h5>Area: {country.area} km²</h5>
                  <h4>Languages</h4>
                  {Object.values(country.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                  <img src={country.flags.png} alt={country.flags.alt} />
                </ul>
              );
            });
            setFeedback(countries);
          }

          // Checks if feedback is within 1 - 10
          else if (data.length > 1 && data.length <= 10) {
            const countries = data.map((country) => (
              <ul key={country.cca3}>
                <li>{country.name.common}</li>
              </ul>
            ));
            setFeedback(countries);
          } else {
            setFeedback([]);
          }
        })
        .catch((error) => {
          //console.log("Error fetching data:", error);
          // returns not found error if query does not match data in API
          setFeedback(notFound);
        });
    } else {
      // returns nothing if search field is empty
      setFeedback([]);
    }
  }, [searchQuery]);

  // console.log(feedback);

  return (
    <>
      <Search searchQuery={searchQuery} handleUserInput={handleUserInput} />
      <div>{feedback}</div>
    </>
  );
};

export default App;

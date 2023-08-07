import axios from "axios";

const API_BASE_URL = "https://restcountries.com/v3.1";

export const searchCountries = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/name/${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

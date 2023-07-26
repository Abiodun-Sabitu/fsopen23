import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl).then((response) => response.data);
  return request;
};

const create = (newPerson) => {
  const request = axios
    .post(baseUrl, newPerson)
    .then((response) => response.data);
  return request;
};

const remove = (id) => {
  const request = axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => response.data);
  return request;
};

const update = (id, updatedPerson) => {
  const request = axios
    .put(`${baseUrl}/${id}`, updatedPerson)
    .then((response) => response.data);
  return request;
};

export default {
  getAll,
  create,
  remove,
  update,
};

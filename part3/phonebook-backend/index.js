const express = require("express");
const app = express();

const phoneBook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, respond) => {
  respond.send("hello world");
});

app.get("/api/persons", (request, respond) => {
  respond.json(phoneBook);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log("listening on port");
});

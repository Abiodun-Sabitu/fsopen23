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

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/api/persons", (request, response) => {
  response.json(phoneBook);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = phoneBook.find((person) => person.id === id);

  if (contact) {
    response.json(contact);
  }
  response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  phoneBook.filter((contact) => contact.id !== id);
  response.status(204).end();
});

app.get("/info", (request, response) => {
  const currentTime = new Date();
  const feedback = `<h2>The phone book has info for ${phoneBook.length} people</h2> <h2>${currentTime}</h2>`;
  response.send(feedback);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log("listening on port");
});

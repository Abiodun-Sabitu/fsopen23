const express = require("express");
const app = express();
app.use(express.json());

const morgan = require("morgan");
// Custom format function that includes the request body if available in JSON format
const customLogger = function (tokens, req, res) {
  const requestBody = req.body !== undefined ? JSON.stringify(req.body) : "-";

  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",

    requestBody, // Log the request body here
  ].join(" ");
};

// Use the custom logger with Morgan middleware
app.use(morgan(customLogger));

let phoneBook = [
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

const getRandomId = () => {
  return Math.floor(Math.random() * 587) + 5;
};

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
  const cleanedPhoneBook = phoneBook.filter((contact) => contact.id !== id);
  phoneBook = cleanedPhoneBook;
  console.log(phoneBook);
  response.status(204).end();
});

app.get("/info", (request, response) => {
  const currentTime = new Date();
  const feedback = `<h2>The phone book has info for ${phoneBook.length} people</h2> <h2>${currentTime}</h2>`;
  response.send(feedback);
});

app.post("/api/persons", (request, response) => {
  const postedReq = request.body;
  const nameAlreadyExits = phoneBook.some(
    (contact) => contact.name === postedReq.name
  );

  // console.log(nameAlreadyExits, postedReq);

  if (!postedReq.name || !postedReq.number) {
    return response.status(406).end("error:content is missing");
  }

  if (nameAlreadyExits) {
    return response.status(406).end("error:name must be unique");
  } else {
    const updateReq = {
      id: getRandomId(),
      name: postedReq.name,
      number: postedReq.number,
    };

    const updatedReq = [...phoneBook, updateReq];
    response.json(updatedReq);
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log("listening on port");
});

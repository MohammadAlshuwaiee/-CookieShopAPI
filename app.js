const { request, response } = require("express");
//Data require
const cookies = require("./cookies");
//import express
const express = require("express");
//express function
const app = express();
app.get("/cookies", (req, res) => {
  res.json(cookies);
});
app.get("/", (request, response) => {
  console.log("Hello");
  response.json({ message: "Hello world" });
});

app.listen(8000, () => {
  console.log("This is localhost :80000");
});

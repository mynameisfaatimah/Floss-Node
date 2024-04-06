// app.js

const express = require("express")
const app = express();
const symptom = require("./controllers/symptomController");

app.use('/symptom', symptom);

module.exports = app;
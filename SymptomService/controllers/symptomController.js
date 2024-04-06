const express = require('express');
const app = express();
const getSymptom = require('../services/symptomService');

app.get("/", async (req, res) => {
    console.log('in controller');
    var symptom = await getSymptom();
    res.send(symptom);
});

module.exports = app;


  

  
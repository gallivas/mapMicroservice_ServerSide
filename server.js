'use strict';

const PORT = 3500;

const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
require('dotenv').config();
app.use(express.static('.'));

app.use(express.urlencoded({
    extended: true
}));


app.get('/mapMicroservice', async (req, res) => {
    const inputString = req.query.country;
    const jsonResponse = await getCoordinates(inputString);
    console.log(jsonResponse);
    res.json(jsonResponse);
});


async function getCoordinates(selectedCountry) {
  const apiKey = 'GOOGLE_MAPS_API';
  const latlng = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=geometry&input=${selectedCountry}&inputtype=textquery&key=${apiKey}`);
  const latlngJSON = await latlng.json();
  const coordinates = latlngJSON.candidates[0].geometry.location;
  return coordinates;
};

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
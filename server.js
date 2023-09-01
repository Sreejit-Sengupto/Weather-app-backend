// server/app.js
const express = require('express');
const axios = require('axios');
const app = express();
// const PORT = process.env.PORT || 3000;
// const process = require('./env')
const https = require('https')
const cors = require('cors')
const apiKey = process.env.API_KEY;

app.use(cors())
app.get('/', async (req, res) => {
        const lat = req.query.lat;
        const lon = req.query.lon;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    https.get(url, (response) => {
      response.on('data', (data) => {
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        res.send(data)
      })
    })
});

app.get('/aqi' , async(req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  https.get(url, (response) => {
    response.on('data', (data) => {
      const aqi = JSON.parse(data);
      console.log(aqi);
      res.send(aqi);
    })
  })
});

app.get('/forecast', async(req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  https.get(url, (response) => {
    response.on('data', (data) => {
      const forecast = JSON.parse(data);
      console.log(forecast);
      res.send(forecast);
    })
  })
})

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});

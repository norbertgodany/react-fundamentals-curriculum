const axios = require('axios');

const Id = 'e190f0113c28e20bece359683a12e5c3';

function getCityWeather(cityname) {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&type=accurate&APPID=${Id}`)
}

function getForecast(cityname, days=5) {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&type=accurate&APPID=${Id}&cnt=${days}`)
}

module.exports = {
  getCityWeather,
  getForecast,
}
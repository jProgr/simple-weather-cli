const request = require('request');
const argv = require('yargs').argv;

let apiKey = process.env.API_KEY;
let city = argv.c || 'bristol';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url, (error, response, body) =>
{
  if(error)
  { console.log('error:', error); }
  else
  {
    let weather_data = JSON.parse(body);
    let message = `The temperature in ${weather_data.name} is ${weather_data.main.temp} celsius`;
    console.log(message);
  }
});

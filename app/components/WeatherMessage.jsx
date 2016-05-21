var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;

//  &appid=efaec32ece7b8620da60cfd0d46ccf5c



//  By Zip Code
//http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b1b15e88fa797225412429c1c50c122a



//  City, Country
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a



//  City, Imperial units (fahrenheit)
//http://api.openweathermap.org/data/2.5/find?q=London&units=imperial&appid=b1b15e88fa797225412429c1c50c122a

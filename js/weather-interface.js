var Weather = require('./../js/weather.js').weatherModule;
var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  // currentWeatherObject.getWeather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var humidity = currentWeatherObject.getWeather(city);
    $('.showWeather').text("The humidity in " + city + " is " + humidity + "%");

  });
});

exports.displayHumidityFunction = displayHumidity;

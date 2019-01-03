//create the weather object
const weather = new Weather(city, country);
const ui = new UI();

//Get the weather info on DOM load

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

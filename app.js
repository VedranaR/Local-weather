//Initializing local storage
const storage = new Storage();

//Get the location data stored in the LS
const weatherLocation = storage.getLocationData();

//create the weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Initializing UI
const ui = new UI();

//Get the weather info on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event
document.getElementById("change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  storage.setLocationData(city, country);

  //Get and display weather
  getWeather();

  //Close modal window
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

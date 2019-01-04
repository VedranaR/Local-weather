class UI {
  constructor() {
    this.location = document.getElementById("location");
    this.country = document.getElementById("country");
    this.description = document.getElementById("description");
    this.subdescription = document.getElementById("subdesc");
    this.icon = document.getElementById("icon");
    this.temperature = document.getElementById("temperature");
    this.humidity = document.getElementById("humidity");
    this.pressure = document.getElementById("pressure");
    this.wind = document.getElementById("wind-speed");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.country.textContent = weather.sys.country;
    this.description.textContent = weather.weather[0].name;
    this.subdescription.textContent = weather.weather[0].description;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.temperature.textContent = `Temperature: ${(
      weather.main.temp - 273.15
    ).toFixed(2)} °C (${weather.main.temp} °K)`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Atmospheric pressure: ${
      weather.main.pressure
    } hPa`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
  }
}

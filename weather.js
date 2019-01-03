class Weather {
  constructor(city, country) {
    this.apiKey = "60948ba4157b468519c8ac0fc87c3121";
    this.city = city;
    this.country = country;
  }

  //Fetch the API data
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //Change the location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

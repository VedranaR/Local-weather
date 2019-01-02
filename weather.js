class Weather {
  constructor(city, country) {
    this.apiKey = "60948ba4157b468519c8ac0fc87c3121";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apiKey}`
    );
  }
}

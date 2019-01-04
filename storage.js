class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = "Zagreb";
    this.defaultCountry = "CRO";
  }

  setLocationData(city, country) {
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
  }
}

class Weather {
  #apiKey;
  #city;
  #country;

  constructor(city, country) {
    this.#apiKey = "32bb722096013d7f38da6eca7de90d8b";
    this.#city = city;
    this.#country = country;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.#city},${
        this.#country
      }&appid=${this.#apiKey}`
    );

    const data = await response.json();
    if (data.cod === "404") return null;

    return this.summarizeData(data);
  }

  titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
  }

  summarizeData(data) {
    const { name, sys, weather, main, wind } = data;
    const city = name;
    const { country } = sys;
    const { description, icon } = weather[0];
    const descriptionFormatted = this.titleCase(description);
    const { humidity, temp, temp_min, temp_max, feels_like } = main;
    const humidityWithPercentage = humidity + "%";

    const mainTempInCelsius = this.fromKelvinTo("C", temp).toFixed(2);
    const mainTempInFahrenheit = this.fromKelvinTo("F", temp).toFixed(2);
    const minimumTempInCelsius = this.fromKelvinTo("C", temp_min).toFixed(2);
    const minimumTempInFahrenheit = this.fromKelvinTo("F", temp_min).toFixed(2);
    const maximumTempInCelsius = this.fromKelvinTo("C", temp_max).toFixed(2);
    const maximumTempInFahrenheit = this.fromKelvinTo("F", temp_max).toFixed(2);
    const feelsLikeInCelsius = this.fromKelvinTo("C", feels_like).toFixed(2);
    const feelsLikeInFahrenheit = this.fromKelvinTo("F", feels_like).toFixed(2);
    const { speed } = wind;
    const speedInKmPerHr = (speed * 3.6).toFixed(1);
    const speedInMiPerHr = (speed * 2.237).toFixed(1);

    return {
      city,
      country,
      description: descriptionFormatted,
      mainTempInCelsius,
      mainTempInFahrenheit,
      icon,
      humidity: humidityWithPercentage,
      minimumTempInCelsius,
      minimumTempInFahrenheit,
      maximumTempInCelsius,
      maximumTempInFahrenheit,
      feelsLikeInCelsius,
      feelsLikeInFahrenheit,
      speedInKmPerHr,
      speedInMiPerHr,
    };
  }

  fromKelvinTo(otherUnitOfTemp, temp) {
    switch (otherUnitOfTemp) {
      case "C":
        return temp - 273.15;
      case "F":
        return ((temp - 273.15) * 9) / 5 + 32;
      default:
        return temp;
    }
  }
}

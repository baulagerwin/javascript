class UI {
  constructor(data) {
    this.errorElement = document.querySelector("#error-message");
    this.location = document.querySelector("#w-location");
    this.description = document.querySelector("#w-desc");
    this.temperature = document.querySelector("#w-string");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.temperatureRange = document.querySelector("#w-min-max-temp");
    this.feelsLike = document.querySelector("#w-feels-like");
    this.wind = document.querySelector("#w-wind");
    this.data = data;
  }

  setWeather() {
    if (!this.data) {
      this.errorElement.innerHTML = "City or country not found.";
      this.errorElement.classList.add("d-flex");

      setTimeout(() => {
        this.errorElement.remove();
      }, 1000);
    }

    const { city, country } = this.data;
    const { description } = this.data;
    const { mainTempInCelsius, mainTempInFahrenheit } = this.data;
    const { icon } = this.data;
    const { humidity } = this.data;
    const {
      minimumTempInCelsius,
      minimumTempInFahrenheit,
      maximumTempInCelsius,
      maximumTempInFahrenheit,
    } = this.data;
    const { feelsLikeInCelsius, feelsLikeInFahrenheit } = this.data;
    const { speedInKmPerHr, speedInMiPerHr } = this.data;

    this.location.innerHTML = `${city}, ${country}`;
    this.description.innerHTML = description;
    this.temperature.innerHTML = `${mainTempInCelsius}&#8451;(${mainTempInFahrenheit}	
      &#8457;)`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${icon}.png`
    );
    this.humidity.innerHTML = `Humidity: ${humidity}`;
    this.temperatureRange.innerHTML = `Min: ${minimumTempInCelsius}&#8451;(${minimumTempInFahrenheit}&#8457;) - Max: ${maximumTempInCelsius}&#8451;(${maximumTempInFahrenheit}&#8457;)`;
    this.feelsLike.innerHTML = `Feels like: ${feelsLikeInCelsius}&#8451;(${feelsLikeInFahrenheit})&#8457;`;
    this.wind.innerHTML = `Wind: ${speedInKmPerHr} km/h (${speedInMiPerHr} miles/h)`;
  }
}

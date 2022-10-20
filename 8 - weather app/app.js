window.addEventListener("DOMContentLoaded", (e) => {
  if (!localStorage.getItem("location"))
    localStorage.setItem(
      "location",
      JSON.stringify({ city: "Taguig City", country: "PH" })
    );

  const { city, country } = JSON.parse(localStorage.getItem("location"));

  const weather = new Weather(city, country);

  weather
    .getWeather()
    .then((data) => {
      const ui = new UI(data);
      ui.setWeather();
    })
    .catch((e) => {
      console.log(e);
    });
});

document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.querySelector("#city");
  const country = document.querySelector("#country");

  const weather = new Weather(city.value, country.value);
  localStorage.setItem(
    "location",
    JSON.stringify({ city: city.value, country: country.value })
  );

  weather
    .getWeather()
    .then((data) => {
      const ui = new UI(data);
      ui.setWeather();
    })
    .catch((e) => {
      console.log(e);
    });

  $("#locModal").modal("hide");

  city.value = "";
  country.value = "";

  e.preventDefault();
});

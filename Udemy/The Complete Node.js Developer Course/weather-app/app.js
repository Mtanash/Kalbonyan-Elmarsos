const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter city name: ", (cityName) => {
  if (cityName !== "") {
    geoCode(cityName, (error, { latitude, longitude, placeName } = {}) => {
      if (error) {
        console.log(error);
        return;
      }
      return forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          console.log(error);
          return;
        }

        console.log(placeName);
        console.log(forecastData);
      });
    });
  }
  readline.close();
});

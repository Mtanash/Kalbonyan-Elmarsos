const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=6848d6ef83896d2f081c0379102d1156&query=${latitude},${longitude}`;
  request(url, { json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to weather services.", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      const temp = body.current.temperature;
      const feelsLike = body.current.feelslike;
      const weatherDescription = body.current.weather_descriptions[0];
      const humidity = body.current.humidity;
      callback(
        undefined,
        `${weatherDescription}. It's currently ${temp} degrees out. It feels like ${feelsLike} degrees out. Humidity is ${humidity}`
      );
    }
  });
};

module.exports = forecast;

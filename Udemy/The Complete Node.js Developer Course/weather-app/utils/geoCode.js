const request = require("postman-request");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibXRhbmFzaCIsImEiOiJja3cwb3Y0MGwweGpoMm5udHBmYXhhNDNsIn0.RWSusiIl0Lrh3tDkibcOpg&limit=1`;

  request(url, { json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to goelocation services.", undefined);
    } else if (body.message === "Not Found" || body.features.length === 0) {
      callback("Unable to find goelocation.", undefined);
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      const placeName = body.features[0].place_name;
      callback(undefined, { placeName, latitude, longitude });
    }
  });
};

module.exports = geoCode;

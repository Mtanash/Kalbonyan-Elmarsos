const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status !== 200) throw new Error("Unable to fetch data");
  const data = await response.json();
  return data.puzzle;
};

const getPuzzleOld = (wordCount) =>
  fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    })
    .then((data) => data.puzzle);

const getCountryDetails = async (countryCode) => {
  const response = await fetch(
    "//api.countrylayer.com/v2/all?access_key=e304b2a290bedcca39ed35b0e14d9afc"
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.find((data) => data.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?token=ba7b02824cd7c3");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("failed to fetch location data");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountryDetails(location.country);
  return country;
};

export { getPuzzle as default };

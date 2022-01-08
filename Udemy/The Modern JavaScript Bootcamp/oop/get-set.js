const data = {
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
  },
};

// code to use data obj

data.location = "Egypt";
console.log(data.location);

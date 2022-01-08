// callback

const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("Number must be provided");
    }
  }, 2000);
};

getDataCallback(2, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    getDataCallback(data, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});

// promise

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Please provide a number");
    }, 2000);
  });

getDataPromise(4).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`The data is : ${data}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

getDataPromise(5)
  .then((data) => getDataPromise(data))
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

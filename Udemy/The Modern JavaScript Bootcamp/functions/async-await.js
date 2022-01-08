const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Please provide a number");
    }, 2000);
  });

const processData = async () => {
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  return data;
};

processData()
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log(error);
  });

const weatherForm = document.querySelector(".main-content form");
const locationinput = document.querySelector(".main-content input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // set loading
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${locationinput.value}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        // set error
        messageOne.textContent = `Error: ${data.error}`;
        messageTwo.textContent = "";
      } else {
        //   console.log(`Location: ${data.placeName}`);
        //   console.log(`Forecast: ${data.forecast}`);
        // set results
        messageOne.textContent = `Location: ${data.placeName}`;
        messageTwo.textContent = `Forecast: ${data.forecast}`;
      }
    });
  });

  locationinput.value = "";
});

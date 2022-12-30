const flightBtn = document.querySelector(".flightBtn");
const hotelBtn = document.querySelector(".hotelBtn");
const rentalBtn = document.querySelector(".rentalBtn");

const flightBody = document.querySelector(".flightBody");
const hotelBody = document.querySelector(".hotelBody");
const rentalBody = document.querySelector(".rentalBody");

flightBtn.addEventListener("click", () => {
  flightBtn.classList.add("active");
  hotelBtn.classList.remove("active");
  rentalBtn.classList.remove("active");

  flightBody.classList.remove("hidden");
  hotelBody.classList.add("hidden");
  rentalBody.classList.add("hidden");
});
hotelBtn.addEventListener("click", () => {
  flightBtn.classList.remove("active");
  hotelBtn.classList.add("active");
  rentalBtn.classList.remove("active");

  flightBody.classList.add("hidden");
  hotelBody.classList.remove("hidden");
  rentalBody.classList.add("hidden");
});
rentalBtn.addEventListener("click", () => {
  flightBtn.classList.remove("active");
  hotelBtn.classList.remove("active");
  rentalBtn.classList.add("active");

  flightBody.classList.add("hidden");
  hotelBody.classList.add("hidden");
  rentalBody.classList.remove("hidden");
});

const card = document.querySelector(".card");
const sectioNature = document.querySelector(".nature")
const sectioCity = document.querySelector(".city");
const main = document.querySelector(".main");
const modal = document.querySelector(".modal");


sectioNature.addEventListener("click", ( e ) => {
  // const getEvent = e.currentTarget;
  sectioCity.style.display = "none";
  sectioNature.style.display = "none";
  modal.style.display = "block";
})


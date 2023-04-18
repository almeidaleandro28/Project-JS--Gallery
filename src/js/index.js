const card = document.querySelector(".card");
const sectioNature = document.querySelector(".nature")
const sectioCity = document.querySelector(".city");
const main = document.querySelector(".main");
const modal = document.querySelector(".modal");
const btClose = document.querySelector(".btn_close");
const $modalCenter = document.querySelector(".modal_body_center");


sectioNature.addEventListener("click", ( e ) => {
  // const getEvent = e.currentTarget;
  sectioCity.display = "none";
  sectioNature.display = "none";
  modal.style.display = "block";

 const currentImg = e.target;
 const copyImage = currentImg.cloneNode( true);

$modalCenter.append( copyImage)

});

sectioCity.addEventListener("click", ( e ) => {
  sectioCity.display = "none";
  sectioNature.display = "none";
  modal.style.display = "block";
});

btClose.addEventListener("click", () => {
  modal.style.display = "none";
  
});




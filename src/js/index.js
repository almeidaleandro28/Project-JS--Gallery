const card = document.querySelector(".card");
const sectioNature = document.querySelector(".nature")
const sectioCity = document.querySelector(".city");
const main = document.querySelector(".main");
const modal = document.querySelector(".modal");
const btClose = document.querySelector(".btn_close");
let $modalCenter = document.querySelector(".modal_body_center");
const $natureImgs = document.querySelector(".nature_img");




sectioNature.addEventListener("click", ( e ) => {
  // const getEvent = e.currentTarget;
  sectioCity.display = "none";
  sectioNature.display = "none";
  modal.style.display = "block";

  let currentImg = e.target;
  let imgSrc = currentImg.src;

  $modalCenter.innerHTML = `<img src=${imgSrc} />`;

});

sectioCity.addEventListener("click", ( e ) => {
  sectioCity.display = "none";
  sectioNature.display = "none";
  modal.style.display = "block";
});

btClose.addEventListener("click", () => {
  modal.style.display = "none";
	

  
});




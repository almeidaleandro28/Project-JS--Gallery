const card = document.querySelector(".card");
const sectioNature = document.querySelector(".nature")
const sectioCity = document.querySelector(".city");
const main = document.querySelector(".main");
const modal = document.querySelector(".modal");
const btClose = document.querySelector(".btn_close");
let $modalCenter = document.querySelector(".modal_body_center");
let $modalFooter = document.querySelector(".modal_footer");
let $modalFooterGallery = document.querySelector(".modal_footer_gallery");
const $natureImgs = document.querySelectorAll(".nature_img");





sectioNature.addEventListener("click", ( e ) => {
  // const getEvent = e.currentTarget;
  sectioCity.display = "none";
  sectioNature.display = "none";
  modal.style.display = "block";

  let currentImg = e.target;
  let imgSrc = currentImg.src;
  let imgTitle = currentImg.title;

  $modalCenter.innerHTML = `<img src=${imgSrc} />
                            <h1 class="h1">${imgTitle}<h1>`;

  $natureImgs.forEach( img => {
    $modalFooterGallery.innerHTML += `<img src=${img.src}>`;
  });

});


sectioCity.addEventListener("click", ( e ) => {
  sectioCity.display = "none";
  sectioNature.display = "none";
  modal.style.display = "block";

  let currentImg = e.target;
  let imgSrc = currentImg.src;
  let imgTitle = currentImg.title;

  $modalCenter.innerHTML = `<img src=${imgSrc} />
                            <h1 class="h1">${imgTitle}<h1>`;

  

});

btClose.addEventListener("click", () => {
  modal.style.display = "none";
	

  
});




//--------------------------------------------------
//Picture slideshow
//--------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

// Skifte bilde
function changeSlides(n) {
  showSlides(slideIndex += n);
}
// Hovedfunksjonen
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length){
    slideIndex = 1
  } 
  if (n < 1){
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  

  slides[slideIndex-1].style.display = "block"; 
}
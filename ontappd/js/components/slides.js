//--------------------------------------------------
//Slideshow
//--------------------------------------------------

// Når siden lastes inn vises første bilde altså index 1
let slideIndex = 1;
showSlides(slideIndex); 

// Skifte bilde
function changeSlides(n) {
  showSlides(slideIndex += n); // n er spesifisert i html som -1 for forrige bilde og 1 for neste bilde
}
// Hovedfunksjonen
function showSlides(n) {
  let slides = document.getElementsByClassName("slides"); //henter alt med class mySlides fra html
  
  if (n > slides.length){ // Dersom telleren blir større en antall bilder blir indexen 1 og første bilde vises
    slideIndex = 1
  } 
  if (n < 1){
    slideIndex = slides.length; // Dersom telleren blir mindre enn 1 blir indexen til antall bilder og siste bilde vises
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Skjuler alle bildene
  }
  

  slides[slideIndex-1].style.display = "block"; // Viser kun bilde som er indexert-1, pga 0-indexering
}
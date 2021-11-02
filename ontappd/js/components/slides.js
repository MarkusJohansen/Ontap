//--------------------------------------------------
//Picture slideshow
//--------------------------------------------------

let i = 0;
let images = [];
let imagetext = [];
let time = 3000; // 3000ms = 3 sekunder

// Bildeliste
images[0] = '../image/slideshow/rodvin.jpg';
images[1] = '../image/slideshow/ol.jpg';
images[2] = '../image/slideshow/kasseol.jpg';
images[3] = '../image/slideshow/maltpose.jpg';
images[4] = '../image/slideshow/korkemaskin.jpg';
images[5] = '../image/slideshow/kjolingssystem.jpg';
images[6] = '../image/slideshow/bryggemaskin.jpg';
            
// Bildetekstliste
imagetext[0] = "Gjæringskar med rødvin";
imagetext[1] = "Gjæringskar med øl";
imagetext[2] = "Kasser med øl til interessegrupperulette i høsten 2019";
imagetext[3] = "Pose med malt";
imagetext[4] = "Korkemaskin";
imagetext[5] = "Vannkjølingssystem til brygging";
imagetext[6] = "Ølbryggemaskin med sil";



//Bytte bilde og bildetekst i samme funksjon
function change(){
    document.slide.src = images[i];
    document.getElementById("textimage").innerHTML = imagetext[i]

    if (i < images.length - 1){ //indeksen øker så lenge den ikke går lenger enn indeksen til antall bilder
        i++;  
    }else{
        i = 0; // når den øker til mer enn indeksen så går den tilbake til null
    }
    setTimeout('change()', time); //kjører funksjonen hvert tredje sekund
}

window.onload = change; //kjører funksjonen med enganng siden er lastet inn
// Funksjonen som sender åpner mail hos brukeren og kopierer det de har skrevet in input feltene med til mailen.
function sendEmail(){
    // Henter verdiene fra html dokumentet
    const name = document.querySelector("#form_name").value;
    const subject = document.querySelector("#form_subject").value;
    const message = document.querySelector("#form_message").value;

    var body = encodeURI(message)+"%0D%0A"+"%0D%0A"+encodeURI(name); // Definener hva som skal med i "kroppen" på mailen. 
    window.open('Mailto:Ontappd@gmail.com'+'?subject='+encodeURI(subject)+'&body='+body, '_blank'); // Åpner vinduet i en annen fane hvor brukeren kan se over mailen og sende den.
    return false;
}


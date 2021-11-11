//Henter den uordnede listen fra HTML dokumentet.
const ul = document.getElementById("tutorial_list");

//Lager en liste som for-loopen skal iterere gjennom. Den inneholder informasjonen som skal være i hvert liste-element.
const tutorial = ["Lage eller kjøpe ferdig maltet korn.", "Putte kornet i bryggemaskinen for mesking.", "Starte kokeprosessen i bryggemaskinen og tilsette humle gjennom humlenettet.",
 "Gjære ølen i sterilisert ballong.", "Overføre ølen til flasker og tilsette sukker for karbonering.", "Flaske ølen vha. en flaskemaskin.", "Vaske brukt utstyr."];    


//En enkel for-loop som skal gå gjennom listen over og henter ut informasjonen som streng.
 for (let i = 0; i < tutorial.length; i++) {
    
    //Lager liste-elementene som sjekklisten skal bestå av.
    let li = document.createElement("li");
    li.className = "list_elements";

    //Lager et span-element med listeverdiene som indre HTML. Velger å bruke span fordi det er lett å påvirke med CSS. Gir den class navn slik at man kan bruke CSS.
    let span = document.createElement("span");
    span.innerHTML = tutorial[i];
    span.className = "list_span";




    //Lager et input-element med type=checkbox, slik at de virker som sjekkbokser for listen. Gir dem også en class slik at man kan style boksene i CSS. 
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkboxes";
    checkbox.setAttribute("onclick", "checked_boxes()");

    //Liste elementet appender både sjekboksene og span elementene. Liste elementene appendes inn i ul-elementet.
    li.appendChild(checkbox);
    li.appendChild(span);
    ul.appendChild(li);
}

//Henter et span element fra HTML dokumentet hvor det skal stå hvor mange steg som er utført.
const antallsjekket = document.getElementById("antallchecked");
antallsjekket.innerHTML = "0/7 steg gjennomført";

//En funksjon som oppdaterer hvor mange steg som er gjennomført.
function checked_boxes() {
    let allebokser = document.querySelectorAll("input[type=checkbox]");
    let avhuketbokser = document.querySelectorAll("input[type=checkbox]:checked");
    antallsjekket.innerHTML = avhuketbokser.length + "/" + allebokser.length + " steg gjennomført";
}

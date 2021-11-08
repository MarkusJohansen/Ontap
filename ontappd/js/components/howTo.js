
const ul = document.getElementById("tutorial_list");
const tutorial = ["Lage eller kjøpe ferdig maltet korn.", "Putte kornet i bryggemaskinen for mesking.", "Starte kokeprosessen i bryggemaskinen og tilsette humle gjennom humlenettet.",
 "Gjære ølen i sterilisert ballong.", "Overføre ølen til flasker og tilsette sukker for karbonering.", "Flaske ølen vha. en flaskemaskin.", "Vaske brukt utstyr."];    

for (let i = 0; i < tutorial.length; i++) {
    let li = document.createElement("li")

    let span = document.createElement("span")
    span.innerHTML = tutorial[i]
    span.className = "list_span";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkboxes"
    checkbox.setAttribute("onclick", "checked_boxes()")

    li.appendChild(checkbox)
    li.appendChild(span)
    ul.appendChild(li)
}


const antallsjekket = document.getElementById("antallchecked")
antallsjekket.innerHTML = "0/7 steg gjennomført"


function checked_boxes() {
    let allebokser = document.querySelectorAll("input[type=checkbox]")
    let avhuketbokser = document.querySelectorAll("input[type=checkbox]:checked")
    antallsjekket.innerHTML = avhuketbokser.length + "/" + allebokser.length + " steg gjennomført"
}
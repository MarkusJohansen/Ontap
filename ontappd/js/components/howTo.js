
const ul = document.getElementById("tutorial_list");
const tutorial = ["a", "b", "c", "d", "e"];    

for (let i = 0; i < tutorial.length; i++) {
    let li = document.createElement("li")

    let span = document.createElement("span")
    span.innerHTML = tutorial[i]
    console.log(tutorial[i])
    console.log(span)

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkboxes"
    checkbox.setAttribute("onclick", "checked_boxes()")

    li.appendChild(checkbox)
    li.appendChild(span)
    ul.appendChild(li)
}


const antallsjekket = document.getElementById("antallchecked")
antallsjekket.innerHTML = "0/5 steg gjennomført"


function checked_boxes() {
    let allebokser = document.querySelectorAll("input[type=checkbox]")
    let avhuketbokser = document.querySelectorAll("input[type=checkbox]:checked")
    antallsjekket.innerHTML = avhuketbokser.length + "/" + allebokser.length + " steg gjennomført"
}


function howtoliste() {
    const ul = document.getElementById("tutorial_list");
    const li = document.createElement("li")
    const tutorial = ["a", "b", "c", "d", "e"];
    const span = document.createElement("span")
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    


    for (let i = 0; i < tutorial.length; i++) {
        li.appendChild(checkbox)
        ul.appendChild(li)
        li.appendChild(span)
        span.appendChild(document.createTextNode(tutorial[i]))
    }

}
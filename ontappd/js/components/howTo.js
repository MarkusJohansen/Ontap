
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

    li.appendChild(checkbox)
    li.appendChild(span)
    ul.appendChild(li)
}


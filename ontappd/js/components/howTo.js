
const ul = document.getElementById("tutorial_list");
const li = document.createElement("li");
const tutorial = ["a", "b", "c", "d", "e"];
const span = document.createElement("span");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
    


for (let i = 0; i < tutorial.length; i++) {
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    span.innerHTML(tutorial[i]);
}


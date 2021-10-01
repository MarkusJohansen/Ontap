let gender = document.querySelector(".gender"); //usikkert?
let bodyweight = document.getElementById("height");
let height = document.getElementById("bodyweight");
let alko = document.getElementById("alko");
let drikkestart = document.getElementById("drikkestart");

console.log("Hei")

function promille(){
    console.log("Promillekalkulator")
    let x = 0
    if(gender.value == "Kvinne"){
        console.log("slufse")
        x = parseFloat(alko.value)/(parseFloat(bodyweight.value) * 0.60);
    } else {
        console.log("kølle")
        x = parseFloat(alko.value)/(parseFloat(bodyweight.value) * 0.60);
    }

    let y = 0.15 * parseFloat(drikkestart.value);
    let p = x - y;
    console.log(p)
}

function abv(){

}

function spleis(){

}

function literpris(){

}
let gender = document.querySelector(".gender"); //usikkert?
let bodyweight = document.getElementById("height");
let height = document.getElementById("bodyweight");
let alko = document.getElementById("enheter alkohol") * 12 ;
let drikkestart = document.getElementById("drikkestart");

console.log("Hei")

function promille(){
    console.log("Promillekalkulator")
    let x = 0
    
    if(gender.value == "Kvinne"){
        x = parseFloat(alko.value)/(parseFloat(bodyweight.value) * 0.60);
    }else {
        x = parseFloat(alko.value)/(parseFloat(bodyweight.value) * 0.70);
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
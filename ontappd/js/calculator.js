/*general
function gid(x){
    document.getElementById("x")
}
*/

//Promille kalkulator

let kvinne = document.getElementById("kvinne");
let mann = document.getElementById("mann");
let vekt = document.getElementById("kroppsvekt")
let alkohol = document.getElementById("enheter")
let drikkestart = document.getElementById("drikkestart")
let prom = document.getElementById("p_output")

function promille(){
    console.log("promillekalkulator starter..")
    let x = 0;

    if(kvinne.checked){
        x = (parseFloat(alkohol.value)* 12.8 )/(parseFloat(vekt.value) * 0.60); // 12.8g alkohol/per enhet * antall enheter = antall gram alkohol

    }else if(mann.checked){
        x = (parseFloat(alkohol.value)* 12.8 )/(parseFloat(vekt.value) * 0.70); 

    }else{
        console.log("No gender picked...");
        prom.innerHTML = "No gender picked. Try again, pick a gender.";
        return false
    }

    let y = 0.15 * parseFloat(drikkestart.value);
    console.log("y = " + y)
    let p = x - y; //følger formel fra NHI: Alkohol i gram / (kroppsvekten i kg x 0.70) - (0,15 x timer fra drikkestart) = promille
    console.log("p = " + p);

    prom.innerHTML = "Promille = " + p;
}
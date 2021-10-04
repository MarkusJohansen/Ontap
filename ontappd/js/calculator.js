/*beer cursor https://www.youtube.com/watch?v=rfpRZ2t_BrQ&ab_channel=DesignCourse
const cursor = document.querySelector("#cursor");

document.addEventListener('mousemove', e => { //e?
    cursor.setAttribute("style", "top: " + (e.pageY-10) + "px; left: " + (e.pageX-10) + "px;") //-10 fixes of point
})
*/

//Promille kalkulator
let kvinne = document.getElementById("Kvinne");
let mann = document.getElementById("Mann");
let bodyweight = document.getElementById("bodyweight");
let alko = document.getElementById("alko");
let drikkestart = document.getElementById("drikkestart");
let prom = document.getElementById("svar_promille");

function promille(){
    console.log("Promillekalkulator")
    let x = 0
    
    if(kvinne.checked){
        x = parseFloat(alko.value * 12)/(parseFloat(bodyweight.value) * 0.60);
    }else if(mann.checked){
        x = parseFloat(alko.value * 12)/(parseFloat(bodyweight.value) * 0.70);
    }else {
        prom.innerHTML = "Ingen gender input, prøv igjen"
        console.log("No gender input")
        return false
    }
    let y = 0.15 * parseFloat(drikkestart.value);
    let p = x - y;
    prom.innerHTML = p + " I promille"
}
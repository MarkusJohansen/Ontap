//--------------------------------------------------
//Promille kalkulator
//--------------------------------------------------
let kvinne = document.getElementById("kvinne");
let mann = document.getElementById("mann");
let vekt = document.getElementById("kroppsvekt")
let alkohol = document.getElementById("enheter")
let drikkestart = document.getElementById("drikkestart")
let prom = document.getElementById("p_output")

function check_if_zero_print(value,output){//bestemmer output avhengig av om input <= 0 eller input > 0
    if(value <= 0){
        output.innerHTML = "Promille = 0";//Dersom promillen er 0 eller mindre utifra formelen er minste mulige verdi av promille i blodet 0 eller tilnærmet null og derfor setter vi verdien til 0 i dette intervallet.
    }
    else{
        output.innerHTML = "Promille = " + parseFloat(value).toFixed(3); //viser promille verdien på nettsiden, med opptil tre decimaler.
    }
    console.log("promille = " + p);//logger den faktiske promille verdien i konsollen.
}

function BAC_calculation(alcohol_by_units, weight, hours_from_start, output, female_button, male_button){//beregningene
    let x = 0;

    if(female_button.checked){
        x = (parseFloat(alcohol_by_units.value)* 12.8 )/(parseFloat(weight.value) * 0.60); // 12.8g alkohol/per enhet * antall enheter = antall gram alkohol
    }else if(male_button.checked){
        x = (parseFloat(alcohol_by_units.value)* 12.8 )/(parseFloat(weight.value) * 0.70); 
    }else{
        console.log("No gender picked...");
        output.innerHTML = "No gender picked. Try again, pick a gender.";
        return false
    }

    let y = 0.15 * parseFloat(hours_from_start.value);
    console.log("y = " + y)
    return promille = x - y;
}

function promille(){//Funksjonen som får et kall fra submit knappen. Main funksjon for kalkulatoren.
    console.log("promillekalkulator starter..")
    BAC_calculation(alkohol, vekt, drikkestart, prom, kvinne, mann)
    check_if_zero_print(promille,prom);
}
/*BUGS:
-Knapp refresher ikke resultatet, du kan ikke endre uten reload
-trykker du inn gender og submitter får du promille NaN. gjør alle felt required
*/


//--------------------------------------------------
//Spleise kalkulator
//--------------------------------------------------

//--------------------------------------------------
//ABV kalkulator
//--------------------------------------------------

const starting_gravity = document.getElementById("starting_gravity");
const end_gravity = document.getElementById("end_gravity");
const output_abv = document.getElementById("output_abv");

function ABV_calculator(){
    const abv = ((starting_gravity.value)-(end_gravity.value))*131.25;
    output_abv.value = abv;
}
//--------------------------------------------------
//Navbar
//--------------------------------------------------

/*
<nav id="navbar">
<button id="kalk" onclick="window.location.href='../html/promille.html';">Promille Kalkulatoren</button>
<button onclick="window.location.href='../html/abv.html';">ABV Kalkulatoren</button>
<button onclick="window.location.href='../html/spleise.html';">Spleise Kalkulatoren</button>
<button onclick="window.location.href='../html/howto.html';">How to</button>
<button onclick="window.location.href='../html/contactus.html';">Contact us</button>
</nav>
*/

//*CONSTRUCTING BUTTONS IN NAVBAR
let navbar = document.querySelector("#navbar");

nav_buttons = [
    ["abv.html","ABV Kalkulator"],
    ["promille.html","Promille kalkulator"],
    ["spleise.html","Spleise Kalkulator"],
    ["howto.html","How to"],
    ["contactus.html","Contact us"]
]

for(let i = 0; i < nav_buttons.length; i++){
    const x = document.createElement("button");
    x.innerHTML = nav_buttons[i][1];
    x.setAttribute("onclick","window.location.href='../html/" + nav_buttons[i][0] + "';");
    navbar.appendChild(x);
}

/*UNIQUE STYLE FOR CURRENT VISITED "BUTTON_LINK"
function set_home(){
    for()
        if (element.hasAttribute("id","home"));
            element.setAttribute("id","");
    clicked_element.setAttribute("id","home");
}*/

//--------------------------------------------------
//Picture slideshow
//--------------------------------------------------

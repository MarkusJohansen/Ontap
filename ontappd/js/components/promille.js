//*----------------------------------------------------------------
//*DECLARING GLOBAL VARIABLes
//*----------------------------------------------------------------

let kvinne = document.getElementById("kvinne");
let mann = document.getElementById("mann");
let vekt = document.getElementById("kroppsvekt")
let alkohol = document.getElementById("enheter")
let drikkestart = document.getElementById("drikkestart")
let prom = document.getElementById("p_output")

//*----------------------------------------------------------------
//*FUNCTION FOR CALCULATION AND INVALID VALUE CHECK
//*----------------------------------------------------------------

function BAC_calculation(alcohol_by_units, weight, hours_from_start, output, female_button, male_button){
    //*----------------------------------------------------------------
    //*INPUT FIELD CHECK
    //*----------------------------------------------------------------
    if(alcohol_by_units.value == "" || weight.value == "" || hours_from_start.value == ""){ //if any text input is blank, the give error output
        output.value = "Alle feltene må fylles ut! Prøv igjen."
        return false //breaks function call
    }
    
    //*----------------------------------------------------------------
    //*GENDER CHECK AND GENDER BASED CALCULATION
    //*----------------------------------------------------------------

    // 12.8g alkohol/per enhet * antall enheter = antall gram alkohol i kroppen. Deler dette på kroppsvekt * prosent fordeling i kroppsvekt
    if(female_button.checked){
        x = (parseFloat(alcohol_by_units.value)* 12.8 )/(parseFloat(weight.value) * 0.60); //alkoholen fordeles på 60% av kroppsvekten hos kvinner
    }else if(male_button.checked){
        x = (parseFloat(alcohol_by_units.value)* 12.8 )/(parseFloat(weight.value) * 0.70); //alkoholen fordeles på 70% av kroppsvekten hos menn
    }else{
        output.value = "No gender picked. Try again, pick a gender."; //error output for no gender checked
        return false //breaks function
    }

    //*----------------------------------------------------------------
    //*CALCULATION OF BAC PART 2: ACCOUNT FOR DECREASE OF BAC OVER TIME
    //*----------------------------------------------------------------
    let y = 0.15 * parseFloat(hours_from_start.value); //the decrease based on hours_from_start
    promille_value = x - y; //new amount after subtracting the decreased value

    //*----------------------------------------------------------------
    //*OUTPUT
    //*----------------------------------------------------------------
    if(promille_value <= 0){
        output.value = "Promille = 0";//Dersom promillen er 0 eller mindre utifra formelen er minste mulige verdi av promille i blodet 0 eller tilnærmet null og derfor setter vi verdien til 0 i dette intervallet.
    }else{
        output.value = "Promille = " + parseFloat(promille_value).toFixed(3); //viser promille verdien på nettsiden, med opptil tre decimaler.
    }
}

//*----------------------------------------------------------------
//*Function is called through another function
//*----------------------------------------------------------------
function promille(){
    BAC_calculation(alkohol, vekt, drikkestart, prom, kvinne, mann)
}
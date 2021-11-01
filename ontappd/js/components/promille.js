let kvinne = document.getElementById("kvinne");
let mann = document.getElementById("mann");
let vekt = document.getElementById("kroppsvekt")
let alkohol = document.getElementById("enheter")
let drikkestart = document.getElementById("drikkestart")
let prom = document.getElementById("p_output")

function BAC_calculation(alcohol_by_units, weight, hours_from_start, output, female_button, male_button){//beregningene
    //*CHECKS IF ALL TEXT FIELDS ARE fulfilled
    if(alcohol_by_units.value == "" || weight.value == "" || hours_from_start.value == ""){
        console.log("ERROR: alle felter er ikke fyllt")
        output.innerHTML = "Alle feltene må fylles ut! Prøv igjen."
        return false
    }
    
    //*CALCULATION OF BAC PART 1: GENDER DIFFERENCE
    //?Why shouldnt i declare x before conditional statements?
    if(female_button.checked){
        x = (parseFloat(alcohol_by_units.value)* 12.8 )/(parseFloat(weight.value) * 0.60); // 12.8g alkohol/per enhet * antall enheter = antall gram alkohol
    }else if(male_button.checked){
        x = (parseFloat(alcohol_by_units.value)* 12.8 )/(parseFloat(weight.value) * 0.70); 
    }else{
        console.log("ERROR: No gender checked");
        output.innerHTML = "No gender picked. Try again, pick a gender.";
        return false
    }

    //*CALCULATION OF BAC PART 2: ACCOUNT FOR DECREASE OF BAC OVER TIME
    let y = 0.15 * parseFloat(hours_from_start.value);
    promille_value = x - y;

    //*CHECKS IF VALUE = 0, THEN DOES OUTPUT
    if(promille_value <= 0){
        output.innerHTML = "Promille = 0";//Dersom promillen er 0 eller mindre utifra formelen er minste mulige verdi av promille i blodet 0 eller tilnærmet null og derfor setter vi verdien til 0 i dette intervallet.
    }else{
        output.innerHTML = "Promille = " + parseFloat(promille_value).toFixed(3); //viser promille verdien på nettsiden, med opptil tre decimaler.
    }

    console.log("promille = " + promille_value);//logger den faktiske promille verdien i konsollen.
}

function promille(){//Funksjonen som får et kall fra submit knappen. Main funksjon for kalkulatoren.
    console.log("----------------------------")
    console.log("promillekalkulator starter..")
    BAC_calculation(alkohol, vekt, drikkestart, prom, kvinne, mann)
}

/*
    - Fix a output field
*/
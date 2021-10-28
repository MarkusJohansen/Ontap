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
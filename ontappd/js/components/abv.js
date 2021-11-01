//--------------------------------------------------
//ABV kalkulator
//--------------------------------------------------

const starting_gravity = document.getElementById("starting_gravity");
const end_gravity = document.getElementById("end_gravity");
const output_abv = document.getElementById("output_abv");

function ABV_calculator(){
    if (starting_gravity == 0 || end_gravity == 0){
        output_abv.value = "Fyll ut begge felt."
    } else{
        const abv = ((starting_gravity.value)-(end_gravity.value))*131.25;
        if (abv < 0){
            output_abv.value = "Uyldig verdi";
        }
        else {
            output_abv.value = abv;
        }
    }
}
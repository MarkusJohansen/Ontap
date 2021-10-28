const starting_gravity = document.getElementById("starting_gravity");
const end_gravity = document.getElementById("end_gravity");
const output_abv = document.getElementById("output_abv");

function ABV_calculator(){
    const abv = ((starting_gravity.value)-(end_gravity.value))*131.25;
    const insufficient_values = "Uyldig verdi"
    if (abv < 0){
        output_abv.value = insufficient_values;
    }
    else {
        output_abv.value = abv;
    }
    
}
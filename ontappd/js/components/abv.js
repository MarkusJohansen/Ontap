//--------------------------------------------------
//ABV kalkulator
//--------------------------------------------------

const starting_gravity = document.getElementById("starting_gravity");
const end_gravity = document.getElementById("end_gravity");
const output_abv = document.getElementById("output_abv");

function ABV_calculator(){
<<<<<<< HEAD
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
=======
    const abv = ((starting_gravity.value)-(end_gravity.value))*131.25;
    const insufficient_values = "Uyldig verdi"
    if (abv < 0){
        output_abv.value = insufficient_values;
    }else{
        output_abv.value = abv;
    }   
>>>>>>> 70522a3f7e7509b5d578d6abc3c99009095d99b8
}
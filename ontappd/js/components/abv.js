//--------------------------------------------------
//ABV kalkulator
//--------------------------------------------------
//Henter inn elementer fra html dokumentet
const starting_gravity = document.getElementById("starting_gravity");
const end_gravity = document.getElementById("end_gravity");
const output_abv = document.getElementById("output_abv");

//Funskjonen som regner ut abv verdien.
function ABV_calculator(){
    if (starting_gravity.value == "" || end_gravity.value == ""){ // Her sjekker funksjonen om begge feltene er fylt ut.
        output_abv.value = "Vennligst fyll ut begge felt.";
        return false; //Breaks function call
    }else{
        const abv = ((starting_gravity.value)-(end_gravity.value))*131.25; //Selve regneoperasjonen i funksjonen.
        if (abv <= 0){
            output_abv.value = "Ending gravity må være mindre enn starting gravity."; //Dette er en ugyldig verdig og derfor får man feilmelding.
        }
        else {
            output_abv.value = abv; //Her skrives abv verdien ut
        }
    } 
}
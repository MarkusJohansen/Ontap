const antallPersoner = document.getElementById("antallPersoner");
const antallLiter = document.getElementById("antallLiter");
const totalKostnad = document.getElementById("totalKostnad");
const output1 = document.getElementById("literPerPers");
const output2 = document.getElementById("kronerPerPers");
const output3 = document.getElementById("kronerPerLiter");


function spleisKalkulator(){
    const antallPersonerValue = antallPersoner.value
    const antallLiterValue = antallLiter.value 
    const totalKostnadValue = totalKostnad.value
    if (antallPersonerValue<1 ){
        document.getElementById("span1").innerText="* Tallet må være 1 eller større "
        document.getElementById("span1").style.display="inline"
    }
    else{
        document.getElementById("span1").style.display="none"

    }
    if (antallLiterValue<1 ){
        document.getElementById("span2").innerText="*Tallet må være 1 eller større "
        document.getElementById("span2").style.display="inline"
    }
    else{
        document.getElementById("span2").style.display="none"
    }

    if ( totalKostnadValue <1 ){
        document.getElementById("span3").innerText="*Tallet må være 1 eller større "
        document.getElementById("span3").style.display="inline"
    }
    else{
        document.getElementById("span3").style.display="none"
    }
    const literPerPerson = antallLiterValue/antallPersonerValue
    const kronerPerPerson = totalKostnadValue/antallPersonerValue
    const kronerPerLiter = totalKostnadValue/antallLiterValue
    output1.value= literPerPerson
    output2.value= kronerPerPerson
    output3.value= kronerPerLiter

    
}



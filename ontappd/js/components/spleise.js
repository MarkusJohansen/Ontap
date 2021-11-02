const antallPersoner = document.getElementById("antallPersoner")
const antallLiter = document.getElementById("antallLiter")
const totalKostnad = document.getElementById("totalKostnad")
const submit = document.getElementById("submit")
const output1 = document.getElementById("literPerPers")
const output2 = document.getElementById("kronerPerPers")
const output3 = document.getElementById("kronerPerLiter")


submit.addEventListener("click",function(event){
    const antallPersonerValue = antallPersoner.value
    const antallLiterValue = antallLiter.value 
    const totalKostnadValue = totalKostnad.value
<<<<<<< HEAD
    if (antallPersonerValue=="" || antallPersonerValue<1 ){
        document.getElementById("span1").innerText="* Tallet må være 1 eller større "
=======
    if (antallPersonerValue == "" || antallPersonerValue<1 ){
        document.getElementById("span1").innerText="* Tallet må være 1 eller større enn 1"
>>>>>>> bc92bdc5322500b512ad0e5f1e8cf8de0f9a1c84
        document.getElementById("span1").style.display="inline"
    }
    else{
        document.getElementById("span1").style.display="none"

    }
    if (antallLiterValue=="" || antallLiterValue<1 ){
        document.getElementById("span2").innerText="*Tallet må være 1 eller større"
        document.getElementById("span2").style.display="inline"
    }
    else{
        document.getElementById("span2").style.display="none"
    }

    if (totalKostnadValue=="" || totalKostnadValue <1 ){
        document.getElementById("span3").innerText="*Tallet må være 1 eller større"
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
    event.preventDefault()

    
})


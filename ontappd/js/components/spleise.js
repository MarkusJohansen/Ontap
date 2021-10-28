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
    const literPerPerson = antallLiterValue/antallPersonerValue
    const kronerPerPerson = totalKostnadValue/antallPersonerValue
    const kronerPerLiter = totalKostnadValue/antallLiterValue
    output1.value= literPerPerson
    output2.value= kronerPerPerson
    output3.value= kronerPerLiter
    event.preventDefault()

    
})


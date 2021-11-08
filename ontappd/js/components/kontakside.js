function sendEmail(){
    const name = document.querySelector("#form_name").value;
<<<<<<< HEAD
    //const mail = document.querySelector("#form_mail").value;
=======
>>>>>>> f759bfa9118fbd34d3fca1c21677f1a4bb4039ab
    const subject = document.querySelector("#form_subject").value;
    const message = document.querySelector("#form_message").value;

    var body = encodeURI(message)+"%0D%0A"+"%0D%0A"+encodeURI(name);
    window.open('Mailto:Ontappd@gmail.com'+'?subject='+encodeURI(subject)+'&body='+body, '_blank');
    return false;
}


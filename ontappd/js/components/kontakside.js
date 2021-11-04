function sendEmail(){
    const name = document.querySelector("#form_name").value;
    const mail = document.querySelector("#form_mail").value;
    const subject = document.querySelector("#form_subject").value;
    const message = document.querySelector("#form_message").value;

    var body = encodeURI(message)+"%0D%0A"+"%0D%0A"+encodeURI(name);
    window.open('Mailto:Ontappd@gmail.com'+'?subject='+encodeURI(subject)+'&body='+body, '_blank');
    return false;
}


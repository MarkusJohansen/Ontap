function sendEmail(){
    const name = document.querySelector("#form_name");
    const mail = document.querySelector("#form_mail");
    const subject = document.querySelector("#form_subject");
    const message = document.querySelector("#form_message");
    const submit = document.querySelector("#form_submit");

    var body = encodeURI(message)+"%0D%0A"+"%0D%0A"+encodeURI(name)+"%0D%0A"+encodeURI(subject);
    window.location.href='mailto:' +'Ontappd@gmail.com'+'?subject='+encodeURI(subject)+'&body='+body;
    return false;
}


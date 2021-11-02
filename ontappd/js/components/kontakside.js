const name = document.querySelector("#form_name");
const mail = document.querySelector("#form_mail");
const subject = document.querySelector("#form_subject");
const message = document.querySelector("#form_message");
const submit = document.querySelector("#form_submit");

function sendEmail(e){
    e.preventDefault();
    window.open('mailto:Ontappd@gmail.com?subject=subject&body=body');
}

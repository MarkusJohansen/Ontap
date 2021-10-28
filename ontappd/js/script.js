
//--------------------------------------------------
//Topbox
//--------------------------------------------------

//*CONSTRUCTING TOPBOX DIV
//Skal vi konstruere ontap div? ref:structure
//*APPENDING PICTURES AS CHILDS TO TOPBOX

//--------------------------------------------------
//Navbar
//--------------------------------------------------

//*CONSTRUCTING NAVBAR
let head = document.querySelector("#header") 
function navbar_component(){
    console.log("navbar being constructed");
    let y = document.createElement("nav");
    y.id = "navbar";
    head.appendChild(y);

    //*CONSTRUCTING BUTTONS IN NAVBAR
    console.log("nav buttons is being constructed");
    nav_buttons = [
        ["abv.html","ABV Kalkulator"],
        ["promille.html","Promille kalkulator"],
        ["spleise.html","Spleise Kalkulator"],
        ["howto.html","How to"],
        ["contactus.html","Contact us"]
    ]

    for(let i = 0; i < nav_buttons.length; i++){
        const x = document.createElement("button");
        x.setAttribute("onclick","window.location.href='../html/" + nav_buttons[i][0] + "';");
        x.innerHTML = nav_buttons[i][1];
        y.appendChild(x);
    }
}

//*SETS STYLE ACCORDING TO CURRENT PAGE
//TODO: Fikse denne funksjonen, som gjør at style endrer seg etter hvilken du er på finn en måte å finne clicked element
/*function set_currentpage_style(navbar){
    console.log("Changed current page style");
    console.log(navbar)
    for(i=0; i < navbar.firstchild; i++){
        console.log(navbar.firstchild[i]);
        if (navbar.hasAttribute("id","home"));
            button.id = "";
    clicked_element.setAttribute("id","home");
    }
}
set_currentpage_style(navbar)*/

//--------------------------------------------------
//Footer
//--------------------------------------------------

//*CONSTRUCTS DIV WITHIN FOOTER
let pagebottom = document.querySelector("#footer");

function footer_div(){
    let footerDiv = document.createElement("div");
    footerDiv.id = "contact_info";

    let FootHeader = document.createElement("h3");
    FootHeader.value = "Contact us!"
    footerDiv.appendChild(FootHeader);

    let footer_mail = document.createElement("p");
    footer_mail.value = "Mail:"
    footerDiv.appendChild(footer_mail);

    let mail_link = document.createElement("a");
    mail_link.setAttribute("href=", "Mailto:Ontappd@gmail.com");
    mail_link.value = "Ontappd@gmail.com";
    footer_mail.appendChild(mail_link);

    let footer_tlf = document.createElement("p");
    footer_tlf.value = "Tlf:";
    footerDiv.appendChild(footer_tlf);

    let tlf_link = document.createElement("a");
    tlf_link.setAttribute("href=", "tel:+4747474747");
    tlf_link.value = "+4747474747";
    footerDiv.appendChild(tlf_link);
    

    pagebottom.appendChild(x)
}
//*FILL DIV WITH PARAGRAPHS AND HEADINGS
//*ADD ONLINE LOGO

//--------------------------------------------------
//Main functions/function calls
//--------------------------------------------------
function header(){
    navbar_component();
}

function footer(){
    footer_div();
}

header();
footer();

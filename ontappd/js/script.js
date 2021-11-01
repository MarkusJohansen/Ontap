
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
    console.log("Footer is being constructed.");

    let footerDiv = document.createElement("div");
    footerDiv.id = "contact_info";

    footer_content = [
        ["h3","Kontakt oss!"],
        ["p", "Mail: Ontappd@gmail.com ", "Mailto:Ontappd@gmail.com"],
        ["p", "Tlf: +4747474747 ", "TEL:+4747474747"],
        ["p", "Chat med oss på Slack", "https://app.slack.com/client/T03S8TX18/C357EQS3U"],
        ["p", "Adresse: NTNU Gløshaugen, Realfagsbygget, A4-137", "https://use.mazemap.com/#v=1&zlevel=4&center=10.405053,63.415402&zoom=18.4&campusid=1&sharepoitype=poi&sharepoi=1000292593"]
    ]

    for (let i = 0;i<footer_content.length;i++){
        const x = document.createElement(footer_content[i][0]);
        footerDiv.appendChild(x);

        if (footer_content[i].length > 2){
            const y = document.createElement("a")
            y.setAttribute("href", footer_content[i][2]);
            y.innerHTML = footer_content[i][1]
            x.appendChild(y);
        } else{
            x.innerHTML = footer_content[i][1];
        }
    }
    pagebottom.appendChild(footerDiv);

}
//*FILL DIV WITH PARAGRAPHS AND HEADINGS
//*ADD ONLINE LOGO

//--------------------------------------------------
//Main functions/function calls
//--------------------------------------------------
function header(){
    navbar_component();
}


header();
footer_div();

let head = document.querySelector("#header") 
let pagebottom = document.getElementById("footer");

//--------------------------------------------------
//Topbox
//--------------------------------------------------

//*CONSTRUCTING TOPBOX DIV
function topbox_component(){
    let topbox_div = document.createElement("div");
    topbox_div.id = "topbox";
    head.appendChild(topbox_div)

    //*SETTING PICTURE ATTRIBUTES IN LIST IMAGES
    images = [
        ["skaal1", "skaal", "skaal.png", "Skål1"],
        ["ontap_logo", "", "Ontap_logo_white.png", "Ontap logo"],
        ["skaal2", "skaal", "skaal.png", "Skål2"]
    ]

    //*APPENDING PICTURES AS CHILDS TO TOPBOX, WITH ATTRIBUTES
    console.log(images.length)
    for(let i = 0; i < images.length; i++){
        const img = document.createElement("img");

        img.id = images[i][0];
        img.setAttribute("class", images[i][1]);
        img.src = "../image/" + images[i][2];
        img.setAttribute("alt", images[i][3]);

        topbox_div.appendChild(img);
    }
}

//--------------------------------------------------
//Navbar
//--------------------------------------------------

//*CONSTRUCTING NAVBAR
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
set_currentpage_style(navbar)

noe eventlistener shit*/

//--------------------------------------------------
//Footer
//--------------------------------------------------

//*CONSTRUCTS DIV WITHIN FOOTER
let pagebottom = document.querySelector("#footer");

function footer_div(){
    let x = document.createElement("div");
    x.id = "contact_info";
    pagebottom.appendChild(x)
}
//*FILL DIV WITH PARAGRAPHS AND HEADINGS
//*ADD ONLINE LOGO

//--------------------------------------------------
//Main functions/function calls
//--------------------------------------------------
function header(){
    topbox_component();
    navbar_component();
}

function footer(){
    footer_div();
}

header();
footer();

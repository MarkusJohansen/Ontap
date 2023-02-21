let head = document.querySelector("#header"); 
let pagebottom = document.getElementById("footer");

//*--------------------------------------------------
//*TOPBOX
//*--------------------------------------------------

function topbox_component(){
    //*------------------------------------------------------
    //*MAIN TOPBOX
    //*------------------------------------------------------

    //constructing div within header id "topbox"
    const topbox_div = document.createElement("div");
    topbox_div.id = "topbox";
    head.appendChild(topbox_div);
    
    //constructing div within "topbox" with id "main_topbox"
    const main_topbox = document.createElement("div");
    main_topbox.id = "main_topbox";
    topbox_div.appendChild(main_topbox);

    //setting picture attributes in a matrice, with the attributes in order; "id","class","image name","alternative tekst"
    const images = [
        ["skaal1", "skaal", "skaal.png", "Skål1"],
        ["ontap_logo", "", "Ontap_logo_white.png", "Ontap logo"],
        ["skaal2", "skaal", "skaal.png", "Skål2"]
    ];

    //using a for loop to append images to the div with id "main_topbox"
    for(let i = 0; i < images.length; i++){
        const img = document.createElement("img");

        //setting all attributes  
        img.id = images[i][0];
        img.className = images[i][1];
        img.src = "image/" + images[i][2];
        img.alt = images[i][3];

        //appending image to the "main_topbox" div
        main_topbox.appendChild(img);
    }

    //*------------------------------------------------------
    //*MOBILE TOPBOX
    //*------------------------------------------------------

    //constructing div within "topbox" with id "secondary_topbox"
    const secondary_topbox = document.createElement("div");
    secondary_topbox.id = "secondary_topbox";
    topbox_div.appendChild(secondary_topbox);
    
    //setting attributes for header image in a list: ["id","name of the img file","alt"]
    const mobile_topbox_content = ["ontap_logo_barrel", "Ontap_Barrel.png","Ontap logo compressed version"];

    //appending images to the div with id "secondary_topbox"
    const x = document.createElement("img");
    x.id = mobile_topbox_content[0];
    x.src = "image/" + mobile_topbox_content[1];
    x.alt = mobile_topbox_content[2];
    secondary_topbox.appendChild(x);
}

//*--------------------------------------------------
//*NAVBAR
//*--------------------------------------------------

function navbar_component(){
    //*------------------------------
    //*BUTTONS AND MAIN NAVBAR
    //*------------------------------
    
    //constructing nav element and appends it to header
    const nav = document.createElement("nav");
    nav.setAttribute("id", "navbar");
    head.appendChild(nav);

    //constructing div with id navbar_buttons and appends it to nav
    const navbar_buttons = document.createElement("div");
    navbar_buttons.id = "navbar_buttons";
    nav.appendChild(navbar_buttons);

    //putting the navbuttons in a matrice, where every list is a button that contains properties: ["document to link to","text in button"]
    const nav_buttons = [
        ["index.html", "Hjem"],
        ["howto.html","Brygge selv"],
        ["spleise.html","Spleisekalkulator"],
        ["abv.html","ABV-kalkulator"],
        ["promille.html","Promillekalkulator"],
        ["contactus.html","Kontakt oss"]
    ];
    
    //using a for loop to append the buttons with properties from the matrice, to the navbar_buttons div
    for(let i = 0; i < nav_buttons.length; i++){
        const x = document.createElement("button");

        x.setAttribute("onclick","window.location.href='" + nav_buttons[i][0] + "';");
        x.innerHTML = nav_buttons[i][1];
        x.id = nav_buttons[i][0];
        x.className = "navbar_buttons";
        navbar_buttons.appendChild(x);
    }

    //*------------------------------
    //*DROPDOWN MENU
    //*------------------------------
    //constructing div with id dropdown, and appends it to nav
    const dropdown = document.createElement("div");
    dropdown.id ="dropdown";
    nav.appendChild(dropdown);

    //putting the navbuttons in a matrice, where every list is a a arrow that contains properties: ["id","img file"]
    const dropdown_arrows = [
        ["dropdown_up", "arrow-up.png"],
        ["dropdown_down","arrow-down.png"]
    ];

    //appending arrows as images to dropdown div with attributes from the matrice
    for(let i = 0; i < dropdown_arrows.length; i++){
        const x = document.createElement("img");

        x.id = dropdown_arrows[i][0];
        x.src = "image/" + dropdown_arrows[i][1];
        x.setAttribute("class","dropdown_arrows");

        dropdown.appendChild(x);
    }

    //variables for the two arrows6
    const up = document.getElementById("dropdown_up");
    const down = document.getElementById("dropdown_down");

    //when down arrow is clicked, navbar_buttons is displayed and up arrow is displayed, down arrow is hidden
    down.onclick = function() {
        navbar_buttons.style = "display: block;";
        down.style  = "display: none;";
        up.style = "display: block;";
    };

    //when up arrow is clicked, navbar_buttons is not displayed and down arrow is displayed, up arrow is hidden
    up.onclick = function() {
        navbar_buttons.style = "display: none;";
        down.style  = "display: block;";
        up.style = "display: none;";
    };

    //Going from dropdown to normal format you need to make sure that the navbar_buttons div isnt hidden, it also resets the arrows
    function UpscaleFromDropdown(mediaQuery) {
        if (mediaQuery.matches) {
            navbar_buttons.style = "display: none;";
            down.style  = "display: block;";
            up.style = "display: none;";
        }else{
            navbar_buttons.style = "display: block;";
        }
    }

    let mediaQuery = window.matchMedia('(max-width: 529px)');
    mediaQuery.addListener(UpscaleFromDropdown);

    //making sure that the arrows have the correct position when page is loaded
    if(navbar_buttons.style == "display: block"){
        console.log("navbuttons is displayed");
    }

    //makng sure arrows dont reset such that arrow down is shown when menu is down
    function newpage_dropdown_style(){
        navbar_buttons.style = "display: none;";
        down.style  = "display: block;";
    }

    //if mediaQuery is matched then run function
    if(mediaQuery.matches) {
        newpage_dropdown_style();
    }

    //Styling buttons for currently visited page
    const current_buttons = {
        backgroundColor: '#0d5474',
        borderColor : 'white',
        borderRadius: '10px'
    };

    var pathname = window.location.pathname;
    for (let i = 0; i < nav_buttons.length; i++) {
        let aTagHref = nav_buttons[i][0];

        if (pathname.includes(aTagHref)) { //Sjekker om dokumentnavnet finnes i pathname til siden. Hvis den gjør det så styler den knappen med "curren_buttons"
            Object.assign(document.getElementById(nav_buttons[i][0]).style, current_buttons);
        }
    }
}

//*--------------------------------------------------
//*FOOTER
//*--------------------------------------------------

//CONSTRUCTS DIV WITHIN FOOTER
function footer_div(){
    console.log("Footer is being constructed."); //Sjekker at funksjonen blir kalt i consollen.

    let footerDiv = document.createElement("div");
    footerDiv.id = "contact_info";

    let footer_content = [ //Her har vi en array med tag, navn og addresse
        ["h3","Kontakt oss!"],
        ["p", "Mail: Ontappd@gmail.com ", "Mailto:Ontappd@gmail.com"],
        ["p", "Chat med oss på Slack", "https://app.slack.com/client/T03S8TX18/C357EQS3U"],
        ["p", "Adresse: NTNU Gløshaugen, Realfagsbygget, A4-137", "https://use.mazemap.com/#v=1&zlevel=4&center=10.405053,63.415402&zoom=18.4&campusid=1&sharepoitype=poi&sharepoi=1000292593"]
    ];

    for (let i = 0;i<footer_content.length;i++){ //loopen går gjennom footer_content
        const x = document.createElement(footer_content[i][0]);
        footerDiv.appendChild(x);

        if (footer_content[i].length > 2){ // her blir de listene i footer_content som er lenger enn 2 om til en link som brukeren kan trykke på.
            const y = document.createElement("a");
            y.setAttribute("href", footer_content[i][2]); //Linken hentes fra footer_content.
            y.setAttribute("target", "_blank"); //Dette passer på at man blir sendt til en ny side.
            y.innerHTML = footer_content[i][1]; //Det som skal stå hentes fra footer_content.
            x.appendChild(y);
        }   
        else {
            x.innerHTML = footer_content[i][1]; //Her blir overskriften i footeren printet.
        }
    }
    //Under ble det gjort annerledes enn over siden bildet hadde litt mer attributes.
    const online_logo_link = document.createElement("a");
    online_logo_link.setAttribute("href", "https://online.ntnu.no/");
    online_logo_link.setAttribute("target", "_blank");
    footerDiv.appendChild(online_logo_link);

    const pic = document.createElement("img"); // lager en img tag og setter forskjellige attributes.
    pic.setAttribute("src", "image/online_logo.svg");
    pic.setAttribute("id", "online_logo_footer");
    pic.setAttribute("alt", "Online linjeforening sin logo");
    online_logo_link.appendChild(pic); // legger til bilde i "a" taggen slik at hvis man trykker på bildet blir man sendt til Online sin hjemmeside.

    pagebottom.appendChild(footerDiv);
}

//*--------------------------------------------------
//*FUNCTION CALLS
//*--------------------------------------------------
function header(){
    topbox_component();
    navbar_component();
}

header();
footer_div();

let head = document.querySelector("#header"); 
let pagebottom = document.getElementById("footer");

//--------------------------------------------------
//Topbox
//--------------------------------------------------

//*CONSTRUCTING TOPBOX DIV
function topbox_component(){
    let topbox_div = document.createElement("div");
    topbox_div.id = "topbox";
    head.appendChild(topbox_div);
    
    let main_topbox = document.createElement("div");
    main_topbox.id = "main_topbox"
    topbox_div.appendChild(main_topbox);

    //*SETTING PICTURE ATTRIBUTES IN LIST IMAGES FOR MAIN_TOPBOX
    let images = [
        ["skaal1", "skaal", "skaal.png", "Skål1"],
        ["ontap_logo", "", "Ontap_logo_white.png", "Ontap logo"],
        ["skaal2", "skaal", "skaal.png", "Skål2"]
    ];

    //*APPENDING PICTURES AS CHILDS TO MAIN_TOPBOX, WITH ATTRIBUTES
    for(let i = 0; i < images.length; i++){
        const img = document.createElement("img");

        img.id = images[i][0];
        img.setAttribute("class", images[i][1]);
        img.src = "../image/" + images[i][2];
        img.setAttribute("alt", images[i][3]);

        main_topbox.appendChild(img);
    }

    //*CONSTRUCTING TOPBOX ADJUSTED FOR MOBILE
    let secondary_topbox = document.createElement("div");
    secondary_topbox.id = "secondary_topbox"
    topbox_div.appendChild(secondary_topbox);
    
    //*SETTING CONTENT ATTRIBUTES IN LIST FOR SECONDARY_TOPBOX
    let mobile_topbox_content = [
        ["ontap_logo_barrel", "Ontap_Barrel.png"],
    ];

    //*APPENDING PICTURES AS CHILDS TO SECONDARY_TOPBOX, WITH ATTRIBUTES
    for(let i = 0; i < mobile_topbox_content.length; i++){
        const x = document.createElement("img");
        x.id = mobile_topbox_content[i][0];
        x.src = "../image/" + mobile_topbox_content[i][1];
        secondary_topbox.appendChild(x);
    }
}

//--------------------------------------------------
//Navbar
//--------------------------------------------------

//*CONSTRUCTING NAVBAR
function navbar_component(){
    console.log("navbar being constructed");
    let y = document.createElement("nav");
    y.setAttribute("id", "navbar");
    head.appendChild(y);

    //*CONSTRUCTING BUTTONS IN NAVBAR
    console.log("nav buttons is being constructed");
    let navbar_buttons = document.createElement("div")
    navbar_buttons.id = "navbar_buttons"
    y.appendChild(navbar_buttons)

    let nav_buttons = [
        ["main.html", "Hjem"],
        ["abv.html","ABV Kalkulator"],
        ["promille.html","Promille kalkulator"],
        ["spleise.html","Spleise Kalkulator"],
        ["howto.html","How to"],
        ["contactus.html","Kontakt Oss"]
    ];
    
    for(let i = 0; i < nav_buttons.length; i++){
        const x = document.createElement("button");
        x.setAttribute("onclick","window.location.href='../html/" + nav_buttons[i][0] + "';");
        x.innerHTML = nav_buttons[i][1];
        x.id = nav_buttons[i][0];
        x.setAttribute("class","navbar_buttons")
        navbar_buttons.appendChild(x);
    }
    //*CONSTRUCTING DROPDOWN SECTION FOR MOBILE
    let dropdown = document.createElement("div")
    dropdown.id ="dropdown"
    y.appendChild(dropdown)

    let dropdown_arrows = [
        ["dropdown_up", "arrow-up.png","dropdown_menu_up()"],
        ["dropdown_down","arrow-down.png","dropdown_menu_down()"]
    ];

    for(let i = 0; i < dropdown_arrows.length; i++){
        const x = document.createElement("img");
        x.id = dropdown_arrows[i][0];
        x.src = "../image/" + dropdown_arrows[i][1];
        x.setAttribute("class","dropdown_arrows")
        dropdown.appendChild(x);
    }

    const up = document.getElementById("dropdown_up");
    const down = document.getElementById("dropdown_down");
    const navbar_buttons_section = document.getElementById("navbar_buttons")

    down.onclick = function() {
        navbar_buttons_section.style = "display: block;"
        down.style  = "display: none;"
        up.style = "display: block;"
    }
    up.onclick = function() {
        navbar_buttons_section.style = "display: none;"
        down.style  = "display: block;"
        up.style = "display: none;"
    }

    //* Fixes going from dropdown to normal format (hopefully)
    function UpscaleFromDropdown(mediaQuery) {
        if (mediaQuery.matches) {
            navbar_buttons_section.style = "display: none;"
        }else{
            navbar_buttons_section.style = "display: block;"
        }
    }

    let mediaQuery = window.matchMedia('(max-width: 529px)')
    mediaQuery.addListener(UpscaleFromDropdown)

    //*Stylingvisited buttons
    const current_buttons = {
        backgroundColor: '#0d5474',
        borderColor : 'white',
        borderRadius: '10px'
    };

    var pathname = window.location.pathname;
    for (let i = 0; i < nav_buttons.length; i++) {
        let aTagHref = nav_buttons[i][0];
        if (pathname.includes(aTagHref)) {
            Object.assign(document.getElementById(nav_buttons[i][0]).style, current_buttons);
        }
    }
}

//--------------------------------------------------
//Footer
//--------------------------------------------------

//*CONSTRUCTS DIV WITHIN FOOTER

function footer_div(){
    console.log("Footer is being constructed.");

    let footerDiv = document.createElement("div");
    footerDiv.id = "contact_info";

    let footer_content = [
        ["h3","Kontakt oss!"],
        ["p", "Mail: Ontappd@gmail.com ", "Mailto:Ontappd@gmail.com"],
        ["p", "Tlf: +4747474747 ", "TEL:+4747474747"],
        ["p", "Chat med oss på Slack", "https://app.slack.com/client/T03S8TX18/C357EQS3U"],
        ["p", "Adresse: NTNU Gløshaugen, Realfagsbygget, A4-137", "https://use.mazemap.com/#v=1&zlevel=4&center=10.405053,63.415402&zoom=18.4&campusid=1&sharepoitype=poi&sharepoi=1000292593"]
    ];

    for (let i = 0;i<footer_content.length;i++){
        const x = document.createElement(footer_content[i][0]);
        footerDiv.appendChild(x);

        if (footer_content[i].length > 2){
            const y = document.createElement("a");
            y.setAttribute("href", footer_content[i][2]);
            y.setAttribute("target", "_blank");
            y.innerHTML = footer_content[i][1];
            x.appendChild(y);
        }   
        else {
            x.innerHTML = footer_content[i][1];
        }
    }
    const online_logo_link = document.createElement("a");
    online_logo_link.setAttribute("href", "https://online.ntnu.no/");
    online_logo_link.setAttribute("target", "_blank");
    footerDiv.appendChild(online_logo_link);

    const pic = document.createElement("img");
    pic.setAttribute("src", "../image/online_logo.svg");
    pic.setAttribute("id", "online_logo_footer");
    pic.setAttribute("alt", "Online linjeforening sin logo");
    online_logo_link.appendChild(pic);

    pagebottom.appendChild(footerDiv);
}
//--------------------------------------------------
//Main functions/function calls
//--------------------------------------------------
function header(){
    topbox_component();
    navbar_component();
}

header();
footer_div();

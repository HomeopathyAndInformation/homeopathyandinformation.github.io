const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const ref = document.getElementsByTagName("main")[0];

//Set Cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";secure" + ";path=/";
}

//Get Cookies
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

for(let i=0; i < links.length; i++){
    links[i].addEventListener("click", () => {
        if(langSel.querySelector(".activelink")){
            langSel.querySelector(".activelink").classList.remove("activelink");
        }
        links[i].classList.add("activelink");
    
        const attr = links[i].getAttribute("language");
    
        //Create Cookie
        setCookie("language", i, 365);
    
        title = data[attr].title;
        lang = data[attr].language;
    
        navig[0].textContent = data[attr].nav.home;
        navig[1].textContent = data[attr].nav.pricing;
        navig[2].textContent = data[attr].nav.consultation;
        navig[3].textContent = data[attr].nav.foodMood;
        navig[4].textContent = data[attr].nav.supplements;
        navig[5].textContent = data[attr].nav.login;
        navig[6].textContent = data[attr].nav.meetings;
        navig[7].textContent = data[attr].nav.appts;
        navig[8].textContent = data[attr].nav.admin;
        navig[9].textContent = data[attr].nav.account;
        navig[10].textContent = data[attr].nav.qna;
        navig[11].textContent = data[attr].nav.logout;
    
        ref.getElementsByTagName("h1")[0].textContent = data[attr].ref.title;
        document.getElementsByTagName("h2")[0].textContent = data[attr].ref.one;
        document.getElementsByTagName("h2")[1].textContent = data[attr].ref.two;
        document.getElementsByTagName("h2")[2].textContent = data[attr].ref.three;
        document.getElementsByTagName("h2")[3].textContent = data[attr].ref.four;
        document.getElementsByTagName("h2")[4].textContent = data[attr].ref.five;

        document.getElementsByClassName("book")[0].textContent = data[attr].book;

        //Toggle Left-2-Right and Right-2-Left Reading
        const imagesfloat = document.getElementsByTagName("img");
        const videofloat = document.getElementsByTagName("video");
        if(attr == "arabic") {
            imagesfloat[4].style.float = "left";
            imagesfloat[5].style.float = "left";
            videofloat[0].style.float = "left";
        } else {
            imagesfloat[4].style.float = "right";
            imagesfloat[5].style.float = "right";
            videofloat[0].style.float = "right";
        }
        /*
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
        const pagedir = document.getElementsByTagName("main")[0];
        const pagedir2 = document.getElementsByTagName("article");
        if(attr == "arabic"){
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row") {
                navbar.style.flexDirection = "row-reverse";
            } else if (navstyle.getPropertyValue("flex-direction") == "column") {
                navbar.style.flexDirection = "column-reverse"
            }
            if(getCookie("rtl") != "true"){
                setCookie("rtl","true",365);
            }

            document.getElementsByTagName("h1")[0].style.textAlign = "right";

            pagedir.style.textAlign = "right";
            pagedir2[0].style.textAlign = "right";
            pagedir2[1].style.textAlign = "right";

        } else {
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
                navbar.style.flexDirection = "row";
            } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
                navbar.style.flexDirection = "column"
            }
            if(getCookie("rtl") == "true"){
                setCookie("rtl","false",365);
            }

            document.getElementsByTagName("h1")[0].style.textAlign = "left";

            pagedir.style.textAlign = "left";
            pagedir2[0].style.textAlign = "left";
            pagedir2[1].style.textAlign = "left";
        }*/

        location.reload();

    });
};

var data = {
    "english":{
        "title": "Chanone 7 - Holistic",

        "language": "en",

        "nav":{
            "home":"Home",
            "pricing":"Booking & Pricing",
            "consultation":"Consultation",
            "foodMood":"FoodMood",
            "supplements":"Supplements",
            "login":"SignUp/Login",
            "meetings":"My Meetings",
            "appts":"My Appointments",
            "admin":"Admin",
            "account":"Account",
            "qna":"FAQ",
            "logout":"Logout",
        },

        "ref":{
            "one":"MICROBIOME",
            "two":"COW'S MILK",
            "three":"WHEAT",
            "four":"RECOMMENDED READING",
            "five":"RECOMMENDED VIDEO",
        },

        "book":"Book a consultation",

        "description": "Something"

    },

    "arabic":{
        "title": "تشانون 7 - كلي",

        "language": "ar",

        "nav":{
            "home":"ترحيب",
            "pricing":"الحجز والتسعير",
            "consultation":"التشاور",
            "foodMood":"طعام",
            "meds":"المكملات",
            "supplements":"الملحق",
            "login":"اشترك/ تسجيل الدخول",
            "meetings":"اجتماعاتي",
            "appts":"المواعيد الخاصة بي",
            "admin":"مسؤل",
            "account":"الحساب",
            "qna":"أسئلة وأجوبة",
            "logout":"تسجيل خروج",
        },

        "ref":{
            "one":"ميكروبيوم",
            "two":"حليب بقر",
            "three":"قمح",
            "four":"مقالة موصى بها",
            "five":"فيديو موصى به",
        },

        "book":"احجز استشارة",
    },

    "french":{
        "title": "Chanone 7 - Holistique",

        "language": "fr",

        "nav":{
            "home":"Acceuil",
            "pricing":"Consultation & Prix",
            "consultation":"Consultation",
            "foodMood":"Humeur Aliments",
            "supplements":"Suppléments",
            "login":"Registrer/Connexion",
            "meetings":"Mes réunions",
            "appts":"Mes rendez-vous",
            "admin":"Admin",
            "account":"Compte",
            "qna":"FAQ",
            "logout":"Déconnecter",
        },

        "ref":{
            "one":"MICROBIOME",
            "two":"LAIT DE VACHE",
            "three":"DU BLÉ",
            "four":"LECTURES RECOMMANDÉES",
            "five":"VIDÉOS RECOMMANDÉES",
        },

        "book":"Réserver une consultation",

        "description": "Something"
    }
}

function changeLang(lang) {
    if(langSel.querySelector(".activelink")){
        langSel.querySelector(".activelink").classList.remove("activelink");
    }
    links[lang].classList.add("activelink");

    const attr = links[lang].getAttribute("language");

    //Create Cookie
    setCookie("language", lang, 365);

    title = data[attr].title;
    lang = data[attr].language;

    navig[0].textContent = data[attr].nav.home;
    navig[1].textContent = data[attr].nav.pricing;
    navig[2].textContent = data[attr].nav.consultation;
    navig[3].textContent = data[attr].nav.foodMood;
    navig[4].textContent = data[attr].nav.supplements;
    navig[5].textContent = data[attr].nav.login;
    navig[6].textContent = data[attr].nav.meetings;
    navig[7].textContent = data[attr].nav.appts;
    navig[8].textContent = data[attr].nav.admin;
    navig[9].textContent = data[attr].nav.account;
    navig[10].textContent = data[attr].nav.qna;
    navig[11].textContent = data[attr].nav.logout;

    ref.getElementsByTagName("h1")[0].textContent = data[attr].ref.title;
    document.getElementsByTagName("h2")[0].textContent = data[attr].ref.one;
    document.getElementsByTagName("h2")[1].textContent = data[attr].ref.two;
    document.getElementsByTagName("h2")[2].textContent = data[attr].ref.three;
    document.getElementsByTagName("h2")[3].textContent = data[attr].ref.four;
    document.getElementsByTagName("h2")[4].textContent = data[attr].ref.five;

    document.getElementsByClassName("book")[0].textContent = data[attr].book;

    //Toggle Left-2-Right and Right-2-Left Reading
    const imagesfloat = document.getElementsByTagName("img");
    const videofloat = document.getElementsByTagName("video");
    if(attr == "arabic") {
        imagesfloat[4].style.float = "left";
        imagesfloat[5].style.float = "left";
        videofloat[0].style.float = "left";
    } else {
        imagesfloat[4].style.float = "right";
        imagesfloat[5].style.float = "right";
        videofloat[0].style.float = "right";
    }
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    const pagedir = document.getElementsByTagName("main")[0];
    const pagedir2 = document.getElementsByTagName("article");
    if(attr == "arabic"){
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        } else if (navstyle.getPropertyValue("flex-direction") == "column") {
            navbar.style.flexDirection = "column-reverse"
        }
        if(getCookie("rtl") != "true"){
            setCookie("rtl","true",365);
        }

        document.getElementsByTagName("h1")[0].style.textAlign = "right";

        pagedir.style.textAlign = "right";
        pagedir2[0].style.textAlign = "right";
        pagedir2[1].style.textAlign = "right";

    } else {
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
            navbar.style.flexDirection = "column"
        }
        if(getCookie("rtl") == "true"){
            setCookie("rtl","false",365);
        }

        document.getElementsByTagName("h1")[0].style.textAlign = "left";

        pagedir.style.textAlign = "left";
        pagedir2[0].style.textAlign = "left";
        pagedir2[1].style.textAlign = "left";
    }*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
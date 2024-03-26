const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const appt = document.getElementsByClassName("appt")[0];

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
    links[i].addEventListener("click", ()=> {
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
    
        appt.getElementsByTagName("h1")[0].textContent = data[attr].appt.title;
        appt.getElementsByTagName("section")[1].getElementsByTagName("p")[0].textContent = data[attr].appt.name;
        appt.getElementsByTagName("section")[1].getElementsByTagName("p")[1].textContent = data[attr].appt.type;
        appt.getElementsByTagName("section")[1].getElementsByTagName("p")[2].textContent = data[attr].appt.link;
        appt.getElementsByTagName("section")[1].getElementsByTagName("p")[3].textContent = data[attr].appt.date;
        appt.getElementsByTagName("section")[2].getElementsByTagName("p")[0].textContent = data[attr].appt.name;
        appt.getElementsByTagName("section")[2].getElementsByTagName("p")[1].textContent = data[attr].appt.type;
        appt.getElementsByTagName("section")[2].getElementsByTagName("p")[2].textContent = data[attr].appt.link;
        appt.getElementsByTagName("section")[2].getElementsByTagName("p")[3].textContent = data[attr].appt.date;
        appt.getElementsByTagName("section")[1].getElementsByTagName("h2")[0].textContent = data[attr].appt.todaytitle;
        appt.getElementsByTagName("section")[2].getElementsByTagName("h2")[0].textContent = data[attr].appt.futuretitle;
        if(appt.getElementsByClassName("noappttoday")[0]){
            appt.getElementsByClassName("noappttoday")[0].textContent = data[attr].appt.noappttoday;

        }
        if(appt.getElementsByClassName("noapptfuture")[0]){
            appt.getElementsByClassName("noapptfuture")[0].textContent = data[attr].appt.noapptfuture;

        }
        viewappt = appt.getElementsByClassName("viewappt");
        for(let i = 0; i < viewappt.length; i++) {
            viewappt[i].textContent = data[attr].appt.view;
        }

        //Toggle Left-2-Right and Right-2-Left Reading
        /*
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
        if(attr == "arabic"){
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row") {
                navbar.style.flexDirection = "row-reverse";
            }
            if(getCookie("rtl") != "true"){
                setCookie("rtl","true",365);
            }

        } else {
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
                navbar.style.flexDirection = "row";
            }
            if(getCookie("rtl") == "true"){
                setCookie("rtl","false",365);
            }
        }*/
        location.reload();
    });
};

var data = {
    "english":{
        "title": "Chanone 7 - Home",

        "language": "en",

        "nav":{
            "home":"Home",
            "pricing":"Booking & Pricing",
            "consultation":"Consultation",
            "foodMood":"FoodMood",
            "supplements":"Supplements",
            "appt":"SignUp/appt",
            "meetings":"My Meetings",
            "appts":"My Appointments",
            "admin":"Admin",
            "account":"Account",
            "qna":"FAQ",
            "logout":"Logout",
        },

        "appt":{
            "title":"My Meetings",
            "name":"Name",
            "type":"Type",
            "link":"Link",
            "date":"Date",
            "view":"View Meeting",
            "todaytitle":"Today's Schedule",
            "futuretitle":"Schedule in the next 7 days",
            "noappttoday":"You do not have any scheduled meetings today",
            "noapptfuture":"You do not have any scheduled meetings in the next 7 days",
        },

        "description": "Something"

    },

    "arabic":{

        "title": "تشانون 7 - تسجيل الدخول",

        "language":"ar",

        "nav":{
            "home":"ترحيب",
            "pricing":"الحجز والتسعير",
            "consultation":"التشاور",
            "foodMood":"طعام",
            "supplements":"الملحق",
            "appt":"اشترك/ تسجيل الدخول",
            "meetings":"اجتماعاتي",
            "appts":"المواعيد الخاصة بي",
            "admin":"مسؤل",
            "account":"الحساب",
            "qna":"أسئلة وأجوبة",
            "logout":"تسجيل خروج",
        },

        "appt":{
            "title":"اجتماعاتي",
            "name":"اسم",
            "type":"نوع",
            "link":"رابط الموقع",
            "date":"تاريخ",
            "view":"مشاهدة الاجتماع",
            "todaytitle": "جدول اليوم",
            "futuretitle": "جدولة في الأيام السبعة المقبلة",
            "noappttoday": "ليس لديك أي اجتماعات مجدولة اليوم",
            "noapptfuture": "ليس لديك أي اجتماعات مجدولة في الأيام السبعة المقبلة",
        },

    },

    "french":{
        "title": "Chanone 7 - Acceuil",

        "language": "fr",

        "nav":{
            "home":"Acceuil",
            "pricing":"Consultation & Prix",
            "consultation":"Consultation",
            "foodMood":"Humeur Aliments",
            "supplements":"Suppléments",
            "appt":"Registrer/Connexion",
            "meetings":"Mes réunions",
            "appts":"Mes rendez-vous",
            "admin":"Admin",
            "account":"Compte",
            "qna":"FAQ",
            "logout":"Déconnecter",
        },

        "appt":{
            "title":"Mes réunions",
            "name":"Nom",
            "type":"Type",
            "link":"Lien",
            "date":"Date",
            "view":"Voir la réunion",
            "todaytitle":"Programme d'aujourd'hui",
            "futuretitle":"Programme dans les 7 prochains jours",
            "noappttoday":"Vous n'avez aucune réunion planifiée aujourd'hui",
            "noapptfuture":"Vous n'avez aucune réunion planifiée dans les 7 prochains jours",
        },

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

    appt.getElementsByTagName("h1")[0].textContent = data[attr].appt.title;
    appt.getElementsByTagName("section")[1].getElementsByTagName("p")[0].textContent = data[attr].appt.name;
    appt.getElementsByTagName("section")[1].getElementsByTagName("p")[1].textContent = data[attr].appt.type;
    appt.getElementsByTagName("section")[1].getElementsByTagName("p")[2].textContent = data[attr].appt.link;
    appt.getElementsByTagName("section")[1].getElementsByTagName("p")[3].textContent = data[attr].appt.date;
    appt.getElementsByTagName("section")[2].getElementsByTagName("p")[0].textContent = data[attr].appt.name;
    appt.getElementsByTagName("section")[2].getElementsByTagName("p")[1].textContent = data[attr].appt.type;
    appt.getElementsByTagName("section")[2].getElementsByTagName("p")[2].textContent = data[attr].appt.link;
    appt.getElementsByTagName("section")[2].getElementsByTagName("p")[3].textContent = data[attr].appt.date;
    appt.getElementsByTagName("section")[1].getElementsByTagName("h2")[0].textContent = data[attr].appt.todaytitle;
    appt.getElementsByTagName("section")[2].getElementsByTagName("h2")[0].textContent = data[attr].appt.futuretitle;
    if(appt.getElementsByClassName("noappttoday")[0]){
        appt.getElementsByClassName("noappttoday")[0].textContent = data[attr].appt.noappttoday;

    }
    if(appt.getElementsByClassName("noapptfuture")[0]){
        appt.getElementsByClassName("noapptfuture")[0].textContent = data[attr].appt.noapptfuture;

    }
    viewappt = appt.getElementsByClassName("viewappt");
    for(let i = 0; i < viewappt.length; i++) {
        viewappt[i].textContent = data[attr].appt.view;
    }

    //Toggle Left-2-Right and Right-2-Left Reading
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    if(attr == "arabic"){
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        }
        if(getCookie("rtl") != "true"){
            setCookie("rtl","true",365);
        }

    } else {
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        }
        if(getCookie("rtl") == "true"){
            setCookie("rtl","false",365);
        }
    }*/

}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
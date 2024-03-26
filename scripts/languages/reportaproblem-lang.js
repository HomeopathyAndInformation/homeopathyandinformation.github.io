const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const report = document.getElementsByTagName("main")[0];

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
    
        report.getElementsByTagName("h1")[0].textContent = data[attr].report.title;
        report.getElementsByTagName("h2")[0].textContent = data[attr].report.subtitle;
        report.getElementsByTagName("form")[0].getElementsByTagName("p")[0].textContent = data[attr].report.fname;
        report.getElementsByTagName("form")[0].getElementsByTagName("p")[1].textContent = data[attr].report.lname;
        report.getElementsByTagName("form")[0].getElementsByTagName("p")[2].textContent = data[attr].report.email;
        report.getElementsByTagName("form")[0].getElementsByTagName("p")[3].textContent = data[attr].report.subject;
        report.getElementsByTagName("form")[0].getElementsByTagName("p")[4].textContent = data[attr].report.message;
        report.getElementsByTagName("form")[0].getElementsByTagName("button")[0].textContent = data[attr].report.button;

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
            "login":"SignUp/Login",
            "meetings":"My Meetings",
            "appts":"My Appointments",
            "admin":"Admin",
            "account":"Account",
            "qna":"FAQ",
            "logout":"Logout",
        },

        "report":{
            "title":"Report a Problem",
            "subtitle":"If you have found an issue on the website or have any suggestions please let us know so we can fix it as soon as possible",
            "fname":"First Name:",
            "lname":"Last Name:",
            "email":"Email to contact you:",
            "subject":"Title of the Problem:",
            "message":"Please report the problem with as many details as possible:",
            "button":"Submit Report",
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
            "login":"اشترك/ تسجيل الدخول",
            "meetings":"اجتماعاتي",
            "appts":"المواعيد الخاصة بي",
            "admin":"مسؤل",
            "account":"الحساب",
            "qna":"أسئلة وأجوبة",
            "logout":"تسجيل خروج",
        },

        "report":{
            "title":"الإبلاغ عن مشكلة",
            "subtitle":"إذا وجدت مشكلة على الموقع أو لديك أي اقتراحات ، فيرجى إخبارنا بذلك حتى نتمكن من إصلاحها في أقرب وقت ممكن",
            "fname":"الاسم الأول:",
            "lname":"اسم العائلة:",
            "email":"البريد الإلكتروني للاتصال بك:",
            "subject":"عنوان المشكلة:",
            "message":"يرجى الإبلاغ عن المشكلة بأكبر قدر ممكن من التفاصيل:",
            "button":"تقديم تقرير",
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
            "login":"Registrer/Connexion",
            "meetings":"Mes réunions",
            "appts":"Mes rendez-vous",
            "admin":"Admin",
            "account":"Compte",
            "qna":"FAQ",
            "logout":"Déconnecter",
        },

        "report":{
            "title":"Signaler un problème",
            "subtitle":"Si vous avez trouvé un problème sur le site Web ou si vous avez des suggestions, veuillez nous en informer afin que nous puissions le résoudre dès que possible",
            "fname":"Prénom:",
            "lname":"Nom:",
            "email":"Envoyez un courriel pour vous contacter :",
            "subject":"Titre du problème :",
            "message":"Veuillez signaler le problème avec autant de détails que possible :",
            "button":"Soumettre un rapport",
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


    report.getElementsByTagName("h1")[0].textContent = data[attr].report.title;
    report.getElementsByTagName("h2")[0].textContent = data[attr].report.subtitle;
    report.getElementsByTagName("form")[0].getElementsByTagName("p")[0].textContent = data[attr].report.fname;
    report.getElementsByTagName("form")[0].getElementsByTagName("p")[1].textContent = data[attr].report.lname;
    report.getElementsByTagName("form")[0].getElementsByTagName("p")[2].textContent = data[attr].report.email;
    report.getElementsByTagName("form")[0].getElementsByTagName("p")[3].textContent = data[attr].report.subject;
    report.getElementsByTagName("form")[0].getElementsByTagName("p")[4].textContent = data[attr].report.message;
    report.getElementsByTagName("form")[0].getElementsByTagName("button")[0].textContent = data[attr].report.button;

}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
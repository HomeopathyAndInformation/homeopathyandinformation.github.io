const langSel2 = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links2 = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title2 = document.title;
let lang2 = document.lang;


const footer = document.getElementsByTagName("footer")[0];

//Set Cookies
function setCookie2(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";secure" + ";path=/";
}

//Get Cookies
function getCookie2(cname) {
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

for(let i=0; i < links2.length; i++){
    links2[i].addEventListener("click", ()=> {
        if(langSel2.querySelector(".activelink")){
            langSel2.querySelector(".activelink").classList.remove("activelink");
        }
        links2[i].classList.add("activelink");
    
        const attr = links2[i].getAttribute("language");
    
        //Create Cookie
        setCookie2("language", i, 365);
    
        title2 = data2[attr].title;
        lang2 = data2[attr].language;

        footer.getElementsByTagName("li")[0].innerText = data2[attr].footer.quick;
        footer.getElementsByTagName("a")[0].innerText = data2[attr].footer.home;
        footer.getElementsByTagName("a")[1].innerText = data2[attr].footer.pricing;
        footer.getElementsByTagName("a")[2].innerText = data2[attr].footer.faq;
        footer.getElementsByTagName("a")[3].innerText = data2[attr].footer.abt;

        footer.getElementsByTagName("li")[5].innerText = data2[attr].footer.acct;
        footer.getElementsByTagName("a")[4].innerText = data2[attr].footer.login;;
        footer.getElementsByTagName("a")[5].innerText = data2[attr].footer.consult;
        footer.getElementsByTagName("a")[6].innerText = data2[attr].footer.appt;
        footer.getElementsByTagName("a")[7].innerText = data2[attr].footer.report;
    });
};

var data2 = {
    "english":{
        "title2": "Chanone 7 - Home",

        "language": "en",

        "login":{
            "title2":"Existing Patient: Login",
            "email":"Email",
            "passw":"Password",
            "button":"Login",
            "link":{
                "one":"Forgot Password?",
                "two":"New Here? Sign Up!",
            },
        },

        "footer":{
            "quick":"Quick Links",
            "home":"Homepage",
            "pricing":"Booking & Pricing",
            "faq":"Frequently Asked Questions",
            "abt":"About Us",
            "acct":"Account",
            "login":"Login or Sign Up",
            "consult":"Consultation",
            "appt":"My Appointments",
            "report":"Report a Problem",
        },

        "description": "Something"

    },

    "arabic":{

        "title2": "تشانون 7 - تسجيل الدخول",

        "language":"ar",

        "footer":{
            "quick":"روابط سريعة",
            "home":"الصفحة الرئيسية",
            "pricing":"الحجز والتسعير",
            "faq":"أسئلة وأجوبة",
            "abt":"معلومات عنا",
            "acct":"الحساب",
            "login":"تسجيل الدخول أو الاشتراك",
            "consult":"أسئلة وأجوبة",
            "appt":"المواعيد الخاصة بي",
            "report":"الإبلاغ عن مشكلة",
        },

    },

    "french":{
        "title2": "Chanone 7 - Acceuil",

        "language": "fr",

        "footer":{
            "quick":"Liens rapides",
            "home":"Page d'accueil",
            "pricing":"Consultation & Prix",
            "faq":"Foire aux questions",
            "abt":"À propos de nous",
            "acct":"Compte",
            "login":"Inscription ou Indentification",
            "consult":"Consultation",
            "appt":"Mes rendez-vous",
            "report":"Signaler un problème",
        },

        "description": "Something"
    }
}

function changeLang(lang2) {
    if(langSel2.querySelector(".activelink")){
        langSel2.querySelector(".activelink").classList.remove("activelink");
    }
    links2[lang2].classList.add("activelink");

    const attr = links2[lang2].getAttribute("language");

    //Create Cookie
    setCookie2("language", lang2, 365);

    title2 = data2[attr].title;
    lang2 = data2[attr].language;

    footer.getElementsByTagName("li")[0].innerText = data2[attr].footer.quick;
    footer.getElementsByTagName("a")[0].innerText = data2[attr].footer.home;
    footer.getElementsByTagName("a")[1].innerText = data2[attr].footer.pricing;
    footer.getElementsByTagName("a")[2].innerText = data2[attr].footer.faq;
    footer.getElementsByTagName("a")[3].innerText = data2[attr].footer.abt;

    footer.getElementsByTagName("li")[5].innerText = data2[attr].footer.acct;
    footer.getElementsByTagName("a")[4].innerText = data2[attr].footer.login;;
    footer.getElementsByTagName("a")[5].innerText = data2[attr].footer.consult;
    footer.getElementsByTagName("a")[6].innerText = data2[attr].footer.appt;
    footer.getElementsByTagName("a")[7].innerText = data2[attr].footer.report;

}

//If cookies exist
if(getCookie2("language") == "0" || getCookie2("language") == "1" || getCookie2("language") == "2") {
    let chosencookie2 = getCookie2("language");
    changeLang(Number.parseInt(chosencookie2,10));
}
const lang2Sel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links2 = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title2 = document.title2;
let lang2 = document.lang2;
const navig2 = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const login2 = document.getElementsByClassName("login-page")[1];

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

for(let i=0; i < links2.length; i++){
    links2[i].addEventListener("click", ()=> {
        if(lang2Sel.querySelector(".activelink")){
            lang2Sel.querySelector(".activelink").classList.remove("activelink");
        }
        links2[i].classList.add("activelink");
    
        const attr = links2[i].getAttribute("lang2uage");
    
        //Create Cookie
        setCookie("lang2uage", i, 365);
    
        title2 = data[attr].title2;
        lang2 = data[attr].lang2uage;
    /*
        navig2[0].textContent = data[attr].nav.home;
        navig2[1].textContent = data[attr].nav.pricing;
        navig2[2].textContent = data[attr].nav.consultation;
        navig2[3].textContent = data[attr].nav.foodMood;
        navig2[4].textContent = data[attr].nav.login2;
        navig2[5].textContent = data[attr].nav.meetings;
        navig2[6].textContent = data[attr].nav.appts;
        navig2[7].textContent = data[attr].nav.admin;
        navig2[8].textContent = data[attr].nav.account;
        navig2[9].textContent = data[attr].nav.qna;
        navig2[10].textContent = data[attr].nav.logout;
    */
        login2.getElementsByTagName("h1")[0].textContent = data[attr].login2.title2;
        login2.getElementsByTagName("label")[0].textContent = data[attr].login2.first;
        login2.getElementsByTagName("label")[1].textContent = data[attr].login2.last;
        login2.getElementsByTagName("label")[2].textContent = data[attr].login2.prefer;
        login2.getElementsByTagName("label")[3].textContent = data[attr].login2.user;
        login2.getElementsByTagName("label")[4].textContent = data[attr].login2.email;
        login2.getElementsByTagName("label")[5].textContent = data[attr].login2.remail;
        login2.getElementsByTagName("label")[6].textContent = data[attr].login2.passw;
        login2.getElementsByTagName("label")[7].textContent = data[attr].login2.rpassw;
        login2.getElementsByTagName("button")[0].textContent = data[attr].login2.button;
        login2.getElementsByTagName("a")[0].textContent = data[attr].login2.link.one;
        /*login2.getElementsByTagName("a")[1].textContent = data[attr].login2.link.two;*/

        //Toggle Left-2-Right and Right-2-Left Reading
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
            if(navstyle.getPropertyValue("flex-direction") == "row") {
                navbar.style.flexDirection = "row-reverse";
            }
            if(getCookie("rtl") == "true"){
                setCookie("rtl","false",365);
            }
        }
    });
};

var data = {
    "english":{
        "title2": "Chanone 7 - Home",

        "lang2uage": "en",

        "nav":{
            "home":"Home",
            "pricing":"Booking & Pricing",
            "consultation":"Consultation",
            "foodMood":"FoodMood",
            "supplements":"Supplements",
            "login2":"SignUp/Login2",
            "meetings":"My Meetings",
            "appts":"My Appointments",
            "admin":"Admin",
            "account":"Account",
            "qna":"FAQ",
            "logout":"Logout",
        },

        "login2":{
            "title2":"Sign Up",
            "first":"First Name",
            "last":"Last Name",
            "prefer":"Preferred Name",
            "user":"Username",
            "email":"Email",
            "remail":"Repeat Email",
            "passw":"Password",
            "rpassw":"Repeat Password",
            "button":"Sign Up",
            "link":{
                "one":"Forgot Password?",
                "two":"Need to Log In?",
            },
        },

        "description": "Something"

    },

    "arabic":{

        "title2": "تشانون 7 - تسجيل الدخول",

        "lang2uage":"ar",

        "nav":{
            "home":"ترحيب",
            "pricing":"الحجز والتسعير",
            "consultation":"التشاور",
            "foodMood":"طعام",
            "supplements":"الملحق",
            "login2":"اشترك/ تسجيل الدخول",
            "meetings":"اجتماعاتي",
            "appts":"المواعيد الخاصة بي",
            "admin":"مسؤل",
            "account":"الحساب",
            "qna":"أسئلة وأجوبة",
            "logout":"تسجيل خروج",
        },

        "login2":{
            "title2":"اشتراك",
            "first":"الاسم الاول",
            "last":"الكنية",
            "prefer":"الاسم المفضل",
            "user":"اسم المستخدم",
            "email":"البريد الإلكتروني",
            "remail":"تكرار البريد الإلكتروني",
            "passw":"كلمة المرور",
            "rpassw":"اعد كلمة السر",
            "button":"اشتراك",
            "link":{
                "one":"هل نسيت كلمة السر؟",
                "two":"تحتاج إلى تسجيل الدخول؟",
            },
        },

    },

    "french":{
        "title2": "Chanone 7 - Acceuil",

        "lang2uage": "fr",

        "nav":{
            "home":"Acceuil",
            "pricing":"Consultation & Prix",
            "consultation":"Consultation",
            "foodMood":"Humeur Aliments",
            "supplements":"Suppléments",
            "login2":"Registrer/Connexion",
            "meetings":"Mes réunions",
            "appts":"Mes rendez-vous",
            "admin":"Admin",
            "account":"Compte",
            "qna":"FAQ",
            "logout":"Déconnecter",
        },

        "login2":{
            "title2":"Inscription",
            "first":"Prénom",
            "last":"Nom de Famille",
            "prefer":"Nom Préféré",
            "user":"Nom d'Utilisateur",
            "email":"Email",
            "remail":"Répétez l'Email",
            "passw":"Mot De Passe",
            "rpassw":"Répéter le Mot De Passe",
            "button":"S'inscrire",
            "link":{
                "one":"Mot De Passe Oublié?",
                "two":"Besoin de vous connecter ?",
            },
        },

        "description": "Something"
    }
}

function changeLang2(lang2) {
    if(lang2Sel.querySelector(".activelink")){
        lang2Sel.querySelector(".activelink").classList.remove("activelink");
    }
    links2[lang2].classList.add("activelink");

    const attr = links2[lang2].getAttribute("lang2uage");

    //Create Cookie
    setCookie("lang2uage", lang2, 365);

    title2 = data[attr].title2;
    lang2 = data[attr].lang2uage;
/*
    navig2[0].textContent = data[attr].nav.home;
    navig2[1].textContent = data[attr].nav.pricing;
    navig2[2].textContent = data[attr].nav.consultation;
    navig2[3].textContent = data[attr].nav.foodMood;
    navig2[4].textContent = data[attr].nav.login2;
    navig2[5].textContent = data[attr].nav.meetings;
    navig2[6].textContent = data[attr].nav.appts;
    navig2[7].textContent = data[attr].nav.admin;
    navig2[8].textContent = data[attr].nav.account;
    navig2[9].textContent = data[attr].nav.qna;
    navig2[10].textContent = data[attr].nav.logout;
*/
    login2.getElementsByTagName("h1")[0].textContent = data[attr].login2.title2;
    login2.getElementsByTagName("label")[0].textContent = data[attr].login2.first;
    login2.getElementsByTagName("label")[1].textContent = data[attr].login2.last;
    login2.getElementsByTagName("label")[2].textContent = data[attr].login2.prefer;
    login2.getElementsByTagName("label")[3].textContent = data[attr].login2.user;
    login2.getElementsByTagName("label")[4].textContent = data[attr].login2.email;
    login2.getElementsByTagName("label")[5].textContent = data[attr].login2.remail;
    login2.getElementsByTagName("label")[6].textContent = data[attr].login2.passw;
    login2.getElementsByTagName("label")[7].textContent = data[attr].login2.rpassw;
    login2.getElementsByTagName("button")[0].textContent = data[attr].login2.button;
    login2.getElementsByTagName("a")[0].textContent = data[attr].login2.link.one;
    /*login2.getElementsByTagName("a")[1].textContent = data[attr].login2.link.two;*/

    //Toggle Left-2-Right and Right-2-Left Reading
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    if(attr == "arabic"){
        /*
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        }*/
        if(getCookie("rtl") != "true"){
            setCookie("rtl","true",365);
        }

    } else {
        /*
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        }*/
        if(getCookie("rtl") == "true"){
            setCookie("rtl","false",365);
        }
    }

}

//If cookies exist
if(getCookie("lang2uage") == "0" || getCookie("lang2uage") == "1" || getCookie("lang2uage") == "2") {
    let chosencookie = getCookie("lang2uage");
    changeLang2(Number.parseInt(chosencookie,10));
}
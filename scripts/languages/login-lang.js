const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const login = document.getElementsByClassName("login-page")[0];
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
    
        login.getElementsByTagName("h1")[0].textContent = data[attr].login.title;
        login.getElementsByTagName("label")[0].textContent = data[attr].login.email;
        login.getElementsByTagName("label")[1].textContent = data[attr].login.passw;
        login.getElementsByTagName("button")[0].textContent = data[attr].login.button;
        login.getElementsByTagName("a")[0].textContent = data[attr].login.link.one;
        /*login.getElementsByTagName("a")[1].textContent = data[attr].login.link.two;*/

        login2.getElementsByTagName("h1")[0].textContent = data[attr].login2.title2;
        login2.getElementsByTagName("label")[0].textContent = data[attr].login2.first;
        login2.getElementsByTagName("label")[1].textContent = data[attr].login2.last;
        /*login2.getElementsByTagName("label")[2].textContent = data[attr].login2.prefer;*/
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
            if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
                navbar.style.flexDirection = "row";
            }
            if(getCookie("rtl") == "true"){
                setCookie("rtl","false",365);
            }
        }
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

        "login":{
            "title":"Existing Patient: Login",
            "email":"Email",
            "passw":"Password",
            "button":"Login",
            "link":{
                "one":"Forgot Password?",
                "two":"New Here? Sign Up!",
            },
        },

        "login2":{
            "title2":"New Patient: Sign Up",
            "first":"First Name",
            "last":"Last Name",
            "prefer":"Preferred Name",
            "user":"Username",
            "email":"Email",
            "remail":"Repeat Email",
            "passw":"Password",
            "rpassw":"Repeat Password",
            "existing":"<input type='checkbox' name='existing' id='existing'> I am an existing patient of H.P Merhi prior to 2021",
            "button":"Sign Up",
            "link":{
                "one":"Forgot Password?",
                "two":"Need to Log In?",
            },
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

        "login":{
            "title":" المريض الحالي: تسجيل الدخول",
            "email":"البريد الإلكتروني",
            "passw":"كلمة المرور",
            "button":"تسجيل الدخول",
            "link":{
                "one":"هل نسيت كلمة السر؟",
                "two":"جديد هنا؟ اشتراك!",
            },
        },

        "login2":{
            "title2":"مريض جديد: اشتراك",
            "first":"الاسم الاول",
            "last":"الكنية",
            "prefer":"الاسم المفضل",
            "user":"اسم المستخدم",
            "email":"البريد الإلكتروني",
            "remail":"تكرار البريد الإلكتروني",
            "passw":"كلمة المرور",
            "rpassw":"اعد كلمة السر",
            "existing":"أنا مريض حالي لدكتور مرعي قبل عام 2021 <input type='checkbox' name='existing' id='existing'>",
            "button":"اشتراك",
            "link":{
                "one":"هل نسيت كلمة السر؟",
                "two":"تحتاج إلى تسجيل الدخول؟",
            },
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

        "login":{
            "title":"Patient existant : Connexion",
            "email":"Email",
            "passw":"Mot De Passe",
            "button":"Connecter",
            "link":{
                "one":"Mot De Passe Oublié?",
                "two":"Nouveau ici? S'inscrire!",
            },
        },

        "login2":{
            "title2":"Nouveau(elle) patient(e) :Inscription",
            "first":"Prénom",
            "last":"Nom de Famille",
            "prefer":"Nom Préféré",
            "user":"Nom d'Utilisateur",
            "email":"Email",
            "remail":"Répétez l'Email",
            "passw":"Mot De Passe",
            "rpassw":"Répéter le Mot De Passe",
            "existing":"<input type='checkbox' name='existing' id='existing'> Je suis un patient existant de H.P Merhi avant 2021",
            "button":"S'inscrire",
            "link":{
                "one":"Mot De Passe Oublié?",
                "two":"Besoin de vous connecter ?",
            },
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

    login.getElementsByTagName("h1")[0].textContent = data[attr].login.title;
    login.getElementsByTagName("label")[0].textContent = data[attr].login.email;
    login.getElementsByTagName("label")[1].textContent = data[attr].login.passw;
    login.getElementsByTagName("button")[0].textContent = data[attr].login.button;
    login.getElementsByTagName("a")[0].textContent = data[attr].login.link.one;
    /*login.getElementsByTagName("a")[1].textContent = data[attr].login.link.two;*/

    login2.getElementsByTagName("h1")[0].textContent = data[attr].login2.title2;
    login2.getElementsByTagName("label")[0].textContent = data[attr].login2.first;
    login2.getElementsByTagName("label")[1].textContent = data[attr].login2.last;
    /*login2.getElementsByTagName("label")[2].textContent = data[attr].login2.prefer;*/
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
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        }
        if(getCookie("rtl") == "true"){
            setCookie("rtl","false",365);
        }
    }

}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
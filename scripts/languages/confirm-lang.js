const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const confirmation = document.getElementsByTagName("main")[0];


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

        if(confirmation.getElementsByClassName("alreadyconfirm") != null){
            confirmation.getElementsByTagName("h2")[0].textContent = data[attr].confirm.title2;
            confirmation.getElementsByTagName("strong")[0].textContent = data[attr].confirm.name;
            confirmation.getElementsByTagName("strong")[1].textContent = data[attr].confirm.eventtype;
            confirmation.getElementsByTagName("strong")[2].textContent = data[attr].confirm.time;
        }
        else if(confirmation.getElementsByClassName("noconfirm") != null){
            confirmation.getElementsByTagName("h2")[0].textContent = data[attr].confirm.title1;
        }
        else {
            confirmation.getElementsByTagName("h2")[0].textContent = data[attr].confirm.title1;
            confirmation.getElementsByTagName("strong")[0].textContent = data[attr].confirm.name;
            confirmation.getElementsByTagName("strong")[1].textContent = data[attr].confirm.eventtype;
            confirmation.getElementsByTagName("strong")[2].textContent = data[attr].confirm.time;
        }
        document.getElementsByClassName("viewappt")[0].textContent = data[attr].confirm.viewbooked;
        document.getElementsByClassName("viewappt")[1].textContent = data[attr].confirm.homepage;

        if(attr == "arabic"){
            document.dir = "rtl";
        } else {
            document.dir = "ltr";
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

        "confirm":{
            "title1":"Appointment has been Confirmed!",
            "title2":"Appointment has already been booked",
            "title3":"No appointment was confirmed",
            "name":"Name",
            "eventtype":"Event Type",
            "time":"Appointment Time",
            "viewbooked":"View Booked Appointments",
            "homepage":"HomePage",
            "redirect":"You will be redirected to the home page soon"
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

        "confirm":{
            "title1": "تم تأكيد الموعد!",
            "title2": "تم حجز الموعد بالفعل",
            "title3": "لم يتم تأكيد موعد" ,
            "name": "الاسم",
            "eventtype": "نوع الحدث",
            "time": "وقت الموعد",
            "viewbooked": "عرض المواعيد المحجوزة",
            "homepage": "الصفحة الرئيسية",
            "redirect": "ستتم إعادة توجيهك إلى الصفحة الرئيسية قريبًا"
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

        "confirm":{
            "title1":"Le rendez-vous a été confirmé !",
            "title2":"Le rendez-vous a déjà été pris",
            "title3":"Aucun rendez-vous n'a été confirmé",
            "name":"Nom",
            "eventtype":"Type d'événement",
            "time":"Heure du rendez-vous",
            "viewbooked":"Afficher les rendez-vous réservés",
            "homepage":"Page d'accueil",
            "redirect":"Vous serez bientôt redirigé vers la page d'accueil"
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

    if(confirmation.getElementsByClassName("alreadyconfirm")[0] != null){
        confirmation.getElementsByTagName("h2")[0].textContent = data[attr].confirm.title2;
        confirmation.getElementsByTagName("strong")[0].textContent = data[attr].confirm.name;
        confirmation.getElementsByTagName("strong")[1].textContent = data[attr].confirm.eventtype;
        confirmation.getElementsByTagName("strong")[2].textContent = data[attr].confirm.time;
    }
    else if(confirmation.getElementsByClassName("noconfirm")[0] != null){
        confirmation.getElementsByTagName("h2")[0].textContent = data[attr].confirm.title1;
    }
    else {
        confirmation.getElementsByTagName("h2")[0].textContent = data[attr].confirm.title1;
        confirmation.getElementsByTagName("strong")[0].textContent = data[attr].confirm.name;
        confirmation.getElementsByTagName("strong")[1].textContent = data[attr].confirm.eventtype;
        confirmation.getElementsByTagName("strong")[2].textContent = data[attr].confirm.time;
    }
    document.getElementsByClassName("viewappt")[0].textContent = data[attr].confirm.viewbooked;
    document.getElementsByClassName("viewappt")[1].textContent = data[attr].confirm.homepage;

    if(attr == "arabic"){
        document.dir = "rtl";
    } else {
        document.dir = "ltr";
    }

}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
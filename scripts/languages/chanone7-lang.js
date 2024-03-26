const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const def = document.getElementsByTagName("main")[0];

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
        navig[4].textContent = data[attr].nav.meds;
        navig[5].textContent = data[attr].nav.login;
        navig[6].textContent = data[attr].nav.meetings;
        navig[7].textContent = data[attr].nav.appts;
        navig[8].textContent = data[attr].nav.admin;
        navig[9].textContent = data[attr].nav.account;
        navig[10].textContent = data[attr].nav.qna;
        navig[11].textContent = data[attr].nav.logout;

        def.getElementsByTagName("h1")[0].textContent = data[attr].title;
        def.getElementsByTagName("p")[0].textContent = data[attr].text;
    
        def.getElementsByTagName("p")[1].textContent = data[attr].C.title;
        def.getElementsByTagName("a")[0].textContent = data[attr].C.text;
    
        def.getElementsByTagName("p")[2].textContent = data[attr].H.title;
        def.getElementsByTagName("a")[1].textContent = data[attr].H.text;
    
        def.getElementsByTagName("p")[3].textContent = data[attr].A.title;
        def.getElementsByTagName("a")[2].textContent = data[attr].A.text;
    
        def.getElementsByTagName("p")[4].textContent = data[attr].N.title;
        def.getElementsByTagName("a")[3].textContent = data[attr].N.text;
    
        def.getElementsByTagName("p")[5].textContent = data[attr].O.title;
        def.getElementsByTagName("a")[4].textContent = data[attr].O.text;
    
        def.getElementsByTagName("p")[6].textContent = data[attr].N1.title;
        def.getElementsByTagName("a")[5].textContent = data[attr].N1.text;
    
        def.getElementsByTagName("p")[7].textContent = data[attr].E.title;
        def.getElementsByTagName("a")[6].textContent = data[attr].E.text;

        document.getElementsByClassName("book")[0].textContent = data[attr].book;

        if(attr == "arabic") {
            def.getElementsByTagName("img")[0].style.float = "left";
        } else {
            def.getElementsByTagName("img")[0].style.float = "right";
        }

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
            "meds":"Supplements",
            "login":"SignUp/Login",
            "meetings":"My Meetings",
            "appts":"My Appointments",
            "admin":"Admin",
            "account":"Account",
            "qna":"FAQ",
            "logout":"Logout",
        },

        "title":"Chanone 7 Definitions",

        "text":"The acronym of Chanone7 is composed of seven letters that represent seven fundamental disciplines in the field of complementary medicines. Along with homeopathy, my vast experience with patients has shown me that these disciplines work in harmony and provide health benefits to a patient according to an individual's need. ",

        "C": {
            "title":"Chiropractic Medicine",
            "text":"Chiropractic medicine | definition of Chiropractic medicine by Medical dictionary (thefreedictionary.com)",
        },

        "H": {
            "title":"Homeopathic Medicine",
            "text":"Homeopathic medicine | definition of homeopathic medicine by Medical dictionary (thefreedictionary.com)",
        },

        "A": {
            "title":"Acupuncture & Chinese Traditional Medicine",
            "text":"Chinese traditional medicine | definition of Chinese traditional medicine by Medical dictionary (thefreedictionary.com)",
        },

        "N": {
            "title":"Naturopathic Medicine",
            "text":"Naturopathic medicine | definition of naturopathic medicine by Medical dictionary (thefreedictionary.com)",
        },

        "O": {
            "title":"Osteopathic Medicine",
            "text":"Osteopathic medicine | definition of osteopathic medicine by Medical dictionary (thefreedictionary.com)",
        },

        "N1": {
            "title":"Nutritional Medicine",
            "text":"What is Nutrional Medicine? | The Nutrional Medicine Clinic (tnmclinic.com)",
        },

        "E": {
            "title":"Exercise outdoor and Environment Medicine",
            "text":"Home - NAEM (envmedicine.com)",
        },

        "book":"Book a consultation",

        "description": "Something"

    },

    "arabic":{
        "title": "تشانون 7 - الصفحة الرئيسية",

        "language":"ar",

        "nav":{
            "home":"ترحيب",
            "pricing":"الحجز والتسعير",
            "consultation":"التشاور",
            "foodMood":"طعام",
            "meds":"الملحق",
            "login":"اشترك/ تسجيل الدخول",
            "meetings":"اجتماعاتي",
            "appts":"المواعيد الخاصة بي",
            "admin":"مسؤل",
            "account":"الحساب",
            "qna":"أسئلة وأجوبة",
            "logout":"تسجيل خروج",
        },

        "title":"تعريفات تشانون 7",

        "text":"يتكون اختصار Chanone7 من سبعة أحرف تمثل سبعة تخصصات أساسية في مجال الأدوية التكميلية. إلى جانب المعالجة المثلية ، أظهرت لي تجربتي الواسعة مع المرضى أن هذه التخصصات تعمل في وئام وتوفر فوائد صحية للمريض وفقًا لاحتياجات الفرد.",

        "C": {
            "title":"الطب بتقويم العمود الفقري",
            "text":"الطب بتقويم العمود الفقري | تعريف الطب بتقويم العمود الفقري من خلال القاموس الطبي (thefreedictionary.com)",
        },

        "H": {
            "title":"الطب المثلية",
            "text":"الطب المثلي | تعريف الطب المثلي بالقاموس الطبي (thefreedictionary.com)",
        },

        "A": {
            "title":"الوخز بالإبر والطب الصيني التقليدي",
            "text":"الطب الصيني التقليدي | تعريف الطب الصيني التقليدي بالقاموس الطبي (thefreedictionary.com)",
        },

        "N": {
            "title":"الطب الطبيعي",
            "text":"الطب الطبيعي | تعريف الطب الطبيعي بالقاموس الطبي (thefreedictionary.com)",
        },

        "O": {
            "title":"الطب التقويمي",
            "text":"طب تقويم العظام | تعريف طب تقويم العظام بالقاموس الطبي (thefreedictionary.com)",
        },

        "N1": {
            "title":"طب التغذية",
            "text":"ما هو طب التغذية؟ | عيادة الطب الغذائي (tnmclinic.com)",
        },

        "E": {
            "title":"تمرن في الهواء الطلق وطب البيئة",
            "text":"الصفحة الرئيسية - NAEM (envmedicine.com)",
        },

        "book":"احجز استشارة",
    },

    "french":{
        "title": "Chanone 7 - Acceuil",

        "language": "fr",

        "nav":{
            "home":"Acceuil",
            "pricing":"Consultation & Prix",
            "consultation":"Consultation",
            "foodMood":"Humeur Aliments",
            "meds":"Suppléments",
            "login":"Registrer/Connexion",
            "meetings":"Mes réunions",
            "appts":"Mes rendez-vous",
            "admin":"Admin",
            "account":"Compte",
            "qna":"FAQ",
            "logout":"Déconnecter",
        },

        "title":"Chanone 7 Définitions",

        "text":"L'acronyme de Chanone7 est composé de sept lettres qui représentent sept disciplines fondamentales dans le domaine des médecines complémentaires. Avec l'homéopathie, ma vaste expérience auprès des patients m'a démontré que ces disciplines fonctionnent en harmonie et procurent des bienfaits pour la santé d'un patient en fonction de ses besoins.",

        "C": {
            "title":"Médecine chiropratique",
            "text":"Médecine chiropratique | définition de la médecine chiropratique par le dictionnaire médical (thefreedictionary.com)",
        },

        "H": {
            "title":"Médecine homéopathique",
            "text":"Médecine homéopathique | définition de la médecine homéopathique par le dictionnaire médical (thefreedictionary.com)",
        },

        "A": {
            "title":"Acupuncture et médecine traditionnelle chinoise",
            "text":"Médecine traditionnelle chinoise | définition de la médecine traditionnelle chinoise par le dictionnaire médical (thefreedictionary.com)",
        },

        "N": {
            "title":"Médecine Naturopathique",
            "text":"Médecine naturopathique | définition de la médecine naturopathique par le dictionnaire médical (thefreedictionary.com)",
        },

        "O": {
            "title":"Médecine Ostéopathique",
            "text":"Médecine ostéopathique | définition de la médecine ostéopathique par le dictionnaire médical (thefreedictionary.com)",
        },

        "N1": {
            "title":"Médecine nutritionnelle",
            "text":"Qu'est-ce que la médecine nutritionnelle ? | La clinique de médecine nutritionnelle (tnmclinic.com)",
        },

        "E": {
            "title":"Exercice en plein air et médecine de l'environnement",
            "text":"Accueil - NAEM (envmedicine.com)",
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
    setCookie("language", lang.toString(), 365);

    title = data[attr].title;
    lang = data[attr].language;

    navig[0].textContent = data[attr].nav.home;
    navig[1].textContent = data[attr].nav.pricing;
    navig[2].textContent = data[attr].nav.consultation;
    navig[3].textContent = data[attr].nav.foodMood;
    navig[4].textContent = data[attr].nav.meds;
    navig[5].textContent = data[attr].nav.login;
    navig[6].textContent = data[attr].nav.meetings;
    navig[7].textContent = data[attr].nav.appts;
    navig[8].textContent = data[attr].nav.admin;
    navig[9].textContent = data[attr].nav.account;
    navig[10].textContent = data[attr].nav.qna;
    navig[11].textContent = data[attr].nav.logout;

    def.getElementsByTagName("h1")[0].textContent = data[attr].title;
    def.getElementsByTagName("p")[0].textContent = data[attr].text;

    def.getElementsByTagName("p")[1].textContent = data[attr].C.title;
    def.getElementsByTagName("a")[0].textContent = data[attr].C.text;

    def.getElementsByTagName("p")[2].textContent = data[attr].H.title;
    def.getElementsByTagName("a")[1].textContent = data[attr].H.text;

    def.getElementsByTagName("p")[3].textContent = data[attr].A.title;
    def.getElementsByTagName("a")[2].textContent = data[attr].A.text;

    def.getElementsByTagName("p")[4].textContent = data[attr].N.title;
    def.getElementsByTagName("a")[3].textContent = data[attr].N.text;

    def.getElementsByTagName("p")[5].textContent = data[attr].O.title;
    def.getElementsByTagName("a")[4].textContent = data[attr].O.text;

    def.getElementsByTagName("p")[6].textContent = data[attr].N1.title;
    def.getElementsByTagName("a")[5].textContent = data[attr].N1.text;

    def.getElementsByTagName("p")[7].textContent = data[attr].E.title;
    def.getElementsByTagName("a")[6].textContent = data[attr].E.text;

    document.getElementsByClassName("book")[0].textContent = data[attr].book;

    if(attr == "arabic") {
        def.getElementsByTagName("img")[0].style.float = "left";
    } else {
        def.getElementsByTagName("img")[0].style.float = "right";
    }
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
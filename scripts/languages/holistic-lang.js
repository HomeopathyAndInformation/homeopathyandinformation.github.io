const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const holistic = document.getElementsByTagName("main")[0];

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
    
        holistic.getElementsByTagName("h1")[0].textContent = data[attr].holistic.title;

        holistic.getElementsByTagName("p")[0].textContent = data[attr].holistic.text.one;
        holistic.getElementsByTagName("p")[5].textContent = data[attr].holistic.text.two;
        holistic.getElementsByTagName("p")[6].innerHTML = data[attr].holistic.text.three;
    
        holistic.getElementsByTagName("li")[0].innerHTML = data[attr].holistic.list.one;
        holistic.getElementsByTagName("li")[1].innerHTML = data[attr].holistic.list.two;
        holistic.getElementsByTagName("li")[2].innerHTML = data[attr].holistic.list.three;
        holistic.getElementsByTagName("li")[3].innerHTML = data[attr].holistic.list.four;

        holistic.getElementsByTagName("a")[1].textContent = data[attr].holistic.button;

        //Toggle Left-2-Right and Right-2-Left Reading
        /*
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
        const textimgpar = document.getElementsByTagName("main")[0].getElementsByTagName("div");
        const textpar = document.getElementsByTagName("main")[0];
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
    
            textpar.getElementsByTagName("p")[0].style.textAlign = "right";
            textpar.getElementsByTagName("p")[5].style.textAlign = "right";
            textpar.getElementsByTagName("p")[6].style.textAlign = "right";
    
            for(let j = 0; j < textpar.length; j++) {
                textimgpar[j].style.flexDirection = "row-reverse";
                textimgpar[j].style.textAlign = "right";
            }
    
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
    
            textpar.getElementsByTagName("p")[0].style.textAlign = "left";
            textpar.getElementsByTagName("p")[5].style.textAlign = "left";
            textpar.getElementsByTagName("p")[6].style.textAlign = "left";
    
            for(let j = 0; j < textpar.length; j++) {
                textimgpar[j].style.flexDirection = "row";
                textimgpar[j].style.textAlign = "left";
            }
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

        "holistic":{
            "title":"HOLISTIC Philosophy ~ It’s ALL Connected",
            "text":{
                "one":"You are what you consume. During my three decades of clinical experience, collecting copious hard data in the fields of homeopathy, Chinese medicine, and nutritional healing (using bio-resonance Mora therapy testing method), I have developed algorithms correlating physical and mental symptoms to four major factors: food, drink, chemical intolerances and sensitivities, and environmental allergies.",
                "two":"After my first five years of clinical experience, I concluded that in general, to create the balance between the mind, body, and emotions, patients need to prepare their body by cleansing and detoxifying of all elements contributing to the disease. Only then can constitutional homeopathy be administered successfully to maintain the proper balance for well-being.",
                "three":"If you are interested to learn more, please meet me by Zoom; <span class='holistic-focus'>I offer a 15-minute meet-and-greet session for $10</span> which would be deducted from the fees of your first full consultation. <br><a href='../pricing.php'>(See pricing)</a>",
            },
            "list":{
                "one":"<p><span class='holistic-focus'>#1 | FOOD |</span> The food a person consumes is very often contaminated by fertilizers, pesticides, herbicides, and artificial coloring and flavors.</p>",
                "two":"<p><span class='holistic-focus'>#2 | MEDS |</span> The sides effects of medication and prescription drugs—taken over long periods of time—are often overlooked and can cause havoc for the body.</p>",
                "three":"<p><span class='holistic-focus'>#3 | DRINKS |</span> The consumption of alcohol, soda, processed coffee, tea—with all the sugar and artificial additives—affects the natural balance of the body. Contaminated water is also an issue in some areas and creates problems of its own.</p>",
                "four":"<p><span class='holistic-focus'>#4 | AIR |</span> Environmental pollution—including molds, chemicals, and ordinary smog—can affect the immune system. Two additional major factors not yet well researched and considered in classical medicine which are jeopardizing the immune system are electromagnetic pollution and geopathic stress. I have observed these two factors inflicting health related issues only in the past 17 years. Often a patient is not aware of how much he or she absorbs of these invisible elements.</p>",
            },
            "button":"Book a Consultation",
            "quote":`"The most appropriate regimen during the employment of medicine in chronic diseases consists in the removal of such obstacles to recovery, and in supplying where necessary the reverse: innocent moral and intellectual recreation, active exercise in the open air in almost all kinds of weather (daily walks, slight manual labor), suitable, nutritious… food and drink, etc..” - Samuel Hahnemann (1755 - 1843) Founder of Homeopathy`,
        },

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

        "holistic":{
            "title":"الفلسفة الشمولية ~ كلها مرتبطة",
            "text":{
                "one":"ما تستهلكه يحدّد ما أنت عليه. من خلال خبرتي في العلاج السريري التي كوّنتها على مدى ثلاثة عقود، جمعتُ بيانات دقيقة ووفيرة في مجالات المعالجة الهوميوباثية والطب الصيني والشفاء عن طريق الغذاء (عبر استخدام طريقة إختبار العلاج بالرنين الحيوي مورا)، ثم طوّرتُ على أساسها خوارزميات تربط الأعراض الجسدية والعقلية بأربعة عوامل رئيسية: الطعام، الشراب، عدم تحمّل المواد الكيميائية والحساسية تجاهها، والحساسية المتأتّية من أمورٍ بيئية.",
                "two":"بعد سنواتي الخمس الأولى من الخبرة السريرية، خلصت إلى أنّه وبشكلٍ عام، لتحقيق التوازن بين العقل والجسم والعواطف، يجب أن يحضّر المرضى أجسادهم عن طريق تطهيرها وإزالة السموم فيها الناتجة عن كلّ العناصر المساهِمة في المرض. عندئذٍ فحسب، يمكن إجراء المعالجة الهوميوباثية التأسيسية بنجاح للحفاظ على التوازن السليم الذي من شأنه أن يحقّق الرفاهية.",
                "three":"إذا كنت مهتماً بمعرفة المزيد، تفضّل بملاقاتي عبر تطبيق زوم؛ أقدّم <span class = 'holistic-focus'> جلسة تعارف مدّتها 15 دقيقة مقابل 10 دولارات</span> تُحسَم من رسوم الإستشارة الكاملة الأولى. <br> <a href='../pricing.php'> (أنظر لائحة الأسعار)</a>",
            },
            "list":{
                "one":"<p> <span class = 'holistic-focus'> الطعام | 1 # </span> غالباً ما يكون الطعام الذي يستهلكه الشخص ملوَّثاً بالأسمدة، ومبيدات الحشرات، ومبيدات الأعشاب، والألوان والنكهات الإصطناعية. </p>",
                "two":"<p> <span class='holistic-focus'> الأدوية | 2 #</span> غالباً ما يتم التغاضي عن الآثار الجانبية للأدوية والعقاقير الموصوفة - التي يتمّ تناولها على مدى فترات زمنية طويلة– والتي قد تسبّب أضراراً للجسم. </p>",
                "three":"<p> <span class='holistic-focus'> المشروبات | 3 # </span> يؤثّر إستهلاك الكحول والصودا أي المشروبات الغازية والقهوة المصنّعةوالشاي – بما تحتويه من سكر وإضافات صناعية - على التوازن الطبيعي للجسم. وتشكّل المياه الملوثة أيضاً معضلةً في بعض المناطق وهي تخلق مشاكل خاصة بها.</p>",
                "four":"<p> <span class='holistic-focus'>  الهواء | 4 # </span> يمكن أن يؤثّر التلوّث البيئي - بما في ذلك العفن والمواد الكيميائية والضباب الدخاني العادي - على جهاز المناعة. هناك عاملان رئيسيان إضافيان يهددان جهاز المناعة لم يتم إجراء بحوثٍ كافية بشأنهما حتى الآن كما لم تتمّ إحاطتهما بالإهتمام اللازم في الطبّ التقليدي وهما التلوّث الكهرومغناطيسي والإجهاد الجيوباثي. وأنا لم ألاحظ تسبُّب هذَيْن العاملَيْن بمشاكل صحية سوى في السنوات الـ 17 الماضية. ففي أغلب الأحيان، لا يكون المريض على دراية بمدى إمتصاصه لهذه العناصر غير المرئية.</p>",
            },
            "button":"احجز استشارة",
            "quote":`"إن أنسب نظام أثناء توظيف الطب في الأمراض المزمنة هو إزالة مثل هذه العقبات التي تحول دون التعافي ، وفي توفير العكس عند الضرورة: الترفيه الأخلاقي والفكري البريء ، والتمرين النشط في الهواء الطلق في جميع أنواع الطقس تقريبًا ( المشي اليومي ، العمل اليدوي البسيط) ، مناسب ، مغذي ... طعام وشراب ، إلخ. "- صموئيل هانمان (1755 - 1843) مؤسس الطب الهوميوباثية`,
        },
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

        "holistic":{
            "title":"Philosophie HOLISTIQUE ~ Tout est connecté",
            "text":{
                "one": "Vous êtes ce que vous consommez. Au cours de mes trois décennies d'expérience clinique, collectant de nombreuses données concrètes dans les domaines de l'homéopathie, de la médecine chinoise et de la guérison nutritionnelle (en utilisant la méthode de test de thérapie par bio-résonance Mora), j'ai développé des algorithmes corrélant les symptômes physiques et mentaux à quatre facteurs majeurs : aliments, boissons, intolérances et sensibilités chimiques et allergies environnementales.",
                "two": "Après mes cinq premières années d'expérience clinique, j'ai conclu qu'en général, pour créer l'équilibre entre l'esprit, le corps et les émotions, les patients doivent préparer leur corps en nettoyant et en détoxifiant tous les éléments contribuant à la maladie . Ce n'est qu'alors que l'homéopathie constitutionnelle peut être administrée avec succès pour maintenir le bon équilibre pour le bien-être.",
                "three":"Si vous souhaitez en savoir plus, veuillez me rencontrer par Zoom ; <span class='holistic-focus'>Je propose une session de rencontre de 15 minutes pour 10 $</span> qui serait déduit des honoraires de votre première consultation complète. <br><a href='../pricing.php'>(Voir les prix)</a>",
            },
            "list":{
                "one":"<p><span class='holistic-focus'>#1 | NOURRITURE |</span> La nourriture qu'une personne consomme est très souvent contaminée par des engrais, des pesticides, des herbicides, des colorants et des arômes artificiels.< /p>",
                "two":"<p><span class='holistic-focus'>#2 | MEDS |</span> Les effets secondaires des médicaments et des médicaments sur ordonnance, pris sur de longues périodes, sont souvent négligés et peuvent causer des ravages pour le corps.</p>",
                "three":"<p><span class='holistic-focus'>#3 | BOISSONS |</span> La consommation d'alcool, de soda, de café transformé, de thé, avec tout le sucre et les additifs artificiels, affecte le l'équilibre du corps. L'eau contaminée est également un problème dans certaines régions et crée ses propres problèmes.</p>",
                "four":"<p><span class='holistic-focus'>#4 | AIR |</span> La pollution de l'environnement, y compris les moisissures, les produits chimiques et le smog ordinaire, peut affecter le système immunitaire. Deux autres facteurs majeurs non pourtant bien étudiés et pris en compte dans la médecine classique qui mettent en péril le système immunitaire sont la pollution électromagnétique et le stress géopathique. J'ai observé ces deux facteurs infligeant des problèmes liés à la santé seulement au cours des dernières années 17. Souvent, un patient ne sait pas à quel point il ou elle absorbe ces éléments invisibles.</p>",
            },
            "button":"Réserver votre consultation",
            "quote":`"Le régime le plus approprié lors de l'emploi de la médecine dans les maladies chroniques consiste à lever ces obstacles à la guérison, et à fournir le cas échéant l'inverse : récréation morale et intellectuelle innocente, exercice actif en plein air par presque tous les temps (jour promenades, travail manuel léger), nourriture et boisson convenables, nutritives, etc.." - Samuel Hahnemann (1755 - 1843) Fondateur de l'homéopathie`,
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

    holistic.getElementsByTagName("h1")[0].textContent = data[attr].holistic.title;

    holistic.getElementsByTagName("p")[0].textContent = data[attr].holistic.text.one;
    holistic.getElementsByTagName("p")[5].textContent = data[attr].holistic.text.two;
    holistic.getElementsByTagName("p")[6].innerHTML = data[attr].holistic.text.three;

    holistic.getElementsByTagName("li")[0].innerHTML = data[attr].holistic.list.one;
    holistic.getElementsByTagName("li")[1].innerHTML = data[attr].holistic.list.two;
    holistic.getElementsByTagName("li")[2].innerHTML = data[attr].holistic.list.three;
    holistic.getElementsByTagName("li")[3].innerHTML = data[attr].holistic.list.four;

    holistic.getElementsByTagName("a")[1].textContent = data[attr].holistic.button;

    holistic.getElementsByTagName("span")[5].textContent = data[attr].holistic.quote;

    //Toggle Left-2-Right and Right-2-Left Reading
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    const textimgpar = document.getElementsByTagName("main")[0].getElementsByTagName("div");
    const textpar = document.getElementsByTagName("main")[0];
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

        textpar.getElementsByTagName("p")[0].style.textAlign = "right";
        textpar.getElementsByTagName("p")[5].style.textAlign = "right";
        textpar.getElementsByTagName("p")[6].style.textAlign = "right";

        for(let j = 0; j < textpar.length; j++) {
            textimgpar[j].style.flexDirection = "row-reverse";
            textimgpar[j].style.textAlign = "right";
        }

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

        textpar.getElementsByTagName("p")[0].style.textAlign = "left";
        textpar.getElementsByTagName("p")[5].style.textAlign = "left";
        textpar.getElementsByTagName("p")[6].style.textAlign = "left";

        for(let j = 0; j < textpar.length; j++) {
            textimgpar[j].style.flexDirection = "row";
            textimgpar[j].style.textAlign = "left";
        }
    }*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
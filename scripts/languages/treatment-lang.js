const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const treatment = document.getElementsByTagName("main")[0];

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
    
        treatment.getElementsByTagName("h1")[0].textContent = data[attr].treatment.title;
        treatment.getElementsByTagName("p")[0].innerHTML = data[attr].treatment.text;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[0].textContent = data[attr].treatment.list.l1;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[1].textContent = data[attr].treatment.list.l2;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[2].textContent = data[attr].treatment.list.l3;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[3].textContent = data[attr].treatment.list.l4;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[4].textContent = data[attr].treatment.list.l5;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[5].textContent = data[attr].treatment.list.l6;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[6].textContent = data[attr].treatment.list.l7;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[7].textContent = data[attr].treatment.list.l8;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[8].textContent = data[attr].treatment.list.l9;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[9].textContent = data[attr].treatment.list.l10;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[10].textContent = data[attr].treatment.list.l11;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[11].textContent = data[attr].treatment.list.l12;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[12].textContent = data[attr].treatment.list.l13;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[13].textContent = data[attr].treatment.list.l14;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[14].textContent = data[attr].treatment.list.l15;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[15].textContent = data[attr].treatment.list.l16;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[16].textContent = data[attr].treatment.list.l17;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[17].textContent = data[attr].treatment.list.l18;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[18].textContent = data[attr].treatment.list.l19;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[19].textContent = data[attr].treatment.list.l20;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[20].textContent = data[attr].treatment.list.l21;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[21].textContent = data[attr].treatment.list.l22;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[22].textContent = data[attr].treatment.list.l23;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[23].textContent = data[attr].treatment.list.l24;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[24].textContent = data[attr].treatment.list.l25;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[25].textContent = data[attr].treatment.list.l26;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[26].textContent = data[attr].treatment.list.l27;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[27].textContent = data[attr].treatment.list.l28;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[28].textContent = data[attr].treatment.list.l29;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[29].textContent = data[attr].treatment.list.l30;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[30].textContent = data[attr].treatment.list.l31;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[31].textContent = data[attr].treatment.list.l32;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[32].textContent = data[attr].treatment.list.l33;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[33].textContent = data[attr].treatment.list.l34;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[34].textContent = data[attr].treatment.list.l35;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[35].textContent = data[attr].treatment.list.l36;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[36].textContent = data[attr].treatment.list.l37;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[37].textContent = data[attr].treatment.list.l38;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[38].textContent = data[attr].treatment.list.l39;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[39].textContent = data[attr].treatment.list.l40;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[40].textContent = data[attr].treatment.list.l41;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[41].textContent = data[attr].treatment.list.l42;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[42].textContent = data[attr].treatment.list.l43;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[43].textContent = data[attr].treatment.list.l44;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[44].textContent = data[attr].treatment.list.l45;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[45].textContent = data[attr].treatment.list.l46;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[46].textContent = data[attr].treatment.list.l47;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[47].textContent = data[attr].treatment.list.l48;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[48].textContent = data[attr].treatment.list.l49;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[49].textContent = data[attr].treatment.list.l50;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[50].textContent = data[attr].treatment.list.l51;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[51].textContent = data[attr].treatment.list.l52;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[52].textContent = data[attr].treatment.list.l53;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[53].textContent = data[attr].treatment.list.l54;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[54].textContent = data[attr].treatment.list.l55;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[55].textContent = data[attr].treatment.list.l56;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[56].textContent = data[attr].treatment.list.l57;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[57].textContent = data[attr].treatment.list.l58;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[58].textContent = data[attr].treatment.list.l59;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[59].textContent = data[attr].treatment.list.l60;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[60].textContent = data[attr].treatment.list.l61;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[61].textContent = data[attr].treatment.list.l62;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[62].textContent = data[attr].treatment.list.l63;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[63].textContent = data[attr].treatment.list.l64;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[64].textContent = data[attr].treatment.list.l65;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[65].textContent = data[attr].treatment.list.l66;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[66].textContent = data[attr].treatment.list.l67;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[67].textContent = data[attr].treatment.list.l68;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[68].textContent = data[attr].treatment.list.l69;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[69].textContent = data[attr].treatment.list.l70;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[70].textContent = data[attr].treatment.list.l71;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[71].textContent = data[attr].treatment.list.l72;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[72].textContent = data[attr].treatment.list.l73;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[73].textContent = data[attr].treatment.list.l74;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[74].textContent = data[attr].treatment.list.l75;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[75].textContent = data[attr].treatment.list.l76;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[76].textContent = data[attr].treatment.list.l77;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[77].textContent = data[attr].treatment.list.l78;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[78].textContent = data[attr].treatment.list.l79;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[79].textContent = data[attr].treatment.list.l80;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[80].textContent = data[attr].treatment.list.l81;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[81].textContent = data[attr].treatment.list.l82;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[82].textContent = data[attr].treatment.list.l83;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[83].textContent = data[attr].treatment.list.l84;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[84].textContent = data[attr].treatment.list.l85;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[85].textContent = data[attr].treatment.list.l86;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[86].textContent = data[attr].treatment.list.l87;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[87].textContent = data[attr].treatment.list.l88;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[88].textContent = data[attr].treatment.list.l89;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[89].textContent = data[attr].treatment.list.l90;

        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[90].textContent = data[attr].treatment.list.l91;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[91].textContent = data[attr].treatment.list.l92;
        treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[92].textContent = data[attr].treatment.list.l93;

        document.getElementsByClassName("book")[0].textContent = data[attr].book;

        location.reload();
        
        

        //Toggle Left-2-Right and Right-2-Left Reading
        /*
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
        const pagedir = document.getElementsByTagName("main")[0];
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

        } else {
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row") {
                navbar.style.flexDirection = "row-reverse";
            } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
                navbar.style.flexDirection = "column"
            }
            if(getCookie("rtl") == "true"){
                setCookie("rtl","false",365);
            }

            document.getElementsByTagName("h1")[0].style.textAlign = "left";

            pagedir.style.textAlign = "left";
        }*/

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

        "treatment":{
            "title":"Choose the Best of Both Worlds",
            "text":"Most of my patients come to me as a last resort, after having been treated unsuccessfully by classical medicine. Many were unaware that there’s a myriad of successful natural treatments available. Most treatments are also complementary to general medical practices. You do NOT have to choose 'one or the other', as in classical or homeopathic practices. You can choose to take the best of both worlds that work for your body and lifestyle. In other words, you can actually have the best of both worlds. <a href='../consultation.php'>You can book a consultation by clicking here.</a> <br> In the meantime, here's some of the maladies I have treated in the past:",
            "list":{
                "l1":"Acne",
                "l2":"Addiction",
                "l3":"ADHD",
                "l4":"Allergies",
                "l5":"Anemia",
                "l6":"Anorexia nervosa",
                "l7":"Anxiety",
                "l8":"Arthirtis",
                "l9":"Asthma",
                "l10":"Autism",
                "l11":"Auto immune diseases",
                "l12":"Bladder Diseases",
                "l13":"Brain Fog",
                "l14":"Bronchitis",
                "l15":"Bites and stings",
                "l16":"Cataracts",
                "l17":"Celiac Disease",
                "l18":"Childhood obesity",
                "l19":"Chronic fatigue syndrome",
                "l20":"Chronic pain",
                "l21":"Chrone's Disease",
                "l22":"Concussion",
                "l23":"Constipation",
                "l24":"Cystic Fibrosis",
                "l25":"Covid side effects",
                "l26":"Depression",
                "l27":"Dementia",
                "l28":"Diabetes I & II",
                "l29":"Digestive Diseases",
                "l30":"Diarrhea",
                "l31":"Deng Fever",
                "l32":"Ear, Nose and Throat",
                "l33":"Eczema",
                "l34":"Emphysema",
                "l35":"Endometriosis",
                "l36":"Epilepsy",
                "l37":"Fertility",
                "l38":"Frigidity",
                "l39":"Fibromyalgia",
                "l40":"Fungal infections",
                "l41":"Food Allergies",
                "l42":"Fractures",
                "l43":"Gallbladder Disease",
                "l44":"Gluten Sensitivity",
                "l45":"Glaucoma",
                "l46":"Gout",
                "l47":"Hashimoto's Disease",
                "l48":"Heart Disease",
                "l49":"High blood pressure",
                "l50":"Hives",
                "l51":"Hypoglycemia",
                "l52":"IBS",
                "l53":"Infectious diseases",
                "l54":"Insomnia",
                /* mistake found*/
                "l55":"Impotence",
                "l56":"Joint pains",
                "l57":"Kidney Diseases",
                "l58":"Leaky Gut",
                "l59":"Lupus Erythematosus",
                "l60":"Lyme Disease",
                "l61":"Menopause",
                "l62":"Menstrual problems",
                "l63":"Migraines",
                "l64":"MS",
                "l65":"Myelofibrosis",
                "l66":"Muscular Dystrophy",
                "l67":"Non-Hodgkin Disease",
                "l68":"Obesity",
                "l69":"Osteoporosis",
                "l70":"Panic attack",
                "l71":"Parkinson's Disease",
                "l72":"Peptic Ulcer",
                "l73":"Post Stroke",
                "l74":"Post Surgery",
                "l75":"Prostate disease",
                "l76":"Psoriasis",
                "l77":"PTSD",
                "l78":"Rashes",
                "l79":"Ringworm",
                "l80":"Seizure",
                "l81":"STD",
                "l82":"Shingle's",
                "l83":"Sinus Infection",
                "l84":"Thrush",
                "l85":"Thyroid Disease",
                "l86":"Thrichomoniasis",
                "l87":"Ulcerative Colitis",
                "l88":"UTI",
                "l89":"Vaccines Side's Effects",
                "l90":"West Nile Virus",
                "l91":"Yeast Infections",
                "l92":"Zika Virus",
                "l93":"Other related ailments",
            },
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

        "treatment":{
            "title":"اختر أفضل ما في العالمين",
            "text":"يأتي معظم مرضاي إليّ كملاذ أخير ، بعد أن عولجوا بالطب التقليدي دون جدوى. لم يكن الكثيرون على دراية بوجود عدد لا يحصى من العلاجات الطبيعية الناجحة المتاحة. تُعد معظم العلاجات مكملة أيضًا للممارسات الطبية العامة. لا يتعين عليك اختيار واحد أو آخر ، كما هو الحال في الممارسات الكلاسيكية أو المعالجة المثلية. يمكنك اختيار الحصول على أفضل ما في العالمين اللذين يتناسبان مع جسمك وأسلوب حياتك. بمعنى آخر ، يمكنك بالفعل الحصول على أفضل ما في العالمين. <a href='../consultation.php'> يمكنك حجز استشارة بالضغط هنا. </a> <br> في هذه الأثناء ، إليك بعض الأمراض التي عالجتها في الماضي:",
            "list":{
                "l1": "حب الشباب" ,
                "l2": "الإدمان" ,
                "l3": "ADHD",
                "l4": "الحساسية",
                "l5": "فقر الدم" ,
                "l6": "فقدان الشهية العصبي" ,
                "l7": "القلق",
                "l8": "التهاب المفاصل",
                "l9": "الربو" ,
                "l10": "التوحد" ,
                "l11": "أمراض المناعة الذاتية" ,
                "l12": "أمراض المثانة" ,
                "l13": "ضباب الدماغ",
                "l14": "التهاب الشعب الهوائية" ,
                "l15": "لدغات ولسعات" ,
                "l16": "إعتام عدسة العين" ,
                "l17": "مرض الاضطرابات الهضمية" ,
                "l18": "سمنة الأطفال" ,
                "l19": "متلازمة السمنة المزمنة" ,
                "l20": "الألم المزمن" ,
                "l21": "مرض كرون" ,
                "l22": "ارتجاج" ,
                "l23": "إمساك" ,
                "l24": "التليف الكيسي" ,
                "l25": "الآثار الجانبية لفيروس كوفيد" ,
                "l26": "كساد",
                "l27": "الخرف" ,
                "l28": "السكري الأول والثاني" ,
                "l29": "أمراض الجهاز الهضمي" ,
                "l30": "إسهال" ,
                "l31": "حمى دينغ" ,
                "l32": "أنف وأذن وحنجرة" ,
                "l33": "إكزيما",
                "l34": "انتفاخ الرئة",
                "l35": "بطانة الرحم" ,
                "l36": "الصرع" ,
                "l37": "الخصوبة" ,
                "l38": "البرودة",
                "l39": "فيبروميالغيا",
                "l40": "الالتهابات الفطرية" ,
                "l41": "الحساسية الغذائية",
                "l42": "كسور" ,
                "l43": "مرض المرارة" ,
                "l44": "حساسية الغلوتين",
                "l45": "الجلوكوما" ,
                "l46": "النقرس" ,
                "l47": "مرض هاشيموتو" ,
                "l48": "أمراض القلب" ,
                "l49": "ارتفاع ضغط الدم" ,
                "l50": "خلايا النحل",
                "l51": "نقص السكر في الدم",
                "l52": "متلازمة القولون المتهيّج",
                "l53": "الأمراض المعدية" ,
                "l54": "الأرق",
                /* mistake found*/
                "l55": "العجز الجنسي" ,
                "l56": "آلام المفاصل",
                "l57": "أمراض الكلى" ,
                "l58": "تسرب القناة الهضمية",
                "l59": "الذئبة الحمامية" ,
                "l60": "مرض لايم" ,
                "l61": "سن اليأس" ,
                "l62": "مشاكل الدورة الشهرية" ,
                "l63": "الصداع النصفي",
                "l64": "MS",
                "l65": "تليف النخاع" ,
                "l66": "الحثل العضلي" ,
                "l67": "مرض غير هودجكين" ,
                "l68": "السمنة" ,
                "l69": "هشاشة العظام" ,
                "l70": "نوبة ذعر",
                "l71": "مرض باركنسون" ,
                "l72": "القرحة الهضمية",
                "l73": "سكته دماغيه",
                "l74": "ما بعد الجراحة" ,
                "l75": "مرض البروستاتا" ,
                "l76": "الصدفية" ,
                "l77": "اضطراب ما بعد الصدمة" ,
                "l78": "طفح جلدي",
                "l79": "السعفة",
                "l80": "حجز",
                "l81": "الأمراض المنقولة جنسيا",
                "l82": "هربس نطاقي",
                "l83": "التهاب الجيوب الأنفية" ,
                "l84": "مرض القلاع",
                "l85": "مرض الغدة الدرقية" ,
                "l86": "داء الثريتشوموناس" ,
                "l87": "التهاب القولون التقرحي" ,
                "l88": "التهاب المسالك البولية",
                "l89": "الآثار الجانبية للقاحات" ,
                "l90": "فيروس غرب النيل" ,
                "l91": "عدوى الخميرة" ,
                "l92": "فيروس زيكا" ,
                "l93": "أمراض أخرى ذات صلة",
            },
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

        "treatment":{
            "title":"Choisissez le meilleur des deux mondes",
            "text":"La plupart de mes patients viennent me voir en dernier recours, après avoir été traités sans succès par la médecine classique. Beaucoup ignoraient qu'il existe une myriade de traitements naturels efficaces disponibles. La plupart des traitements sont également complémentaires aux pratiques de médecine générale. Vous n'avez PAS à choisir 'l'un ou l'autre', comme dans les pratiques classiques ou homéopathiques. Vous pouvez choisir de prendre le meilleur des deux mondes qui conviennent à votre corps et à votre style de vie. En d'autres termes, vous pouvez réellement avoir le meilleur des deux mondes. <a href='../consultation.php'>Vous pouvez réserver une consultation en cliquant ici.</a> <br> En attendant, voici quelques-unes des maladies que j'ai traitées par le passé :",
            "list":{
                "l1":"Acné",
                "l2":"Dépendance",
                "l3":"TDAH",
                "l4":"Allergies",
                "l5":"Anémie",
                "l6":"Anorexie mentale",
                "l7":"Anxiété",
                "l8":"Arthirte",
                "l9":"Asthme",
                "l10":"Autisme",
                "l11":"Maladies auto-immunes",
                "l12":"Maladies de la vessie",
                "l13":"Brouillard cérébral",
                "l14":"Bronchite",
                "l15":"Mordre et piquer",
                "l16":"Cataractes",
                "l17":"Maladie coeliaque",
                "l18":"Obésité infantile",
                "l19":"Syndrome de fatigue chronique",
                "l20":"Douleur chronique",
                "l21":"Maladie de Chrone",
                "l22":"Commotion cérébrale",
                "l23":"Constipations",
                "l24":"Mucoviscidose",
                "l25":"Effets secondaires du Covid",
                "l26":"Dépression",
                "l27":"Démence",
                "l28":"Diabète I & II",
                "l29":"Maladies digestives",
                "l30":"Diarrhée",
                "l31":"Fièvre Deng",
                "l32":"Oreille, nez et gorge",
                "l33":"Eczéma",
                "l34":"Emphysème",
                "l35":"Endométriose",
                "l36":"Épilepsie",
                "l37":"Fertilité",
                "l38":"Frigidité",
                "l39":"Fibromyalgie",
                "l40":"Infections fongiques",
                "l41":"Allergies alimentaires",
                "l42":"Fracture",
                "l43":"Maladie de la vésicule biliaire",
                "l44":"Sensibilité au gluten",
                "l45":"Glaucome",
                "l46":"Goutte",
                "l47":"Maladie de Hashimoto",
                "l48":"Maladie cardiaque",
                "l49":"Hypertension artérielle",
                "l50":"Ruches",
                "l51":"Hypoglycémie",
                "l52":"IBS",
                "l53":"Maladies infectieuses",
                "l54":"Insomnie",
                /* mistake found*/
                "l55":"Impuissance",
                "l56":"Douleurs articulaires",
                "l57":"Maladies rénales",
                "l58":"Intestin qui fuit",
                "l59":"Lupus érythémateux",
                "l60":"Maladie de Lyme",
                "l61":"Ménopause",
                "l62":"Problèmes menstruels",
                "l63":"Migraines",
                "l64":"MS",
                "l65":"Myélofibrose",
                "l66":"Dystrophie Musculaire",
                "l67":"Maladie non hodgkinienne",
                "l68":"Obésité",
                "l69":"Ostéoporose",
                "l70":"Attaque de panique",
                "l71":"Maladie de Parkinson",
                "l72":"Ulcère peptique",
                "l73":"Après un AVC",
                "l74":"Après la chirurgie",
                "l75":"Maladie de la prostate",
                "l76":"Psoriasis",
                "l77":"ESPT",
                "l78":"Éruptions cutanées",
                "l79":"La teigne",
                "l80":"Saisie",
                "l81":"STD",
                "l82":"Les bardeaux",
                "l83":"Infection des sinus",
                "l84":"Muguet",
                "l85":"Maladie thyroïdienne",
                "l86":"Thrichomonésie",
                "l87":"Colite ulcéreuse",
                "l88":"UTI",
                "l89":"Effets secondaires des vaccins",
                "l90":"Virus du Nil occidental",
                "l91":"Infections à levures",
                "l92":"Zika Virus",
                "l93":"Autres affections apparentées",

            },
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

    treatment.getElementsByTagName("h1")[0].textContent = data[attr].treatment.title;
    treatment.getElementsByTagName("p")[0].innerHTML = data[attr].treatment.text;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[0].textContent = data[attr].treatment.list.l1;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[1].textContent = data[attr].treatment.list.l2;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[2].textContent = data[attr].treatment.list.l3;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[3].textContent = data[attr].treatment.list.l4;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[4].textContent = data[attr].treatment.list.l5;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[5].textContent = data[attr].treatment.list.l6;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[6].textContent = data[attr].treatment.list.l7;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[7].textContent = data[attr].treatment.list.l8;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[8].textContent = data[attr].treatment.list.l9;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[9].textContent = data[attr].treatment.list.l10;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[10].textContent = data[attr].treatment.list.l11;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[11].textContent = data[attr].treatment.list.l12;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[12].textContent = data[attr].treatment.list.l13;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[13].textContent = data[attr].treatment.list.l14;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[14].textContent = data[attr].treatment.list.l15;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[15].textContent = data[attr].treatment.list.l16;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[16].textContent = data[attr].treatment.list.l17;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[17].textContent = data[attr].treatment.list.l18;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[18].textContent = data[attr].treatment.list.l19;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[19].textContent = data[attr].treatment.list.l20;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[20].textContent = data[attr].treatment.list.l21;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[21].textContent = data[attr].treatment.list.l22;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[22].textContent = data[attr].treatment.list.l23;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[23].textContent = data[attr].treatment.list.l24;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[24].textContent = data[attr].treatment.list.l25;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[25].textContent = data[attr].treatment.list.l26;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[26].textContent = data[attr].treatment.list.l27;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[27].textContent = data[attr].treatment.list.l28;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[28].textContent = data[attr].treatment.list.l29;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[29].textContent = data[attr].treatment.list.l30;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[30].textContent = data[attr].treatment.list.l31;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[31].textContent = data[attr].treatment.list.l32;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[32].textContent = data[attr].treatment.list.l33;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[33].textContent = data[attr].treatment.list.l34;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[34].textContent = data[attr].treatment.list.l35;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[35].textContent = data[attr].treatment.list.l36;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[36].textContent = data[attr].treatment.list.l37;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[37].textContent = data[attr].treatment.list.l38;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[38].textContent = data[attr].treatment.list.l39;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[39].textContent = data[attr].treatment.list.l40;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[40].textContent = data[attr].treatment.list.l41;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[41].textContent = data[attr].treatment.list.l42;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[42].textContent = data[attr].treatment.list.l43;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[43].textContent = data[attr].treatment.list.l44;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[44].textContent = data[attr].treatment.list.l45;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[45].textContent = data[attr].treatment.list.l46;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[46].textContent = data[attr].treatment.list.l47;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[47].textContent = data[attr].treatment.list.l48;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[48].textContent = data[attr].treatment.list.l49;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[49].textContent = data[attr].treatment.list.l50;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[50].textContent = data[attr].treatment.list.l51;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[51].textContent = data[attr].treatment.list.l52;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[52].textContent = data[attr].treatment.list.l53;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[53].textContent = data[attr].treatment.list.l54;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[54].textContent = data[attr].treatment.list.l55;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[55].textContent = data[attr].treatment.list.l56;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[56].textContent = data[attr].treatment.list.l57;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[57].textContent = data[attr].treatment.list.l58;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[58].textContent = data[attr].treatment.list.l59;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[59].textContent = data[attr].treatment.list.l60;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[60].textContent = data[attr].treatment.list.l61;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[61].textContent = data[attr].treatment.list.l62;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[62].textContent = data[attr].treatment.list.l63;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[63].textContent = data[attr].treatment.list.l64;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[64].textContent = data[attr].treatment.list.l65;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[65].textContent = data[attr].treatment.list.l66;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[66].textContent = data[attr].treatment.list.l67;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[67].textContent = data[attr].treatment.list.l68;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[68].textContent = data[attr].treatment.list.l69;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[69].textContent = data[attr].treatment.list.l70;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[70].textContent = data[attr].treatment.list.l71;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[71].textContent = data[attr].treatment.list.l72;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[72].textContent = data[attr].treatment.list.l73;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[73].textContent = data[attr].treatment.list.l74;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[74].textContent = data[attr].treatment.list.l75;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[75].textContent = data[attr].treatment.list.l76;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[76].textContent = data[attr].treatment.list.l77;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[77].textContent = data[attr].treatment.list.l78;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[78].textContent = data[attr].treatment.list.l79;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[79].textContent = data[attr].treatment.list.l80;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[80].textContent = data[attr].treatment.list.l81;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[81].textContent = data[attr].treatment.list.l82;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[82].textContent = data[attr].treatment.list.l83;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[83].textContent = data[attr].treatment.list.l84;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[84].textContent = data[attr].treatment.list.l85;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[85].textContent = data[attr].treatment.list.l86;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[86].textContent = data[attr].treatment.list.l87;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[87].textContent = data[attr].treatment.list.l88;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[88].textContent = data[attr].treatment.list.l89;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[89].textContent = data[attr].treatment.list.l90;

    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[90].textContent = data[attr].treatment.list.l91;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[91].textContent = data[attr].treatment.list.l92;
    treatment.getElementsByTagName("div")[0].getElementsByTagName("p")[92].textContent = data[attr].treatment.list.l93;

    document.getElementsByClassName("book")[0].textContent = data[attr].book;

    //Toggle Left-2-Right and Right-2-Left Reading
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    const pagedir = document.getElementsByTagName("main")[0];
    if(attr == "arabic"){
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        }
        if(getCookie("rtl") != "true"){
            setCookie("rtl","true",365);
        }

        document.getElementsByTagName("h1")[0].style.textAlign = "right";

        pagedir.style.textAlign = "right";

    } else {
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        }
        if(getCookie("rtl") == "true"){
            setCookie("rtl","false",365);
        }

        document.getElementsByTagName("h1")[0].style.textAlign = "left";

        pagedir.style.textAlign = "left";
    }*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
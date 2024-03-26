const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const pricehead = document.getElementsByClassName("price-headline")[0];
const price1 = document.getElementsByClassName("price2")[0];
const price2 = document.getElementsByClassName("price1")[0];
const price3 = document.getElementsByClassName("price2")[1];
const price4 = document.getElementsByClassName("price1")[1];

const book = document.getElementsByClassName("booking");

const table = document.getElementsByTagName("img")[1];

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
        setCookie("language", i.toString(), 365);
    
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
    
        pricehead.getElementsByTagName("h1")[0].textContent = data[attr].heading.title;
        /*
        pricehead.getElementsByClassName("pricing-step")[0].getElementsByTagName("h2")[0].textContent = data[attr].heading.steps.one.title;
        pricehead.getElementsByClassName("pricing-step")[1].getElementsByTagName("h2")[0].textContent = data[attr].heading.steps.two.title;
        pricehead.getElementsByClassName("pricing-step")[2].getElementsByTagName("h2")[0].textContent = data[attr].heading.steps.three.title;
        pricehead.getElementsByClassName("pricing-step")[3].getElementsByTagName("h2")[0].textContent = data[attr].heading.steps.four.title;
    
        pricehead.getElementsByClassName("pricing-step")[0].getElementsByTagName("p")[0].textContent = data[attr].heading.steps.one.text;
        pricehead.getElementsByClassName("pricing-step")[1].getElementsByTagName("p")[0].textContent = data[attr].heading.steps.two.text;
        pricehead.getElementsByClassName("pricing-step")[2].getElementsByTagName("p")[0].textContent = data[attr].heading.steps.three.text;
        pricehead.getElementsByClassName("pricing-step")[3].getElementsByTagName("p")[0].textContent = data[attr].heading.steps.four.text;
        */
    
        pricehead.getElementsByClassName("price-head-text")[0].innerHTML = data[attr].heading.text;
        document.getElementsByTagName("main")[0].getElementsByTagName("a")[0].innerText = data[attr].meetgreet;
    
        price1.getElementsByTagName("h2")[0].textContent = data[attr].price11.title;
        price1.getElementsByTagName("span")[0].textContent = data[attr].price11.remark;
        price1.getElementsByTagName("span")[1].textContent = data[attr].price11.price.adult;
        price1.getElementsByTagName("span")[2].textContent = data[attr].price11.price.child1;
        price1.getElementsByTagName("span")[3].textContent = data[attr].price11.price.child2;
        price1.getElementsByTagName("span")[4].textContent = data[attr].price11.price.family;
        price1.getElementsByTagName("li")[0].textContent = data[attr].price11.list.one;
        price1.getElementsByTagName("li")[1].textContent = data[attr].price11.list.two;
        price1.getElementsByTagName("li")[2].textContent = data[attr].price11.list.three;
        price1.getElementsByTagName("li")[3].textContent = data[attr].price11.list.four;
        price1.getElementsByTagName("li")[4].textContent = data[attr].price11.list.five;
        price1.getElementsByTagName("li")[5].textContent = data[attr].price11.list.six;
        price1.getElementsByTagName("a")[1].textContent = data[attr].price11.button;
    
        price2.getElementsByTagName("h2")[0].textContent = data[attr].price21.title;
        price2.getElementsByTagName("span")[0].textContent = data[attr].price21.price.adult;
        price2.getElementsByTagName("span")[1].textContent = data[attr].price21.price.child1;
        price2.getElementsByTagName("span")[2].textContent = data[attr].price21.price.child2;
        price2.getElementsByTagName("span")[3].textContent = data[attr].price21.price.family;
        price2.getElementsByTagName("li")[0].textContent = data[attr].price21.list.one;
        price2.getElementsByTagName("li")[1].textContent = data[attr].price21.list.two;
        price2.getElementsByTagName("li")[2].textContent = data[attr].price21.list.three;
        price2.getElementsByTagName("li")[3].textContent = data[attr].price21.list.four;
        price2.getElementsByTagName("li")[4].textContent = data[attr].price21.list.five;
        price2.getElementsByTagName("li")[5].textContent = data[attr].price21.list.six;
        price2.getElementsByTagName("a")[1].textContent = data[attr].price21.button;
    
        price3.getElementsByTagName("h2")[0].textContent = data[attr].price12.title;
        price3.getElementsByTagName("span")[0].textContent = data[attr].price12.remark;
        price3.getElementsByTagName("span")[1].textContent = data[attr].price12.price.adult;
        price3.getElementsByTagName("span")[2].textContent = data[attr].price12.price.child1;
        price3.getElementsByTagName("span")[3].textContent = data[attr].price12.price.child2;
        price3.getElementsByTagName("span")[4].textContent = data[attr].price12.price.family;
        price3.getElementsByTagName("li")[0].textContent = data[attr].price12.list.one;
        price3.getElementsByTagName("li")[1].textContent = data[attr].price12.list.two;
        price3.getElementsByTagName("li")[2].textContent = data[attr].price12.list.three;
        price3.getElementsByTagName("li")[3].textContent = data[attr].price12.list.four;
        price3.getElementsByTagName("li")[4].textContent = data[attr].price12.list.five;
        price3.getElementsByTagName("a")[1].textContent = data[attr].price12.button;
    
        price4.getElementsByTagName("h2")[0].textContent = data[attr].price22.title;
        /*price4.getElementsByTagName("p")[0].textContent = data[attr].price22.text;*/
        price4.getElementsByTagName("li")[0].textContent = data[attr].price22.list.one;
        price4.getElementsByTagName("a")[1].textContent = data[attr].price22.button;
    
        book[0].getElementsByTagName("a")[0].textContent = data[attr].book.button;
        book[1].getElementsByTagName("h2")[0].textContent = data[attr].book.text;
        book[1].getElementsByTagName("a")[0].textContent = data[attr].book.button;

        table.src = data[attr].table;

        //Toggle Left-2-Right and Right-2-Left Reading
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
        const steps = document.getElementsByTagName("main")[0].getElementsByTagName("div")[0];
        if(attr == "arabic"){
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row") {
                navbar.style.flexDirection = "row-reverse";
            } else if (navstyle.getPropertyValue("flex-direction") == "column") {
                navbar.style.flexDirection = "column-reverse"
            }

            pricehead.getElementsByTagName("h1")[0].style.textAlign = "right";
            const steps_style = window.getComputedStyle(steps);
            if(steps_style.getPropertyValue("flex-direction") == "row") {
                steps.style.flexDirection = "row-reverse";
            }

            price1.getElementsByTagName("h2")[0].style.textAlign = "right";
            price1.getElementsByTagName("span")[0].style.textAlign = "right";
            price1.getElementsByTagName("span")[0].style.float = "right";
            for(let k = 0; k < price1.getElementsByTagName("li").length; k++) {
                price1.getElementsByTagName("li")[k].style.textAlign = "right";
            }
            price2.getElementsByTagName("h2")[0].style.textAlign = "right";
            price2.getElementsByTagName("span")[0].style.textAlign = "right";
            price2.getElementsByTagName("span")[0].style.float = "right";
            for(let k = 0; k < price2.getElementsByTagName("li").length; k++) {
                price2.getElementsByTagName("li")[k].style.textAlign = "right";
            }
            price3.getElementsByTagName("h2")[0].style.textAlign = "right";
            price3.getElementsByTagName("span")[0].style.textAlign = "right";
            price3.getElementsByTagName("span")[0].style.float = "right";
            for(let k = 0; k < price3.getElementsByTagName("li").length; k++) {
                price3.getElementsByTagName("li")[k].style.textAlign = "right";
            }
            price4.getElementsByTagName("h2")[0].style.textAlign = "right";
            price4.getElementsByTagName("span")[0].style.textAlign = "right";
            price4.getElementsByTagName("span")[0].style.float = "right";
            price4.getElementsByTagName("p")[0].style.textAlign = "right";

        } else {
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
                navbar.style.flexDirection = "row";
            } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
                navbar.style.flexDirection = "column"
            }

            pricehead.getElementsByTagName("h1")[0].style.textAlign = "left";
            const steps_style = window.getComputedStyle(steps);
            if(steps_style.getPropertyValue("flex-direction") == "row-reverse") {
                steps.style.flexDirection = "row";
            }
            price1.getElementsByTagName("h2")[0].style.textAlign = "left";
            for(let k = 0; k < price1.getElementsByTagName("li").length; k++) {
                price1.getElementsByTagName("li")[k].style.textAlign = "left";
            }
            price2.getElementsByTagName("h2")[0].style.textAlign = "left";
            for(let k = 0; k < price2.getElementsByTagName("li").length; k++) {
                price2.getElementsByTagName("li")[k].style.textAlign = "left";
            }
            price3.getElementsByTagName("h2")[0].style.textAlign = "left";
            for(let k = 0; k < price3.getElementsByTagName("li").length; k++) {
                price3.getElementsByTagName("li")[k].style.textAlign = "left";
            }
            price4.getElementsByTagName("h2")[0].style.textAlign = "left";
            for(let k = 0; k < price4.getElementsByTagName("li").length; k++) {
                price4.getElementsByTagName("li")[k].style.textAlign = "left";
            }
            
        }

        location.reload();
    });
};

var data = {
    "english":{
        "title": "Chanone 7 - Pricing",

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

        "heading":{
            "title":"How does this work?",
            "steps":{
                "one":{
                    "title":"Step 1",
                    "text":"Please fill out a questionnaire about your medical status.",
                },
                "two":{
                    "title":"Step 2",
                    "text":"Please fill out the consent form to enable the booking of your session.",
                },
                "three":{
                    "title":"Step 3",
                    "text":"Book your session online, and receive confirmation within 24 hours of payment.",
                },
                "four":{
                    "title":"Step 4",
                    "text":"We will analyze the data you provided in the questionnaire along with additional information gathered during our Zoom session talk. Within 24 hours, I will prescribe a treatment to detoxify your body, and develop a program for your specific health needs.",
                },
            },
            "text":"If you are interested to learn more, please meet me by Zoom; I offer a 15-minute meet-and-greet session for $10 which would be deducted from the fees of your first full consultation.",
        },

        "meetgreet":"Book a Meet & Greet",

        "price11":{
            "title":"First Visit - New Patient",
            "remark":"A New patient is a person who will meet Hp. Aboudi Merhi for the first time for a consultation or an old patient who has not consulted back with him over two years.",

            "price":{
                "adult":"Adult : $225 CAD",
                "child1":"Children (7y to 14y) : $135 CAD",
                "child2":"Children (1y to 6y) : $90 CAD",
                "family":"Family Pack : 10% off"
            },

            "list":{
                "one":"Forms to be filled out (See above)",
                "two":"Personal Zoom Interview [up to 1.5 hours]",
                "three":"Analysis of Data & Diagnosis",
                "four":"Dietary program",
                "five":"Supplements and acute homeopathy",
                "six":"Outdoor Exercise & Environmental Program",
            },

            "button":"Book a First Visit",
        },

        "price21":{
            "title":"Follow-Up Visit after 5 Weeks",
                        
            "price":{
                "adult":"Adult : $100 CAD",
                "child1":"Children (7y to 14y) : $60 CAD",
                "child2":"Children (1y to 6y) : $35 CAD",
                "family":"Family Pack : 10% off"
            },

            "list":{
                "one":"Personal Zoom Interview [up to 1 hour]",
                "two":"Analysis of Progress",
                "three":"Assessment of the treatment",
                "four":"Dietary & Exercise Program Adjustments",
                "five":"Supplement & Homeopathy Adjustments",
                "six":"Prescribe Constitutional Homeopathic Remedy"
            },

            "button":"Book a Follow Up Visit",
        },

        "price12":{
            "title":"Annual Check-Up - Existing Patient",
            "remark":"An existing patient is a person who has been a patient of Hp. Aboudi Merhi in the two preceding years and has a file and a record of the first visit of a follow-up, or annual check-up.",
                        
            "price":{
                "adult":"Adult : $135 CAD",
                "child1":"Children (7y to 14y) : $100 CAD",
                "child2":"Children (1y to 6y) : $75 CAD",
                "family":"Family Pack : 10% off"
            },

            "list":{
                "one":"Personal Zoom interview [up to 1.5 hours]",
                "two":"Analysis of Current State of Health",
                "three":"Dietary & Exercise Program Adjustments",
                "four":"Supplements and Homeopathy Adjustments",
                "five":"Adjust Constitutional Homeopathic Remedy",
            },

            "button":"Book an Annual Visit",
        },

        "price22":{
            "title":"Quick Visits & Emergency Consultations",
            "text":"$65 CAD",
            "list":{
                "one":"Up to 30min",
            },

            "button":"Book an Emergency Consultation",
        },

        "book":{
            "text":"Ready to make a booking?",
            "button":"Book a Consultation",
        },

        "table":"/images/pricing_table.jpg",

        "description": "Something"

    },

    "arabic":{
        "title": "تشانون 7 - التسعير",

        "language": "ar",

        "nav":{
            "home":"ترحيب",
            "pricing":"الحجز والتسعير",
            "consultation":"التشاور",
            "foodMood":"طعام",
            "meds":"المكملات",
            "login":"اشترك/ تسجيل الدخول",
            "meetings":"اجتماعاتي",
            "appts":"المواعيد الخاصة بي",
            "admin":"مسؤل",
            "account":"الحساب",
            "qna":"أسئلة وأجوبة",
            "logout":"تسجيل خروج",
        },

        "heading":{
            "title":"كيف يعمل هذا؟",
            "steps":{
                "one":{
                    "title":"الخطوة 1",
                    "text":"يرجى ملء استبيان حول حالتك الطبية.",
                },
                "two":{
                    "title":"الخطوة 2",
                    "text":"يرجى ملء نموذج الموافقة لتمكين حجز جلستك.",
                },
                "three":{
                    "title":"الخطوة 3",
                    "text":"احجز جلستك عبر الإنترنت ، واحصل على تأكيد في غضون 24 ساعة من الدفع.",
                },
                "four":{
                    "title":"الخطوة 4",
                    "text":"سنقوم بتحليل البيانات التي قدمتها في الاستبيان جنبًا إلى جنب مع المعلومات الإضافية التي تم جمعها أثناء حديث جلسة زوم. في غضون 24 ساعة ، سأصف علاجًا لإزالة السموم من جسمك ، وأضع برنامجًا لاحتياجاتك الصحية المحددة.",
                },
            },
            "text":"إذا كنت مهتمًا بمعرفة المزيد ، فيرجى مقابلتي عبر زوم ؛ أقدم جلسة لقاء واستقبال مدتها 15 دقيقة مقابل 10 دولارات يتم خصمها من رسوم الاستشارة الكاملة الأولى.",
        },

        "meetgreet":"احجز استقبال وترحيب",

        "price11":{
            "title":"الزيارة الأولى - مريض جديد",
            "remark":"المريض الجديد هو الشخص الذي سيلتقي بـ Hp. عبودي مرعي لأول مرة للاستشارة أو مريض قديم لم يستشيره منذ أكثر من عامين.",
                        
            "price":{
                "adult":"الكبار : CAD $225",
                "child1":"أطفال (7y - 14y) : $135 CAD ",
                "child2":"أطفال (1y - 6y) : $90 CAD ",
                "family":"حزمة عائلية : 10٪ خصم ",
            },

            "list":{
                "one":"استيفاء النماذج (انظر أعلاه)",
                "two":"مقابلة زوم الشخصية تصل [إلى 1.5 ساعة]",
                "three":"تحليل البيانات والتشخيص",
                "four":"برنامج غذائي",
                "five":"المكملات والمعالجة الهوميوباثية الحادة",
                "six":"تمارين خارجية وبرنامج بيئي",
            },

            "button":"احجز الزيارة الأولى",
        },

        "price21":{
            "title":"زيارة متابعة بعد 5 اسابيع",
                        
            "price":{
                "adult":"الكبار : CAD $100",
                "child1":"أطفال (7y - 14y) : $60 CAD ",
                "child2":"أطفال (1y - 6y) : $35 CAD ",
                "family":"حزمة عائلية : 10٪ خصم ",
            },

            "list":{
                "one":"مقابلة تكبير تصل [إلى 1 ساعة]",
                "two":"تحليل التقدم",
                "three":"تقييم العلاج",
                "four":"تعديلات برنامج النظام الغذائي والتمارين الرياضية",
                "five":"المكملات وتعديلات المعالجة الهوميوباثي",
                "six":"يصف العلاج الدستوري الهوميوباثي"
            },

            "button":"احجز زيارة متابعة",
        },

        "price12":{
            "title":"الاختيار السنوي يصل - المريض الحالي",
            "remark":"المريض الحالي هو الشخص الذي كان مريضًا بمرض Hp. عبودي مرعي في السنتين السابقتين وله ملف وسجل الزيارة أولى, أو المتابعة أو الفحص السنوي",
                        
            "price":{
                "adult":"الكبار : CAD $135",
                "child1":"أطفال (7y - 14y) : $100 CAD ",
                "child2":"أطفال (1y - 6y) : $75 CAD ",
                "family":"حزمة عائلية : 10٪ خصم ",
            },

            "list":{
                "one":"مقابلة زوم الشخصية تصل [إلى 1.5 ساعة]",
                "two":"تحليل الحالة الصحية الحالية",
                "three":"تعديلات برنامج النظام الغذائي والتمارين الرياضية",
                "four":"المكملات وتعديلات المعالجة الهوميوباثي",
                "five":"ضبط علاج المثلية الدستورية",
            },

            "button":"احجز الاختيار السنوي يصل",
        },

        "price22":{
            "title":"زيارات سريعة واستشارات طارئة",
            "text":"$65 CAD",
            "list":{
                "one":"تصل إلى 30 دقيقة",
            },
            "button":"احجز استشارات طارئة",
        },

        "book":{
            "text":"على استعداد لإجراء الحجز؟",
            "button":"احجز استشارة",
        },

        "table":"/images/pricing_table2.jpg",
    },

    "french":{
        "title": "Chanone 7 - Prix",

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

        "heading":{
            "title":"Comment cela marche-t-il?",
            "steps":{
                "one":{
                    "title":"Étape 1",
                    "text":"S'il vous plaît remplir un questionnaire sur votre état de santé.",
                },
                "two":{
                    "title":"Étape 2",
                    "text":"Veuillez remplir le formulaire de consentement pour activer la réservation de votre session.",
                },
                "three":{
                    "title":"Étape 3",
                    "text":"Réservez votre session en ligne et recevez une confirmation dans les 24 heures suivant le paiement.",
                },
                "four":{
                    "title":"Étape 4",
                    "text":"Nous analyserons les données que vous avez fournies dans le questionnaire ainsi que les informations supplémentaires recueillies lors de notre séance de discussion Zoom. Dans les 24 heures, je vous prescrirai un traitement pour détoxifier votre corps et élaborerai un programme adapté à vos besoins de santé spécifiques.",
                },
            },
            "text":"Si vous souhaitez en savoir plus, veuillez me rencontrer par Zoom; J'offre une séance d'accueil de 15 minutes pour 10 $ qui serait déduite des frais de votre première consultation complète.",
        },

        "meetgreet":"Réserver Une Séance d'acceuil",

        "price11":{
            "title":"Première visite - Nouveau Patient",
            "remark":"Un nouveau patient est une personne qui rencontrera Hp. Aboudi Merhi pour la première fois pour une consultation ou un patient ancien qui n'a pas consulté depuis plus de deux ans.",
                        
            "price":{
                "adult":"Adulte : $225 CAD",
                "child1":"Enfants (7ans à 14ans) : $135 CAD ",
                "child2":"Enfants (1ans à 6ans) : $90 CAD",
                "family":"Pack famille : 10 % de réduction"
            },

            "list":{
                "one":"Formulaires à remplir (voir ci-dessus)",
                "two":"Entretien Zoom personnel [jusqu'à 1,5 heures]",
                "three":"Analyse des données et diagnostic",
                "four":"Programme diététique",
                "five":"Suppléments et homéopathie aiguë",
                "six":"Programme d'exercices en plein air et environnemental"
            },

            "button":"Réserver Une Première visite",
        },

        "price21":{
            "title":"Visite de suivi après 5 semaines",
                        
            "price":{
                "adult":"Adulte : $100 CAD",
                "child1":"Enfants (7ans à 14ans) : $60 CAD",
                "child2":"Enfants (1ans à 6ans) : $35 CAD",
                "family":"Pack famille : 10 % de réduction"
            },

            "list":{
                "one":"Entretien Zoom personnel [jusqu'à 1 heure]",
                "two":"Analyse des progrès",
                "three":"Évaluation du traitement",
                "four":"Ajustements du programme diététique et d'exercice",
                "five":"Suppléments et ajustements de l'homéopathie",
                "six":"Prescrire un remède homéopathique constitutionnel"
            },

            "button":"Réserver Une Visite De Suivi",
        },

        "price12":{
            "title":"Vérification Annuelle - Patient Existant",
            "remark":"Un patient existant est une personne qui a été un patient de Hp. Aboudi Merhi dans les deux années précédentes et dispose d'un dossier et d'un enregistrement de la première visite, d'un suivi, ou bilan de santé annuel.",
                        
            "price":{
                "adult":"Adulte : $135 CAD",
                "child1":"Enfants (7ans à 14ans) : $100 CAD",
                "child2":"Enfants (1ans à ans) : $75 CAD",
                "family":"Pack famille : 10 % de réduction"
            },

            "list":{
                "one":"Entretien Zoom personnel [jusqu'à 1,5 heures]",
                "two":"Analyse de l'état de santé actuel",
                "three":"Dietary & Exercise Program Adjustments",
                "four":"Suppléments et ajustements de l'homéopathie",
                "five":"Ajuster le remède homéopathique constitutionnel",
            },

            "button":"Réserver Une Vérification Annuelle",
        },

        "price22":{
            "title":"Visites rapides et consultations d'urgence",
            "text":"$65 CAD",
            "list":{
                "one":"Jusqu'à 30 minutes",
            },

            "button":"Réserver Une Consultation d'Urgence",
        },

        "book":{
            "text":"Prêt à faire une réservation?",
            "button":"Réserver une consultation",
        },

        "table":"/images/pricing_table1.jpg",

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

    pricehead.getElementsByTagName("h1")[0].textContent = data[attr].heading.title;
    /*
    pricehead.getElementsByClassName("pricing-step")[0].getElementsByTagName("h2")[0].textContent = data[attr].heading.steps.one.title;
    pricehead.getElementsByClassName("pricing-step")[1].getElementsByTagName("h2")[0].textContent = data[attr].heading.steps.two.title;
    pricehead.getElementsByClassName("pricing-step")[2].getElementsByTagName("h2")[0].textContent = data[attr].heading.steps.three.title;
    pricehead.getElementsByClassName("pricing-step")[3].getElementsByTagName("h2")[0].textContent = data[attr].heading.steps.four.title;

    pricehead.getElementsByClassName("pricing-step")[0].getElementsByTagName("p")[0].textContent = data[attr].heading.steps.one.text;
    pricehead.getElementsByClassName("pricing-step")[1].getElementsByTagName("p")[0].textContent = data[attr].heading.steps.two.text;
    pricehead.getElementsByClassName("pricing-step")[2].getElementsByTagName("p")[0].textContent = data[attr].heading.steps.three.text;
    pricehead.getElementsByClassName("pricing-step")[3].getElementsByTagName("p")[0].textContent = data[attr].heading.steps.four.text;
    */

    pricehead.getElementsByClassName("price-head-text")[0].innerHTML = data[attr].heading.text;
    document.getElementsByTagName("main")[0].getElementsByTagName("a")[0].innerText = data[attr].meetgreet;

    price1.getElementsByTagName("h2")[0].textContent = data[attr].price11.title;
    price1.getElementsByTagName("span")[0].textContent = data[attr].price11.remark;
    price1.getElementsByTagName("span")[1].textContent = data[attr].price11.price.adult;
    price1.getElementsByTagName("span")[2].textContent = data[attr].price11.price.child1;
    price1.getElementsByTagName("span")[3].textContent = data[attr].price11.price.child2;
    price1.getElementsByTagName("span")[4].textContent = data[attr].price11.price.family;
    price1.getElementsByTagName("li")[0].textContent = data[attr].price11.list.one;
    price1.getElementsByTagName("li")[1].textContent = data[attr].price11.list.two;
    price1.getElementsByTagName("li")[2].textContent = data[attr].price11.list.three;
    price1.getElementsByTagName("li")[3].textContent = data[attr].price11.list.four;
    price1.getElementsByTagName("li")[4].textContent = data[attr].price11.list.five;
    price1.getElementsByTagName("li")[5].textContent = data[attr].price11.list.six;
    price1.getElementsByTagName("a")[1].textContent = data[attr].price11.button;

    price2.getElementsByTagName("h2")[0].textContent = data[attr].price21.title;
    price2.getElementsByTagName("span")[0].textContent = data[attr].price21.price.adult;
    price2.getElementsByTagName("span")[1].textContent = data[attr].price21.price.child1;
    price2.getElementsByTagName("span")[2].textContent = data[attr].price21.price.child2;
    price2.getElementsByTagName("span")[3].textContent = data[attr].price21.price.family;
    price2.getElementsByTagName("li")[0].textContent = data[attr].price21.list.one;
    price2.getElementsByTagName("li")[1].textContent = data[attr].price21.list.two;
    price2.getElementsByTagName("li")[2].textContent = data[attr].price21.list.three;
    price2.getElementsByTagName("li")[3].textContent = data[attr].price21.list.four;
    price2.getElementsByTagName("li")[4].textContent = data[attr].price21.list.five;
    price2.getElementsByTagName("li")[5].textContent = data[attr].price21.list.six;
    price2.getElementsByTagName("a")[1].textContent = data[attr].price21.button;

    price3.getElementsByTagName("h2")[0].textContent = data[attr].price12.title;
    price3.getElementsByTagName("span")[0].textContent = data[attr].price12.remark;
    price3.getElementsByTagName("span")[1].textContent = data[attr].price12.price.adult;
    price3.getElementsByTagName("span")[2].textContent = data[attr].price12.price.child1;
    price3.getElementsByTagName("span")[3].textContent = data[attr].price12.price.child2;
    price3.getElementsByTagName("span")[4].textContent = data[attr].price12.price.family;
    price3.getElementsByTagName("li")[0].textContent = data[attr].price12.list.one;
    price3.getElementsByTagName("li")[1].textContent = data[attr].price12.list.two;
    price3.getElementsByTagName("li")[2].textContent = data[attr].price12.list.three;
    price3.getElementsByTagName("li")[3].textContent = data[attr].price12.list.four;
    price3.getElementsByTagName("li")[4].textContent = data[attr].price12.list.five;
    price3.getElementsByTagName("a")[1].textContent = data[attr].price12.button;

    price4.getElementsByTagName("h2")[0].textContent = data[attr].price22.title;
    /*price4.getElementsByTagName("p")[0].textContent = data[attr].price22.text;*/
    price4.getElementsByTagName("li")[0].textContent = data[attr].price22.list.one;
    price4.getElementsByTagName("a")[1].textContent = data[attr].price22.button;

    book[0].getElementsByTagName("a")[0].textContent = data[attr].book.button;
    book[1].getElementsByTagName("h2")[0].textContent = data[attr].book.text;
    book[1].getElementsByTagName("a")[0].textContent = data[attr].book.button;

    table.src = data[attr].table;

    //Toggle Left-2-Right and Right-2-Left Reading
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    const steps = document.getElementsByTagName("main")[0].getElementsByTagName("div")[0];
    if(attr == "arabic"){
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        } else if (navstyle.getPropertyValue("flex-direction") == "column") {
            navbar.style.flexDirection = "column-reverse"
        }

        pricehead.getElementsByTagName("h1")[0].style.textAlign = "right";
        const steps_style = window.getComputedStyle(steps);
        if(steps_style.getPropertyValue("flex-direction") == "row") {
            steps.style.flexDirection = "row-reverse";
        }

        price1.getElementsByTagName("h2")[0].style.textAlign = "right";
        price1.getElementsByTagName("span")[0].style.textAlign = "right";
        price1.getElementsByTagName("span")[0].style.float = "right";
        for(let k = 0; k < price1.getElementsByTagName("li").length; k++) {
            price1.getElementsByTagName("li")[k].style.textAlign = "right";
        }
        price2.getElementsByTagName("h2")[0].style.textAlign = "right";
        price2.getElementsByTagName("span")[0].style.textAlign = "right";
        price2.getElementsByTagName("span")[0].style.float = "right";
        for(let k = 0; k < price2.getElementsByTagName("li").length; k++) {
            price2.getElementsByTagName("li")[k].style.textAlign = "right";
        }
        price3.getElementsByTagName("h2")[0].style.textAlign = "right";
        price3.getElementsByTagName("span")[0].style.textAlign = "right";
        price3.getElementsByTagName("span")[0].style.float = "right";
        for(let k = 0; k < price3.getElementsByTagName("li").length; k++) {
            price3.getElementsByTagName("li")[k].style.textAlign = "right";
        }
        price4.getElementsByTagName("h2")[0].style.textAlign = "right";
        price4.getElementsByTagName("span")[0].style.textAlign = "right";
        price4.getElementsByTagName("span")[0].style.float = "right";
        price4.getElementsByTagName("p")[0].style.textAlign = "right";

    } else {
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
            navbar.style.flexDirection = "column"
        }

        pricehead.getElementsByTagName("h1")[0].style.textAlign = "left";
        const steps_style = window.getComputedStyle(steps);
        if(steps_style.getPropertyValue("flex-direction") == "row-reverse") {
            steps.style.flexDirection = "row";
        }
        price1.getElementsByTagName("h2")[0].style.textAlign = "left";
        for(let k = 0; k < price1.getElementsByTagName("li").length; k++) {
            price1.getElementsByTagName("li")[k].style.textAlign = "left";
        }
        price2.getElementsByTagName("h2")[0].style.textAlign = "left";
        for(let k = 0; k < price2.getElementsByTagName("li").length; k++) {
            price2.getElementsByTagName("li")[k].style.textAlign = "left";
        }
        price3.getElementsByTagName("h2")[0].style.textAlign = "left";
        for(let k = 0; k < price3.getElementsByTagName("li").length; k++) {
            price3.getElementsByTagName("li")[k].style.textAlign = "left";
        }
        price4.getElementsByTagName("h2")[0].style.textAlign = "left";
        for(let k = 0; k < price4.getElementsByTagName("li").length; k++) {
            price4.getElementsByTagName("li")[k].style.textAlign = "left";
        }
        
    }*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
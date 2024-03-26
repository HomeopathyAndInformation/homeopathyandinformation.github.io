const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
const carousel = document.getElementsByClassName("owl-carousel")[0];
const intro = document.getElementsByClassName("home-intro")[0];

const chanone7 = document.getElementsByClassName("information")[0].getElementsByClassName("block-cha")[0];
const holistic = document.getElementsByClassName("information")[0].getElementsByClassName("block-hol")[0];
const biograph = document.getElementsByClassName("information")[0].getElementsByClassName("block-bio")[0];
const treatmen = document.getElementsByClassName("information")[0].getElementsByClassName("block-tre")[0];
const referenc = document.getElementsByClassName("information")[0].getElementsByClassName("block-ref")[0];

const call = document.getElementsByClassName("call-to-action")[0];

const testimonial = document.getElementsByClassName("testimonials")[0];

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
    
        carousel.getElementsByClassName("car0")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.water;
        carousel.getElementsByClassName("car1")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.air;
        carousel.getElementsByClassName("car2")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.exercise;
        carousel.getElementsByClassName("car3")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.food;
        carousel.getElementsByClassName("car4")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.meds;
    
        intro.getElementsByTagName("h1")[0].textContent = data[attr].intro.title;
      //intro.getElementsByTagName("button")[0].textContent = data[attr].intro.transcript.button;
        intro.getElementsByClassName("intro-text")[0].innerHTML = data[attr].intro.text;
        intro.getElementsByTagName("a")[0].textContent = data[attr].intro.button;
    
        chanone7.getElementsByTagName("h1")[0].textContent = data[attr].chanone7.title;
        holistic.getElementsByTagName("h1")[0].textContent = data[attr].holistic.title;
        biograph.getElementsByTagName("h1")[0].textContent = data[attr].bio.title;
        treatmen.getElementsByTagName("h1")[0].textContent = data[attr].treat.title;
        referenc.getElementsByTagName("h1")[0].textContent = data[attr].ref.title;
    
        chanone7.getElementsByTagName("p")[0].innerHTML = data[attr].chanone7.text;
        holistic.getElementsByTagName("p")[0].innerHTML = data[attr].holistic.text;
        biograph.getElementsByTagName("p")[0].innerHTML = data[attr].bio.text;
        treatmen.getElementsByTagName("p")[0].innerHTML = data[attr].treat.text;
        referenc.getElementsByTagName("p")[0].innerHTML = data[attr].ref.text;
    
        call.getElementsByTagName("h1")[0].textContent = data[attr].call.title;
        call.getElementsByTagName("p")[0].textContent = data[attr].call.text1;
        call.getElementsByTagName("p")[1].textContent = data[attr].call.text2;
        call.getElementsByTagName("a")[0].textContent = data[attr].call.button;
    
        testimonial.getElementsByTagName("h1")[0].textContent = data[attr].testimonial.title;
        testimonial.getElementsByTagName("h2")[0].textContent = data[attr].testimonial.text;
        testimonial.getElementsByTagName("h3")[0].textContent = data[attr].testimonial.subtext;
    
        testimonial.getElementsByTagName("li")[0].getElementsByTagName("p")[0].textContent = data[attr].testimonial.one.name;
        testimonial.getElementsByTagName("li")[0].getElementsByTagName("p")[1].textContent = data[attr].testimonial.one.title;
        testimonial.getElementsByTagName("li")[0].getElementsByTagName("p")[2].textContent = data[attr].testimonial.one.country;
        testimonial.getElementsByTagName("li")[0].getElementsByTagName("p")[3].textContent = data[attr].testimonial.one.quote;  
    
        testimonial.getElementsByTagName("li")[1].getElementsByTagName("p")[0].textContent = data[attr].testimonial.two.name;
        testimonial.getElementsByTagName("li")[1].getElementsByTagName("p")[1].textContent = data[attr].testimonial.two.title;
        testimonial.getElementsByTagName("li")[1].getElementsByTagName("p")[2].textContent = data[attr].testimonial.two.country;
        testimonial.getElementsByTagName("li")[1].getElementsByTagName("p")[3].textContent = data[attr].testimonial.two.quote;
        
        testimonial.getElementsByTagName("li")[2].getElementsByTagName("p")[0].textContent = data[attr].testimonial.three.name;
        testimonial.getElementsByTagName("li")[2].getElementsByTagName("p")[1].textContent = data[attr].testimonial.three.title;
        testimonial.getElementsByTagName("li")[2].getElementsByTagName("p")[2].textContent = data[attr].testimonial.three.country;
        testimonial.getElementsByTagName("li")[2].getElementsByTagName("p")[3].textContent = data[attr].testimonial.three.quote;

        document.getElementsByClassName("book")[0].textContent = data[attr].book;

        //Toggle Left-2-Right and Right-2-Left Reading
        /*
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
        const containers = document.getElementsByTagName("div");
        if(attr == "arabic"){
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row") {
                navbar.style.flexDirection = "row-reverse";
            } else if (navstyle.getPropertyValue("flex-direction") == "column") {
                navbar.style.flexDirection = "column-reverse";
            }
            if(getCookie("rtl") != "true"){
                setCookie("rtl","true",365);
            }

            intro.getElementsByTagName("p")[0].style.textAlign = "right";

            for(let j = 0; j < containers.length; j++) {
                if(containers[j].getAttribute("class") == "info-container"){
                    const containstyle = window.getComputedStyle(containers[j]);
                    if(containstyle.getPropertyValue("flex-direction") == "row") {
                        containers[j].style.flexDirection = "row-reverse";
                        containers[j].getElementsByTagName("div")[0].style.textAlign = "right";
                    }
                }
            }
        } else {
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
                navbar.style.flexDirection = "row";
            } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
                navbar.style.flexDirection = "column";
            }
            if(getCookie("rtl") == "true"){
                setCookie("rtl","false",365);
            }

            intro.getElementsByTagName("p")[0].style.textAlign = "left";

            for(let j = 0; j < containers.length; j++) {
                if(containers[j].getAttribute("class") == "info-container"){
                    const containstyle = window.getComputedStyle(containers[j]);
                if(containstyle.getPropertyValue("flex-direction") == "row-reverse") {
                    containers[j].style.flexDirection = "row";
                    containers[j].getElementsByTagName("div")[0].style.textAlign = "left";
                }
                }
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
            "meds":"Supplements",
            "login":"SignUp/Login",
            "meetings":"My Meetings",
            "appts":"My Appointments",
            "admin":"Admin",
            "account":"Account",
            "qna":"FAQ",
            "logout":"Logout",
        },

        "carousel":{
            "water":"Water",
            "air": "Air",
            "exercise":"Exercise",
            "food":"Food",
            "meds":"Environment",
        },

        "intro":{
            "title":"Everybody is Welcome Here...",

            "transcript":{
                "text":"",
                "button":"Read Transcript",

            },

            "text":"Try to start thinking of your body as an ecosystem by itself. You have over a trillion microorganisms in your body. You must take care of them to keep them in good balance. They interact with microbes in our homes, workplaces, hospitals, as well as in the air, water and earth. We will show you how to find your balance on this CHANONE 7 site.",
            "button":"Book a Consultation",
        },

        "chanone7":{
            "title":"Chanone 7",
            "text":"This website mirrors my 30 years of experience working in homeopathy in combination with nutritional healing, vitamino-therapy, Chinese and environmental medicine alongside physical exercise and outdoors activities.If you are interested to learn more I offer a <strong>15-minute meet-and-greet session for $10</strong> which would be deducted from the fees of your first full consultation. ",
        },

        "holistic":{
            "title":"Holistic Philosophy",
            "text":"My goal in every treatment is to empower my patients to take charge and take care of their own body in the future. We work together to solve what ails you, and it will be up to you to make sure the treatment happens, or the lifestyle change is met or continued if need be...",
        },

        "bio":{
            "title":"Biography",
            "text":"My name is Abdul-Razzak Merhi. Friends and family call me Aboudi, as do many of my patients. I am a Canadian Lebanese, my wife and I live in British Columbia. Born in 1958 in the historical town of Tripoli in the north of Lebanon, I mainly attended French boarding schools where I was exposed to a mix of European and Arab curriculum and culture. The onset of the Lebanese civil war in 1975 changed the path of my life forever...",
        },

        "treat":{
            "title":"Treatment Options",
            "text":"Over the years, I have treated dozens of simple maladies with home remedies and various holistic treatments outlined on this site. When patients apply the principles and practicalities of Chanone 7 approach, they have become healthier. Our Chanone 7 goal is always to bring the body back to balance with these treatments, and more...",
        },

        "ref":{
            "title":"References",
            "text":"All references are the latest information available, and outline what scientists are finding about the root balance of the disease. I have personally curated this collection of trustworthy references, that I recommend to anyone eager to learn more...",
        },

        "call":{
            "title":"Check out Pricing",
            "text1":"'Everyone has doctor in him or her; we just have to help it in its work. The natural healing force within each of us is the greatest force",
            "text2":"in getting well. Our food should be our medicine and our medicine our food' - Hippocrates the father of Medicine (460 BC- 375BC)",
            "button":"Click to learn more",
        },

        "testimonial":{
            "title":"Testimonials",
            "text":"“The greatest medicine of all is teaching people how not to need it.” - Hyppocrates (460 B.C. to 375 B.C.)",
            "subtext":"Hippocrates of Kos, also known as Hippocrates II, was a Greek physician of the classical period who is considered one of the most outstanding figures in the history of medicine.",
            "one":{
                "name":"Suzan Ayscough",
                "title":"She/Her/Elle",
                "country":"CANADA",
                "quote":"I am actually kinda’ proud to be one of Aboudi’s original five crash test dummies so to speak, meaning I volunteered to be one of his first five test patients when he was a student of homeopathic medicine...",
            },
            "two":{
                "name":"Dr Abdul Halim Zeidan",
                "title":"He/Him/Lui",
                "country":"LEBANON",
                "quote":"In 2012, I had been diagnosed with renal failure which required either dialysis or kidney replacement. It was considered ‘too late’ to check for alternatives, by no less than three major specialized centers...",
            },
            "three":{
                "name":"Abed Ghaleb",
                "title":"He/Him/Lui",
                "country":"LEBANON",
                "quote":`Hp. Merhi opened an amazing horizon for me. He is sincere. He takes things seriously, and scientifically. He finds which treatments are best for his individual patients. He is always improving his...`,
            },
        },

        "book":"Book a consultation",

        "footer":{
            "quick":"Quick Links",
            "products":"Products",
        },

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

        "carousel":{
            "water":"ماء",
            "air": "هواء",
            "exercise":"ممارسه الرياضه",
            "food":"غذاء",
            "meds":"بيئة",
        },

        "intro":{
            "title":"...نرحب بالجميع هنا ",

            "transcript":{
                "text":"",
                "button":"اقرأ النص",

            },

            "text":"حاول أن تبدأ في التفكير في جسمك كنظام بيئي في حد ذاته. لديك أكثر من تريليون من الكائنات الحية الدقيقة في جسمك. يجب أن تعتني بهم للحفاظ على توازنهم بشكل جيد. تتفاعل مع الميكروبات في منازلنا وأماكن العمل والمستشفيات ، وكذلك الهواء والماء والأرض نفسها. سنوضح لك كيفية العثور على توازنك الخاص بك على موقع تشانون هذا...",
            "button":"احجز استشارة",
        },

        "chanone7":{
            "title":"تشانون 7",
            "text":"يعكس هذا الموقع الإلكتروني خبرتي التي تبلغ 30 عامًا ، والتي تجمع بين الطب الشمولي والعناصر الطبيعية والقديمة والمعالجة الهوميوباثية والتغذية جنبًا إلى جنب مع التمارين والطب الخارجي والبيئي والمكونات. إذا كنت ترغب في معرفة المزيد ، يمكنك حجز لقاء زوم معي لمدة 15 دقيقة مقابل 10 دولارات ، واطرح علي أسئلة. هذا المبلغ سيتم خصمه من جلستك الحقيقية الأولى...",
        },

        "holistic":{
            "title":"الفلسفة الشمولية",
            "text":"إنّ الهدف الذي أتوخّاه من كلّ علاج هو تمكين مرضاي من تحمُّل المسؤولية والعناية بأجسادهم في المستقبل. نحن نعمل معاً لإيجاد حلٍّ لما تعاني منه، ويعود إليك أمر الحرص على تطبيق العلاج أو تحقيق التغيير في نمط الحياة أو الإستمرار بالنمط نفسه إذا لزم الأمر...",
        },

        "bio":{
            "title":"سيرة شخصية",
            "text":"إسمي عبد الرزاق مرعي. يناديني أصدقائي وأفراد عائلتي بإسم &quot;عبودي&quot;، وكذلك يفعل العديد من مرضاي. أنا لبناني كندي زوجتي وأنا نعيش في كولومبيا البريطانية مع عائلتي. وُلدت في العام 1958 في مدينة طرابلس التاريخية في شمال لبنان، وتأسّست في التعليم في المدارس الداخلية الفرنسية حيث تعرّفت على مزيج من المناهج الدراسية التي عكسَتْ الثقافتَيْن الأوروبية والعربية، إلا أنّ اندلاع الحرب الأهلية اللبنانية في العام 1975 غيّر مسار حياتي إلى الأبد...",
        },

        "treat":{
            "title":"خيارات العلاج",
            "text":"على مّر السينين، عالجتُ العشرات من الأمراض البسيطة بالعلاجات المنزلية والعديد من العلاجات الشاملة الموضحة في هذا الموقع                         .    عندما يُطبق المرضى المبادئ والجوانب العملية لنهج تشانون يُصبِحون بصحةٍ أفضل. هدف هذ الموقع هو إعادة توازن الجسم مع هذه العلاجات واكثر...",
        },

        "ref":{
            "title":"مراجع",
            "text":"جميع المراجع هي أحدث المعلومات المتاحة وتحدد ما يجده العلماء حول السبب الجذري للمرض. لقد قمت شخصيًا برعاية هذه المجموعة من المراجع الجديرة بالثقة والتي أوصي بها لأي شخص حريص على معرفة المزيد...",
        },

        "call":{
            "title":"تحقق من الأسعار",
            "text1":'"كل شخص لديه طبيب بداخله ؛ علينا فقط مساعدتها في عملها. قوة الشفاء الطبيعية داخل كل واحد منا هي أعظم قوة',
            "text2":'في التعافي. يجب أن يكون طعامنا دوائنا ودواءنا طعامنا" - أبقراط أبو الطب (460 قبل الميلاد - 375 قبل الميلاد)',
            "button":"اضغط لتتعلم المزيد",
        },

        "testimonial":{
            "title":"لشهادات - التوصيات",
            "text":'"أعظم دواء على الإطلاق هو تعليم الناس كيف لا يحتاجون إليه." - الأقباط (460 قبل الميلاد إلى 375 قبل الميلاد).',
            "subtext":"أبقراط كوس ، المعروف أيضًا باسم أبقراط الثاني ، كان طبيبًا يونانيًا في الفترة الكلاسيكية ويُعتبر أحد أبرز الشخصيات في تاريخ الطب.",
            "one":{
                "name":"سوزان ايسكوف",
                "title":"هي",
                "country":"كندا",
                "quote":"أنا في الواقع فخورة بكوني واحدة من دمى اختبارات التصادم الخمس الأصلية لعبودي إذا جاز التعبير ، مما يعني أنني تطوعت لأكون واحدًا من أول خمسة مرضى خضعوا للاختبار عندما كان طالبًا في الطب المثلي ... انقر لقراءة بقية الشهادات - التوصيات",
            },
            "two":{
                "name":"عبد الحليم زيدان",
                "title":"هو",
                "country":"لبنان",
                "quote":"في عام 2012 ، تم تشخيصي بالفشل الكلوي الذي تطلب إما غسيل الكلى أو استبدال الكلى. اعتبر 'متأخر جدا' للبحث عن بدائل ، من قبل ما لا يقل عن ثلاثة مراكز متخصصة رئيسية ... انقر لقراءة الشهادات",
            },
            "three":{
                "name":"عابد غالب",
                "title":"هو",
                "country":"لبنان",
                "quote":" لقد فتح مرعي أفقًا رائعًا بالنسبة لي. هو صادق. يأخذ الأمور بجدية وعلمية. يجد العلاجات الأفضل لمرضاه الفرديين. يقوم دائمًا بتحسين ... انقر لقراءة بقية الشهادات",
            },
        },

        "book":"احجز استشارة",

        "footer":{
            "quick":"روابط سريعة",
            "products":"منتجات",
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
            "meds":"Suppléments",
            "login":"Registrer/Connexion",
            "meetings":"Mes réunions",
            "appts":"Mes rendez-vous",
            "admin":"Admin",
            "account":"Compte",
            "qna":"FAQ",
            "logout":"Déconnecter",
        },

        "carousel":{
            "water":"Eau",
            "air": "Air",
            "exercise":"Exercise",
            "food":"Aliments",
            "meds":"Environnement",
        },

        "intro":{
            "title":"Tout Le Monde est Bienvenue ici...",

            "transcript":{
                "text":"Essayez de commencer à penser à votre corps comme un écosystème en soi. Vous avez plus d'un billion de micro-organismes dans votre corps. Vous devez en prendre soin pour les maintenir en bon équilibre. Ils interagissent avec les microbes dans nos maisons, nos lieux de travail et nos hôpitaux, hôpitaux, ainsi que dans l'air, l'eau et la terre. Nous allons vous montrer comment trouver son équilibre sur ce site CHANONE 7.",
                "button":"Lire la Transcription",

            },

            "text":"Essayez de commencer à penser à votre corps comme un écosystème en soi. Vous avez plus d'un billion de micro-organismes dans ton corps. Vous devez en prendre soin pour les maintenir en bon équilibre. Ils interagissent avec les microbes dans nos maisons, nos lieux de travail et nos hôpitaux, ainsi que dans l'air, l'eau et la terre. Nous allons vous montrer comment trouver son équilibre sur ce site CHANONE 7. Veuillez explorer...",
            "button":"Réserver une Consultation",
        },

        "chanone7":{
            "title":"Chanone 7",
            "text":"Ce site Web reflète mes 30 années d'expérience de travail en homéopathie en combinaison avec la guérison nutrionelle, la vitaminothérapie, la médecine chinoise et environnementale aux côtés de l'exercice physique et activités de plein air. Si vous souhaitez en savoir plus, réservez une réunion rapide de 15 minutes avec moi sur Zoom pour 10 $ et posez-moi des questions. Ce montant sera déduit de notre première vraie séance...",
        },

        "holistic":{
            "title":"Philosophie Holistique",
            "text":"Mon objectif dans chaque traitement est de permettre à mes patients de prendre eux-mêmes en charge de leur corps à l&#39;avenir.. Nous travaillons ensemble pour résoudre ce qui vous afflige et ce sera à vous de vous assurer le traitement se produit ou le changement de mode de vie est atteint ou poursuivi si nécessaire...",
        },

        "bio":{
            "title":"Biographie",
            "text":"Je me nomme Abdul-Razzak Merhi. Mes amis et ma famille m'appellent Aboudi, comme beaucoup de mes patients. Je suis un Libanais canadien, ma femme et moi vivent en Colombie-Britannique avec notre famille. Né en 1958 dans la ville historique de Tripoli, dans le nord du Liban, j'ai principalement fréquenté des internats français où j'ai été exposé à un mélange des programmes de cultures européens et arabes. Le début de la guerre civile libanaise en 1975 a changé le cours de ma vie pour toujours...",
        },

        "treat":{
            "title":"Options de traitement",
            "text":"Au fil des ans, j'ai traité des dizaines de maladies simples avec des remèdes maison et divers traitements holistiques décrits sur ce site. Lorsque les patients appliquent les principes et les aspects pratiques de l'approche Chanone 7, ils sont en meilleure santé. Notre objective de CHANONE7 est toujours de supporter le corps à trouver son équilibre avec ces traitements, et encore plus...",
        },

        "ref":{
            "title":"Références",
            "text":"Toutes les références sont les dernières informations et décrivent ce que les scientifiques trouvent sur l'équilibre racinaire de la maladie. J'ai personnellement organisé cette collection de références dignes de confiance que je recommande à tous ceux qui souhaitent en savoir plus...",
        },

        "call":{
            "title":"Consultez les Prix",
            "text1":"« Tout le monde a un médecin en lui ; nous devons juste l'aider dans son travail. La force de guérison naturelle en chacun de nous est la plus grande force",
            "text2":"en se portant bien. Notre nourriture devrait être notre médecine et notre médecine notre nourriture » - Hippocrate le père de la médecine (460 BC- 375BC)",
            "button":"Cliquez ici pour en savoir plus",
        },

        "testimonial":{
            "title":"Témoignages",
            "text":`"Le plus grand médicament de tous est d'enseigner aux gens comment ne pas en avoir besoin." - Hyppocrate (460 avant JC à 375 avant JC)`,
            "subtext":"Hippocrate de Kos, également connu sous le nom d'Hippocrate II, était un médecin grec de la période classique considéré comme l'une des figures les plus remarquables de l'histoire de la médecine.",
            "one":{
                "name":"Suzan Ayscough",
                "title":"She/Her/Elle",
                "country":"CANADA",
                "quote":"Je suis en fait un peu fier d'être l'un des cinq premiers mannequins de crash test d'Aboudi, pour ainsi dire, ce qui signifie que je me suis porté volontaire pour être l'un de ses cinq premiers patients testés lorsqu'il était étudiant en médecine homéopathique...",
            },
            "two":{
                "name":"Dr Abdul Halim Zeidan",
                "title":"He/Him/Lui",
                "country":"LIBAN",
                "quote":"En 2012, on m'avait diagnostiqué une insuffisance rénale qui nécessitait soit une dialyse, soit une arthroplastie rénale. Il a été jugé 'trop ​​tard' pour rechercher des alternatives, par pas moins de trois grands centres spécialisés...",
            },
            "three":{
                "name":"Abed Ghaleb",
                "title":"He/Him/Lui",
                "country":"LIBAN",
                "quote":"HP. Merhi m'a ouvert un horizon incroyable. Il est sincère. Il prend les choses au sérieux et scientifiquement. Il trouve quels traitements sont les meilleurs pour ses patients individuels. Il améliore toujours son...",
            },
        },

        "book":"Réserver une consultation",

        "footer":{
            "quick":"Liens rapides",
            "products":"Produits",
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

    carousel.getElementsByClassName("car0")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.water;
    carousel.getElementsByClassName("car1")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.air;
    carousel.getElementsByClassName("car2")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.exercise;
    carousel.getElementsByClassName("car3")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.food;
    carousel.getElementsByClassName("car4")[0].getElementsByTagName("p")[0].textContent = data[attr].carousel.meds;

    intro.getElementsByTagName("h1")[0].textContent = data[attr].intro.title;
  //intro.getElementsByTagName("button")[0].textContent = data[attr].intro.transcript.button;
    intro.getElementsByClassName("intro-text")[0].innerHTML = data[attr].intro.text;
    intro.getElementsByTagName("a")[0].textContent = data[attr].intro.button;

    chanone7.getElementsByTagName("h1")[0].textContent = data[attr].chanone7.title;
    holistic.getElementsByTagName("h1")[0].textContent = data[attr].holistic.title;
    biograph.getElementsByTagName("h1")[0].textContent = data[attr].bio.title;
    treatmen.getElementsByTagName("h1")[0].textContent = data[attr].treat.title;
    referenc.getElementsByTagName("h1")[0].textContent = data[attr].ref.title;

    chanone7.getElementsByTagName("p")[0].innerHTML = data[attr].chanone7.text;
    holistic.getElementsByTagName("p")[0].innerHTML = data[attr].holistic.text;
    biograph.getElementsByTagName("p")[0].innerHTML = data[attr].bio.text;
    treatmen.getElementsByTagName("p")[0].innerHTML = data[attr].treat.text;
    referenc.getElementsByTagName("p")[0].innerHTML = data[attr].ref.text;

    call.getElementsByTagName("h1")[0].textContent = data[attr].call.title;
    call.getElementsByTagName("p")[0].textContent = data[attr].call.text1;
    call.getElementsByTagName("p")[1].textContent = data[attr].call.text2;
    call.getElementsByTagName("a")[0].textContent = data[attr].call.button;

    testimonial.getElementsByTagName("h1")[0].textContent = data[attr].testimonial.title;
    testimonial.getElementsByTagName("h2")[0].textContent = data[attr].testimonial.text;
    testimonial.getElementsByTagName("h3")[0].textContent = data[attr].testimonial.subtext;

    testimonial.getElementsByTagName("li")[0].getElementsByTagName("p")[0].textContent = data[attr].testimonial.one.name;
    testimonial.getElementsByTagName("li")[0].getElementsByTagName("p")[1].textContent = data[attr].testimonial.one.title;
    testimonial.getElementsByTagName("li")[0].getElementsByTagName("p")[2].textContent = data[attr].testimonial.one.country;
    testimonial.getElementsByTagName("li")[0].getElementsByTagName("p")[3].innerHTML = data[attr].testimonial.one.quote;  

    testimonial.getElementsByTagName("li")[1].getElementsByTagName("p")[0].textContent = data[attr].testimonial.two.name;
    testimonial.getElementsByTagName("li")[1].getElementsByTagName("p")[1].textContent = data[attr].testimonial.two.title;
    testimonial.getElementsByTagName("li")[1].getElementsByTagName("p")[2].textContent = data[attr].testimonial.two.country;
    testimonial.getElementsByTagName("li")[1].getElementsByTagName("p")[3].innerHTML = data[attr].testimonial.two.quote;
    
    testimonial.getElementsByTagName("li")[2].getElementsByTagName("p")[0].textContent = data[attr].testimonial.three.name;
    testimonial.getElementsByTagName("li")[2].getElementsByTagName("p")[1].textContent = data[attr].testimonial.three.title;
    testimonial.getElementsByTagName("li")[2].getElementsByTagName("p")[2].textContent = data[attr].testimonial.three.country;
    testimonial.getElementsByTagName("li")[2].getElementsByTagName("p")[3].innerHTML = data[attr].testimonial.three.quote;

    document.getElementsByClassName("book")[0].textContent = data[attr].book;



    //Toggle Left-2-Right and Right-2-Left Reading
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    const containers = document.getElementsByTagName("div");
    if(attr == "arabic"){
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        } else if (navstyle.getPropertyValue("flex-direction") == "column") {
            navbar.style.flexDirection = "column-reverse";
        }
        if(getCookie("rtl") != "true"){
            setCookie("rtl","true",365);
        }

        intro.getElementsByTagName("p")[0].style.textAlign = "right";

        for(let j = 0; j < containers.length; j++) {
            if(containers[j].getAttribute("class") == "info-container"){
                const containstyle = window.getComputedStyle(containers[j]);
                if(containstyle.getPropertyValue("flex-direction") == "row") {
                    containers[j].style.flexDirection = "row-reverse";
                    containers[j].getElementsByTagName("div")[0].style.textAlign = "right";
                }
            }
        }

    } else {
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
            navbar.style.flexDirection = "column";
        }
        if(getCookie("rtl") == "true"){
            setCookie("rtl","false",365);
        }

        intro.getElementsByTagName("p")[0].style.textAlign = "left";

        for(let j = 0; j < containers.length; j++) {
            if(containers[j].getAttribute("class") == "info-container"){
                const containstyle = window.getComputedStyle(containers[j]);
                if(containstyle.getPropertyValue("flex-direction") == "row-reverse") {
                    containers[j].style.flexDirection = "row";
                    containers[j].getElementsByTagName("div")[0].style.textAlign = "left";
                }
            }
        }
    }*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
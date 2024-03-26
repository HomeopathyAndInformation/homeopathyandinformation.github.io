const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const testimonials = document.getElementsByTagName("main")[0];

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
    
        testimonials.getElementsByTagName("h1")[0].textContent = data[attr].testimonials.title;

        testimonials.getElementsByTagName("p")[0].innerHTML = data[attr].testimonials.one.name;
        testimonials.getElementsByTagName("p")[1].innerHTML = data[attr].testimonials.one.title;
        testimonials.getElementsByTagName("a")[0].innerHTML = data[attr].testimonials.one.text;

        testimonials.getElementsByTagName("p")[2].innerHTML = data[attr].testimonials.two.name;
        testimonials.getElementsByTagName("p")[3].innerHTML = data[attr].testimonials.two.title;
        testimonials.getElementsByTagName("p")[4].innerHTML = data[attr].testimonials.two.text;
        testimonials.getElementsByTagName("a")[1].innerHTML = data[attr].testimonials.two.button;

        testimonials.getElementsByTagName("p")[5].innerHTML = data[attr].testimonials.three.name;
        testimonials.getElementsByTagName("p")[6].innerHTML = data[attr].testimonials.three.title;
        testimonials.getElementsByTagName("p")[7].innerHTML = data[attr].testimonials.three.text;

        testimonials.getElementsByTagName("p")[8].innerHTML = data[attr].testimonials.four.name;
        testimonials.getElementsByTagName("p")[9].innerHTML = data[attr].testimonials.four.title;
        testimonials.getElementsByTagName("p")[10].innerHTML = data[attr].testimonials.four.text;

        /*document.getElementsByClassName("book")[0].textContent = data[attr].book;*/

        //Toggle Left-2-Right and Right-2-Left Reading
        /*
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
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

        "testimonials":{
            "title":"About Us",
            
            "one":{
                "name":"Abdul-Razzak Merhi",
                "title":"Homeopathic Practitioner, Director, Chanone 7",
                "country":"CANADA/LIBAN",
                "text":"Abdul-Razzak's Biography Page",
            },

            "two":{
                "name":"Suzan Ayscough",
                "title":"Content Director",
                "country":"CANADA",
                "text":'Suzan Ayscough ("Suze") happily lives, writes and gardens in Toronto, Ontario. She is the Content Director of this website. Suze also provided one of the testimonials for Chanone7 about Aboudi himself, as a trusted Homeopathic Practitioner. Suzan is currently writing and producing for her own company OnCamera3000. Her media career spans decades, and the globe. She was ‘head comms’ for Ontario Creates, the Canadian Academy, Telefilm Canada, Alliance Communications and Cookie Jar. She was Canadian Bureau Chief, film critic and investigative reporter for Variety & Daily Variety, and writes for many publications. Suzan co-authored the book: Hollywood North: Creating the Canadian Motion Picture Industry, and is penning a sequel. She was also the sole Producer on the series pilot HEARTLAND for CBC & Netflix; it’s still the longest-running 1-hour scripted drama in Canadian TV history!',
                "button":"Suzan's Testimonial",
            },

            "three":{
                "name":"Andrea Bechinger Merhi",
                "title":"Content Provider",
                "country":"ALLEMANGE/CANADA/LIBAN",
                "text":`A born globetrotter, Andrea left Germany at the tender age of 18 to go to Canada, where she studied languages & education, became known to friends as "Andy", and married the love of her life-- Aboudi. She supported her husband's choice to become a homeopathic practitioner (long before it was commonly accepted) and moved with him to Lebanon, where he introduced homeopathy as a complementary medicine in his native country. Andy provided both content and photographs to this Chanone7 website and was an essential sounding board for the team! Andy comes by her love of homeopathy naturally. As the youngest of five kids, she was influenced by her mother who advocated natural medicine and homeopathy.  She has taught languages and English literature in Canada and the Middle East for 32 years. Besides being an educator, mother of four, and grandmother of one, she also enjoys the outdoors, yoga, plays ping pong, and loves to go sailing with her husband.`,
            },

            "four":{
                "name":"Fadi Naaman",
                "title":"Administrator & Web Designer",
                "country":"LIBAN/CANADA",
                "text":"Fadi is one of Aboudi’s youngest nephews. At only 21 years old today, Fadi is the trilingual designer of this new Chanone7 site, which mirrors his brilliant language skills in English, French and Arabic. His passion for creativity, sciences, technology -- and his love for programming -- was discovered when he was just 15 years old, when he subsequently decided to major in Computer Science with a Specialization in Computer Theory and Software Engineering at Trent University. Born in Canada, Fadi and his parents initially lived in Saudi Arabia for 13 years, before moving to Lebanon for another 5 years. Since then he has been living and studying on his own in Canada at Trent University. He has joined Aboudi, Suzan and Andy to bring this project to life. Fadi worked with them to decide all the content, but he was responsible for designing and developing the entirety of this Chanone7 website. He will continue to play a managing role in upholding and upgrading Chanone7 to provide a better experience to both Aboudy and his patients. Fadi will also continue to build this into a legacy site for homeopathic care.",
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

        "testimonials":{
            "title":"معلومات عنا",
            
            "one":{
                "name":"عبد الرزاق مرعي",
                "title":"موماريس الهوميوباثي, المدير، شانون 7",
                "country":"كندا / لبنان",
                "text":"صفحة السيرة الذاتية لعبد الرزاق",
            },

            "two":{
                "name":"سوزان ايسكوف",
                "title":"مديرة المحتوى",
                "country":"كندا",
                "text":'سوزان أيسكوف ("سوز") تعيش بسعادة وتكتب وتعيش في حدائق في تورنتو ، أونتاريو. هي مديرة المحتوى لهذا الموقع. قدمت سوز أيضًا إحدى الشهادات لعبودي نفسه ، بصفته ممارسًا موثوقًا في المعالجة الهوميوباثية ، وعلى موقع الويب هذا ، Chanone7. تقوم سوزان حاليًا بالكتابة والإنتاج لشركتها الخاصة OnCamera3000. تمتد مسيرتها الإعلامية على مدى عقود ، والعالم. كانت "رئيسة الاتصالات" في Ontario Creates ، والأكاديمية الكندية ، و Telefilm Canada ، و Alliance Communications و Cookie Jar. كانت رئيسة المكتب الكندي ، وناقدة الأفلام ومراسلة التحقيقات في Variety & Daily Variety ، وتكتب للعديد من المنشورات. شاركت سوزان في تأليف الكتاب: هوليوود نورث: إنشاء صناعة الصور المتحركة الكندية. كانت أيضًا المنتج الوحيد في السلسلة التجريبية HEARTLAND لـ CBC & Netflix ؛ إنها لا تزال أطول دراما مكتوبة مدتها ساعة واحدة في تاريخ التلفزيون الكندي!',
                "button":"شهادة سوزان",
            },

            "three":{
                "name":"أندريا بيشينجر مرعي",
                "title":"مزود المحتوى",
                "country":"ألمانيا / كندا / لبنان",
                "text":'أندريا ، مولودة كرحالة عالميا، غادرت ألمانيا في سن 18 عامًا لتذهب إلى كندا ، حيث درست اللغات والتعليم ، وأصبحت معروفة لأصدقائها باسم "آندي" ، وتزوجت من حب حياتها - عبودي. أيدت اختيار زوجها ليصبح ممارسًا للطب الهوميوباتي (قبل فترة طويلة من قبوله بشكل عام) وانتقلت معه إلى لبنان ، حيث قدم الطب الهوميوباتي كعلاج تكميلي في بلده الأصلي. قدمت Andy كلاً من المحتوى والصور إلى موقع Chanone7 هذا وكانت لوحة صوتية و الهاميةأساسية للفريق يأتي آندي بحبها للمعالجة الهو ميوباتية بشكل طبيعي. باعتبارها الأصغر بين خمسة أطفال ، تأثرت بوالدتها التي دعت إلى الطب الطبيعي والمعالجة الهوميوباتية. قامت بتدريس اللغات والأدب الإنجليزي في كندا والشرق الأوسط لمدة 32 عامًا. إلى جانب كونها معلمة ، وأم لأربعة أطفال ، وجدة لطفل واحد ، فهي تستمتع أيضًا بالهواء الطلق ، واليوغا ، ولعب كرة الطاولة ، وتحب الإبحار مع زوجها.',
            },

            "four":{
                "name":"فادي نعمان",
                "title":"اداري ومصمم الموقع",
                "country":"لبنان / كندا",
                "text":"فادي هو احد اصغر ابناء اخوات واخوة عبودي. في عمر 21 عامًا فقط ، أصبح فادي مصممًا ثلاثي اللغات لموقع Chanone7 الجديد ، والذي يعكس مهاراته اللغوية الرائعة في اللغة الإنجليزية والفرنسية والعربية. تم اكتشاف شغفه بالإبداع والعلوم والتكنولوجيا - وحبه للبرمجة - عندما كان عمره 15 عامًا فقط ، عندما قرر لاحقًا التخصص في علوم الكمبيوتر مع تخصص في نظرية الكمبيوتر وهندسة البرمجيات في جامعة ترينت. ولد فادي في كندا و عاش مع والديه في البداية في المملكة…. ، وعاشوا في البداية في المملكة العربية السعودية لمدة 13 عامًا ، قبل الانتقال إلى لبنان لمدة 5 سنوات أخرى. منذ ذلك الحين يعيش ويدرس بمفرده في كندا في جامعة ترينت. لقد انضم إلى عبودي وسوزان وآندي لإحياء هذا المشروع. عمل فادي معهم لتحديد كل المحتوى ، لكنه كان مسؤولاً عن تصميم وتطوير موقع Chanone7 بالكامل. سيستمر في لعب دور إداري في دعم وترقية Chanone7 لتقديم تجربة أفضل لكل من عبودي ومرضاه. سيواصل فادي بناء هذا الموقع وترسيخه للرعاية الهوميوباتية..",
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

        "testimonials":{
            "title":"À propos de nous",
            
            "one":{
                "name":"Abdul-Razzak Merhi",
                "title":"Praticien homéopathique, Directeur, Chanone 7",
                "country":"CANADA/LIBAN",
                "text":"Page de biographie d'Abdul-Razzak",
            },

            "two":{
                "name":"Suzan Ayscough",
                "title":"Directrice de contenu",
                "country":"CANADA",
                "text":`Suzan Ayscough ("Suze") vit, écrit et jardine avec bonheur à Toronto, en Ontario. Elle est la directrice du contenu de ce site Web. Suze a également fourni l'un des témoignages d'Aboudi lui-même, en tant que praticien homéopathique de confiance, et pour ce site Web, Chanone7. Suzan écrit et produit actuellement pour sa propre société OnCamera3000. Sa carrière dans les médias s'étend sur des décennies et dans le monde entier. Elle a été responsable des communications pour Ontario Créatif, l'Académie canadienne, Téléfilm Canada, Alliance Communications et Cookie Jar. Elle a été chef du bureau canadien, critique de cinéma et journaliste d'investigation pour Variety & Daily Variety, et écrit pour de nombreuses publications. Suzan est co-auteur du livre : Hollywood North : Creating the Canadian Motion Picture Industry, et écrit une suite. Elle a également été l'unique productrice du pilote de la série HEARTLAND pour CBC et Netflix ; c'est toujours le drame scénarisé d'une heure le plus long de l'histoire de la télévision canadienne!`,
                "button":"Témoignage de Suzan",
            },

            "three":{
                "name":"Andrea Bechinger Merhi",
                "title":"Fournisseuse de contenu",
                "country":"ALLEMANGE/CANADA/LIBAN",
                "text":`Née globe-trotter, Andrea a quitté l'Allemagne à l'âge de 18 ans pour aller au Canada, où elle a étudié les langues et l'éducation, s'est fait connaître de ses amis sous le nom d'« Andy » et a épousé l'amour de sa vie, Aboudi. Elle a soutenu le choix de son mari de devenir praticien homéopathique (bien avant que cela ne soit communément accepté) et a déménagé avec lui au Liban, où il a introduit l'homéopathie comme médecine complémentaire dans son pays natal. Andy a fourni à la fois du contenu et des photographies à ce site Web Chanone7 et a été une caisse de résonance essentielle pour l'équipe! Andy vient par son amour de l'homéopathie naturellement. En tant que plus jeune de cinq enfants, elle a été influencée par sa mère qui préconisait la médecine naturelle et l'homéopathie. Elle enseigne les langues et la littérature anglaise au Canada et au Moyen-Orient depuis 32 ans. En plus d'être éducatrice, mère de quatre enfants et grand-mère d'un enfant, elle aime aussi le plein air, le yoga, joue au ping-pong et aime faire de la voile avec son mari.`,
            },

            "four":{
                "name":"Fadi Naaman",
                "title":"Administrateur & Concepteur Web",
                "country":"LIBAN/CANADA",
                "text":"Fadi est l'un des plus jeunes neveux d'Aboudi. A seulement 21 ans aujourd'hui, Fadi est le concepteur trilingue de ce nouveau site Chanone7, qui reflète ses brillantes compétences linguistiques en anglais, français et arabe. Sa passion pour la créativité, les sciences, la technologie - et son amour pour la programmation - ont été découvertes alors qu'il n'avait que 15 ans, lorsqu'il a ensuite décidé de se spécialiser en informatique avec une spécialisation en théorie informatique et en génie logiciel à l'Université Trent. Nés au Canada, Fadi et ses parents ont d'abord vécu en Arabie saoudite pendant 13 ans, avant de s'installer au Liban pendant encore 5 ans. Depuis, il vit et étudie seul au Canada à l'Université Trent. Il a rejoint Aboudi, Suzan et Andy pour donner vie à ce projet. Fadi a travaillé avec eux pour décider de tout le contenu, mais il était responsable de la conception et du développement de l'intégralité de ce site Web Chanone7. Il continuera à jouer un rôle de gestion dans le maintien et la mise à niveau de Chanone7 afin d'offrir une meilleure expérience à la fois à Aboudy et à ses patients. Fadi continuera également à en faire un site hérité pour les soins homéopathiques.",
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

    testimonials.getElementsByTagName("h1")[0].textContent = data[attr].testimonials.title;

    testimonials.getElementsByTagName("p")[0].innerHTML = data[attr].testimonials.one.name;
    testimonials.getElementsByTagName("p")[1].innerHTML = data[attr].testimonials.one.title;
    testimonials.getElementsByTagName("a")[0].innerHTML = data[attr].testimonials.one.text;

    testimonials.getElementsByTagName("p")[2].innerHTML = data[attr].testimonials.two.name;
    testimonials.getElementsByTagName("p")[3].innerHTML = data[attr].testimonials.two.title;
    testimonials.getElementsByTagName("p")[4].innerHTML = data[attr].testimonials.two.text;
    testimonials.getElementsByTagName("a")[1].innerHTML = data[attr].testimonials.two.button;

    testimonials.getElementsByTagName("p")[5].innerHTML = data[attr].testimonials.three.name;
    testimonials.getElementsByTagName("p")[6].innerHTML = data[attr].testimonials.three.title;
    testimonials.getElementsByTagName("p")[7].innerHTML = data[attr].testimonials.three.text;

    testimonials.getElementsByTagName("p")[8].innerHTML = data[attr].testimonials.four.name;
    testimonials.getElementsByTagName("p")[9].innerHTML = data[attr].testimonials.four.title;
    testimonials.getElementsByTagName("p")[10].innerHTML = data[attr].testimonials.four.text;

    /*document.getElementsByClassName("book")[0].textContent = data[attr].book;*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
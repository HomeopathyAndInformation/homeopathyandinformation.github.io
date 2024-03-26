const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const biog = document.getElementsByClassName("biography")[0];



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
    links[i].addEventListener("click", () =>{
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
    
        biog.getElementsByTagName("h1")[0].innerHTML = data[attr].bio.title;
        biog.getElementsByTagName("p")[0].innerHTML = data[attr].bio.text.one;
        biog.getElementsByTagName("p")[1].innerHTML = data[attr].bio.text.two;
        biog.getElementsByTagName("p")[2].innerHTML = data[attr].bio.text.three;
        biog.getElementsByTagName("p")[3].innerHTML = data[attr].bio.text.four;
        biog.getElementsByTagName("p")[4].innerHTML = data[attr].bio.text.five;
        biog.getElementsByTagName("p")[5].innerHTML = data[attr].bio.text.six;

        document.getElementsByClassName("book")[0].textContent = data[attr].book;

        //Toggle Left-2-Right and Right-2-Left Reading
        /*
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
        const sections = biog.getElementsByTagName("section");
        if(attr == "arabic"){
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row") {
                navbar.style.flexDirection = "row-reverse";
            } else if (navstyle.getPropertyValue("flex-direction") == "column") {
                navbar.style.flexDirection = "column-reverse"
            }
            biog.getElementsByTagName("h1")[0].style.textAlign = "right";
            for(let i = 0; i < sections.length; i++) {
                sections[i].style.flexDirection = "row-reverse";
                sections[i].style.textAlign = "right";
                sections[i].style.gap = "10px";
            }
        } else {
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
                navbar.style.flexDirection = "row";
            } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
                navbar.style.flexDirection = "column"
            }
            biog.getElementsByTagName("h1")[0].style.textAlign = "left";
            for(let i = 0; i < sections.length; i++) {
                sections[i].style.flexDirection = "row";
                sections[i].style.textAlign = "left";
                sections[i].style.gap = "0px";
            }
        }*/

        location.reload();
    });
}

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

        "bio":{
            "title":"Who is the Homeopathic Practitioner of Holistic Medicine, Aboudi Merhi?",
            "text":{
                "one":"My name is Abdul-Razzak Merhi. Friends and family call me Aboudi, as do many of my patients. I am a Canadian Lebanese, my wife and I are living in British Columbia with our family. Born in 1958 in the historical town of Tripoli in the north of Lebanon, I mainly attended French boarding schools where I was exposed to a mix of European and Arab curriculum and culture. The onset of the Lebanese civil war in 1975 changed the path of my life forever.",
                "two":"I had been working as a volunteer for the Lebanese Red Cross while attending school when war broke out. At the age of seventeen, the International Red Cross hired me to work as a translator in Arabic and French, and join the frontline workers on their missions across the country serving many different communities. Having consciously rejected armed conflict, I still had to learn to cope with being a witness to horrific war scenes and collecting the injured and the dead. I sometimes had to assist in emergency operations where I was trained on the spot. In retrospect, the time spent with these extraordinary doctors endangering their lives for the simple purpose of doing good, saving lives, and healing, paved the way for my future. It was then that I decided to dedicate myself to the betterment of humankind and become involved in creating peace and tolerance among communities in strife.",
                "three":"Ultimately, the violence forced me to leave my homeland in autumn of 1976, transitioning to Cyprus and then to Canada, where I became a Canadian Citizen, and trained to become a practitioner of health and wellness of people. The move also began my search for my place in western culture. While I studied science and psychology at Universite de Montreal, I also began founding an organization to help new immigrants from Lebanon settle in Canada. We created liaisons with other cultural groups with people from war-torn countries seeking refuge in Canada. During this time, I had the opportunity to work with midwives and began pondering the path of alternative medicine. I also met my German wife while I was young; we got married in Canada and began our family of four children. Their love and support are my life-anchor to this day.",
                "four":"After settling down in 1985, my career as a homeopathic practitioner truly began. I enrolled in the  <span class='bio-focus'>Le Centre de Techniques Homéopathiques de Montréal</span> (the center for homeopathic techniques in Montreal)  and graduated  from there in 1990. I also attended the <span class='bio-focus'>École Supérieure de Médicine Chinoise de Montréal</span>  (the Superior School of Chinese medicine in Montreal). I am one of the founders and a current member of the Syndicat professionnel  des homeopathes du Quebec, <span class='bio-focus'>SPHQ</span> (the Syndicate of Homeopathic Professionals in Quebec). I have recently become a member of <span class='bio-focus'>the British Columbia Homeopathic  Association (BCHA)</span> as well. But, let's go back to how I got here...",
                "five":"After the war in Lebanon finally ended, my family and I decided to return there in 1993 to introduce homeopathy as a <span class='bio-focus'>complementary medicine</span> to the Middle East. I joined the clinic of Dr. Karam Karam, a friend and a colleague, an osteopath, in Beirut, and worked there until 2021, when we returned to Canada. I had opened my own clinic further north to service patients in that area. It was challenging to deal with extreme illnesses and health issues which I had not seen in the west.",
                "six":"The road was rich. My journey has culminated in a portfolio of 10.000+ patients. I consistently attended classes and conferences on a yearly basis in Europe, mainly in Germany. Over the years, I have learned to combine homeopathy with nutritional healing, vitamino-therapy, Mora therapy, Chinese and environmental medicine alongside physical exercise and outdoors activities. In addition, advocating environmental solutions to a patient&#39;s lifestyle has become a very important aspect of my practice. Combining complementary natural methods allows me to find unique solutions for you, based on your specific condition. <a href='../consultation.php'>Here you can book a consultation…</a>",
            },
        },

        "book":"Book a consultation",

        "description": "Something"

    },

    "arabic":{
        "title": "تشانون 7 - الصفحة الرئيسية",

        "language": "ar",

        "nav":{
            "home":"ترحيب",
            "pricing":"الحجز والتسعير",
            "consultation":"التشاور",
            "foodMood":"طعام",
            "supplements":"المكملات",
            "login":"اشترك/ تسجيل الدخول",
            "meetings":"اجتماعاتي",
            "appts":"المواعيد الخاصة بي",
            "admin":"مسؤل",
            "account":"الحساب",
            "qna":"أسئلة وأجوبة",
            "logout":"تسجيل خروج",
        },

        "bio":{
            "title":"من هو ممارس الهوميوباثي للطب الشمولي  عبودي مرعي؟ ",
            "text":{
                "one":"أسمي عبد الرزاق مرعي. يناديني أصدقائي وأفراد عائلتي بإسم عبودي، وكذلك يفعل العديدمن مرضاي. أنا لبناني كندي, زوجتي و انا نعيش في كولومبيا البريطانية مع عائلتي. وُلدت في العام 1958 في مدينة طرابلس التاريخية في شمال لبنان، وتأسّست في التعليم في المدارس الداخلية الفرنسية حيث تعرّفت على مزيج من المناهج الدراسية التي عكسَتْ الثقافتَيْن الأوروبية والعربية، إلا أنّ اندلاع الحرب الأهلية اللبنانية في العام 1975 غيّر مسار حياتي إلى الأبد.",
                "two":"إعندما اندلعت الحرب، كنت تلميذاً في المدرسة ومتطوّعاً في الصليب الأحمر اللبناني في الوقت نفسه. وفي سنّ الـ 17، وظّفني الصليب الأحمر الدولي للعمل كمترجمٍ (بين اللغتَيْن العربية والفرنسية) وللانضمام إلى بعثاته الميدانية المنتشرة على مساحة البلاد كعاملٍ في الخطوط الأمامية لخدمة مختلف المجتمعات. وعلى الرغم من إتخاذي القرار عن وعيٍ برفض النزاع المسلّح، كان لا يزال عليّ أن أتعلّم كيفية التعامل مع وضعي كشاهدٍ على مشاهد الحرب المروّعة ومع تجاربي في نقل القتلى والجرحى. كما اضطررت في بعض الأحيان إلى المساعدة في عملياتٍ طبية طارئة وقد تلقّيت التدريب اللازم لذلك في موقع إجرائها. عند التفكير بأحداث تلك الفترة، أجد أنّ الوقت الذي أمضيته مع هؤلاء الأطباء الإستثنائيين الذين عرّضوا حياتهم للخطر لغرضٍ بسيط ألا وهو فعل الخير وإنقاذ الأرواح وشفاء المرضى، قد مهّد الطريق لمستقبلي. فكان في ذلك الوقت أنْ قرّرت أن أكرّس نفسي من أجل تحسين حياة البشرية وأن أشارك في إحلال السلام والتسامح بين المجتمعات المتصارعة.",
                "three":"في نهاية المطاف، أجبرني العنف على مغادرة وطني في خريف العام 1976 وعلى الإنتقال إلى قبرص ثم إلى كندا حيث استحصلت على الجنسية الكندية وتدرّبت لأصبح إختصاصياً ممارِساً في مجال صحة الناس وعافيتهم. أطلقَتْ هذه الخطوة أيضاً رحلة البحث عن مكاني في الثقافة الغربية. فرحتُ أتابع دراساتي في العلوم وعلم النفس في جامعة مونتريال، وبدأت في تأسيس منظّمة في الوقت نفسه لمساعدة المهاجرين الجدد الوافدين من لبنان للإستقرار في كندا. وقد أنشأنا صلاتٍ مع مجموعات ثقافية أخرى لأشخاصٍ يلتمسون اللجوء إلى كندا هرباً من بلدان مزّقتها الحرب. خلال هذه الفترة، أتيحت لي الفرصة للعمل مع القابلات القانونيات وبدأت أفكّر في السير في مسار الطبّ البديل. إلتقيت أيضاً بزوجتي الألمانية عندما كنت شاباً؛ ونحن تزوّجنا في كندا وأسّسنا عائلتنا التي تضمّ أربعة أطفال هناك. ويشكّل حبّ أطفالي ودعمهم لي محور حياتي حتى يومنا هذا.",
                "four":`بدأتْ مسيرتي المهنية كممارس للطب الهوميوباثي فعلياً بعد تحقيقي للإستقرار في العام 1985. فقد التحقتُ بمركز تقنيات المعالجة الهوميوباثية في مونتريال 
                "مركز تقنيات المعالجة المثلية في مونتريال"
                وتابعتُ دورات في المدرسة العليا للطب الصيني في مونتريال 
                "المدرسة العليا للطب الصيني في مونتريال"
                وكنتُ مؤسِّساً ومازلت عضواً في الإتحاد المهني لأخصائيي المعالجة الهوميوباثية في كيبيك 
                (CSN-FPPSCQ) 
                وحديثا أصبحتُ عضواً في إتحاد ألمهني لأخصائيي ألماعلجة ألهوميوباتية في بريتيش كولومبيا 
                (BCHA) 
                ومارست العلاج الهوميوباثي منذ تخرّجي. `,
                "five":" بعد أن انتهت الحرب في لبنان أخيراً، قررت العودة مع عائلتي إلى الوطن في العام 1993 لتعريف منطقة الشرق الأوسط على العلاج الهوميوباثي </span>كطبّ تكميلي<span class=’bio-focus’>.والتحقتُ بعيادة الدكتور كرم كرم في بيروت, صديق وزميل, وهو أخصائي تقويم عظام، وعملتُ فيها حتى العام 2021 أي لحين عودتنا إلى كندا وقد افتتحتُ لاحقاً عيادتي الخاصة في الشمال لخدمة المرضى في تلك المنطقة، لأواجه تحديات في التعامل مع الأمراض الشديدة والمشاكل الصحية التي لم أشهدها في الغرب.",
                "six":"كانت مسيرتي حافلة وقد بلغت رحلتي ذروتها بعدما ضمّ سجلي المهني أكثر من 10000 مريض قمت بمعالجتهم. وأنا تابعت الدروس والمؤتمرات بشكلٍ مستمرّ على أساسٍ سنوي في ألمانيا وأوروبا. وعلى مرّ السنين، تعلّمت الجمع بين المعالجة الهوميوباثية والعلاج الطبيعي والعلاج بالفيتامينات وعلاج مورا. بالإضافة إلى ذلك، أصبح حثّ المريض على اعتماد الحلول الطبيعية في نمط حياته جانباً مهماً جداً من عملي. إنّ الجمع بين الأساليب الطبيعية التكميلية يعني أنه يمكنني إيجاد حلّ فريدٍ لمرضك بحسب خصوصية حالتك. <a href='../consultation.php'>اضغط هنا للحجز جلسة إذا أردت...</a>",
            },
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
            "supplements":"Suppléments",
            "login":"Registrer/Connexion",
            "meetings":"Mes réunions",
            "appts":"Mes rendez-vous",
            "admin":"Admin",
            "account":"Compte",
            "qna":"FAQ",
            "logout":"Déconnecter",
        },

        "bio":{
            "title":"Qui est le Homéopathe praticien de médecine holistique, Aboudi Merhi?",
            "text":{
                "one":"Je m'appelle Abdul-Razzak Merhi. Mes amis et ma famille m'appellent Aboudi, comme beaucoup de mes patients. Je suis un Libanais canadien, mon épouse et moi vivent en Colombie-Britannique avec notre famille. Né en 1958 dans la ville historique de Tripoli dans le nord du Liban, j'ai principalement fréquenté des internats français où j'ai été exposé à un mélange des programmes de cultures européens et arabes. Le début de la guerre civile libanaise en 1975 a changé le cours de ma vie pour toujours.",
                "two":"Je travaillais comme volontaire pour la Croix-Rouge libanaise alors que j'étais à l'école lorsque la guerre a éclaté. À l'âge de dix-sept ans, la Croix-Rouge internationale m'a embauchée pour travailler comme traducteur en arabe et français, et rejoindre les travailleurs de première ligne dans leurs missions à travers le pays au service de nombreuses communautés différentes. Ayant consciemment rejeté les conflits armés, j'ai encore dû apprendre à supporter d'être témoin de scènes de guerre horribles et de recueillir les blessés et les morts. J'ai parfois dû aider en cas d'opérations chirurgicales d'urgence où j'ai été formé sur place. Rétrospectivement, le temps passé avec ces médecins extraordinaires mettant leur vie en danger dans le simple but de faire le bien, de sauver des vies et de guérir, a ouvert la voie à mon avenir. C'est alors que j'ai décidé de me consacrer à l'amélioration de l'humanité et m'impliquer dans la création de la paix et de la tolérance entre les communautés en conflit.",
                "three":"En fin de compte, la violence m'a forcé à quitter mon pays natal à l'automne 1976, en transition vers Chypre, puis au Canada, où je suis devenu citoyen canadien et formé pour devenir un praticien de la santé et du bien-être des personnes. Le déménagement m’a motivé à commencer ma recherche de ma place dans la culture occidentale. Pendant que j'étudiais les sciences et la psychologie à l'Université de Montréal, j'ai également commencé à fonder une organisation pour aider les nouveaux immigrants du Liban à s'installer au Canada. Nous avons créé des liaisons avec d'autres groupes culturels avec des gens de guerre- pays déchirés cherchant refuge au Canada. Pendant ce temps, j'ai eu l'occasion de travailler avec des sages-femmes et j'ai commencé à réfléchir à la voie de la médecine alternative. J'ai aussi rencontré ma femme allemande quand j'étais jeune; nous nous sommes mariés au Canada et avons fondé notre famille de quatre enfants. Leur amour et leur soutien sont mon ancre de vie à ce jour.",
                "four":"Après m'être installé en 1985, ma carrière de praticien homéopathe a véritablement commencé. je me suis inscrit à <span class='bio-focus'>Le Centre de Techniques Homéopathiques de Montréal</span> et j'ai obtenu mon diplôme en 1990. J'ai également fréquenté l'<span class='bio-focus'>École Supérieure de Médecine Chinoise de Montréal</span>. Je suis l'un des fondateurs et membre actuel du Syndicat professionnel des homéopathes du Québec, <span class='bio-focus'>SPHQ</span>. Je suis récemment devenu <span class='bio-focus'>membre de L&#39;Association des homéopathes de la Colombie britannique en italique (BCHA)</span> également. Mais revenons à la façon dont je suis arrivé ici...",
                "five":"Après la fin de la guerre au Liban, ma famille et moi avons décidé d'y retourner en 1993 pour introduire l'homéopathie en tant que <span class='bio-focus'>médecine complémentaire</span> au Moyen-Orient. J&#39;ai rejoint la clinique de Dr Karam Karam, un ami et un collègue, un ostéopathe, à Beyrouth et j&#39;ai travaillé jusqu'en 2021, date de notre retour au Canada. J'avais ouvert ma propre clinique plus au nord pour servir les patients de cette région. C'était difficile de faire face à des maladies extrêmes. et des problèmes de santé que je n'avais pas vus dans l'ouest.",
                "six":"La route était riche. Mon parcours a abouti à un portefeuille de plus de 10 000 patients. j'ai toujours assisté à des cours et conférences sur une base annuelle en Europe, principalement en Allemagne. Au fil des ans, j'ai appris combiner l'homéopathie avec la guérison nutritionnelle, la vitamino-thérapie, la thérapie Mora, la médecine chinoise et environnementale parallèlement à l'exercice physique et aux activités de plein air. De plus, prônant les solutions environnementales au mode de vie d'un patient sont devenues un aspect très important de ma pratique. Combiner des méthodes naturelles complémentaires me permet de trouver une solution unique à votre maladie, basée sur sur votre condition spécifique. <a href='./consulation.php'>Si vous souhaitez une consulation, veuillez cliquer ici.</a>",
                
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

    biog.getElementsByTagName("h1")[0].innerHTML = data[attr].bio.title;
    biog.getElementsByTagName("p")[0].innerHTML = data[attr].bio.text.one;
    biog.getElementsByTagName("p")[1].innerHTML = data[attr].bio.text.two;
    biog.getElementsByTagName("p")[2].innerHTML = data[attr].bio.text.three;
    biog.getElementsByTagName("p")[3].innerHTML = data[attr].bio.text.four;
    biog.getElementsByTagName("p")[4].innerHTML = data[attr].bio.text.five;
    biog.getElementsByTagName("p")[5].innerHTML = data[attr].bio.text.six;

    document.getElementsByClassName("book")[0].textContent = data[attr].book;

    //Toggle Left-2-Right and Right-2-Left Reading
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    const sections = biog.getElementsByTagName("section");
    if(attr == "arabic"){
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        } else if (navstyle.getPropertyValue("flex-direction") == "column") {
            navbar.style.flexDirection = "column-reverse"
        }
        biog.getElementsByTagName("h1")[0].style.textAlign = "right";
        for(let i = 0; i < sections.length; i++) {
            sections[i].style.flexDirection = "row-reverse";
            sections[i].style.textAlign = "right";
            sections[i].style.gap = "10px";
        }
    } else {
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
            navbar.style.flexDirection = "column"
        }
        biog.getElementsByTagName("h1")[0].style.textAlign = "left";
        for(let i = 0; i < sections.length; i++) {
            sections[i].style.flexDirection = "row";
            sections[i].style.textAlign = "left";
            sections[i].style.gap = "0px";
        }
    }*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const meditera = document.getElementsByClassName("meditera")[0];

const foodmood = document.getElementsByClassName("foodmood")[0];



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

        foodmood.getElementsByTagName("p")[0].textContent = data[attr].foodmood.text.one;
        foodmood.getElementsByTagName("p")[1].textContent = data[attr].foodmood.text.two;
        foodmood.getElementsByTagName("h1")[0].textContent = data[attr].foodmood.title;

        meditera.getElementsByTagName("h2")[0].textContent = data[attr].meditera.subtitle;
        meditera.getElementsByTagName("p")[0].textContent = data[attr].meditera.eliminate.nb;
        meditera.getElementsByTagName("h3")[0].textContent = data[attr].meditera.subtitle2;

        meditera.getElementsByTagName("h2")[1].textContent = data[attr].meditera.list_1.title;
        meditera.getElementsByTagName("h2")[2].textContent = data[attr].meditera.list_2.title;
        meditera.getElementsByTagName("h2")[3].textContent = data[attr].meditera.list_3.title;
        meditera.getElementsByTagName("h2")[4].textContent = data[attr].meditera.list_4.title;
        meditera.getElementsByTagName("h2")[5].textContent = data[attr].meditera.list_5.title;
        meditera.getElementsByTagName("h2")[6].textContent = data[attr].meditera.list_6.title;
        meditera.getElementsByTagName("h2")[7].textContent = data[attr].meditera.list_7.title;
        meditera.getElementsByTagName("h2")[8].textContent = data[attr].meditera.list_8.title;
        meditera.getElementsByTagName("h2")[9].textContent = data[attr].meditera.list_9.title;
        meditera.getElementsByTagName("h2")[10].textContent = data[attr].meditera.list_10.title;
        meditera.getElementsByTagName("h2")[11].textContent = data[attr].meditera.list_11.title;
        meditera.getElementsByTagName("h2")[12].textContent = data[attr].meditera.list_12.title;
        meditera.getElementsByTagName("h2")[13].textContent = data[attr].meditera.list_13.title;

        meditera.getElementsByTagName("p")[1].textContent = data[attr].meditera.list_1.text;
        meditera.getElementsByTagName("p")[2].textContent = data[attr].meditera.list_2.text;
        meditera.getElementsByTagName("p")[3].textContent = data[attr].meditera.list_3.text;
        meditera.getElementsByTagName("p")[4].textContent = data[attr].meditera.list_4.text;
        meditera.getElementsByTagName("p")[5].textContent = data[attr].meditera.list_5.text;
        meditera.getElementsByTagName("p")[6].textContent = data[attr].meditera.list_6.text;
        meditera.getElementsByTagName("p")[7].textContent = data[attr].meditera.list_7.text;
        meditera.getElementsByTagName("p")[8].textContent = data[attr].meditera.list_8.text;
        meditera.getElementsByTagName("p")[9].textContent = data[attr].meditera.list_9.text;
        meditera.getElementsByTagName("p")[10].textContent = data[attr].meditera.list_10.text;
        meditera.getElementsByTagName("p")[11].textContent = data[attr].meditera.list_11.text;
        meditera.getElementsByTagName("p")[12].textContent = data[attr].meditera.list_12.text;
        meditera.getElementsByTagName("p")[13].textContent = data[attr].meditera.list_13.text;

        meditera.getElementsByTagName("h2")[14].textContent = data[attr].meditera.eliminate.title;
        meditera.getElementsByTagName("h3")[1].textContent = data[attr].meditera.eliminate.subtitle;
        meditera.getElementsByTagName("p")[14].textContent = data[attr].meditera.eliminate.text;

        meditera.getElementsByTagName("h2")[15].textContent = data[attr].meditera.warning.title;
        meditera.getElementsByTagName("p")[15].textContent = data[attr].meditera.warning.text;

        meditera.getElementsByTagName("h2")[16].textContent = data[attr].article;

        document.getElementsByClassName("book")[0].textContent = data[attr].book;



        //Toggle Left-2-Right and Right-2-Left Reading
        /*
        const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
        const medh2 = meditera.getElementsByTagName("h2");
        const medp = meditera.getElementsByTagName("p");
        if(attr == "arabic"){
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row") {
                navbar.style.flexDirection = "row-reverse";
            } else if (navstyle.getPropertyValue("flex-direction") == "column") {
                navbar.style.flexDirection = "column-reverse"
            }
            meditera.getElementsByTagName("h1")[0].style.textAlign = "right";
            meditera.getElementsByTagName("h3")[0].style.textAlign = "right";
            meditera.getElementsByTagName("span")[0].style.textAlign = "right";
            for(let i = 0; i < medh2.length; i++) {
                medh2[i].style.textAlign = "right";
            }
            for(let i = 0; i < medp.length; i++) {
                medp[i].style.textAlign = "right";
            }
        } else {
            const navstyle = window.getComputedStyle(navbar);
            if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
                navbar.style.flexDirection = "row";
            } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
                navbar.style.flexDirection = "column"
            }
            meditera.getElementsByTagName("h1")[0].style.textAlign = "left";
            meditera.getElementsByTagName("h3")[0].style.textAlign = "left";
            meditera.getElementsByTagName("span")[0].style.textAlign = "left";
            for(let i = 0; i < medh2.length; i++) {
                medh2[i].style.textAlign = "left";
            }
            for(let i = 0; i < medp.length; i++) {
                medp[i].style.textAlign = "left";
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

        "foodmood":{
            "title":"Mediterranean Diet",
            "text":{
                "one":"In a perfect world, every human would eat properly and have access to healthy food from the beginning of life. That is not always the case. Most of us must learn to eat properly—even as grown-ups—as our food is changing.",
                "two":"Most folks aren't even aware that the changes made to our wheat and cow dairy industries may negatively affect your organs. Many people have developed food intolerances and allergies as example: gluten, lactose, casein etc… unnecessarily. There are many micro-adjustments you can make to what you eat and drink that will have tectonic effects to your body and your health.",
            },
        },

        "article":"Recommended Recipes",

        "meditera":{
            "subtitle":"Recommended Food Items to Enhance Recovery and General Well-being",
            "subtitle2":"Foods for your health",

            "list_9":{
                "title":"Livestock and Poultry fed by natural grain and grass",
                "text":"Lamb and goat, chicken, duck, turkey, quail",
            },
            "list_3":{
                "title":"Eggs",
                "text":"Chicken, quail, duck",
            },
            "list_4":{
                "title":"Fish",
                "text":"Salmon, sardines, red snapper, trout, tuna, achovies, mackerel, bass, sole...",
            },
            "list_11":{
                "title":"Seafood",
                "text":"Shrimp, octopus, calamari, oysters, clams, crab, mussels",
            },
            "list_2":{
                "title":"Dairy",
                "text":"Goat and sheep milk, cheese, yogurt, and ghee",
            },
            "list_13":{
                "title":"Vegetables",
                "text":"Tomatoes, eggplant, zucchini, broccoli, avocado, kale, spinach, onions, cauliflower, carrots, Brussels, sprouts, okra, cucumbers, potatoes, sweet potatoes, turnip, cucumber, cabbage, radish, all green salads, rucola, dandelions, artichokes, swiss chard, funnel...",
            },
            "list_8":{
                "title":"Legumes",
                "text":"Beans, peas, lentils, pulses, chickpeas...",
            },
            "list_7":{
                "title":"Herbs",
                "text":"Garlic, basil, mint, parsley, cilantro, oregano, thyme...",
            },
            "list_1":{
                "title":"Bread & Pasta from Whole grains",
                "text":"Spelt, oats, brown rice, rye, barley, corn, buckwheat, sourdough",
            },
            "list_12":{
                "title":"Spices",
                "text":"Pepper, himalayan sea salt, himalayan, dill, chives, cumin, garlic, rosemary, sage, nutmeg, cinnamon, chili, mediterranean 7 spices...",
            },
            "list_6":{
                "title":"Healthy fats",
                "text":"Avocados, olives, extra virgin olive oil, sesame oil, tahini, grape seed oil, sunflower oil, avocado oil",
            },
            "list_10":{
                "title":"Nuts and seeds",
                "text":"Almonds, walnuts, macadamia nuts, hazelnuts, chestnuts, pine nuts, cashews, sunflower seeds, pumpkin seeds, almond butter, peanut butter",
            },
            "list_5":{
                "title":"Fruits",
                "text":"Apples, bananas, oranges, pears, strawberries, grapes, dates, figs, melons, peaches, berries, grapefruits, lemons, apricots, prunes, melons, pomegranates",
            },

            "eliminate": {
                "title":"Foods to eliminate",
                "subtitle":"Highly processed foods",
                "text":"White flour and its byproducts, white bread, pasta, tortillas, chips, crackers, cow milk and its byproducts, process salt, added white sugar is found in many foods but especially high in soda, candies, ice cream, table sugar, corn syrup, granola bars, and baked good, trans fats found in margarine, commercial mayonnaise and ketchup, fried foods, and other processed foods, palm oil, canola oil, cottonseed oil, Processed meat, processed sausages, hot dogs, deli meats, canned food beef jerky, fast food, convenience meals, microwave food and popcorn…and food restaurants",
                "nb":"Ideally, all items mentioned below should be organically grown",
            },

            "warning": {
                "title":"To avoid for 5 weeks",
                "text":"Mint, Caffeine, Alcohol, Milk Chocolate",
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

        "foodmood":{
            "title":"حمية البحر الأبيض المتوسط",
            "text":{
                "one":"في عالم مثالي ، كل إنسان يأكل بشكل صحيح ويتاح له الوصول إلى الغذاء الصحي منذ بداية حياته. هذا ليس هو الحال دائما. يجب أن يتعلم معظمنا تناول الطعام بشكل صحيح — حتى عندما يكبرون — لأن طعامنا يتغير.",
                "two":"لا يدرك معظم الناس حتى أن التغييرات التي تم إجراؤها على صناعات القمح والألبان لدينا قد تؤثر سلبًا على أعضائك. لقد طور العديد من الأشخاص عدم تحمل الطعام والحساسية على سبيل المثال: الغلوتين واللاكتوز والكازين وما إلى ذلك ... دون داع. هناك العديد من التعديلات الدقيقة التي يمكنك إجراؤها على ما تأكله وتشربه والتي سيكون لها تأثيرات تكتونية على جسمك وصحتك.",
            },
        },

        "article":"الوصفات الموصى بها",

        "meditera":{
            "subtitle":"المواد الغذائية الموصى بها لتعزيز الانتعاش والرفاهية العامة",
            "subtitle2":"أغذية لصحتك",
            "list_9":{
                "title":"الماشية والدواجن التي تغذيها الحبوب والأعشاب الطبيعية",
                "text":"دجاج ، بطة ، ديك رومي ، سمان ، لحم الضأن والماعز",
            },
            "list_3":{
                "title":"بيض",
                "text":"دجاج ، سمان ، بطة",
            },
            "list_4":{
                "title":"سمك",
                "text":"سمك السلمون والسردين والنهاش الأحمر والسلمون المرقط والتونة والأنشوجة والماكريل والباس والوحيد ...",
            },
            "list_11":{
                "title":"مأكولات بحرية",
                "text":"جمبري ، أخطبوط ، كاليماري ، محار ، جندوفلي ، كابوريا ، بلح البحر",
            },
            "list_2":{
                "title":"ألبان",
                "text":"حليب الماعز والغنم والجبن والزبادي والسمن",
            },
            "list_13":{
                "title":"خضروات",
                "text":"طماطم ، باذنجان ، كوسة ، بروكلي ، أفوكادو ، كرنب ، سبانخ ، بصل ، قرنبيط ، جزر ، بروكسل ، براعم ، بامية ، خيار ، بطاطس ، بطاطا حلوة ، لفت ، خيار ، ملفوف ، فجل ، جميع السلطات الخضراء ، جرجير ، الهندباء ، خرشوف ، شارد سويسري ، قمع ...",
            },
            "list_8":{
                "title":"البقوليات",
                "text":"الفول والبازلاء والعدس والبقول والحمص ...",
            },
            "list_7":{
                "title":"أعشاب",
                "text":"ثوم ، ريحان ، نعناع ، بقدونس ، كزبرة ، زعتر ، زعتر ...",
            },
            "list_1":{
                "title":"الخبز والمعكرونة من الحبوب الكاملة",
                "text":"الحنطة والشوفان والأرز البني والجاودار والشعير والذرة والحنطة السوداء والعجين المخمر",
            },
            "list_12":{
                "title":"بهارات",
                "text":"فلفل ، ملح بحر هيمالايا ، هيمالايا ، شبت ، ثوم المعمر ، كمون ، ثوم ، إكليل الجبل ، حكيم ، جوزة الطيب ، قرفة ، فلفل حار ، متوسطي 7 بهارات ...",
            },
            "list_6":{
                "title":"الدهون الصحية",
                "text":"الأفوكادو ، الزيتون ، زيت الزيتون البكر الممتاز ، زيت السمسم ، الطحينة ، زيت بذور العنب ، زيت عباد الشمس ، زيت الأفوكادو",
            },
            "list_10":{
                "title":"المكسرات والبذور",
                "text":"اللوز والجوز والمكاديميا والبندق والكستناء والصنوبر والكاجو وبذور عباد الشمس وبذور اليقطين وزبدة اللوز وزبدة الفول السوداني",
            },
            "list_5":{
                "title":"الفاكهة",
                "text":"تفاح ، موز ، برتقال ، كمثرى ، فراولة ، عنب ، بلح ، تين ، شمام ، خوخ ، توت ، جريب فروت ، ليمون ، مشمش ، خوخ ، شمام ، رمان",
            },

            "eliminate": {
                "title":"الأطعمة التي يجب التخلص منها",
                "subtitle":"الأطعمة المصنعة للغاية",
                "text":"يوجد الخبز الأبيض والمعكرونة والتورتيلا ورقائق البطاطس والمقرمشات والسكر المضاف في العديد من الأطعمة ولكنه يحتوي بشكل خاص على نسبة عالية من الصودا والحلويات والآيس كريم وسكر المائدة والشراب والمخبوزات. توجد الدهون المتحولة في المارجرين ، والأطعمة المقلية ، والأطعمة المصنعة الأخرى ، وزيت الكانولا ، وزيت بذرة القطن ، واللحوم المصنعة ، والنقانق المصنعة ، والهوت دوج ، واللحوم الباردة ، ولحم البقر المقدد ، والوجبات السريعة ، والوجبات الجاهزة ، والفشار الميكروويف ، وألواح الجرانولا.",
                "nb":"ملحوظة: يجب أن تكون جميع العناصر المذكورة مزروعة",
            },
            "warning": {
                "title":"لتجنب لمدة 5 أسابيع",
                "text":"نعناع ، كافيين ، كحول ، شوكولاتة الحليب",
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

        "foodmood":{
            "title":"Régime méditerranéen",
            "text":{
                "one":"Dans un monde parfait, chaque être humain mangerait correctement et aurait accès à une alimentation saine dès le début de sa vie. Ce n'est pas toujours le cas. La plupart d'entre nous doivent apprendre à manger correctement, même en tant qu'adultes, car notre alimentation change.",
                "two":"La plupart des gens ne savent même pas que les changements apportés à nos industries laitières de blé et de vache peuvent affecter négativement vos organes. De nombreuses personnes ont développé inutilement des intolérances et allergies alimentaires comme par exemple : gluten, lactose, caséine etc. Il existe de nombreux micro-ajustements que vous pouvez apporter à ce que vous mangez et buvez et qui auront des effets tectoniques sur votre corps et votre santé.",
            },
        },

        "article":"Recettes Recommandées",

        "meditera":{
            "subtitle":"Aliments recommandés pour améliorer la récupération et le bien-être général",
            "subtitle2":"Foods for your health",

            "list_9":{
                "title":"Bétail et volaille nourris au grain et à l'herbe naturels",
                "text":"Agneau, chèvre, poulet, canard, dinde, caille",
            },
            "list_3":{
                "title":"Eggs",
                "text":"Poulet, canard, caille",
            },
            "list_4":{
                "title":"Poisson",
                "text":"Saumon, sardine, vivaneau rouge, truite, thon, achois, maquereau, bar, sole...",
            },
            "list_11":{
                "title":"Fruits de mer",
                "text":"Crevettes, poulpes, calamars, huîtres, palourdes, crabe, moules",
            },
            "list_2":{
                "title":"Laitier",
                "text":"Lait de chèvre et de brebis, fromage, yaourt et ghee",
            },
            "list_13":{
                "title":"Des légumes",
                "text":"Tomates, aubergines, courgettes, brocolis, avocat, chou frisé, épinards, oignons, chou-fleur, carottes, choux de Bruxelles, okra, concombres, pommes de terre, patates douces, navet, concombre, chou, radis, toutes les salades vertes, roquette, pissenlits, artichauts , bette à carde, entonnoir...",
            },
            "list_8":{
                "title":"Légumineuses",
                "text":"Haricots, pois, lentilles, légumineuses, pois chiches...",
            },
            "list_7":{
                "title":"Herbes",
                "text":"Ail, basilic, menthe, persil, coriandre, origan, thym...",
            },
            "list_1":{
                "title":"Pain et pâtes de grains entiers",
                "text":"Épeautre, avoine, riz brun, seigle, orge, maïs, sarrasin, levain",
            },
            "list_12":{
                "title":"Épices",
                "text":"Poivre, sel marin de l'Himalaya, himalayen, aneth, ciboulette, cumin, ail, romarin, sauge, muscade, cannelle, piment, 7 épices méditerranéennes...",
            },
            "list_6":{
                "title":"Graisses saines",
                "text":"Avocats, olives, huile d'olive extra vierge, huile de sésame, tahini, huile de pépins de raisin, huile de tournesol, huile d'avocat",
            },
            "list_10":{
                "title":"Noix et graines",
                "text":"Amandes, noix, noix de macadamia, noisettes, châtaignes, pignons, noix de cajou, graines de tournesol, graines de citrouille, beurre d'amande, beurre de cacahuète",
            },
            "list_5":{
                "title":"Des fruits",
                "text":"Avocats, olives, huile d'olive extra vierge, huile de sésame, tahini, huile de pépins de raisin, huile de tournesol, huile d'avocat",
            },

            "eliminate": {
                "title":"Les aliments à éliminer",
                "subtitle":"Aliments hautement transformés",
                "text":"Le pain blanc, les pâtes, les tortillas, les chips, les craquelins, le sucre ajouté se trouvent dans de nombreux aliments, mais particulièrement dans les sodas, les bonbons, la crème glacée, le sucre de table, le sirop et les produits de boulangerie. Les gras trans se trouvent dans la margarine, les aliments frits et d'autres aliments transformés, l'huile de canola, l'huile de coton, la viande transformée, les saucisses transformées, les hot-dogs, la charcuterie, le boeuf séché, la restauration rapide, les plats cuisinés, le pop-corn micro-ondes, les barres granola",
                "nb":"Idéalement, tous les éléments mentionnés ci-dessous devraient être issus de l'agriculture biologique",
            },
            "warning": {
                "title":"A éviter pendant 5 semaines",
                "text":"Menthe, caféine, alcool, chocolat au lait",
            },
        },

        "book":"Réserver une consultation",

        "description": "Something",
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

    foodmood.getElementsByTagName("p")[0].textContent = data[attr].foodmood.text.one;
    foodmood.getElementsByTagName("p")[1].textContent = data[attr].foodmood.text.two;
    foodmood.getElementsByTagName("h1")[0].textContent = data[attr].foodmood.title;

    meditera.getElementsByTagName("h2")[0].textContent = data[attr].meditera.subtitle;
    meditera.getElementsByTagName("p")[0].textContent = data[attr].meditera.eliminate.nb;
    meditera.getElementsByTagName("h3")[0].textContent = data[attr].meditera.subtitle2;

    meditera.getElementsByTagName("h2")[1].textContent = data[attr].meditera.list_1.title;
    meditera.getElementsByTagName("h2")[2].textContent = data[attr].meditera.list_2.title;
    meditera.getElementsByTagName("h2")[3].textContent = data[attr].meditera.list_3.title;
    meditera.getElementsByTagName("h2")[4].textContent = data[attr].meditera.list_4.title;
    meditera.getElementsByTagName("h2")[5].textContent = data[attr].meditera.list_5.title;
    meditera.getElementsByTagName("h2")[6].textContent = data[attr].meditera.list_6.title;
    meditera.getElementsByTagName("h2")[7].textContent = data[attr].meditera.list_7.title;
    meditera.getElementsByTagName("h2")[8].textContent = data[attr].meditera.list_8.title;
    meditera.getElementsByTagName("h2")[9].textContent = data[attr].meditera.list_9.title;
    meditera.getElementsByTagName("h2")[10].textContent = data[attr].meditera.list_10.title;
    meditera.getElementsByTagName("h2")[11].textContent = data[attr].meditera.list_11.title;
    meditera.getElementsByTagName("h2")[12].textContent = data[attr].meditera.list_12.title;
    meditera.getElementsByTagName("h2")[13].textContent = data[attr].meditera.list_13.title;

    meditera.getElementsByTagName("p")[1].textContent = data[attr].meditera.list_1.text;
    meditera.getElementsByTagName("p")[2].textContent = data[attr].meditera.list_2.text;
    meditera.getElementsByTagName("p")[3].textContent = data[attr].meditera.list_3.text;
    meditera.getElementsByTagName("p")[4].textContent = data[attr].meditera.list_4.text;
    meditera.getElementsByTagName("p")[5].textContent = data[attr].meditera.list_5.text;
    meditera.getElementsByTagName("p")[6].textContent = data[attr].meditera.list_6.text;
    meditera.getElementsByTagName("p")[7].textContent = data[attr].meditera.list_7.text;
    meditera.getElementsByTagName("p")[8].textContent = data[attr].meditera.list_8.text;
    meditera.getElementsByTagName("p")[9].textContent = data[attr].meditera.list_9.text;
    meditera.getElementsByTagName("p")[10].textContent = data[attr].meditera.list_10.text;
    meditera.getElementsByTagName("p")[11].textContent = data[attr].meditera.list_11.text;
    meditera.getElementsByTagName("p")[12].textContent = data[attr].meditera.list_12.text;
    meditera.getElementsByTagName("p")[13].textContent = data[attr].meditera.list_13.text;

    meditera.getElementsByTagName("h2")[14].textContent = data[attr].meditera.eliminate.title;
    meditera.getElementsByTagName("h3")[1].textContent = data[attr].meditera.eliminate.subtitle;
    meditera.getElementsByTagName("p")[14].textContent = data[attr].meditera.eliminate.text;

    meditera.getElementsByTagName("h2")[15].textContent = data[attr].meditera.warning.title;
    meditera.getElementsByTagName("p")[15].textContent = data[attr].meditera.warning.text;

    meditera.getElementsByTagName("h2")[16].textContent = data[attr].article;

    document.getElementsByClassName("book")[0].textContent = data[attr].book;


    //Toggle Left-2-Right and Right-2-Left Reading
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    const medh2 = meditera.getElementsByTagName("h2");
    const medp = meditera.getElementsByTagName("p");
    if(attr == "arabic"){
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        } else if (navstyle.getPropertyValue("flex-direction") == "column") {
            navbar.style.flexDirection = "column-reverse"
        }
        meditera.getElementsByTagName("h1")[0].style.textAlign = "right";
        meditera.getElementsByTagName("h3")[0].style.textAlign = "right";
        meditera.getElementsByTagName("span")[0].style.textAlign = "right";
        for(let i = 0; i < medh2.length; i++) {
            medh2[i].style.textAlign = "right";
        }
        for(let i = 0; i < medp.length; i++) {
            medp[i].style.textAlign = "right";
        }
    } else {
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        } else if (navstyle.getPropertyValue("flex-direction") == "column-reverse") {
            navbar.style.flexDirection = "column"
        }
        meditera.getElementsByTagName("h1")[0].style.textAlign = "left";
        meditera.getElementsByTagName("h3")[0].style.textAlign = "left";
        meditera.getElementsByTagName("span")[0].style.textAlign = "left";
        for(let i = 0; i < medh2.length; i++) {
            medh2[i].style.textAlign = "left";
        }
        for(let i = 0; i < medp.length; i++) {
            medp[i].style.textAlign = "left";
        }
    }*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
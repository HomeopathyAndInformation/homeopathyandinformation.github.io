const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const qna = document.getElementsByTagName("main")[0];

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
    
        qna.getElementsByTagName("h1")[0].textContent = data[attr].qna.title;

        qna.getElementsByTagName("h2")[0].textContent = data[attr].qna.h2.one;
        qna.getElementsByTagName("h2")[1].textContent = data[attr].qna.h2.two;
        qna.getElementsByTagName("h2")[2].textContent = data[attr].qna.h2.three;
        qna.getElementsByTagName("h2")[3].textContent = data[attr].qna.h2.four;
        qna.getElementsByTagName("h2")[4].textContent = data[attr].qna.h2.five;
        qna.getElementsByTagName("h2")[5].textContent = data[attr].qna.h2.six;
        qna.getElementsByTagName("h2")[6].textContent = data[attr].qna.h2.seven;
        qna.getElementsByTagName("h2")[7].textContent = data[attr].qna.h2.eight;
        qna.getElementsByTagName("h2")[8].textContent = data[attr].qna.h2.nine;
        qna.getElementsByTagName("h2")[9].textContent = data[attr].qna.h2.ten;
        qna.getElementsByTagName("h2")[10].textContent = data[attr].qna.h2.eleven;
        qna.getElementsByTagName("h2")[11].textContent = data[attr].qna.h2.twelve;

        qna.getElementsByTagName("p")[0].innerHTML = data[attr].qna.text.one;
        qna.getElementsByTagName("p")[1].textContent = data[attr].qna.text.two;
        qna.getElementsByTagName("p")[2].textContent = data[attr].qna.text.three;
        qna.getElementsByTagName("p")[3].textContent = data[attr].qna.text.four;
        qna.getElementsByTagName("p")[4].textContent = data[attr].qna.text.five;
        qna.getElementsByTagName("p")[5].textContent = data[attr].qna.text.six;
        qna.getElementsByTagName("p")[6].textContent = data[attr].qna.text.seven;
        qna.getElementsByTagName("p")[7].textContent = data[attr].qna.text.eight;
        qna.getElementsByTagName("p")[8].textContent = data[attr].qna.text.nine;
        qna.getElementsByTagName("p")[9].textContent = data[attr].qna.text.ten;
        qna.getElementsByTagName("p")[10].innerHTML = data[attr].qna.text.eleven;
        qna.getElementsByTagName("p")[11].innerHTML = data[attr].qna.text.twelve;

        document.getElementsByClassName("book")[0].textContent = data[attr].book;

        if(attr == "arabic") {
            let h2 = qna.getElementsByTagName("h2");
            for(let i = 0; i < h2.length; i++) {
                h2[i].style.fontSize = "1.5em";
            }
        } else {
            let h2 = qna.getElementsByTagName("h2");
            for(let i = 0; i < h2.length; i++) {
                h2[i].style.fontSize = "1.3em";
            }
        }

        location.reload();

    });
};

var data = {
    "english":{
        "title": "Chanone 7 - qna",

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

        "qna":{
            "title":"Questions and Answers",
            "h2":{
                "one":`1. Can I start my treatment before I am able to get my supplements and my
                homeopathic remedies?`,
                "two":`2. Can I start my treatment even if I do not have all the supplements and homeopathic
                remedies?`,
                "three":`3. Does this program cause side effects?`,
                "four":`4. Can I skip one day a week and eat whatever I want?`,
                "five":`5. When can I resume my normal diet?`,
                "six":`6. What are the substitutes for wheat?`,
                "seven":`7. What are the substitutes for cow milk and its byproducts?`,
                "eight":`8. What are the substitutes for white sugar?`,
                "nine":`9. Where do I find the alternative food products?`,
                "ten":`10. How do I know that the food supplements and homeopathic products I buy are
                genuine?`,
                "eleven":`11. Can I stop my classical medication?`,
                "twelve":`12. If my physician does not want to support me on this journey, what do I do?`,
            },
            "text":{
                "one":`Yes, you can start your given diet without delay and respect the food intolerance list
                recommended. Add <a href="./supplements.php">the supplements</a> and homeopathic remedies as soon as possible.`,

                "two":`Yes, you can start with what you are able to get and add the missing items as soon as possible.`,

                "three":`In my 30 years of experience, I have noted that patients who follow the program rigorously,
                there are no side effects. However, very rarely patients experience some withdrawal symptoms,
                such as headache, fatigue, aggravation of pain, and diarrhea due to the body adjusting itself to
                the new lifestyle. Patience is important, and if those symptoms exceed 48 hours, you may
                contact me. In this case, you stop the supplements and the homeopathy but not the diet.`,

                "four":`No, and the reason for that is that the regular food you consumed in the past is the direct cause
                of your disease due to its contaminations with chemicals used during cultivation and animal
                feed. You can learn further about that by accessing the reference page on the website and find
                the articles discussing this topic.`,

                "five":`This program you are following is based on the wellbeing observed in thousands of my patients
                after they have tried to go back to their old habits of eating and the subsequent consequences
                (getting back their old symptoms). The reason for that is that every cell in your body carries the
                memory of the harmful toxins contributing to the malaise that you came to consult me about.
                Therefore, I strongly advise your strict adherence to the diet for one year, and then you can eat
                once or twice a month food items not contained in your list without any setback.`,

                "six":`Spelt, Oat, Rye, Barley, Buckwheat, Millet, nonmodified Corn, Kamut, Sprouted Wheat, Einkorn,
                Quinoa, Brown Rice. In my experience, Spelt and Einkorn are very good grains to bake bread and
                cakes with. For people who like baking, almond flour works very well. All the byproducts
                containing these grains in their pure or combined form are the perfect substitutes for wheat.`,

                "seven":`You may use goat milk, sheep milk and their byproducts. If you do not like them, you may also
                use Almond, Oat, Hazelnut, and Coconut milk.`,

                "eight":`Organic cane sugar, red beet molasses, maple syrup, honey, pure Stevia.`,

                "nine":`You will find plenty of food items in your local health shops, in the isles of organic and healthy
                food items in all supermarkets, and online.`,

                "ten":`In the reference section of the website, you will find a list of brands that are recommended by
                the Consumer Lab Report. This entity is the most reliable source to verify the authenticity of a
                product. Regarding Homeopathy, you will find a list of the best companies of homeopathic
                products in the world.`,

                "eleven":`You must go back to your physician and coordinate the withdrawal of your classical medication.
                <span>You cannot stop your medication by yourself without the supervision of the physician who prescribed it for
                you.</span>`,

                "twelve":`<span>You cannot stop your medication by yourself without the supervision of the physician who prescribed it
                for you.</span> I recommend that you find a physician who is cooperative and open-minded to alternative medicine
                to help you to withdraw. As a homeopath, I do not have the authority to advise you regarding
                the withdrawal from classical medication.`,
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

        "qna":{
            "title":"أسئلة وأجوبة",
            "h2": {
                "one":`1. هل يمكنني بدء علاجي قبل أن أتمكن من الحصول على مكملاتي الغذائية
                وأدويتي الهوميوباثية؟`,
                "two":`2. هل يمكنني بدء علاجي حتى لو لم يكن لدي جميع المكملات الغذائية وأدوية الهوميوباثية
                ؟`,
                "three":`3. هل يتسبب هذا البرنامج في آثار جانبية؟`,
                "four":`4. هل يمكنني تخطي يوم واحد في الأسبوع وتناول ما أريد؟`,
                "five":`5. متى يمكنني استئناف نظامي الغذائي العادي؟`,
                "six":`6. ما هي بدائل القمح؟`,
                "seven":`7. ما هي بدائل حليب البقر ومشتقاته؟`,
                "eight":`8. ما هي بدائل السكر الأبيض؟`,
                "nine":`9. أين أجد المنتجات الغذائية البديلة؟`,
                "ten":`10. كيف أعرف أن المكملات الغذائية ومنتجات المعالجة الهوميوباثية التي أشتريها هي؟
                حقيقي. صادق. صميم؟`,
                "eleven":`11. هل يمكنني التوقف عن دوائي التقليدي؟`,
                "twelve":`12. إذا كان طبيبي لا يريد أن يدعمني في هذه الرحلة ، فماذا أفعل؟`,
            },

            "text":{
                "one":`نعم ، يمكنك بدء نظامك الغذائي دون تأخير واحترام قائمة عدم تحمل الطعام
                مستحسن. وأضف <a href="./supplements.php">المكملات الغذائية</a> والأدوية الهوميوباثية في أسرع وقت ممكن.`,

                "two":`نعم ، يمكنك البدء بما يمكنك الحصول عليه وإضافة العناصر المفقودة في أسرع وقت ممكن.`,

                "three":`خلال 30 عامًا من الخبرة ، لاحظت أن المرضى الذين يتابعون البرنامج بدقة ،
                ليس هناك أي آثار جانبية. ومع ذلك ، نادرًا ما يعاني المرضى من بعض أعراض الانسحاب ،
                مثل الصداع ، والتعب ، وتفاقم الألم ، والإسهال بسبب تأقلم الجسم مع نفسه
                ونمط الحياة الجديدة. الصبر مهم ، وإذا تجاوزت تلك الأعراض 48 ساعة ، يمكنك أن
                تتصل بي. في هذه الحالة ، تتوقف عن تناول المكملات الغذائية والمعالجة الهوميوباثية وليس النظام الغذائي.`,

                "four":`لا ، والسبب في ذلك أن الطعام المنتظم الذي كنت تتناوله في الماضي هو السبب المباشر
                لمرضك بسبب تلوثه بالمواد الكيميائية المستخدمة أثناء الزراعة وتغذية الحيوانات
                . يمكنك معرفة المزيد عن ذلك من خلال الوصول إلى الصفحة المرجعية عل الموقع والعثور علأ
                المقالات التي تناقش هذا الموضوع.`,

                "five":`يعتمد هذا البرنامج الذي تتابعه على الرفاهية التي تمت ملاحظتها في الآلاف من مرضاي
                بعد أن حاولوا العودة إلى عاداتهم القديمة في الأكل والعواقب اللاحقة
                (استعادة الأعراض القديمة). والسبب في ذلك هو أن كل خلية في جسمك تحمل ال
                ذكرى السموم الضارة التي تساهم في الشعور بالضيق الذي جئت لتستشيرني بشأنه.
                لذلك أنصحك بشدة بالالتزام الصارم بالنظام الغذائي لمدة عام ، وبعد ذلك يمكنك تناول الطعام
                مرة أو مرتين في الشهر المواد الغذائية غير الواردة في قائمتك دون أي انتكاسة.`,

                "six":`الحنطة ، الشوفان ، الجاودار ، الشعير ، الحنطة السوداء ، الدخن ، الذرة غير المعدلة ، كاموت ، القمح المنبت ، إينكورن ،
                كينوا ، أرز بني. في تجربتي ، تعتبر الحنطة و Einkorn حبوب جيدة جدًا لخبز الخبز و
                والكعك والحلويات . بالنسبة للأشخاص الذين يحبون الخبز ، فإن دقيق اللوز يعمل بشكل جيد للغاية. جميع المنتجات اللّتي تضم 
                هذه الحبوب في شكلها النقي أو المركب هي البدائل المثالية للقمح.`,

                "seven":`يمكنك استخدام حليب الماعز وحليب الأغنام ومشتقاتهما. إذا كنت لا تحبهم ، فيمكنك أيضًا
                استخدام حليب اللوز والشوفان والبندق وجوز الهند.`,

                "eight":`سكر القصب العضوي ، دبس البنجر الأحمر ، شراب القيقب ، العسل ، ستيفيا النقي.`,

                "nine":`ستجد الكثير من المواد الغذائية في متاجر الصحة المحلية ، في الممرات للمنتجات العضوية والصحية
                في جميع محلات السوبر ماركت وعلى الإنترنت.`,

                "ten":`في قسم المراجع على موقع الويب ، ستجد قائمة بالعلامات التجارية التي أوصت بها
                تقرير Consumer Lab. هذا الكيان هو المصدر الأكثر موثوقية للتحقق من صحة ملف
                منتج. فيما يتعلق بالمعالجة الهوميوباثية ، ستجد قائمة بأفضل شركات الأدوية الهوميوباثية
                في العالم.`,

                "eleven":`يجب عليك العودة إلى طبيبك وتنسيق سحب الدواء التقليدي الخاص بك.
                <span> لا يمكنك إيقاف الدواء بنفسك دون إشراف الطبيب الذي وصفه لك
                أنت. </ span>`,

                "twelve":`<span> لا يمكنك إيقاف الدواء بنفسك دون إشراف الطبيب الذي وصفه 
                لك. </span> أوصي بأن تجد طبيبًا متعاونًا ومنفتحًا على الطب البديل
                لمساعدتك على الانسحاب. باعتباري معالجًا تجانسيًا ، فليس لدي سلطة تقديم المشورة لك بخصوص ذلك
                الانسحاب من الأدوية التقليدية.`,
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

        "qna":{
            "title":"Questions et réponses",
            "h2":{
                "one":`1. Puis-je commencer mon traitement avant de pouvoir obtenir mes suppléments et mon
                remèdes homéopathiques?`,
                "two":`2. Puis-je commencer mon traitement même si je n'ai pas tous les suppléments et homéopathiques
                remèdes?`,
                "three":`3. Ce programme provoque-t-il des effets secondaires ?`,
                "four":`4. Puis-je sauter un jour par semaine et manger ce que je veux ?`,
                "five":`5. Quand puis-je reprendre mon alimentation normale ?`,
                "six":`6. Quels sont les substituts du blé ?`,
                "seven":`7. Quels sont les substituts du lait de vache et de ses sous-produits ?`,
                "eight":`8. Quels sont les substituts du sucre blanc ?`,
                "nine":`9. Où trouver les produits alimentaires alternatifs ?`,
                "ten":`10. Comment savoir si les compléments alimentaires et les produits homéopathiques que j'achète sont
                véritable?`,
                "eleven":`11. Puis-je arrêter ma médication classique ?`,
                "twelve":`12. Si mon médecin ne veut pas me soutenir dans ce voyage, que dois-je faire ?`,
            },
            "text":{
                "one":`Oui, vous pouvez commencer votre régime alimentaire sans attendre et respecter la liste des intolérances alimentaires
                conseillé. Ajouter <a href="./supplements.php">les suppléments</a> et les remèdes homéopathiques dès que possible.`,

                "two":`Oui, vous pouvez commencer avec ce que vous pouvez obtenir et ajouter les éléments manquants dès que possible.`,

                "three":`Au cours de mes 30 années d'expérience, j'ai constaté que les patients qui suivent rigoureusement le programme,
                il n'y a pas d'effets secondaires. Cependant, très rarement, les patients éprouvent des symptômes de sevrage,
                tels que maux de tête, fatigue, aggravation de la douleur et diarrhée due à l'adaptation du corps
                au nouveau mode de vie. La patience est importante, et si ces symptômes dépassent 48 heures, vous pouvez
                Contactez moi. Dans ce cas, vous arrêtez les compléments et l'homéopathie mais pas le régime.`,

                "four":`Non, et la raison en est que la nourriture régulière que vous avez consommée dans le passé en est la cause directe
                de votre maladie en raison de ses contaminations par des produits chimiques utilisés pendant la culture et l'alimentation animale. 
                Vous pouvez en savoir plus à ce sujet en accédant à la page de référence sur le site Web et trouver
                les articles traitant de ce sujet.`,

                "five":`Ce programme que vous suivez est basé sur le bien-être observé chez des milliers de mes patients
                après avoir essayé de revenir à leurs anciennes habitudes alimentaires et les conséquences qui en découlent
                (récupération de leurs anciens symptômes). La raison en est que chaque cellule de votre corps porte le
                souvenir des toxines nocives contribuant au mal-être pour lequel vous êtes venu me consulter.
                Par conséquent, je vous conseille fortement de suivre strictement le régime pendant un an, puis vous pourrez manger
                une ou deux fois par mois des aliments ne figurant pas dans votre liste sans aucun revers.`,

                "six":`Épeautre, Avoine, Seigle, Orge, Sarrasin, Millet, Maïs non modifié, Kamut, Blé germé, Petit épeautre,
                Quinoa, Riz Brun. D'après mon expérience, l'épeautre et le petit épeautre sont de très bons grains pour faire du pain et
                gâteaux avec. Pour les personnes qui aiment cuisiner, la farine d'amande fonctionne très bien. Tous les sous-produits
                contenant ces grains sous leur forme pure ou combinée sont les substituts parfaits du blé.`,

                "seven":`Vous pouvez utiliser du lait de chèvre, du lait de brebis et leurs dérivés. Si vous ne les aimez pas, vous pouvez également
                utilisez du lait d'amande, d'avoine, de noisette et de coco.`,

                "eight":`Sucre de canne biologique, mélasse de betterave rouge, sirop d'érable, miel, Stevia pure.`,

                "nine":`Vous trouverez de nombreux produits alimentaires dans vos magasins de santé locaux, dans les îles du bio et du sain.
                produits alimentaires dans tous les supermarchés et en ligne.`,

                "ten":`Dans la section références du site, vous trouverez une liste de marques recommandées par
                le rapport Consumer Lab. Cette entité est la source la plus fiable pour vérifier l'authenticité d'un
                produit. Concernant l'homéopathie, vous trouverez une liste des meilleures entreprises d'homéopathie
                produits dans le monde.`,

                "eleven":`Vous devez retourner voir votre médecin et coordonner le retrait de vos médicaments classiques.
                <span>Vous ne pouvez pas arrêter votre traitement par vous-même sans la supervision du médecin qui vous l'a prescrit.
                vous.</span>`,
                
                "twelve":`<span>Vous ne pouvez pas arrêter votre traitement par vous-même sans la supervision du médecin qui l'a prescrit
                pour vous.</span> Je vous recommande de trouver un médecin coopératif et ouvert à la médecine alternative
                pour vous aider à vous retirer. En tant qu'homéopathe, je n'ai pas le pouvoir de vous conseiller concernant
                le sevrage des médicaments classiques.`,
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

    qna.getElementsByTagName("h1")[0].textContent = data[attr].qna.title;

    qna.getElementsByTagName("h2")[0].textContent = data[attr].qna.h2.one;
    qna.getElementsByTagName("h2")[1].textContent = data[attr].qna.h2.two;
    qna.getElementsByTagName("h2")[2].textContent = data[attr].qna.h2.three;
    qna.getElementsByTagName("h2")[3].textContent = data[attr].qna.h2.four;
    qna.getElementsByTagName("h2")[4].textContent = data[attr].qna.h2.five;
    qna.getElementsByTagName("h2")[5].textContent = data[attr].qna.h2.six;
    qna.getElementsByTagName("h2")[6].textContent = data[attr].qna.h2.seven;
    qna.getElementsByTagName("h2")[7].textContent = data[attr].qna.h2.eight;
    qna.getElementsByTagName("h2")[8].textContent = data[attr].qna.h2.nine;
    qna.getElementsByTagName("h2")[9].textContent = data[attr].qna.h2.ten;
    qna.getElementsByTagName("h2")[10].textContent = data[attr].qna.h2.eleven;
    qna.getElementsByTagName("h2")[11].textContent = data[attr].qna.h2.twelve;

    qna.getElementsByTagName("p")[0].innerHTML = data[attr].qna.text.one;
    qna.getElementsByTagName("p")[1].textContent = data[attr].qna.text.two;
    qna.getElementsByTagName("p")[2].textContent = data[attr].qna.text.three;
    qna.getElementsByTagName("p")[3].textContent = data[attr].qna.text.four;
    qna.getElementsByTagName("p")[4].textContent = data[attr].qna.text.five;
    qna.getElementsByTagName("p")[5].textContent = data[attr].qna.text.six;
    qna.getElementsByTagName("p")[6].textContent = data[attr].qna.text.seven;
    qna.getElementsByTagName("p")[7].textContent = data[attr].qna.text.eight;
    qna.getElementsByTagName("p")[8].textContent = data[attr].qna.text.nine;
    qna.getElementsByTagName("p")[9].textContent = data[attr].qna.text.ten;
    qna.getElementsByTagName("p")[10].innerHTML = data[attr].qna.text.eleven;
    qna.getElementsByTagName("p")[11].innerHTML = data[attr].qna.text.twelve;

    document.getElementsByClassName("book")[0].textContent = data[attr].book;

    if(attr == "arabic") {
        let h2 = qna.getElementsByTagName("h2");
        for(let i = 0; i < h2.length; i++) {
            h2[i].style.fontSize = "1.5em";
        }
        let span = qna.getElementsByTagName("span");
        for(let i = 0; i < span.length; i++) {
            span[i].style.fontSize = "1.1em";
        }
    } else {
        let h2 = qna.getElementsByTagName("h2");
        for(let i = 0; i < h2.length; i++) {
            h2[i].style.fontSize = "1.3em";
        }
        let span = qna.getElementsByTagName("span");
        for(let i = 0; i < span.length; i++) {
            span[i].style.fontSize = "1em";
        }
    }
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
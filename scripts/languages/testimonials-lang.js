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
        testimonials.getElementsByTagName("h2")[0].innerHTML = data[attr].testimonials.subtitle;
        testimonials.getElementsByTagName("h3")[0].innerHTML = data[attr].testimonials.subtitle2;

        testimonials.getElementsByTagName("p")[0].innerHTML = data[attr].testimonials.one.name;
        testimonials.getElementsByTagName("p")[1].innerHTML = data[attr].testimonials.one.title;
        testimonials.getElementsByTagName("p")[2].innerHTML = data[attr].testimonials.one.country;
        testimonials.getElementsByTagName("p")[3].innerHTML = data[attr].testimonials.one.text;

        testimonials.getElementsByTagName("p")[4].innerHTML = data[attr].testimonials.two.name;
        testimonials.getElementsByTagName("p")[5].innerHTML = data[attr].testimonials.two.title;
        testimonials.getElementsByTagName("p")[6].innerHTML = data[attr].testimonials.two.country;
        testimonials.getElementsByTagName("p")[7].innerHTML = data[attr].testimonials.two.text;

        testimonials.getElementsByTagName("p")[8].innerHTML = data[attr].testimonials.three.name;
        testimonials.getElementsByTagName("p")[9].innerHTML = data[attr].testimonials.three.title;
        testimonials.getElementsByTagName("p")[10].innerHTML = data[attr].testimonials.three.country;
        testimonials.getElementsByTagName("p")[11].innerHTML = data[attr].testimonials.three.text;

        testimonials.getElementsByTagName("p")[12].innerHTML = data[attr].testimonials.four.name;
        testimonials.getElementsByTagName("p")[13].innerHTML = data[attr].testimonials.four.title;
        testimonials.getElementsByTagName("p")[14].innerHTML = data[attr].testimonials.four.country;
        testimonials.getElementsByTagName("p")[15].innerHTML = data[attr].testimonials.four.text;

        testimonials.getElementsByTagName("p")[16].innerHTML = data[attr].testimonials.five.name;
        testimonials.getElementsByTagName("p")[17].innerHTML = data[attr].testimonials.five.title;
        testimonials.getElementsByTagName("p")[18].innerHTML = data[attr].testimonials.five.country;
        testimonials.getElementsByTagName("p")[19].innerHTML = data[attr].testimonials.five.text;

        testimonials.getElementsByTagName("p")[20].innerHTML = data[attr].testimonials.six.name;
        testimonials.getElementsByTagName("p")[21].innerHTML = data[attr].testimonials.six.title;
        testimonials.getElementsByTagName("p")[22].innerHTML = data[attr].testimonials.six.country;
        testimonials.getElementsByTagName("p")[23].innerHTML = data[attr].testimonials.six.text;

        document.getElementsByClassName("book")[0].textContent = data[attr].book;

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
            "title":"Testimonials",
            "subtitle":`"The greatest medicine of all is to teach people how not to need it." - Hippocrates (460 BC to 375 BC)`,
            "subtitle2":"Hippocrates of Kos, also known as Hippocrates II, was a Greek physician of the classical period who is considered one of the most outstanding figures in the history of medicine.",
            
            "one":{
                "name":"Suzan Ayscough",
                "title":"She/Her/Elle",
                "country":"CANADA",
                "text":`I am actually kinda’ proud to be one of Aboudi’s original five crash test dummies so to speak,
                meaning I volunteered to be one of his first five test patients when he was a student of
                homeopathic medicine, and one of seven graduate students (including his wife Andy) sharing a
                huge apartment in Montreal, in 1985. We were nicknamed the “UN” by our friends, as it was
                common to hear French, German, Arabic and English in single of multiple conversations in the kitchens,
                halls and living rooms. Aboudi’s core interest, even back then, was to help people feel better.
                He has literally saved my life once. He enlightened me to a potassium deficiency before I knew
                what the word meant, let alone the fact it’s an essential mineral to stay alive, and where to find
                it in food, drink and supplements. It is hard to summarize my respect and admiration for Aboudi
                as a friend and practitioner who has changed the way I think about life in general, and my own
                body as living organism, more specifically. I am thrilled to be able to contribute as a volunteer
                to this website with original photos and videos, and as its Content Editor as a way of giving
                back, and paying my eternal gratitude forward.`,
            },

            "two":{
                "name":"Dr Abdul Halim Zeidan",
                "title":"He/Him/Lui",
                "country":"LEBANON",
                "text":`In 2012, I had been diagnosed with renal failure which required either dialysis or kidney
                replacement. It was considered ‘too late’ to check for alternatives, by no less than three major
                specialized centers, which all gave the same bleak prognosis—but I was refusing to surrender.
                Just two days before the first dialysis session, I visited Hp. Merhi.
                Luckily for me, he checked me out with the MORA equipment, which provided a very hopeful
                analysis: going deep to the root causes, and dealing with them, could cure and save the kidney.
                As an old believer and user of alternative medicine, I took this opportunity to heart, especially
                to avoid dialysis.
                Hp. Merhi started me on a new path, with a regulated food menu and homeopathic treatment
                that helped greatly. My ‘renal failure’ was reversed, and my kidneys recovered in a short period
                (2 months).
                The real upside to the kidney kerfuffle was that I got into a long-term friendship, with a trustful
                resource, and caring professional practitioner. A double win.
                Hp. Merhi is always available when I need him. I get an annual check-up of course, but I do see
                him many times per year, because also I accompany my referred friends to his office!`,
            },

            "three":{
                "name":"Abed Ghaled",
                "title":"He/Him/Lui",
                "country":"LEBANON",
                "text":`Hp. Merhi opened an amazing horizon for me. He is sincere. He takes things seriously,
                and scientifically. He finds which treatments are best for his individual patients. He is
                always improving his knowledge of the latest discoveries in alternative medicine.
                Thanks to Hp. Merhi, my life is no longer controlled by a “weight problem”.
                My name is Abed Ghaleb, and I am a 37-year-old Lebanese entrepreneur with my own
                management consulting company.
                My journey started with Hp. Merhi back in 2019, when I weighed 128 kgs. Only 18
                months later, I had lost 50+ kilos, and achieved my ideal weight of 79.5 kgs. It will soon
                be 2023, and I’m still maintaining that ideal weight, by practicing the changes in lifestyle
                and diet that Hp. Merhi taught me. Here’s what happened.
                Two days before meeting Hp. Merhi, I was trying to tie my shoes, but I couldn’t reach
                my shoelaces. That was the “Aha” moment, where I said to myself: “the time for change
                has come! I am still in my 30s, and I won’t let myself down dramatically, nor go to a
                place of no return’.”
                I began searching for a natural solution. I didn’t seek a fast one, because I only wanted
                to get back to looking like a ‘normal’ person. Time was not the issue, so a friend of
                mine, familiar with my frustrating situation, introduced me to the concept of homeopathy,
                and Mr. Merhi. “See what he recommends,” said the friend, so I decided it would be
                worth a try. (Back then, I also didn’t have any knowledge of how my body works, nor on
                the roles of glands, vitamins, minerals and more in our overall wellness, but more on
                that later.)
                My first visit to Hp. Merhi was amazingly informative. He spent around 2.5 hours with
                me in total, including my diagnosis, using a bio-resonance machine. He started by
                explaining to me how my body functions, and how one’s overall energy is related to
                wellness. He recommended a strict plan for me to follow, including supplements,
                homeopathic treatment and stressed the importance of abiding by the plan. Up until that
                day, I was only concerned about losing weight, but I followed the entire plan.
                After only few weeks into The Plan, I started noticing great changes in my overall
                energy and wellness, as well as the expected loss of body weight. I started to believe
                that slow change would work best, especially after 15 years of food abuse, neglect and
                bad lifestyle habits. Mr. Merhi warned me to not expect results overnight, so I didn’t.
                My second appointment with Hp. Merhi showed great progress, with healing results, so I
                continued to abide by The Plan for months, and my body kept improving on all levels.
                This opened up a whole new world to me.
                
                I am curious by nature, so with the additional guidance of Mr. Merhi, I began
                researching my own health: how organs and glands work, how vitamins and minerals
                benefit, the best time to eat, the best way to sleep, and health factors.
                My new belief in this natural healing system helped me lose some 50 kgs, without any
                damage in any body function. In addition, my body fully healed from toxins. I even got
                rid of my reading glasses, as I no longer needed them while reading.
                So, you see my story is not just about weight loss. It’s about living a better life. It’s about
                learning to read the needs of my own body. It has been about listening to what Mr.
                Merhi taught me about how to live a healthy life and applying it to my daily routine.
                I will always consult Hp. Merhi when I need his wisdom guidance to get or keep me well,
                but today I know how to apply some of his wisdom to become my own healer and
                doctor, which is also his own personal goal, which is to have his patients be able to care
                for themselves. A great catch!
                I genuinely recommend Hp. Merhi to anyone who is searching to become a better
                version of themselves, no matter what age they are. My own parents have visited Hp.
                Merhi, and now they too have started their own journey of healthy change. You can too.`,
            },

            "four":{
                "name":"Ian's Mother",
                "title":"She/Her/Elle",
                "country":"CYPRUS",
                "text":`Our journey with HP Merhi, began back in 2003. I was 24 at the time and battling many illnesses. A long
                history of misdiagnosis and wrong treatments, I was depleted from health on all levels. Hp. Merhi,
                accurately diagnosed and pinned the problems that I had and put me on the right road to health. Since
                following his regimen and his homeopathic treatment I am healthy and was able to conceive a healthy
                child. If I am to go into details as to how many times Hp. Merhi saved my family from all, I would overtake
                all testimonies. But to sum it up:
                Hp. Merhi is superiorly knowledgeable in all aspects of healthy living. His diagnosis is accurate! He is
                truthful and trustworthy. He is a practitioner with ethics and morals. His Homeopathic holistic treatment
                approach, combining physical, mental, spiritual and environmental, encompassing all, is exceeding all
                conventional medicine.
                 We are forever grateful to Hp. Merhi.`,
            },

            "five":{
                "name":"Afaf Omais",
                "title":"She/Her/Elle",
                "country":"IVORY COAST",
                "text":`H.P Abdul Merhi guided me since 2008 with precious advice, using Mora Therapy, and showed me how to take
                care of my health, through a different perspective, without blindly following allopathic
                traditional medicine. This saved me from many health issues that we all go through…
                 
                I followed up with routine medical check-ups. I asked Mr. Merhi to advise me on the diagnosis,
                and asked him to replace ‘chemical medication’ with homeopathic treatments, natural food
                supplements, and the vitamins my body really needed. This method helped me solve problems
                like hypothyroidism, menopause weight gain, and many other issues which were cured (instead
                of them becoming permanent illnesses and me becoming enslaved to daily medical or
                hormonal pill, intake treatments).
                 
                I am now also healthier because I avoid highly processed foods, and instead seek homeopathic
                alternatives and supplements to complement my diet.
                 
                Today I know my body can heal itself when given the right nutrients. Now I understand my body
                is always meant to be in good health, and never sick!`,
            },

            "six":{
                "name":"Catherine de Saint Martin",
                "title":"She/Her/Elle",
                "country":"FRANCE",
                "text":"We met Dr. Mehri in 2006 during our first Moratherapy session in Beirut. He detected food intolerances in my husband, my son and myself and changed our lifestyle. We have been much better since then and never miss ourAnnual check up with him.",
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
            "title":"الشهادات - التوصيات",
            "subtitle":'"أعظم دواء على الإطلاق هو تعليم الناس كيف لا يحتاجون إليه." - أبقراط أبو الطب (460 قبل الميلاد إلى 375 قبل الميلاد).',
            "subtitle2":"أبقراط كوس ، المعروف أيضًا باسم أبقراط الثاني ، كان طبيبًا يونانيًا في الفترة الكلاسيكية ويُعتبر أحد أبرز الشخصيات في تاريخ الطب.",
            
            "one":{
                "name":"سوزان ايسكوف",
                "title":"هي",
                "country":"كندا",
                "text":'أنا في الواقع فخورة بكوني واحدة من دمى اختبارات التصادم الخمس الأصلية لعبودي إذا جاز التعبير ، مما يعني أنني تطوعت لأكون واحدًا من أول خمسة مرضى خضعوا للاختبار عندما كان طالبًا في الطب المثلي ، وواحدًا من سبعة طلاب دراسات عليا (بما في ذلك زوجة آندي) تقاسمنا شقة ضخمة في مونتريال ، في عام 1985. أطلق علينا أصدقاؤنا لقب "الأمم المتحدة" ، حيث كان من الشائع سماع الفرنسية والالمانية والعربية والإنجليزية في محادثات واحدة متعددة في المطابخ والقاعات وغرف المعيشة. كان اهتمام العبودي الأساسي ، حتى في ذلك الوقت ، هو مساعدة الناس على الشعور بالتحسن. لقد أنقذ حياتي حرفيًا مرة واحدة. لقد علمني بنقص البوتاسيوم قبل أن أعرف ما تعنيه الكلمة ، ناهيك عن حقيقة أنه معدن أساسي للبقاء على قيد الحياة ، وأين أجده في الطعام والشراب والمكملات الغذائية. من الصعب تلخيص احترامي وإعجابي بالعبودي كصديق (ممارس الطب الهوميوباثية ) ط.ه. غيّر طريقة تفكيري بالحياة بشكل عام ، وجسدي ككائن حي ، بشكل أكثر تحديدًا. يسعدني أن أكون قادرًا على المساهمة كمتطوع في هذا الموقع بالصور ومقاطع الفيديو الأصلية ، وكمحرر المحتوى الخاص به كوسيلة لرد الجميل ، وامتناني الأبدي للأمام.',
            },

            "two":{
                "name":"عبد الحليم زيدان",
                "title":"هو",
                "country":"لبنان",
                "text":`في عام 2012 ، تم تشخيصي بالفشل الكلوي الذي تطلب إما غسيل الكلى أو استبدال الكلى. لقد اعتبر أن الوقت قد فات للغاية للبحث عن بدائل ، من قبل ما لا يقل عن ثلاثة مراكز متخصصة رئيسية ، والتي أعطت جميعها نفس التكهنات القاتمة - لكنني كنت أرفض الاستسلام. قبل يومين فقط من جلسة غسيل الكلى الأولى ، قمت بزيارة (ممارس الطب الهوميوباثية) ط.ه. مرعي. لحسن الحظ بالنسبة لي ، قام بفحصي بمعدات الرنين الحيوي ، والتي قدمت تحليلاً مفعماً بالأمل: التعمق في الأسباب الجذرية والتعامل معها يمكن أن يعالج الكلى وينقذها. بصفتي مؤمنًا قديمًا ومستخدمًا للطب البديل ، انتهزت هذه الفرصة لأتجنب غسيل الكلى على وجه الخصوص. بدأني ممارس ط.ه. مرعي في مسار جديد ، مع قائمة طعام منظمة وعلاج الهوميوباثية التي ساعدتني كثيرًا. تم عكس "الفشل الكلوي" ، وتعافت كليتي في فترة قصيرة (شهرين). كان الجانب الإيجابي الحقيقي في شلل الكلى هو أنني دخلت في صداقة طويلة الأمد ، مع مورد موثوق به ، و محترف مهتم. فوز مزدوج. ممارس ط.ه. مرعي متاح دائمًا عندما أحتاج إليه. أحصل على فحص سنوي بالطبع ، لكنني أراه عدة مرات في السنة ، لأنني أيضًا أرافق أصدقائي المحالين إلى مكتبه`,
            },

            "three":{
                "name":"عابد غالب",
                "title":"هو",
                "country":"لبنان",
                "text":`فتح (ممارس الطب الهوميوباثية) ط.ه. مرعي أفقًا رائعًا بالنسبة لي. هو صادق. يأخذ الأمور بجدية وعلمية. يجد العلاجات الأفضل لمرضاه الفرديين. يعمل دائمًا على تحسين معرفته بأحدث الاكتشافات في الطب البديل. بفضل ممارس  ط.ه. مرعي ، لم تعد "مشكلة الوزن" تتحكم في حياتي. اسمي عبد غالب ، وأنا رجل أعمال لبناني يبلغ من العمر 37 عامًا ولدي شركة استشارات إدارية خاصة بي. بدأت رحلتي مع ممارس ط.ه. مرعي في عام 2019 ، عندما كان وزني 128 كجم. بعد 18 شهرًا فقط ، فقدت أكثر من 50 كيلوغرامًا ، وحققت وزني المثالي 79.5 كجم. سيحل قريبًا عام 2023 ، وما زلت أحافظ على هذا الوزن المثالي ، من خلال ممارسة التغييرات في نمط الحياة والنظام الغذائي الذي علمني إياه ممارس ط.ه. مرعي. إليكم ما حدث. قبل يومين من مقابلته ، كنت أحاول ربط حذائي ، لكني لم أستطع الوصول إلى رباط حذائي. كانت تلك لحظة "آها" ، حيث قلت لنفسي: "حان وقت التغيير! ما زلت في الثلاثينيات من عمري ، ولن أخذل نفسي بشكل كبير ، ولن أذهب إلى مكان اللاعودة ". بدأت البحث عن حل طبيعي. لم أسعى للحصول على واحدة سريعة ، لأنني أردت فقط أن أعود لأبدو كشخص "طبيعي". لم يكن الوقت هو المشكلة ، لذلك عرّفني صديق لي ، على دراية بوضعي المحبط ، بمفهوم المعالجةالهوميوباثية ، والسيد مرعي. قال الصديق: "انظر إلى ما يوصي به" ، لذلك قررت أن الأمر يستحق المحاولة. (في ذلك الوقت ، لم يكن لدي أي معرفة بكيفية عمل جسدي ، ولا عن أدوار الغدد والفيتامينات والمعادن والمزيد في عافيتنا الشاملة ، ولكن المزيد عن ذلك لاحقًا.) كانت زيارتي الأولى ممارس ط.ه. مرعي هي مفيدة بشكل مذهل. لقد أمضى حوالي 2.5 ساعة معي إجمالاً ، بما في ذلك تشخيصي ، باستخدام جهاز الرنين الحيوي. بدأ بشرح لي كيف يعمل جسدي ، وكيف ترتبط طاقته الإجمالية بالصحة. أوصى بخطة صارمة يجب أن أتبعها ، بما في ذلك المكملات والعلاجات الهوميوباثية وشدد على أهمية الالتزام بالخطة. حتى ذلك اليوم ، كنت مهتمًا فقط بفقدان الوزن ، لكنني اتبعت الخطة بأكملها. بعد أسابيع قليلة فقط من الخطة ، بدأت في ملاحظة تغييرات كبيرة في طاقتي العامة وعافيتي ، بالإضافة إلى الخسارة المتوقعة لوزن الجسم. بدأت أعتقد أن التغيير البطيء من شأنه أن يعمل بشكل أفضل ، خاصة بعد 15 عامًا من سوء استخدام الطعام والإهمال وعادات نمط الحياة السيئة. حذرني ممارس ط.ه. مرعي من عدم توقع النتائج بين عشية وضحاها ، لذلك لم أفعل. أظهر موعدي الثاني معه تقدمًا كبيرًا ، مع نتائج علاجية ، لذلك واصلت الالتزام بالخطة لعدة أشهر ، واستمر جسدي في التحسن على جميع المستويات. هذا فتح لي عالما جديدا تماما. أنا فضولي بطبيعتي ، لذا بتوجيهات إضافية من السيد مرعي ، بدأت البحث في صحتي: كيف تعمل الأعضاء والغدد ، وكيف تستفيد الفيتامينات والمعادن ، وأفضل وقت لتناول الطعام ، وأفضل طريقة للنوم ، والعوامل الصحية . ساعدني إيماني الجديد بنظام العلاج الطبيعي هذا على خسارة حوالي 50 كجم ، دون أي ضرر في أي وظيفة من وظائف الجسم. بالإضافة إلى ذلك ، شُفي جسدي تمامًا من السموم. حتى أنني تخلصت من نظارتي للقراءة ، لأنني لم أعد بحاجة إليها أثناء القراءة. لذا ، ترى أن قصتي لا تتعلق فقط بفقدان الوزن. يتعلق الأمر بعيش حياة أفضل. يتعلق الأمر بتعلم قراءة احتياجات جسدي. كان الأمر يتعلق بالاستماع إلى ما علمني إياه ممارس ط.ه. مرعي حول كيفية عيش حياة صحية وتطبيقها على روتيني اليومي. سأستشيره دائمًا عندما أحتاج إلى إرشاداته الحكيمة للحصول على أو إبقائي في حالة جيدة ، لكنني أعرف اليوم كيفية تطبيق بعض حكمته ليصبح معالجًا وطبيبًا ، وهو أيضًا هدفه الشخصي ، وهو الحصول على أن يكون المرضى قادرين على رعاية أنفسهم. صيد رائع! أوصي بصدق ممارس  ط.ه.  مرعي لأي شخص يبحث عن نسخة أفضل من نفسه ، بغض النظر عن عمره. لقد قام والداي بزيارته ، والآن بدأوا هم أيضًا رحلتهم الخاصة للتغيير الصحي. انت تستطيع ايضا`,
            },

            "four":{
                "name":"والدة إيان",
                "title":"هي",
                "country":"قبرص",
                "text":`بدأت رحلتنا مع (ممارس الطب الهوميوباثية) ط.ه. مرعي في عام 2003. كان عمري 24 عامًا في ذلك الوقت وأواجه العديد من الأمراض. تاريخ طويل من التشخيص الخاطئ والعلاجات الخاطئة ، لقد استنزفت من الصحة على جميع المستويات. حصان. مرعي ، شخّص بدقة المشاكل التي عانيت منها ووضعتني على الطريق الصحيح للصحة. منذ اتباع نظامه العلاجي وعلاجه المثلي ، أصبحت بصحة جيدة وتمكنت من إنجاب طفل سليم. إذا كنت سأخوض في التفاصيل حول عدد المرات التي أنقذ ممارس ط.ه. مرعي عائلتي من الجميع ، فسوف أتفوق على جميع الشهادات. ولكن لتلخيص الأمر: إن ممارس  ط.ه. مرعي يتمتع بمعرفة فائقة في جميع جوانب الحياة الصحية. تشخيصه دقيق! هو صادق وجدير بالثقة. وهو  مع الأخلاق والأخلاق. نهج المعالجة الهوميوباثية الشامل الخاص به ، الذي يجمع بين الجسدية والعقلية والروحية والبيئية ، ويشمل الجميع ، يتجاوز كل الطب التقليدي. نحن ممتنون إلى الأبد ممارس ط.ه. مرعي.`,
            },

            "five":{
                "name":"عفاف عميس",
                "title":"هي",
                "country":"ساحل العاج",
                "text":`أرشدني (ممارس الطب الهوميوباثية) ط.ه. عبودي مرعي في عام 2008 بنصائح ثمينة ، باستخدام علاج مورا ، وأظهر لي كيف أعتني بصحتي ، من منظور مختلف ، دون اتباع الطب التقليدي بطريقة أعمى. لقد أنقذني هذا من العديد من المشكلات الصحية التي نمر بها جميعًا ... تابعتها بفحوصات طبية روتينية. طلبت من السيد مرعي تقديم المشورة لي بشأن التشخيص ، وطلبت منه استبدال "الأدوية الكيميائية" بالعلاجات الهوميوباثية والمكملات الغذائية الطبيعية والفيتامينات التي يحتاجها جسدي حقًا. ساعدتني هذه الطريقة في حل مشاكل مثل قصور الغدة الدرقية ، وزيادة الوزن في فترة انقطاع الطمث ، والعديد من المشكلات الأخرى التي تم علاجها (بدلاً من أن تصبح أمراضًا دائمة وأصبحت مستعبداً للحبوب الطبية أو الهرمونية اليومية ، وعلاجات المدخول). أنا الآن أيضًا أكثر صحة لأنني أتجنب الأطعمة المصنعة بشكل كبير ، وبدلاً من ذلك أبحث عن بدائل ومكملات المعالجة الهوميوباثية لاستكمال نظامي الغذائي. أعلم اليوم أن جسدي يمكنه أن يشفي نفسه عندما يعطى العناصر الغذائية الصحيحة. الآن أفهم أن جسدي دائمًا ما يكون بصحة جيدة ، وليس مريضًا أبدًا`,
            },

            "six":{
                "name":"كاثرين من سانت مارتن",
                "title":"هي",
                "country":"فرنسا",
                "text":"التقينا بالدكتور مرعي في عام 2006 خلال أول جلسة فحص بالرنين المغناطيسي في بيروت. اكتشف حساسية و عدم تحمل الطعام في زوجي وابني وأنا وغير نمط حياتنا. لقد كنا أفضل بكثير منذ ذلك الحين ولم نفوت أبدا الفحص السنوي معه.",
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
            "title":"Témoignages",
            "subtitle":`"Le plus grand médicament de tous est d'enseigner aux gens comment ne pas en avoir besoin." - Hyppocrate (460 avant JC à 375 avant JC)`,
            "subtitle2":"Hippocrate de Kos, également connu sous le nom d'Hippocrate II, était un médecin grec de la période classique considéré comme l'une des figures les plus remarquables de l'histoire de la médecine.",
            
            "one":{
                "name":"Suzan Ayscough",
                "title":"She/Her/Elle",
                "country":"CANADA",
                "text":"Je suis en fait un peu fier d'être l'un des cinq premiers mannequins de crash test d'Aboudi, pour ainsi dire, ce qui signifie que je me suis porté volontaire pour être l'un de ses cinq premiers patients testés lorsqu'il était étudiant en médecine homéopathique, et l'un des sept étudiants diplômés (dont son épouse Andy) partageant un immense appartement à Montréal, en 1985. Nous étions surnommés les « ONU » par nos amis, car il était courant d'entendre le français, l'allemand, l'arabe et l'anglais dans une ou plusieurs conversations dans les cuisines, les couloirs et les salons. L'intérêt principal d'Aboudi, même à l'époque, était d'aider les gens à se sentir mieux. Il m'a littéralement sauvé la vie une fois. Il m'a éclairé sur une carence en potassium avant que je sache ce que le mot signifiait, sans parler du fait que c'est un minéral essentiel pour rester en vie, et où le trouver dans les aliments, les boissons et les suppléments. Il est difficile de résumer mon respect et mon admiration pour Aboudi en tant qu'ami et praticien qui a changé ma façon de penser la vie en général, et mon propre corps en tant qu'organisme vivant, plus spécifiquement. Je suis ravi de pouvoir contribuer en tant que bénévole à ce site Web avec des photos et des vidéos originales, et en tant qu'éditeur de contenu comme un moyen de redonner et de transmettre ma gratitude éternelle.",
            },

            "two":{
                "name":"Dr Abdul Halim Zeidan",
                "title":"He/Him/Lui",
                "country":"LIBAN",
                "text":"En 2012, on m'avait diagnostiqué une insuffisance rénale qui nécessitait soit une dialyse, soit une arthroplastie rénale. Pas moins de trois grands centres spécialisés ont considéré qu'il était «trop tard» pour rechercher des alternatives, qui donnaient tous le même pronostic sombre, mais je refusais de me rendre. Juste deux jours avant la première séance de dialyse, j'ai rendu visite à Hp. Merhi. Heureusement pour moi, il m'a examiné avec l'équipement MORA, qui a fourni une analyse très prometteuse : approfondir les causes profondes et les traiter pourrait guérir et sauver le rein. En tant que vieux croyant et utilisateur des médecines alternatives, j'ai saisi cette opportunité à cœur, notamment pour éviter la dialyse. HP. Merhi m'a lancé sur une nouvelle voie, avec un menu alimentaire réglementé et un traitement homéopathique qui m'a beaucoup aidé. Mon « insuffisance rénale » a été inversée et mes reins se sont rétablis en peu de temps (2 mois). Le véritable avantage du cafouillage rénal était que j'ai noué une amitié à long terme, avec une ressource de confiance et un praticien professionnel attentionné. Une double victoire. HP. Merhi est toujours disponible quand j'ai besoin de lui. Je fais un check-up annuel bien sûr, mais je le vois plusieurs fois par an, car aussi j'accompagne mes amis référés à son cabinet !",
            },

            "three":{
                "name":"Abed Ghaleb",
                "title":"He/Him/Lui",
                "country":"LIBAN",
                "text":"HP. Merhi m'a ouvert un horizon incroyable. Il est sincère. Il prend les choses au sérieux et scientifiquement. Il trouve quels traitements sont les meilleurs pour ses patients individuels. Il perfectionne sans cesse ses connaissances des dernières découvertes en médecine alternative. Merci à Hp. Merhi, ma vie n'est plus contrôlée par un 'problème de poids'. Je m'appelle Abed Ghaleb et je suis un entrepreneur libanais de 37 ans qui possède ma propre société de conseil en gestion. Mon voyage a commencé avec Hp. Merhi en 2019, quand je pesais 128 kg. Seulement 18 mois plus tard, j'avais perdu plus de 50 kilos et atteint mon poids idéal de 79,5 kg. Ce sera bientôt 2023, et je maintiens toujours ce poids idéal, en pratiquant les changements de mode de vie et de régime alimentaire que Hp. Merhi m'a appris. Voici ce qui s'est passé. Deux jours avant de rencontrer Hp. Merhi, j'essayais de lacer mes chaussures, mais je n'arrivais pas à atteindre mes lacets. C'était le moment « Aha », où je me suis dit : « le temps du changement est venu ! Je suis encore dans la trentaine, et je ne me laisserai pas tomber de façon dramatique, ni n'irai dans un lieu de non-retour ». J'ai commencé à chercher une solution naturelle. Je n'en cherchais pas un rapide, parce que je voulais seulement redevenir une personne 'normale'. Le temps n'était pas le problème, alors un de mes amis, familier avec ma situation frustrante, m'a présenté le concept de l'homéopathie, et M. Merhi. 'Voyez ce qu'il recommande', a déclaré l'ami, alors j'ai décidé que cela valait la peine d'essayer. (À l'époque, je n'avais aucune connaissance du fonctionnement de mon corps, ni du rôle des glandes, des vitamines, des minéraux et plus encore dans notre bien-être général, mais j'en reparlerai plus tard.) Ma première visite à Hp. Merhi était incroyablement instructif. Il a passé environ 2,5 heures avec moi au total, y compris mon diagnostic, en utilisant une machine à bio-résonance. Il a commencé par m'expliquer comment mon corps fonctionne et comment l'énergie globale d'une personne est liée au bien-être. Il m'a recommandé un plan strict à suivre, y compris des suppléments, un traitement homéopathique et a souligné l'importance de respecter le plan. Jusqu'à ce jour, je ne me préoccupais que de perdre du poids, mais j'ai suivi tout le plan. Après seulement quelques semaines dans The Plan, j'ai commencé à remarquer de grands changements dans mon énergie et mon bien-être, ainsi que la perte de poids attendue. J'ai commencé à croire qu'un changement lent fonctionnerait mieux, surtout après 15 ans d'abus alimentaire, de négligence et de mauvaises habitudes de vie. M. Merhi m'a averti de ne pas attendre de résultats du jour au lendemain, alors je ne l'ai pas fait. Mon deuxième rendez-vous avec Hp. Merhi a montré de grands progrès, avec des résultats de guérison, alors j'ai continué à respecter le plan pendant des mois, et mon corps a continué à s'améliorer à tous les niveaux. Cela m'a ouvert un tout nouveau monde. Je suis curieux de nature, donc avec les conseils supplémentaires de M. Merhi, j'ai commencé à faire des recherches sur ma propre santé : comment fonctionnent les organes et les glandes, comment les vitamines et les minéraux sont bénéfiques, le meilleur moment pour manger, la meilleure façon de dormir et les facteurs de santé. . Ma nouvelle croyance en ce système de guérison naturel m'a aidé à perdre environ 50 kg, sans aucun dommage dans aucune fonction corporelle. De plus, mon corps a complètement guéri des toxines. Je me suis même débarrassé de mes lunettes de lecture, car je n'en avais plus besoin pour lire. Donc, vous voyez, mon histoire ne concerne pas seulement la perte de poids. Il s'agit de vivre une vie meilleure. Il s'agit d'apprendre à lire les besoins de mon propre corps. Il s'agissait d'écouter ce que M. Merhi m'a appris sur la façon de vivre une vie saine et de l'appliquer à ma routine quotidienne. Je consulterai toujours Hp. Merhi quand j'ai besoin de ses conseils avisés pour me rétablir ou me maintenir en bonne santé, mais aujourd'hui je sais comment appliquer une partie de sa sagesse pour devenir mon propre guérisseur et médecin, ce qui est aussi son objectif personnel, qui est de permettre à ses patients de prendre soin d'eux-mêmes. Une belle prise ! Je recommande vraiment Hp. Merhi à tous ceux qui cherchent à devenir une meilleure version d'eux-mêmes, quel que soit leur âge. Mes propres parents ont rendu visite à Hp. Merhi, et maintenant eux aussi ont commencé leur propre voyage de changement sain. Vous pouvez également.",
            },

            "four":{
                "name":"La mère d'Ian",
                "title":"She/Her/Elle",
                "country":"CHYPRE",
                "text":"Notre voyage avec HP Merhi a commencé en 2003. J'avais 24 ans à l'époque et je luttais contre de nombreuses maladies. Une longue histoire d'erreurs de diagnostic et de mauvais traitements, j'étais épuisé de santé à tous les niveaux. HP. Merhi, a diagnostiqué avec précision et épinglé les problèmes que j'avais et m'a mis sur la bonne voie vers la santé. Depuis que j'ai suivi son régime et son traitement homéopathique, je suis en bonne santé et j'ai pu concevoir un enfant en bonne santé. Si je dois entrer dans les détails pour savoir combien de fois Hp. Merhi a sauvé ma famille de tout, je dépasserais tous les témoignages. Mais pour résumer : Hp. Merhi possède des connaissances supérieures dans tous les aspects d'une vie saine. Son diagnostic est juste ! Il est véridique et digne de confiance. C'est un praticien d'éthique et de morale. Son approche de traitement holistique homéopathique, combinant physique, mental, spirituel et environnemental, englobant tout, dépasse toute la médecine conventionnelle. Nous sommes éternellement reconnaissants à Hp. Merhi.",
            },

            "five":{
                "name":"Afaf Omais",
                "title":"She/Her/Elle",
                "country":"CÔTE D'IVOIRE",
                "text":"H.P Abdul Merhi m'a guidé depuis 2008 avec de précieux conseils, en utilisant la thérapie Mora, et m'a montré comment prendre soin de ma santé, à travers une perspective différente, sans suivre aveuglément la médecine traditionnelle allopathique. Cela m'a évité de nombreux problèmes de santé que nous traversons tous… J'ai suivi des examens médicaux de routine. J'ai demandé à M. Merhi de me conseiller sur le diagnostic et lui ai demandé de remplacer les 'médicaments chimiques' par des traitements homéopathiques, des compléments alimentaires naturels et les vitamines dont mon corps avait vraiment besoin. Cette méthode m'a aidé à résoudre des problèmes comme l'hypothyroïdie, la prise de poids à la ménopause et de nombreux autres problèmes qui ont été guéris (au lieu qu'ils deviennent des maladies permanentes et que je devienne esclave de pilules médicales ou hormonales quotidiennes, de traitements d'apport). Je suis maintenant aussi en meilleure santé parce que j'évite les aliments hautement transformés et cherche plutôt des alternatives et des suppléments homéopathiques pour compléter mon alimentation. Aujourd'hui, je sais que mon corps peut se guérir s'il reçoit les bons nutriments. Maintenant, je comprends que mon corps est toujours censé être en bonne santé et jamais malade !",
            },

            "six":{
                "name":"Catherine de Saint Martin",
                "title":"She/Her/Elle",
                "country":"FRANCE",
                "text":"Nous avons connu le Dr Mehri en 2006 lors de notre première séance de Mora therapie à Beyrouth, il a detecté des intolerances alimentaires chez mon mari , mon fils et moi-même et a changé notre mode de vie . Nous sommes beaucoup mieux depuis et ne manquons jamais notre check up annuel avec lui.",
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
    testimonials.getElementsByTagName("h2")[0].innerHTML = data[attr].testimonials.subtitle;
    testimonials.getElementsByTagName("h3")[0].innerHTML = data[attr].testimonials.subtitle2;

    testimonials.getElementsByTagName("p")[0].innerHTML = data[attr].testimonials.one.name;
    testimonials.getElementsByTagName("p")[1].innerHTML = data[attr].testimonials.one.title;
    testimonials.getElementsByTagName("p")[2].innerHTML = data[attr].testimonials.one.country;
    testimonials.getElementsByTagName("p")[3].innerHTML = data[attr].testimonials.one.text;

    testimonials.getElementsByTagName("p")[4].innerHTML = data[attr].testimonials.two.name;
    testimonials.getElementsByTagName("p")[5].innerHTML = data[attr].testimonials.two.title;
    testimonials.getElementsByTagName("p")[6].innerHTML = data[attr].testimonials.two.country;
    testimonials.getElementsByTagName("p")[7].innerHTML = data[attr].testimonials.two.text;

    testimonials.getElementsByTagName("p")[8].innerHTML = data[attr].testimonials.three.name;
    testimonials.getElementsByTagName("p")[9].innerHTML = data[attr].testimonials.three.title;
    testimonials.getElementsByTagName("p")[10].innerHTML = data[attr].testimonials.three.country;
    testimonials.getElementsByTagName("p")[11].innerHTML = data[attr].testimonials.three.text;

    testimonials.getElementsByTagName("p")[12].innerHTML = data[attr].testimonials.four.name;
    testimonials.getElementsByTagName("p")[13].innerHTML = data[attr].testimonials.four.title;
    testimonials.getElementsByTagName("p")[14].innerHTML = data[attr].testimonials.four.country;
    testimonials.getElementsByTagName("p")[15].innerHTML = data[attr].testimonials.four.text;

    testimonials.getElementsByTagName("p")[16].innerHTML = data[attr].testimonials.five.name;
    testimonials.getElementsByTagName("p")[17].innerHTML = data[attr].testimonials.five.title;
    testimonials.getElementsByTagName("p")[18].innerHTML = data[attr].testimonials.five.country;
    testimonials.getElementsByTagName("p")[19].innerHTML = data[attr].testimonials.five.text;

    testimonials.getElementsByTagName("p")[20].innerHTML = data[attr].testimonials.six.name;
    testimonials.getElementsByTagName("p")[21].innerHTML = data[attr].testimonials.six.title;
    testimonials.getElementsByTagName("p")[22].innerHTML = data[attr].testimonials.six.country;
    testimonials.getElementsByTagName("p")[23].innerHTML = data[attr].testimonials.six.text;

    document.getElementsByClassName("book")[0].textContent = data[attr].book;

    //Toggle Left-2-Right and Right-2-Left Reading
    /*
    const navbar = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    if(attr == "arabic"){
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row") {
            navbar.style.flexDirection = "row-reverse";
        }
        if(getCookie("rtl") != "true"){
            setCookie("rtl","true",365);
        }


    } else {
        const navstyle = window.getComputedStyle(navbar);
        if(navstyle.getPropertyValue("flex-direction") == "row-reverse") {
            navbar.style.flexDirection = "row";
        }
        if(getCookie("rtl") == "true"){
            setCookie("rtl","false",365);
        }
    }*/
}

//If cookies exist
if(getCookie("language") == "0" || getCookie("language") == "1" || getCookie("language") == "2") {
    let chosencookie = getCookie("language");
    changeLang(Number.parseInt(chosencookie,10));
}
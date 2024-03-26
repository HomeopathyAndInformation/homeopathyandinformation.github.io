const langSel = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0].getElementsByTagName("p");

let title = document.title;
let lang = document.lang;
const navig = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

const consult = document.getElementsByTagName("main")[0];

let meetvisit = "";
let firstvisit = "";
let followvisit = "";
let annualvisit = "";
let emergvisit = "";

if(document.getElementById("meet")){
    meetvisit = document.getElementById("meet");
}
if(document.getElementById("first")){
    firstvisit = document.getElementById("first");
}
if(document.getElementById("follow")){
    followvisit = document.getElementById("follow");
}
if(document.getElementById("annual")){
    annualvisit = document.getElementById("annual");
}
if(document.getElementById("emergency")){
    emergvisit = document.getElementById("emergency");
}

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
    links[i].addEventListener("click", ()=> {
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


        consult.getElementsByTagName("h1")[0].innerText = data[attr].title;
        consult.getElementsByTagName("h2")[0].innerText = data[attr].selecopt;
        consult.getElementsByTagName("a")[0].innerText = data[attr].meetgreetvis;
        consult.getElementsByTagName("a")[1].innerText = data[attr].firstvis;
        consult.getElementsByTagName("a")[2].innerText = data[attr].followupvis;
        consult.getElementsByTagName("a")[3].innerText = data[attr].annualvis;
        consult.getElementsByTagName("a")[4].innerText = data[attr].emergencyvis;
        consult.getElementsByTagName("a")[5].innerText = data[attr].changedelvis;

        if(meetvisit){
            meetvisit.getElementsByTagName("h2")[0].innerText = data[attr].meetgreet.title;
    
            meetvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].meetgreet.step1;
            meetvisit.getElementsByTagName("p")[0].innerHTML = data[attr].meetgreet.step1text;
            meetvisit.getElementsByTagName("h2")[2].innerHTML = data[attr].meetgreet.step2;
            meetvisit.getElementsByTagName("p")[1].innerHTML = data[attr].meetgreet.step2text;
            meetvisit.getElementsByTagName("h2")[3].innerHTML = data[attr].meetgreet.step3;
            meetvisit.getElementsByTagName("p")[2].innerHTML = data[attr].meetgreet.step3text;
            meetvisit.getElementsByTagName("a")[0].innerText = data[attr].meetgreet.button;
        }
       
        if(emergvisit){
            emergvisit.getElementsByTagName("h2")[0].innerText = data[attr].emergency.title;
    
            emergvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].emergency.step1;
            emergvisit.getElementsByTagName("p")[0].innerHTML = data[attr].emergency.step1text;
            emergvisit.getElementsByTagName("a")[0].innerText = data[attr].emergency.button;
        }
    
        if(annualvisit){
            annualvisit.getElementsByTagName("h2")[0].innerText = data[attr].annual.title;
    
            annualvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].annual.step1;
            annualvisit.getElementsByTagName("p")[0].innerHTML = data[attr].annual.step1text;
            annualvisit.getElementsByTagName("h2")[2].innerHTML = data[attr].annual.step2;
            annualvisit.getElementsByTagName("p")[1].innerHTML = data[attr].annual.step2text;
            annualvisit.getElementsByTagName("h2")[3].innerHTML = data[attr].annual.step3;
            annualvisit.getElementsByTagName("p")[2].innerHTML = data[attr].annual.step3text;
            annualvisit.getElementsByTagName("h2")[4].innerHTML = data[attr].annual.step4;
            annualvisit.getElementsByTagName("p")[3].innerHTML = data[attr].annual.step4text;

            annualvisit.getElementsByTagName("h2")[5].innerText = data[attr].form.formtitle;
            annualvisit.getElementsByTagName("p")[4].innerText = data[attr].form.formimportant;
            annualvisit.getElementsByTagName("p")[5].innerText = data[attr].form.formthanks;

            annualvisit.getElementsByTagName("p")[6].innerText = data[attr].form.cfname;
            annualvisit.getElementsByTagName("p")[7].innerText = data[attr].form.cmname;
            annualvisit.getElementsByTagName("p")[8].innerText = data[attr].form.clname;

            annualvisit.getElementsByTagName("p")[9].innerText = data[attr].form.ctodaydate;

            annualvisit.getElementsByTagName("p")[10].innerText = data[attr].form.ccgenders;
            annualvisit.getElementsByTagName("p")[11].innerText = data[attr].form.ccmalegender;
            annualvisit.getElementsByTagName("p")[12].innerText = data[attr].form.cfemalegender;

            annualvisit.getElementsByTagName("p")[13].innerText = data[attr].form.caddress;
            annualvisit.getElementsByTagName("p")[14].innerText = data[attr].form.cstate;
            annualvisit.getElementsByTagName("p")[15].innerText = data[attr].form.czip;
            annualvisit.getElementsByTagName("p")[16].innerText = data[attr].form.cemail;

            annualvisit.getElementsByTagName("p")[17].innerText = data[attr].form.cdob;
            annualvisit.getElementsByTagName("p")[18].innerText = data[attr].form.cbirthnatural;
            annualvisit.getElementsByTagName("p")[19].innerText = data[attr].form.cbirthsection;
            annualvisit.getElementsByTagName("p")[20].innerText = data[attr].form.cage;

            annualvisit.getElementsByTagName("p")[21].innerText = data[attr].form.cunder18;
            annualvisit.getElementsByTagName("p")[22].innerText = data[attr].form.chomephone;
            annualvisit.getElementsByTagName("p")[23].innerText = data[attr].form.cworkphone;
            annualvisit.getElementsByTagName("p")[24].innerText = data[attr].form.ccellphone;

            annualvisit.getElementsByTagName("p")[25].innerText = data[attr].form.cmarital;
            annualvisit.getElementsByTagName("p")[26].innerText = data[attr].form.csingle;
            annualvisit.getElementsByTagName("p")[27].innerText = data[attr].form.cmarried;
            annualvisit.getElementsByTagName("p")[28].innerText = data[attr].form.cdivorced;
            annualvisit.getElementsByTagName("p")[29].innerText = data[attr].form.cwidow;
            annualvisit.getElementsByTagName("p")[30].innerText = data[attr].form.csignificant;

            annualvisit.getElementsByTagName("p")[31].innerText = data[attr].form.ccaregiver;
            annualvisit.getElementsByTagName("p")[32].innerText = data[attr].form.ccaregiveryes;
            annualvisit.getElementsByTagName("p")[33].innerText = data[attr].form.ccaregiverno;
            annualvisit.getElementsByTagName("p")[34].innerText = data[attr].form.cchildrencare;
            annualvisit.getElementsByTagName("p")[35].innerText = data[attr].form.cadultcare;
            annualvisit.getElementsByTagName("p")[36].innerText = data[attr].form.coccuptation;
            annualvisit.getElementsByTagName("p")[37].innerText = data[attr].form.coccupationlength;

            annualvisit.getElementsByTagName("p")[38].innerText = data[attr].form.cpcpdisclaimer;
            annualvisit.getElementsByTagName("p")[39].innerText = data[attr].form.cpcpprovide;
            annualvisit.getElementsByTagName("p")[40].innerText = data[attr].form.cpcp;
            annualvisit.getElementsByTagName("p")[41].innerText = data[attr].form.cpcpname;
            annualvisit.getElementsByTagName("p")[42].innerText = data[attr].form.cpcpcondition;
            annualvisit.getElementsByTagName("p")[43].innerText = data[attr].form.cpcpdot;
            annualvisit.getElementsByTagName("p")[44].innerText = data[attr].form.cpcpphone;
            annualvisit.getElementsByTagName("p")[45].innerText = data[attr].form.chealthreason;
            annualvisit.getElementsByTagName("p")[46].innerHTML = data[attr].form.chealthconcern;
            annualvisit.getElementsByTagName("p")[47].innerHTML = data[attr].form.chealthconcern2;
            annualvisit.getElementsByClassName("nb")[0].innerText = data[attr].form.chealthconcerns2s;

            annualvisit.getElementsByTagName("p")[48].innerText = data[attr].form.cmedictitle;
            annualvisit.getElementsByTagName("p")[49].innerText = data[attr].form.cmeddisclaimer;
            annualvisit.getElementsByTagName("p")[50].innerText = data[attr].form.cmedictitle3;
            annualvisit.getElementsByTagName("p")[51].innerText = data[attr].form.cmedreason;
            annualvisit.getElementsByTagName("p")[52].innerText = data[attr].form.cmeddatebegan;
            annualvisit.getElementsByTagName("p")[53].innerText = data[attr].form.cmeddose;
            annualvisit.getElementsByTagName("p")[54].innerText = data[attr].form.chelps;
            annualvisit.getElementsByTagName("p")[55].innerText = data[attr].form.csuppltitle;
            annualvisit.getElementsByTagName("p")[56].innerText = data[attr].form.csupp;
            annualvisit.getElementsByTagName("p")[57].innerText = data[attr].form.csuppsmall;
            annualvisit.getElementsByTagName("p")[58].innerText = data[attr].form.csuppreason;
            annualvisit.getElementsByTagName("p")[59].innerText = data[attr].form.csuppdatebegan;
            annualvisit.getElementsByTagName("p")[60].innerText = data[attr].form.csuppdose;
            annualvisit.getElementsByTagName("p")[61].innerText = data[attr].form.csupphelps;
            annualvisit.getElementsByTagName("p")[62].innerText = data[attr].form.callergy;

            annualvisit.getElementsByTagName("p")[63].innerText = data[attr].form.cfamhisttitle;
            annualvisit.getElementsByTagName("p")[64].innerText = data[attr].form.cfamhist;
            annualvisit.getElementsByTagName("p")[65].innerText = data[attr].form.cmember;
            annualvisit.getElementsByTagName("input")[86].placeholder = data[attr].form.cmember1;
            annualvisit.getElementsByTagName("input")[87].placeholder = data[attr].form.cmember2;
            annualvisit.getElementsByTagName("input")[88].placeholder = data[attr].form.cmember3;
            annualvisit.getElementsByTagName("input")[89].placeholder = data[attr].form.cmember4;
            annualvisit.getElementsByTagName("input")[90].placeholder = data[attr].form.cmember5;
            annualvisit.getElementsByTagName("input")[91].placeholder = data[attr].form.cmember6;
            annualvisit.getElementsByTagName("input")[92].placeholder = data[attr].form.cmember7;
            annualvisit.getElementsByTagName("input")[93].placeholder = data[attr].form.cmember8;
            annualvisit.getElementsByTagName("p")[66].innerText = data[attr].form.clivingage;
            annualvisit.getElementsByTagName("p")[67].innerText = data[attr].form.cdiceaseage;
            annualvisit.getElementsByTagName("p")[68].innerText = data[attr].form.cmajorillness;

            annualvisit.getElementsByTagName("p")[69].innerText = data[attr].form.ccheck;
            annualvisit.getElementsByTagName("p")[70].innerText = data[attr].form.ccheck1;
            annualvisit.getElementsByTagName("p")[71].innerText = data[attr].form.ccheck2;
            annualvisit.getElementsByTagName("p")[72].innerText = data[attr].form.ccheck3;
            annualvisit.getElementsByTagName("p")[73].innerText = data[attr].form.ccheck4;
            annualvisit.getElementsByTagName("p")[74].innerText = data[attr].form.ccheck5;
            annualvisit.getElementsByTagName("p")[75].innerText = data[attr].form.ccheck6;
            annualvisit.getElementsByTagName("p")[76].innerText = data[attr].form.ccheck7;
            annualvisit.getElementsByTagName("p")[77].innerText = data[attr].form.ccheck8;
            annualvisit.getElementsByTagName("p")[78].innerText = data[attr].form.ccheck9;
            annualvisit.getElementsByTagName("p")[79].innerText = data[attr].form.ccheck10;
            annualvisit.getElementsByTagName("p")[80].innerText = data[attr].form.ccheck11;
            annualvisit.getElementsByTagName("p")[81].innerText = data[attr].form.ccheck12;
            annualvisit.getElementsByTagName("p")[82].innerText = data[attr].form.ccheck13;
            annualvisit.getElementsByTagName("p")[83].innerText = data[attr].form.ccheck14;
            annualvisit.getElementsByTagName("p")[84].innerText = data[attr].form.ccheck15;
            annualvisit.getElementsByTagName("p")[85].innerText = data[attr].form.ccheck16;
            annualvisit.getElementsByTagName("p")[86].innerText = data[attr].form.ccheck17;
            annualvisit.getElementsByTagName("p")[87].innerText = data[attr].form.ccheck18;
            annualvisit.getElementsByTagName("p")[88].innerText = data[attr].form.ccheck19;
            
            annualvisit.getElementsByTagName("p")[89].innerText = data[attr].form.cwomen;
            annualvisit.getElementsByTagName("p")[90].innerText = data[attr].form.cwomen1;
            annualvisit.getElementsByTagName("p")[91].innerText = data[attr].form.cwomen2;
            annualvisit.getElementsByTagName("p")[92].innerText = data[attr].form.cwomen3;
            annualvisit.getElementsByTagName("p")[93].innerText = data[attr].form.cwomen4;
            annualvisit.getElementsByTagName("p")[94].innerText = data[attr].form.cwomen5;
            annualvisit.getElementsByTagName("p")[95].innerText = data[attr].form.cwomen6;
            annualvisit.getElementsByTagName("p")[96].innerText = data[attr].form.cwomen7;
            annualvisit.getElementsByTagName("p")[97].innerText = data[attr].form.cwomen8;
            annualvisit.getElementsByTagName("p")[98].innerText = data[attr].form.cwomen9;
            annualvisit.getElementsByTagName("p")[99].innerText = data[attr].form.cwomen10;
            annualvisit.getElementsByTagName("p")[100].innerText = data[attr].form.cwomen11;
            annualvisit.getElementsByTagName("p")[101].innerText = data[attr].form.cwomen12;
            annualvisit.getElementsByTagName("p")[102].innerText = data[attr].form.cwomen13;
            annualvisit.getElementsByTagName("p")[103].innerText = data[attr].form.cwomen14;
            annualvisit.getElementsByTagName("p")[104].innerText = data[attr].form.cwomen15;
            annualvisit.getElementsByTagName("p")[105].innerText = data[attr].form.cdateMenstrual;
            annualvisit.getElementsByTagName("p")[106].innerText = data[attr].form.cdatePapSmear;
            annualvisit.getElementsByTagName("p")[107].innerText = data[attr].form.cabnormalfind;

            annualvisit.getElementsByTagName("p")[108].innerText = data[attr].form.ccmen;
            annualvisit.getElementsByTagName("p")[109].innerText = data[attr].form.ccmen1;
            annualvisit.getElementsByTagName("p")[110].innerText = data[attr].form.ccmen2;
            annualvisit.getElementsByTagName("p")[111].innerText = data[attr].form.ccmen3;
            annualvisit.getElementsByTagName("p")[112].innerText = data[attr].form.ccmen4;
            annualvisit.getElementsByTagName("p")[113].innerText = data[attr].form.ccmen5;
            annualvisit.getElementsByTagName("p")[114].innerText = data[attr].form.ccmen6;
            annualvisit.getElementsByTagName("p")[115].innerText = data[attr].form.ccmen7;

            annualvisit.getElementsByTagName("p")[116].innerHTML = data[attr].form.cexp;
            annualvisit.getElementsByTagName("p")[117].innerText = data[attr].form.cgen;
            annualvisit.getElementsByTagName("p")[118].innerText = data[attr].form.cgen1;
            annualvisit.getElementsByTagName("p")[119].innerText = data[attr].form.cgen2;
            annualvisit.getElementsByTagName("p")[120].innerText = data[attr].form.cgen3;
            annualvisit.getElementsByTagName("p")[121].innerText = data[attr].form.cgen4;
            annualvisit.getElementsByTagName("p")[122].innerText = data[attr].form.cgen5;
            annualvisit.getElementsByTagName("p")[123].innerText = data[attr].form.cgen6;
            annualvisit.getElementsByTagName("p")[124].innerText = data[attr].form.cgen7;
            annualvisit.getElementsByTagName("p")[125].innerText = data[attr].form.cgen8;
            annualvisit.getElementsByTagName("p")[126].innerText = data[attr].form.cgen9;
            annualvisit.getElementsByTagName("p")[127].innerText = data[attr].form.cgen10;
            annualvisit.getElementsByTagName("p")[128].innerText = data[attr].form.cgen11;
            annualvisit.getElementsByTagName("p")[129].innerText = data[attr].form.cgen12;

            annualvisit.getElementsByTagName("p")[130].innerText = data[attr].form.chidden;

            annualvisit.getElementsByTagName("p")[131].innerText = data[attr].form.ccardio;
            annualvisit.getElementsByTagName("p")[132].innerText = data[attr].form.ccardio1;
            annualvisit.getElementsByTagName("p")[133].innerText = data[attr].form.ccardio2;
            annualvisit.getElementsByTagName("p")[134].innerText = data[attr].form.ccardio3;
            annualvisit.getElementsByTagName("p")[135].innerText = data[attr].form.ccardio4;
            annualvisit.getElementsByTagName("p")[136].innerText = data[attr].form.ccardio5;
            annualvisit.getElementsByTagName("p")[137].innerText = data[attr].form.ccardio6;
            annualvisit.getElementsByTagName("p")[138].innerText = data[attr].form.ccardio7;
            annualvisit.getElementsByTagName("p")[139].innerText = data[attr].form.ccardio8;
            annualvisit.getElementsByTagName("p")[140].innerText = data[attr].form.ccardio9;
            annualvisit.getElementsByTagName("p")[141].innerText = data[attr].form.ccardio10;
            annualvisit.getElementsByTagName("p")[142].innerText = data[attr].form.ccardio11;
            annualvisit.getElementsByTagName("p")[143].innerText = data[attr].form.ccardio12;

            annualvisit.getElementsByTagName("p")[144].innerText = data[attr].form.chidden;

            annualvisit.getElementsByTagName("p")[145].innerText = data[attr].form.cresp;
            annualvisit.getElementsByTagName("p")[146].innerText = data[attr].form.cresp1;
            annualvisit.getElementsByTagName("p")[147].innerText = data[attr].form.cresp2;
            annualvisit.getElementsByTagName("p")[148].innerText = data[attr].form.cresp3;
            annualvisit.getElementsByTagName("p")[149].innerText = data[attr].form.cresp4;
            annualvisit.getElementsByTagName("p")[150].innerText = data[attr].form.cresp5;
            annualvisit.getElementsByTagName("p")[151].innerText = data[attr].form.cresp6;
            annualvisit.getElementsByTagName("p")[152].innerText = data[attr].form.cresp7;
            annualvisit.getElementsByTagName("p")[153].innerText = data[attr].form.cresp8;

            annualvisit.getElementsByTagName("p")[154].innerText = data[attr].form.chidden;

            annualvisit.getElementsByTagName("p")[155].innerText = data[attr].form.cgastro;
            annualvisit.getElementsByTagName("p")[156].innerText = data[attr].form.cgastro1;
            annualvisit.getElementsByTagName("p")[157].innerText = data[attr].form.cgastro2;
            annualvisit.getElementsByTagName("p")[158].innerText = data[attr].form.cgastro3;
            annualvisit.getElementsByTagName("p")[159].innerText = data[attr].form.cgastro4;
            annualvisit.getElementsByTagName("p")[160].innerText = data[attr].form.cgastro5;
            annualvisit.getElementsByTagName("p")[161].innerText = data[attr].form.cgastro6;
            annualvisit.getElementsByTagName("p")[162].innerText = data[attr].form.cgastro7;
            annualvisit.getElementsByTagName("p")[163].innerText = data[attr].form.cgastro8;
            annualvisit.getElementsByTagName("p")[164].innerText = data[attr].form.cgastro9;

            annualvisit.getElementsByTagName("p")[165].innerText = data[attr].form.chidden;

            annualvisit.getElementsByTagName("p")[166].innerText = data[attr].form.cgenito;
            annualvisit.getElementsByTagName("p")[167].innerText = data[attr].form.cgenito1;
            annualvisit.getElementsByTagName("p")[168].innerText = data[attr].form.cgenito2;
            annualvisit.getElementsByTagName("p")[169].innerText = data[attr].form.cgenito3;
            annualvisit.getElementsByTagName("p")[170].innerText = data[attr].form.cgenito4;
            annualvisit.getElementsByTagName("p")[171].innerText = data[attr].form.cgenito5;
            annualvisit.getElementsByTagName("p")[172].innerText = data[attr].form.cgenito6;
            annualvisit.getElementsByTagName("p")[173].innerText = data[attr].form.cgenito61;
            annualvisit.getElementsByTagName("p")[174].innerText = data[attr].form.cgenito7;
            annualvisit.getElementsByTagName("p")[175].innerText = data[attr].form.cgenito8;

            annualvisit.getElementsByTagName("p")[176].innerText = data[attr].form.chidden;

            annualvisit.getElementsByTagName("p")[177].innerText = data[attr].form.cneuro;
            annualvisit.getElementsByTagName("p")[178].innerText = data[attr].form.cneuro1;
            annualvisit.getElementsByTagName("p")[179].innerText = data[attr].form.cneuro2;
            annualvisit.getElementsByTagName("p")[180].innerText = data[attr].form.cneuro3;
            annualvisit.getElementsByTagName("p")[181].innerText = data[attr].form.cneuro4;
            annualvisit.getElementsByTagName("p")[182].innerText = data[attr].form.cneuro5;
            annualvisit.getElementsByTagName("p")[183].innerText = data[attr].form.cneuro6;
            annualvisit.getElementsByTagName("p")[184].innerText = data[attr].form.cneuro7;
            annualvisit.getElementsByTagName("p")[185].innerText = data[attr].form.cneuro8;
            annualvisit.getElementsByTagName("p")[186].innerText = data[attr].form.cneuro9;
            annualvisit.getElementsByTagName("p")[187].innerText = data[attr].form.cneuro10;
            annualvisit.getElementsByTagName("p")[188].innerText = data[attr].form.cneuro11;
            annualvisit.getElementsByTagName("p")[189].innerText = data[attr].form.cneuro12;
            annualvisit.getElementsByTagName("p")[190].innerText = data[attr].form.cneuro13;

            annualvisit.getElementsByTagName("p")[191].innerText = data[attr].form.chidden;

            annualvisit.getElementsByTagName("p")[192].innerText = data[attr].form.cmuskulo;
            annualvisit.getElementsByTagName("p")[193].innerText = data[attr].form.cmuskulo1;
            annualvisit.getElementsByTagName("p")[194].innerText = data[attr].form.cmuskulo2;
            annualvisit.getElementsByTagName("p")[195].innerText = data[attr].form.cmuskulo3;
            annualvisit.getElementsByTagName("p")[196].innerText = data[attr].form.cmuskulo4;
            annualvisit.getElementsByTagName("p")[197].innerText = data[attr].form.cmuskulo5;
            annualvisit.getElementsByTagName("p")[198].innerText = data[attr].form.cmuskulo6;
            annualvisit.getElementsByTagName("p")[199].innerText = data[attr].form.cmuskulo7;
            annualvisit.getElementsByTagName("p")[200].innerText = data[attr].form.cmuskulo8;
            annualvisit.getElementsByTagName("p")[201].innerText = data[attr].form.cmuskulo9;

            annualvisit.getElementsByTagName("p")[202].innerText = data[attr].form.chabit;
            annualvisit.getElementsByTagName("p")[203].innerText = data[attr].form.chabit1;
            annualvisit.getElementsByTagName("p")[204].innerText = data[attr].form.chabit2;
            annualvisit.getElementsByTagName("p")[205].innerText = data[attr].form.chabit3;
            annualvisit.getElementsByTagName("p")[206].innerText = data[attr].form.chabit4;
            annualvisit.getElementsByTagName("p")[207].innerText = data[attr].form.chabit5;
            annualvisit.getElementsByTagName("p")[208].innerText = data[attr].form.chabit6;
            annualvisit.getElementsByTagName("p")[209].innerText = data[attr].form.chabit7;
            annualvisit.getElementsByTagName("p")[210].innerText = data[attr].form.chabit8;
            annualvisit.getElementsByTagName("p")[211].innerText = data[attr].form.chabit9;
            annualvisit.getElementsByTagName("p")[212].innerText = data[attr].form.chabit10;

            annualvisit.getElementsByTagName("p")[213].innerText = data[attr].form.csmoke;
            annualvisit.getElementsByTagName("p")[214].innerText = data[attr].form.cifsmoke;
            annualvisit.getElementsByTagName("p")[215].innerText = data[attr].form.chowmuchsmoke;
            annualvisit.getElementsByTagName("p")[216].innerText = data[attr].form.csincesmoke;
            annualvisit.getElementsByTagName("p")[217].innerText = data[attr].form.csmokeattempt;
            annualvisit.getElementsByTagName("p")[218].innerText = data[attr].form.calcohol;
            annualvisit.getElementsByTagName("p")[219].innerText = data[attr].form.cifalcohol;
            annualvisit.getElementsByTagName("p")[220].innerText = data[attr].form.chowmuchalcohol;
            annualvisit.getElementsByTagName("p")[221].innerText = data[attr].form.csincealcohol;
            annualvisit.getElementsByTagName("p")[222].innerText = data[attr].form.cexercise;
            annualvisit.getElementsByTagName("p")[223].innerText = data[attr].form.cexerciseregular;
            annualvisit.getElementsByTagName("p")[224].innerText = data[attr].form.cifexercise;

            annualvisit.getElementsByTagName("p")[225].innerText = data[attr].form.cnutri;
            annualvisit.getElementsByTagName("p")[226].innerText = data[attr].form.cnutriconcern;
            annualvisit.getElementsByTagName("p")[227].innerText = data[attr].form.cnutriskip;
            annualvisit.getElementsByTagName("p")[228].innerText = data[attr].form.cnutrifruit;
            annualvisit.getElementsByTagName("p")[229].innerText = data[attr].form.cnutriveg;
            annualvisit.getElementsByTagName("p")[230].innerText = data[attr].form.cnutridiet;
            annualvisit.getElementsByTagName("p")[231].innerText = data[attr].form.cnutrigluten;
            annualvisit.getElementsByTagName("p")[232].innerText = data[attr].form.cnutricoffee;
            annualvisit.getElementsByTagName("p")[233].innerText = data[attr].form.cnutricoffeemuch;
            annualvisit.getElementsByTagName("p")[234].innerText = data[attr].form.csoda;
            annualvisit.getElementsByTagName("p")[235].innerText = data[attr].form.csodareg;
            annualvisit.getElementsByTagName("p")[236].innerText = data[attr].form.csodadiet;
            annualvisit.getElementsByTagName("p")[237].innerText = data[attr].form.csodanone;
            annualvisit.getElementsByTagName("p")[238].innerText = data[attr].form.cifsoda;

            annualvisit.getElementsByTagName("p")[239].innerText = data[attr].form.ceatinghabit;
            annualvisit.getElementsByTagName("p")[240].innerText = data[attr].form.ceatinghabityes;
            annualvisit.getElementsByTagName("p")[241].innerText = data[attr].form.ceatinghabitno;
            annualvisit.getElementsByTagName("p")[242].innerText = data[attr].form.cappetite;
            annualvisit.getElementsByTagName("p")[243].innerText = data[attr].form.cappetiteyes;
            annualvisit.getElementsByTagName("p")[244].innerText = data[attr].form.cappetiteno;
            annualvisit.getElementsByTagName("p")[245].innerText = data[attr].form.ceatmore;
            annualvisit.getElementsByTagName("p")[246].innerText = data[attr].form.ceatmoreyes;
            annualvisit.getElementsByTagName("p")[247].innerText = data[attr].form.ceatmoreno;
            annualvisit.getElementsByTagName("p")[248].innerText = data[attr].form.cenergydrop;
            annualvisit.getElementsByTagName("p")[249].innerText = data[attr].form.cenergydropyes;
            annualvisit.getElementsByTagName("p")[250].innerText = data[attr].form.cenergydropno;
            annualvisit.getElementsByTagName("p")[251].innerText = data[attr].form.cenergydropif;
            annualvisit.getElementsByTagName("p")[252].innerText = data[attr].form.cweightyearago;
            annualvisit.getElementsByTagName("p")[253].innerText = data[attr].form.cweightmost;
            annualvisit.getElementsByTagName("p")[254].innerText = data[attr].form.cweightwhen;
            annualvisit.getElementsByTagName("p")[255].innerText = data[attr].form.cbowel;

            annualvisit.getElementsByTagName("p")[256].innerText = data[attr].form.csleeprelax;
            annualvisit.getElementsByTagName("p")[257].innerText = data[attr].form.csleephours;
            annualvisit.getElementsByTagName("p")[258].innerText = data[attr].form.csleeprefresh;

            annualvisit.getElementsByTagName("p")[259].innerText = data[attr].form.cwritten;

            annualvisit.getElementsByTagName("p")[260].innerText = data[attr].form.ciagree;
            annualvisit.getElementsByTagName("h4")[0].innerText = data[attr].form.csignature;
            annualvisit.getElementsByTagName("h4")[1].innerText = data[attr].form.cclear;
            annualvisit.getElementsByTagName("h4")[2].innerText = data[attr].form.csavesign;
            annualvisit.getElementsByTagName("p")[261].innerText = data[attr].form.cprintname;

            annualvisit.getElementsByTagName("a")[2].innerText = data[attr].form.next;

            if(annualvisit.getElementsByTagName("legend")[0]){
                annualvisit.getElementsByTagName("legend")[0].innerText = data[attr].form.cconcenttitle;
                annualvisit.getElementsByTagName("h3")[0].innerHTML = data[attr].form.cconsentdisclaimer;
                annualvisit.getElementsByClassName("nb")[2].innerText = data[attr].form.cconsenttext1;
                annualvisit.getElementsByTagName("p")[262].innerText = data[attr].form.cconsenttext2;

                annualvisit.getElementsByTagName("p")[263].innerText = data[attr].form.ciagree;
                annualvisit.getElementsByTagName("p")[264].innerText = data[attr].form.csignature;

                annualvisit.getElementsByTagName("button")[0].innerText = data[attr].form.submit;
            }
        }
        
        if(followvisit){
            followvisit.getElementsByTagName("h2")[0].innerText = data[attr].followup.title;
    
            followvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].followup.step1;
            followvisit.getElementsByTagName("p")[0].innerHTML = data[attr].followup.step1text;
            followvisit.getElementsByTagName("h2")[2].innerHTML = data[attr].followup.step2;
            followvisit.getElementsByTagName("p")[1].innerHTML = data[attr].followup.step2text;
            followvisit.getElementsByTagName("h2")[3].innerHTML = data[attr].followup.step3;
            followvisit.getElementsByTagName("p")[2].innerHTML = data[attr].followup.step3text;
            followvisit.getElementsByTagName("a")[0].innerText = data[attr].followup.button;
        }

        if(firstvisit){

            firstvisit.getElementsByTagName("h2")[0].innerText = data[attr].firstvisit.title;

            firstvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].firstvisit.step1;
            firstvisit.getElementsByTagName("p")[0].innerHTML = data[attr].firstvisit.step1text;
            firstvisit.getElementsByTagName("h2")[2].innerHTML = data[attr].firstvisit.step2;
            firstvisit.getElementsByTagName("p")[1].innerHTML = data[attr].firstvisit.step2text;
            firstvisit.getElementsByTagName("h2")[3].innerHTML = data[attr].firstvisit.step3;
            firstvisit.getElementsByTagName("p")[2].innerHTML = data[attr].firstvisit.step3text;
            firstvisit.getElementsByTagName("h2")[4].innerHTML = data[attr].firstvisit.step4;
            firstvisit.getElementsByTagName("p")[3].innerHTML = data[attr].firstvisit.step4text;

            firstvisit.getElementsByTagName("h2")[5].innerText = data[attr].form.formtitle;
            firstvisit.getElementsByTagName("p")[4].innerText = data[attr].form.formimportant;
            firstvisit.getElementsByTagName("p")[5].innerText = data[attr].form.formthanks;

            firstvisit.getElementsByTagName("p")[6].innerText = data[attr].form.cfname;
            firstvisit.getElementsByTagName("p")[7].innerText = data[attr].form.cmname;
            firstvisit.getElementsByTagName("p")[8].innerText = data[attr].form.clname;

            firstvisit.getElementsByTagName("p")[9].innerText = data[attr].form.ctodaydate;

            firstvisit.getElementsByTagName("p")[10].innerText = data[attr].form.ccgenders;
            firstvisit.getElementsByTagName("p")[11].innerText = data[attr].form.ccmalegender;
            firstvisit.getElementsByTagName("p")[12].innerText = data[attr].form.cfemalegender;

            firstvisit.getElementsByTagName("p")[13].innerText = data[attr].form.caddress;
            firstvisit.getElementsByTagName("p")[14].innerText = data[attr].form.cstate;
            firstvisit.getElementsByTagName("p")[15].innerText = data[attr].form.czip;
            firstvisit.getElementsByTagName("p")[16].innerText = data[attr].form.cemail;

            firstvisit.getElementsByTagName("p")[17].innerText = data[attr].form.cdob;
            firstvisit.getElementsByTagName("p")[18].innerText = data[attr].form.cbirthnatural;
            firstvisit.getElementsByTagName("p")[19].innerText = data[attr].form.cbirthsection;
            firstvisit.getElementsByTagName("p")[20].innerText = data[attr].form.cage;

            firstvisit.getElementsByTagName("p")[21].innerText = data[attr].form.cunder18;
            firstvisit.getElementsByTagName("p")[22].innerText = data[attr].form.chomephone;
            firstvisit.getElementsByTagName("p")[23].innerText = data[attr].form.cworkphone;
            firstvisit.getElementsByTagName("p")[24].innerText = data[attr].form.ccellphone;

            firstvisit.getElementsByTagName("p")[25].innerText = data[attr].form.cmarital;
            firstvisit.getElementsByTagName("p")[26].innerText = data[attr].form.csingle;
            firstvisit.getElementsByTagName("p")[27].innerText = data[attr].form.cmarried;
            firstvisit.getElementsByTagName("p")[28].innerText = data[attr].form.cdivorced;
            firstvisit.getElementsByTagName("p")[29].innerText = data[attr].form.cwidow;
            firstvisit.getElementsByTagName("p")[30].innerText = data[attr].form.csignificant;

            firstvisit.getElementsByTagName("p")[31].innerText = data[attr].form.ccaregiver;
            firstvisit.getElementsByTagName("p")[32].innerText = data[attr].form.ccaregiveryes;
            firstvisit.getElementsByTagName("p")[33].innerText = data[attr].form.ccaregiverno;
            firstvisit.getElementsByTagName("p")[34].innerText = data[attr].form.cchildrencare;
            firstvisit.getElementsByTagName("p")[35].innerText = data[attr].form.cadultcare;
            firstvisit.getElementsByTagName("p")[36].innerText = data[attr].form.coccuptation;
            firstvisit.getElementsByTagName("p")[37].innerText = data[attr].form.coccupationlength;

            firstvisit.getElementsByTagName("p")[38].innerText = data[attr].form.cpcpdisclaimer;
            firstvisit.getElementsByTagName("p")[39].innerText = data[attr].form.cpcpprovide;
            firstvisit.getElementsByTagName("p")[40].innerText = data[attr].form.cpcp;
            firstvisit.getElementsByTagName("p")[41].innerText = data[attr].form.cpcpname;
            firstvisit.getElementsByTagName("p")[42].innerText = data[attr].form.cpcpcondition;
            firstvisit.getElementsByTagName("p")[43].innerText = data[attr].form.cpcpdot;
            firstvisit.getElementsByTagName("p")[44].innerText = data[attr].form.cpcpphone;
            firstvisit.getElementsByTagName("p")[45].innerText = data[attr].form.chealthreason;
            firstvisit.getElementsByTagName("p")[46].innerHTML = data[attr].form.chealthconcern;
            firstvisit.getElementsByTagName("p")[47].innerHTML = data[attr].form.chealthconcern2;
            firstvisit.getElementsByClassName("nb")[0].innerText = data[attr].form.chealthconcerns2s;

            firstvisit.getElementsByTagName("p")[48].innerText = data[attr].form.cmedictitle;
            firstvisit.getElementsByTagName("p")[49].innerText = data[attr].form.cmeddisclaimer;
            firstvisit.getElementsByTagName("p")[50].innerText = data[attr].form.cmedictitle3;
            firstvisit.getElementsByTagName("p")[51].innerText = data[attr].form.cmedreason;
            firstvisit.getElementsByTagName("p")[52].innerText = data[attr].form.cmeddatebegan;
            firstvisit.getElementsByTagName("p")[53].innerText = data[attr].form.cmeddose;
            firstvisit.getElementsByTagName("p")[54].innerText = data[attr].form.chelps;
            firstvisit.getElementsByTagName("p")[55].innerText = data[attr].form.csuppltitle;
            firstvisit.getElementsByTagName("p")[56].innerText = data[attr].form.csupp;
            firstvisit.getElementsByTagName("p")[57].innerText = data[attr].form.csuppsmall;
            firstvisit.getElementsByTagName("p")[58].innerText = data[attr].form.csuppreason;
            firstvisit.getElementsByTagName("p")[59].innerText = data[attr].form.csuppdatebegan;
            firstvisit.getElementsByTagName("p")[60].innerText = data[attr].form.csuppdose;
            firstvisit.getElementsByTagName("p")[61].innerText = data[attr].form.csupphelps;
            firstvisit.getElementsByTagName("p")[62].innerText = data[attr].form.callergy;

            firstvisit.getElementsByTagName("p")[63].innerText = data[attr].form.cfamhisttitle;
            firstvisit.getElementsByTagName("p")[64].innerText = data[attr].form.cfamhist;
            firstvisit.getElementsByTagName("p")[65].innerText = data[attr].form.cmember;
            firstvisit.getElementsByTagName("input")[86].placeholder = data[attr].form.cmember1;
            firstvisit.getElementsByTagName("input")[87].placeholder = data[attr].form.cmember2;
            firstvisit.getElementsByTagName("input")[88].placeholder = data[attr].form.cmember3;
            firstvisit.getElementsByTagName("input")[89].placeholder = data[attr].form.cmember4;
            firstvisit.getElementsByTagName("input")[90].placeholder = data[attr].form.cmember5;
            firstvisit.getElementsByTagName("input")[91].placeholder = data[attr].form.cmember6;
            firstvisit.getElementsByTagName("input")[92].placeholder = data[attr].form.cmember7;
            firstvisit.getElementsByTagName("input")[93].placeholder = data[attr].form.cmember8;
            firstvisit.getElementsByTagName("p")[66].innerText = data[attr].form.clivingage;
            firstvisit.getElementsByTagName("p")[67].innerText = data[attr].form.cdiceaseage;
            firstvisit.getElementsByTagName("p")[68].innerText = data[attr].form.cmajorillness;

            firstvisit.getElementsByTagName("p")[69].innerText = data[attr].form.ccheck;
            firstvisit.getElementsByTagName("p")[70].innerText = data[attr].form.ccheck1;
            firstvisit.getElementsByTagName("p")[71].innerText = data[attr].form.ccheck2;
            firstvisit.getElementsByTagName("p")[72].innerText = data[attr].form.ccheck3;
            firstvisit.getElementsByTagName("p")[73].innerText = data[attr].form.ccheck4;
            firstvisit.getElementsByTagName("p")[74].innerText = data[attr].form.ccheck5;
            firstvisit.getElementsByTagName("p")[75].innerText = data[attr].form.ccheck6;
            firstvisit.getElementsByTagName("p")[76].innerText = data[attr].form.ccheck7;
            firstvisit.getElementsByTagName("p")[77].innerText = data[attr].form.ccheck8;
            firstvisit.getElementsByTagName("p")[78].innerText = data[attr].form.ccheck9;
            firstvisit.getElementsByTagName("p")[79].innerText = data[attr].form.ccheck10;
            firstvisit.getElementsByTagName("p")[80].innerText = data[attr].form.ccheck11;
            firstvisit.getElementsByTagName("p")[81].innerText = data[attr].form.ccheck12;
            firstvisit.getElementsByTagName("p")[82].innerText = data[attr].form.ccheck13;
            firstvisit.getElementsByTagName("p")[83].innerText = data[attr].form.ccheck14;
            firstvisit.getElementsByTagName("p")[84].innerText = data[attr].form.ccheck15;
            firstvisit.getElementsByTagName("p")[85].innerText = data[attr].form.ccheck16;
            firstvisit.getElementsByTagName("p")[86].innerText = data[attr].form.ccheck17;
            firstvisit.getElementsByTagName("p")[87].innerText = data[attr].form.ccheck18;
            firstvisit.getElementsByTagName("p")[88].innerText = data[attr].form.ccheck19;
            
            firstvisit.getElementsByTagName("p")[89].innerText = data[attr].form.cwomen;
            firstvisit.getElementsByTagName("p")[90].innerText = data[attr].form.cwomen1;
            firstvisit.getElementsByTagName("p")[91].innerText = data[attr].form.cwomen2;
            firstvisit.getElementsByTagName("p")[92].innerText = data[attr].form.cwomen3;
            firstvisit.getElementsByTagName("p")[93].innerText = data[attr].form.cwomen4;
            firstvisit.getElementsByTagName("p")[94].innerText = data[attr].form.cwomen5;
            firstvisit.getElementsByTagName("p")[95].innerText = data[attr].form.cwomen6;
            firstvisit.getElementsByTagName("p")[96].innerText = data[attr].form.cwomen7;
            firstvisit.getElementsByTagName("p")[97].innerText = data[attr].form.cwomen8;
            firstvisit.getElementsByTagName("p")[98].innerText = data[attr].form.cwomen9;
            firstvisit.getElementsByTagName("p")[99].innerText = data[attr].form.cwomen10;
            firstvisit.getElementsByTagName("p")[100].innerText = data[attr].form.cwomen11;
            firstvisit.getElementsByTagName("p")[101].innerText = data[attr].form.cwomen12;
            firstvisit.getElementsByTagName("p")[102].innerText = data[attr].form.cwomen13;
            firstvisit.getElementsByTagName("p")[103].innerText = data[attr].form.cwomen14;
            firstvisit.getElementsByTagName("p")[104].innerText = data[attr].form.cwomen15;
            firstvisit.getElementsByTagName("p")[105].innerText = data[attr].form.cdateMenstrual;
            firstvisit.getElementsByTagName("p")[106].innerText = data[attr].form.cdatePapSmear;
            firstvisit.getElementsByTagName("p")[107].innerText = data[attr].form.cabnormalfind;

            firstvisit.getElementsByTagName("p")[108].innerText = data[attr].form.ccmen;
            firstvisit.getElementsByTagName("p")[109].innerText = data[attr].form.ccmen1;
            firstvisit.getElementsByTagName("p")[110].innerText = data[attr].form.ccmen2;
            firstvisit.getElementsByTagName("p")[111].innerText = data[attr].form.ccmen3;
            firstvisit.getElementsByTagName("p")[112].innerText = data[attr].form.ccmen4;
            firstvisit.getElementsByTagName("p")[113].innerText = data[attr].form.ccmen5;
            firstvisit.getElementsByTagName("p")[114].innerText = data[attr].form.ccmen6;
            firstvisit.getElementsByTagName("p")[115].innerText = data[attr].form.ccmen7;

            firstvisit.getElementsByTagName("p")[116].innerHTML = data[attr].form.cexp;
            firstvisit.getElementsByTagName("p")[117].innerText = data[attr].form.cgen;
            firstvisit.getElementsByTagName("p")[118].innerText = data[attr].form.cgen1;
            firstvisit.getElementsByTagName("p")[119].innerText = data[attr].form.cgen2;
            firstvisit.getElementsByTagName("p")[120].innerText = data[attr].form.cgen3;
            firstvisit.getElementsByTagName("p")[121].innerText = data[attr].form.cgen4;
            firstvisit.getElementsByTagName("p")[122].innerText = data[attr].form.cgen5;
            firstvisit.getElementsByTagName("p")[123].innerText = data[attr].form.cgen6;
            firstvisit.getElementsByTagName("p")[124].innerText = data[attr].form.cgen7;
            firstvisit.getElementsByTagName("p")[125].innerText = data[attr].form.cgen8;
            firstvisit.getElementsByTagName("p")[126].innerText = data[attr].form.cgen9;
            firstvisit.getElementsByTagName("p")[127].innerText = data[attr].form.cgen10;
            firstvisit.getElementsByTagName("p")[128].innerText = data[attr].form.cgen11;
            firstvisit.getElementsByTagName("p")[129].innerText = data[attr].form.cgen12;

            firstvisit.getElementsByTagName("p")[130].innerText = data[attr].form.chidden;

            firstvisit.getElementsByTagName("p")[131].innerText = data[attr].form.ccardio;
            firstvisit.getElementsByTagName("p")[132].innerText = data[attr].form.ccardio1;
            firstvisit.getElementsByTagName("p")[133].innerText = data[attr].form.ccardio2;
            firstvisit.getElementsByTagName("p")[134].innerText = data[attr].form.ccardio3;
            firstvisit.getElementsByTagName("p")[135].innerText = data[attr].form.ccardio4;
            firstvisit.getElementsByTagName("p")[136].innerText = data[attr].form.ccardio5;
            firstvisit.getElementsByTagName("p")[137].innerText = data[attr].form.ccardio6;
            firstvisit.getElementsByTagName("p")[138].innerText = data[attr].form.ccardio7;
            firstvisit.getElementsByTagName("p")[139].innerText = data[attr].form.ccardio8;
            firstvisit.getElementsByTagName("p")[140].innerText = data[attr].form.ccardio9;
            firstvisit.getElementsByTagName("p")[141].innerText = data[attr].form.ccardio10;
            firstvisit.getElementsByTagName("p")[142].innerText = data[attr].form.ccardio11;
            firstvisit.getElementsByTagName("p")[143].innerText = data[attr].form.ccardio12;

            firstvisit.getElementsByTagName("p")[144].innerText = data[attr].form.chidden;

            firstvisit.getElementsByTagName("p")[145].innerText = data[attr].form.cresp;
            firstvisit.getElementsByTagName("p")[146].innerText = data[attr].form.cresp1;
            firstvisit.getElementsByTagName("p")[147].innerText = data[attr].form.cresp2;
            firstvisit.getElementsByTagName("p")[148].innerText = data[attr].form.cresp3;
            firstvisit.getElementsByTagName("p")[149].innerText = data[attr].form.cresp4;
            firstvisit.getElementsByTagName("p")[150].innerText = data[attr].form.cresp5;
            firstvisit.getElementsByTagName("p")[151].innerText = data[attr].form.cresp6;
            firstvisit.getElementsByTagName("p")[152].innerText = data[attr].form.cresp7;
            firstvisit.getElementsByTagName("p")[153].innerText = data[attr].form.cresp8;

            firstvisit.getElementsByTagName("p")[154].innerText = data[attr].form.chidden;

            firstvisit.getElementsByTagName("p")[155].innerText = data[attr].form.cgastro;
            firstvisit.getElementsByTagName("p")[156].innerText = data[attr].form.cgastro1;
            firstvisit.getElementsByTagName("p")[157].innerText = data[attr].form.cgastro2;
            firstvisit.getElementsByTagName("p")[158].innerText = data[attr].form.cgastro3;
            firstvisit.getElementsByTagName("p")[159].innerText = data[attr].form.cgastro4;
            firstvisit.getElementsByTagName("p")[160].innerText = data[attr].form.cgastro5;
            firstvisit.getElementsByTagName("p")[161].innerText = data[attr].form.cgastro6;
            firstvisit.getElementsByTagName("p")[162].innerText = data[attr].form.cgastro7;
            firstvisit.getElementsByTagName("p")[163].innerText = data[attr].form.cgastro8;
            firstvisit.getElementsByTagName("p")[164].innerText = data[attr].form.cgastro9;

            firstvisit.getElementsByTagName("p")[165].innerText = data[attr].form.chidden;

            firstvisit.getElementsByTagName("p")[166].innerText = data[attr].form.cgenito;
            firstvisit.getElementsByTagName("p")[167].innerText = data[attr].form.cgenito1;
            firstvisit.getElementsByTagName("p")[168].innerText = data[attr].form.cgenito2;
            firstvisit.getElementsByTagName("p")[169].innerText = data[attr].form.cgenito3;
            firstvisit.getElementsByTagName("p")[170].innerText = data[attr].form.cgenito4;
            firstvisit.getElementsByTagName("p")[171].innerText = data[attr].form.cgenito5;
            firstvisit.getElementsByTagName("p")[172].innerText = data[attr].form.cgenito6;
            firstvisit.getElementsByTagName("p")[173].innerText = data[attr].form.cgenito61;
            firstvisit.getElementsByTagName("p")[174].innerText = data[attr].form.cgenito7;
            firstvisit.getElementsByTagName("p")[175].innerText = data[attr].form.cgenito8;

            firstvisit.getElementsByTagName("p")[176].innerText = data[attr].form.chidden;

            firstvisit.getElementsByTagName("p")[177].innerText = data[attr].form.cneuro;
            firstvisit.getElementsByTagName("p")[178].innerText = data[attr].form.cneuro1;
            firstvisit.getElementsByTagName("p")[179].innerText = data[attr].form.cneuro2;
            firstvisit.getElementsByTagName("p")[180].innerText = data[attr].form.cneuro3;
            firstvisit.getElementsByTagName("p")[181].innerText = data[attr].form.cneuro4;
            firstvisit.getElementsByTagName("p")[182].innerText = data[attr].form.cneuro5;
            firstvisit.getElementsByTagName("p")[183].innerText = data[attr].form.cneuro6;
            firstvisit.getElementsByTagName("p")[184].innerText = data[attr].form.cneuro7;
            firstvisit.getElementsByTagName("p")[185].innerText = data[attr].form.cneuro8;
            firstvisit.getElementsByTagName("p")[186].innerText = data[attr].form.cneuro9;
            firstvisit.getElementsByTagName("p")[187].innerText = data[attr].form.cneuro10;
            firstvisit.getElementsByTagName("p")[188].innerText = data[attr].form.cneuro11;
            firstvisit.getElementsByTagName("p")[189].innerText = data[attr].form.cneuro12;
            firstvisit.getElementsByTagName("p")[190].innerText = data[attr].form.cneuro13;

            firstvisit.getElementsByTagName("p")[191].innerText = data[attr].form.chidden;

            firstvisit.getElementsByTagName("p")[192].innerText = data[attr].form.cmuskulo;
            firstvisit.getElementsByTagName("p")[193].innerText = data[attr].form.cmuskulo1;
            firstvisit.getElementsByTagName("p")[194].innerText = data[attr].form.cmuskulo2;
            firstvisit.getElementsByTagName("p")[195].innerText = data[attr].form.cmuskulo3;
            firstvisit.getElementsByTagName("p")[196].innerText = data[attr].form.cmuskulo4;
            firstvisit.getElementsByTagName("p")[197].innerText = data[attr].form.cmuskulo5;
            firstvisit.getElementsByTagName("p")[198].innerText = data[attr].form.cmuskulo6;
            firstvisit.getElementsByTagName("p")[199].innerText = data[attr].form.cmuskulo7;
            firstvisit.getElementsByTagName("p")[200].innerText = data[attr].form.cmuskulo8;
            firstvisit.getElementsByTagName("p")[201].innerText = data[attr].form.cmuskulo9;

            firstvisit.getElementsByTagName("p")[202].innerText = data[attr].form.chabit;
            firstvisit.getElementsByTagName("p")[203].innerText = data[attr].form.chabit1;
            firstvisit.getElementsByTagName("p")[204].innerText = data[attr].form.chabit2;
            firstvisit.getElementsByTagName("p")[205].innerText = data[attr].form.chabit3;
            firstvisit.getElementsByTagName("p")[206].innerText = data[attr].form.chabit4;
            firstvisit.getElementsByTagName("p")[207].innerText = data[attr].form.chabit5;
            firstvisit.getElementsByTagName("p")[208].innerText = data[attr].form.chabit6;
            firstvisit.getElementsByTagName("p")[209].innerText = data[attr].form.chabit7;
            firstvisit.getElementsByTagName("p")[210].innerText = data[attr].form.chabit8;
            firstvisit.getElementsByTagName("p")[211].innerText = data[attr].form.chabit9;
            firstvisit.getElementsByTagName("p")[212].innerText = data[attr].form.chabit10;

            firstvisit.getElementsByTagName("p")[213].innerText = data[attr].form.csmoke;
            firstvisit.getElementsByTagName("p")[214].innerText = data[attr].form.cifsmoke;
            firstvisit.getElementsByTagName("p")[215].innerText = data[attr].form.chowmuchsmoke;
            firstvisit.getElementsByTagName("p")[216].innerText = data[attr].form.csincesmoke;
            firstvisit.getElementsByTagName("p")[217].innerText = data[attr].form.csmokeattempt;
            firstvisit.getElementsByTagName("p")[218].innerText = data[attr].form.calcohol;
            firstvisit.getElementsByTagName("p")[219].innerText = data[attr].form.cifalcohol;
            firstvisit.getElementsByTagName("p")[220].innerText = data[attr].form.chowmuchalcohol;
            firstvisit.getElementsByTagName("p")[221].innerText = data[attr].form.csincealcohol;
            firstvisit.getElementsByTagName("p")[222].innerText = data[attr].form.cexercise;
            firstvisit.getElementsByTagName("p")[223].innerText = data[attr].form.cexerciseregular;
            firstvisit.getElementsByTagName("p")[224].innerText = data[attr].form.cifexercise;

            firstvisit.getElementsByTagName("p")[225].innerText = data[attr].form.cnutri;
            firstvisit.getElementsByTagName("p")[226].innerText = data[attr].form.cnutriconcern;
            firstvisit.getElementsByTagName("p")[227].innerText = data[attr].form.cnutriskip;
            firstvisit.getElementsByTagName("p")[228].innerText = data[attr].form.cnutrifruit;
            firstvisit.getElementsByTagName("p")[229].innerText = data[attr].form.cnutriveg;
            firstvisit.getElementsByTagName("p")[230].innerText = data[attr].form.cnutridiet;
            firstvisit.getElementsByTagName("p")[231].innerText = data[attr].form.cnutrigluten;
            firstvisit.getElementsByTagName("p")[232].innerText = data[attr].form.cnutricoffee;
            firstvisit.getElementsByTagName("p")[233].innerText = data[attr].form.cnutricoffeemuch;
            firstvisit.getElementsByTagName("p")[234].innerText = data[attr].form.csoda;
            firstvisit.getElementsByTagName("p")[235].innerText = data[attr].form.csodareg;
            firstvisit.getElementsByTagName("p")[236].innerText = data[attr].form.csodadiet;
            firstvisit.getElementsByTagName("p")[237].innerText = data[attr].form.csodanone;
            firstvisit.getElementsByTagName("p")[238].innerText = data[attr].form.cifsoda;

            firstvisit.getElementsByTagName("p")[239].innerText = data[attr].form.ceatinghabit;
            firstvisit.getElementsByTagName("p")[240].innerText = data[attr].form.ceatinghabityes;
            firstvisit.getElementsByTagName("p")[241].innerText = data[attr].form.ceatinghabitno;
            firstvisit.getElementsByTagName("p")[242].innerText = data[attr].form.cappetite;
            firstvisit.getElementsByTagName("p")[243].innerText = data[attr].form.cappetiteyes;
            firstvisit.getElementsByTagName("p")[244].innerText = data[attr].form.cappetiteno;
            firstvisit.getElementsByTagName("p")[245].innerText = data[attr].form.ceatmore;
            firstvisit.getElementsByTagName("p")[246].innerText = data[attr].form.ceatmoreyes;
            firstvisit.getElementsByTagName("p")[247].innerText = data[attr].form.ceatmoreno;
            firstvisit.getElementsByTagName("p")[248].innerText = data[attr].form.cenergydrop;
            firstvisit.getElementsByTagName("p")[249].innerText = data[attr].form.cenergydropyes;
            firstvisit.getElementsByTagName("p")[250].innerText = data[attr].form.cenergydropno;
            firstvisit.getElementsByTagName("p")[251].innerText = data[attr].form.cenergydropif;
            firstvisit.getElementsByTagName("p")[252].innerText = data[attr].form.cweightyearago;
            firstvisit.getElementsByTagName("p")[253].innerText = data[attr].form.cweightmost;
            firstvisit.getElementsByTagName("p")[254].innerText = data[attr].form.cweightwhen;
            firstvisit.getElementsByTagName("p")[255].innerText = data[attr].form.cbowel;

            firstvisit.getElementsByTagName("p")[256].innerText = data[attr].form.csleeprelax;
            firstvisit.getElementsByTagName("p")[257].innerText = data[attr].form.csleephours;
            firstvisit.getElementsByTagName("p")[258].innerText = data[attr].form.csleeprefresh;

            firstvisit.getElementsByTagName("p")[259].innerText = data[attr].form.cwritten;

            firstvisit.getElementsByTagName("p")[260].innerText = data[attr].form.ciagree;
            annualvisit.getElementsByTagName("h4")[0].innerText = data[attr].form.csignature;
            annualvisit.getElementsByTagName("h4")[1].innerText = data[attr].form.cclear;
            annualvisit.getElementsByTagName("h4")[2].innerText = data[attr].form.csavesign;
            annualvisit.getElementsByTagName("p")[261].innerText = data[attr].form.cprintname;

            firstvisit.getElementsByTagName("a")[2].innerText = data[attr].form.next;

            if(firstvisit.getElementsByTagName("legend")[0]){
                firstvisit.getElementsByTagName("legend")[0].innerText = data[attr].form.cconcenttitle;
                firstvisit.getElementsByTagName("h3")[0].innerHTML = data[attr].form.cconsentdisclaimer;
                firstvisit.getElementsByClassName("nb")[2].innerText = data[attr].form.cconsenttext1;
                firstvisit.getElementsByTagName("p")[262].innerText = data[attr].form.cconsenttext2;

                firstvisit.getElementsByTagName("p")[263].innerText = data[attr].form.ciagree;
                firstvisit.getElementsByTagName("p")[264].innerText = data[attr].form.csignature;

                firstvisit.getElementsByTagName("button")[0].innerText = data[attr].form.submit;
            }
        }

        window.location.reload();
        
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
            "supplements":"Supplements",
            "login":"SignUp/Login",
            "meetings":"My Meetings",
            "appts":"My Appointments",
            "admin":"Admin",
            "account":"Account",
            "qna":"FAQ",
            "logout":"Logout",
        },

        "title":"Consultation",
        "selecopt":"Select an option:",
        "meetgreetvis":"Meet & Greet",
        "firstvis":"First Visit",
        "followupvis":"Follow-Up Visit",
        "annualvis":"Annual Visit",
        "emergencyvis":"Emergency Consultation",
        "changedelvis":"Change/Delete Appointment",

        "meetgreet":{
            "title":"Meet & Greet",
            "step1":"Step 1",
            "step1text":"Book your appointment",
            "step2":"Step 2",
            "step2text":"Pay the fee",
            "step3":"Step 3",
            "step3text":"We will then meet online on the date and time agreed for 15 minutes.",
            "button":"Meet & Greet Scheduling",
        },

        "firstvisit":{
            "title":"First Visit",
            "step1":"Step 1",
            "step1text":"Please fill <br>out a questionnaire about your medical status.",
            "step2":"Step 2",
            "step2text":"Please fill out the consent form to enable the booking of your session.",
            "step3":"Step 3",
            "step3text":"Book your session online, and receive confirmation within 24 hours of payment.",
            "step4":"Step 4",
            "step4text":"We will analyze the data you provided in the questionnaire along with additional information gathered during our Zoom session talk. Within 24 hours, I will prescribe a treatment to detoxify your body, and develop a program for your specific health needs.",
        },

        "followup":{
            "title":"Follow Up Visit",
            "step1":"Step 1",
            "step1text":"Book your appointment",
            "step2":"Step 2",
            "step2text":"Pay the fee",
            "step3":"Step 3",
            "step3text":"We will then meet online on the date and time agreed for 15 minutes.",
            "button":"Follow Up Scheduling",
        },

        "annual":{
            "title":"Annual Visit",
            "step1":"Step 1",
            "step1text":"You will fill out the questionnaire and sign it along with the consent form.",
            "step2":"Step 2",
            "step2text":"Book your appointment",
            "step3":"Step 3",
            "step3text":"Pay the fee",
            "step4":"Step 4",
            "step4text":"We will then meet online on the date and time agreed for 15 minutes.",
        },

        "emergency":{
            "title":"Emergency Consultation",
            "step1":"Step 1",
            "step1text":"Contact me via Phone call, or Whatsapp, or Zoom",
            "button":"Emergency Scheduling",
        },

        "form":{
            "formtitle":"PATIENT INTAKE FORM - HOLISTIC ASSESSMENT",
            "formimportant":"Important: This is  CONFIDENTIAL questionnaire to help us determine the best treatment plan for you. Please fill it out as completely as possible, even if you do not feel certain questions pertain to your present condition",
            "formthanks":"Thank you.",
            "cfname":"First Name",
            "cmname":"Middle Name",
            "clname":"Last Name",
            "ctodaydate":"Today's date",
            "ccgenders":"Gender",
            "ccmalegender":"Male",
            "cfemalegender":"Female",
            "caddress":"Address",
            "cstate":"State",
            "czip":"Zip",
            "cemail":"Email",
            "cdob":"Date of Birth",
            "cbirthnatural":"Born Naturally",
            "cbirthsection":"Or C-Section",
            "cage":"Age",
            "cunder18":"If under 18, person responsible for your account",
            'chomephone':"Home Phone",
            "cworkphone":"Work Phone",
            "ccellphone":"Cell Phone",
            "cmarital":"Marial Status: ",
            "csingle":"Single",
            "cmarried":"Married",
            "cdivorced":"Divorced",
            "cwidow":"Widowed",
            "csignificant":"With a significant other",
            "ccaregiver":"Are you a caregiver for dependents?",
            "ccaregiveryes":"Yes",
            "ccaregiverno":"No",
            "cchildrencare":"If yes, how many children?",
            "cadultcare":"How many adults?",
            "coccuptation":"Occupation",
            "coccupationlength":"Number of years in this type of work",

            "cpcpdisclaimer":"PHYSICIANS / PROVIDERS",
            "cpcpprovide":"Primary Care Physician (PCP)",
            "cpcp":"Please provide the name and title of all other pracititioner(s), the condition(s) being treated and the length of time you have been receiving this treatment. Please include any acupuncturists, massage therapists or homeopaths.",
            "cpcpname":"Practitioner Name",
            "cpcpcondition":"Condition/s",
            "cpcpdot":"Date of Treatment",
            "cpcpphone":"Phone #",
            "chealthreason":"REASON FOR TODAY'S VISIT",
            "chealthconcern":"<span class='disclaimer'>CURRENT HEALTH CONCERNS</span> - Please list your top 3 health concerns in order of priority",
            "chealthconcern2":"HOSPITALIZATIONS, SURGERIES, PRCEDURES, TRANSPLANTS, COMA, PSTHESES, AND/OR INJURIES",
            "chealthconcerns2s":"(please include the dates)",

            "cmedictitle":"MEDICATIONS",
            "cmeddisclaimer":"Please list any medications you are currently taking, along with doses and the medreason(s) you are taking them.",
            "cmedictitle3":"Medications",
            "cmedreason":"Reason",
            "cmeddatebegan":"Date Began",
            "cmeddose":"Dose",
            "chelps":"Helps (Yes or No)",
            "csuppltitle":"SUPPLEMENTS",
            "csupp":"Please list any supplements (including vitamins, herbs & minerals) along with doses & the medreason you are taking them.",
            "csuppsmall":"Supplements, vitamins, etc",
            "csuppreason":"Reason",
            "csuppdatebegan":"Date Began",
            "csuppdose":"Dose",
            "csupphelps":"Helps? (Yes or No)",
            "callergy":"Allergies",

            "cfamhisttitle":"FAMILY HISTORY",
            "cfamhist":"Please describe your family's health, including current age or age at death, and major illness history (diabetes, heart, disease, osteoporosis, cancer, allergies, mental illness, etc.)",
            "cmember":"Member",
            "cmember1":"Mother",
            "cmember2":"Father",
            "cmember3":"Sibling(s)",
            "cmember4":"Children",
            "cmember5":"Maternal Grandmother",
            "cmember6":"Maternal Grandfather",
            "cmember7":"Paternal Grandmother",
            "cmember8":"Paternal Grandfather",
            "clivingage":"Living?/Age",
            "cdiceaseage":"Deceased?/Age",
            "cmajorillness":"Major Illness or Chronic Conditions",

            "ccheck":"PLEASE CHECK THE FOLLOWING MEDICAL CONDITIONS THAT APPLY TO YOU",
            "ccheck1":"Alcoholism or substance abuse",
            "ccheck2":"Arthritis/Joint Disease",
            "ccheck3":"Blood Close/Phlebitis",
            "ccheck4":"Cancer",
            "ccheck5":"Diabetes 2",
            "ccheck6":"Digestive (Ulcerative Colitis, Chrohns, etc.)",
            "ccheck7":"Frequent Infections",
            "ccheck8":"Allergies/Sensitivities (Medicines, skin, food)",
            "ccheck9":"Heart Attack, Heart Disease",
            "ccheck11":"Heart Failure",
            "ccheck12":"High Blood Pressure",
            "ccheck13":"High Cholesterol",
            "ccheck14":"Liver Disease, Hepatitis",
            "ccheck15":"Lung Disease (Asthma, COPD)",
            "ccheck16":"Mental Trouble/ Depression/ Anxiety, etc",
            "ccheck17":"Thyroid Disease",
            "ccheck18":"Urinary Difficulties (incontence, infenctions, etc.)",
            "ccheck19":"Other",

            "cwomen":"WOMEN'S HEALTH",
            "cwomen1":"Age at First Menses",
            "cwomen2":"Duration of Menses",
            "cwomen3":"Unusual Character",
            "cwomen4":"Premenopausal?",
            "cwomen5":"Age at First Menses",
            "cwomen6":"Number of Pregnancies",
            "cwomen7":"Number of Natural Births",
            "cwomen8":"Number of C-Section Births",
            "cwomen9":"Number of Miscarriages",
            "cwomen10":"Number of Difficult Births",
            "cwomen11":"Number of Abortions",
            "cwomen12":"Birth Control?",
            "cwomen13":"What type?",
            "cwomen14":"Vaginal Discharge or sores",
            "cwomen15":"Fertility Problems",
            "cdateMenstrual":"First Date of Last Menstrual Cycle",
            "cdatePapSmear":"Date of Last Pap Smear",
            "cabnormalfind":"Did you have any abnormal findings in your last tests or anytime in the past? Pleae give details",

            "ccmen":"MEN'S HEALTH",
            "ccmen1":"What date was your last prostate exam",
            "ccmen2":"Do you have: Prostate Problems",
            "ccmen3":"Do you ave: Vacestomy",
            "ccmen4":"PSA Test",
            "ccmen5":"Testicular cancer",
            "ccmen6":"Sexual dysfunction or impotence",
            "ccmen7":"Colonoscopy?",

            "cexp":"PLEASE CHECK IF YOU HAVE EXPERIENCED ANY OF THESE SYMPTOMS <span class='nb'>(IN THE LAST YEAR)</span>",
            "chidden":"hidden",
            "cgen":"GENERAL",
            "cgen1":"Fevers",
            "cgen2":"Tremors",
            "cgen3":"Change in Appetite",
            "cgen4":"Chills",
            "cgen5":"Seizures",
            "cgen6":"Fatigue",
            "cgen7":"Night Sweats",
            "cgen8":"Poor Sleep/Insomnia",
            "cgen9":"Day Sweating",
            "cgen10":"Headaches",
            "cgen11":"Bleeding or Bruising",
            "cgen12":"Emotional Changes",

            "ccardio":"CARDIOVASCULAR",
            "ccardio1":"Dizziness",
            "ccardio2":"Swelling of Hands",
            "ccardio3":"Irregular heartbeat",
            "ccardio4":"Fainting",
            "ccardio5":"Difficulty in Breathing",
            "ccardio6":"Palpitations",
            "ccardio7":"Low blood pressure",
            "ccardio8":"Cold Sweats",
            "ccardio9":"Chest Pain",
            "ccardio10":"Swelling of Feet",
            "ccardio11":"Phlebitis",
            "ccardio12":"Other",

            "cresp1":"RESPIRATORY",
            "cresp2":"Cough",
            "cresp3":"Pain w/ Deep Breaths",
            "cresp4":"Difficulty Breathing",
            "cresp5":"Bronchitis",
            "cresp6":"Shortness of Breath",
            "cresp7":"Easily Winded w/ exertion or when lying down",
            "cresp8":"Coughing Blood",
            "cresp9":"Production of Phelgm",

            "cgastro":"GASTROINTESTINAL",
            "cgastro1":"Nausea",
            "cgastro2":"Adbominal Pain/Cramps",
            "cgastro3":"Vomiting",
            "cgastro4":"Constipation",
            "cgastro5":"Indigestion / reflux",
            "cgastro6":"Diarrhea",
            "cgastro7":"Blood in Stool",
            "cgastro8":"Hernia",
            "cgastro9":"Hemarrhoids",

            "cgenito":"GENITOURINARY",
            "cgenito1":"Pain on Urination",
            "cgenito2":"Decrease in Urine",
            "cgenito3":"Kidney stones",
            "cgenito4":"Urgent Urination",
            "cgenito5":"Blood in Urine",
            "cgenito6":"Waking up to Urine.",
            "cgenito61":"How Often?",
            "cgenito7":"Frequent Urination",
            "cgenito8":"Unable to Hold Urine",

            "cneuro":"NEUROPSYCHOLOGICAL",
            "cneuro1":"Areas of Numbness",
            "cneuro2":"Anxiety",
            "cneuro3":"Lack of Coordination",
            "cneuro4":"Poor Memory",
            "cneuro5":"Dizziness",
            "cneuro6":"Loss of Balance",
            "cneuro7":"Easily Angered",
            "cneuro8":"Headaches",
            "cneuro9":"Fainting",
            "cneuro10":"Depression",
            "cneuro11":"Migraines",
            "cneuro12":"Mania",
            "cneuro13":"Susceptible to Stress",

            "cmuskulo":"MUSCULOSKELETAL",
            "cmuskulo1":"Muscular Weakness",
            "cmuskulo2":"Recent Sprains",
            "cmuskulo3":"Muscle Cramps",
            "cmuskulo4":"Spasms",
            "cmuskulo5":"Joint Pain",
            "cmuskulo6":"Injuries or Falls",
            "cmuskulo7":"Localized Weakness",
            "cmuskulo8":"General Aches",
            "cmuskulo9":"Joint Instability",

            "chabit":"HABITS AND LYFESTYLE",
            "chabit1":"1",
            "chabit2":"2",
            "chabit3":"3",
            "chabit4":"4",
            "chabit5":"5",
            "chabit6":"6",
            "chabit7":"7",
            "chabit8":"8",
            "chabit9":"9",
            "chabit10":"10",
            
            "csmoke":"Do you smoke?",
            "cifsmoke":"If yes, what?",
            "chowmuchsmoke":"How much per day?",
            "csincesmoke":"Since when?",
            "csmokeattempt":"How many attempts have you made at quitting smoking?",
            "calcohol":"Do you drink alcohol?",
            "cifalcohol":"If yes, what?",
            "chowmuchalcohol":"How much?",
            "csincealcohol":"Since when?",
            "cexercise":"EXERCISE",
            "cexerciseregular":"Do you exercise regularly?",
            "cifexercise":"If yes, describe what you do",

            "cnutri":"NUTRITION",
            "cnutriconcern":"What are your greatest nutrion concerns?",
            "cnutriskip":"How many meals do you generally eat pet day? Do you skip meals?",
            "cnutrifruit":"How many fruit servings do you consome per day?",
            "cnutriveg":"How many vegetable servings do you consome per day?",
            "cnutridiet":"Are you currently on a special diet? What foods do you avoid?",
            "cnutrigluten":"Are you vegetarian or Gluten-free?",
            "cnutricoffee":"Do you drink coffee?",
            "cnutricoffeemuch":"If yes, how much per day?",
            "csoda":"Do you drink soda pop?",
            "csodareg":"Regular",
            "csodadiet":"Diet",
            "csodanone":"None",
            "cifsoda":"If yes, how often?",

            "ceatinghabit":"Do you have regular eating habits?",
            "ceatinghabityes":"Yes",
            "ceatinghabitno":"No",
            "cappetite":"Do you have a healthy appetite?",
            "cappetiteyes":"Yes",
            "cappetiteno":"No",
            "ceatmore":"Do you eat more when under stress or feeling depressed?",
            "ceatmoreyes":"Yes",
            "ceatmoreno":"No",
            "cenergydrop":"Do you experience sudden drops in energy?",
            "cenergydropyes":"Yes",
            "cenergydropno":"No",
            "cenergydropif":"If yes, when?",
            "cweightyearago":"What was your weight one year ago?",
            "cweightmost":"What is the most you have ever weighted?",
            "cweightwhen":"When?",
            "cbowel":"How often do you have a bowel movement?",

            "csleeprelax":"SLEEP / RELAXATION",
            "csleephours":"How mant hours do you usually sleep per night? When do you go to bed?",
            "csleeprefresh":"Do you wake feeling refreshed?",
            
            "cwritten":"Everything I have written and answered in this form is true to the best of my knowledge. I will update this office when there are significant changes.",
            
            "ciagree":"I Agree",
            "csignature":"Signature",
            "cclear":"Clear",
            "csavesign":"Save Signature",
            "cprintname":"Print Name",

            "next":"Next",

            "cconcenttitle":"Consent Form",
            "cconsentdisclaimer":"<span class='disclaimer'>CLIENT DISCLAIMER:-</span> I understand that homeopathy and all types and forms of complementary and holistic therapies are not a replacement for a proper diagnosis or treatment by a qualified medical practitioner.  I accept that the therapist can guarantee no specific results. I accept full responsibility for my own well- being and for reporting my physical and psychological health to my own GP/Consultant/Nurse.  I confirm that the above is a true statement. I have read and understood the disclaimer. I am aged 16+.",
            "cconsenttext1":"If aged below 16, a parent or guardian is to sign this form below.",
            "cconsenttext2":"I understand the information I have been given to be the truth. I will immediately inform my therapist/practitioner/trainer of any changes to my medical status. The Holistic Therapy Health Questionnaire, the Consent Form, and all information are strictly confidential unless I consent to share this information by way of a signed release. I have, following consultation, consideration, and discussion, agreed to undergo this therapy. I am fully aware that the services I receive are those of a holistic nature and do not serve as a substitute for professional medical advice, examination, treatment. I have had the procedure explained to me and understand the nature of the treatment. I fully understand this treatment is not a substitute for medical treatment and it may take several sessions before I notice any benefit. This will depend on my lifestyle, on-going medication, and general health. I understand that if I have been untruthful with my details or have failed to give enough relevant information, the outcome of any therapy/treatment/class could be adversely affected, and my health and well-being may be put at risk. I understand the therapist/practitioner does not claim to cure or to diagnose any medical condition in the same way as a doctor/physician. The practitioner's opinion is that of a holistic, complementary, and alternative nature and his/her professional opinions, examinations and recommendations do NOT constitute the medical advice of a doctor/physician. I understand that the practitioner will keep all the documents related to me (including but not limited to, assessments, food diaries, forms, worksheets, audio, transcripts, video, or images) and any notes that relate to me, as a record of our work together. We are unable to provide any therapy/treatment/class without your consent.",

            "submit":"Submit form",
        },

        "description": "Something"

    },

    "arabic":{

        "title": "تشانون 7 - تسجيل الدخول",

        "language":"ar",

        "nav":{
            "home":"ترحيب",
            "pricing":"الحجز والتسعير",
            "consultation":"التشاور",
            "foodMood":"طعام",
            "supplements":"الملحق",
            "login":"اشترك/ تسجيل الدخول",
            "meetings":"اجتماعاتي",
            "appts":"المواعيد الخاصة بي",
            "admin":"مسؤل",
            "account":"الحساب",
            "qna":"أسئلة وأجوبة",
            "logout":"تسجيل خروج",
        },

        "title":"التشاور",
        "selecopt":"حدد اختيارا:",
        "meetgreetvis":"استقبال وترحيب",
        "firstvis":"الزيارة الأولى",
        "followupvis":"متابعة طبية أو أجتماعية",
        "annualvis":"الزيارة السنوية",
        "emergencyvis":"استشارة طارئة",
        "changedelvis":"تغيير / حذف الموعد",

        "meetgreet":{
            "title":"استقبال وترحيب",
            "step1": "الخطوة 1",
            "step1text": "احجز موعدك",
            "step2": "الخطوة 2",
            "step2text": "دفع الرسوم" ,
            "step3": "الخطوة 3",
            "step3text": "سنلتقي بعد ذلك عبر الإنترنت في التاريخ والوقت المتفق عليهما لمدة 15 دقيقة.",
            "button":"جدولة استقبال وترحيب",
        },

        "firstvisit":{
            "title":"الزيارة الأولى",
            "step1":"الخطوة 1",
            "step1text":"من فضلك املأ <br> استبيان حول حالتك الطبية.",
            "step2":"الخطوة 2",
            "step2text":"يرجى ملء نموذج الموافقة لتمكين حجز جلستك.",
            "step3":"الخطوه 3",
            "step3text":"احجز جلستك عبر الإنترنت ، واحصل على تأكيد في غضون 24 ساعة من الدفع.",
            "step4":"الخطوة 4",
            "step4text":"سنقوم بتحليل البيانات التي قدمتها في الاستبيان جنبًا إلى جنب مع المعلومات الإضافية التي تم جمعها أثناء حديث جلسة Zoom. في غضون 24 ساعة ، سأصف علاجًا لإزالة السموم من جسمك ، وأضع برنامجًا لاحتياجاتك الصحية المحددة.",
        },

        "followup":{
            "title":"متابعة طبية",
            "step1": "الخطوة 1",
            "step1text": "احجز موعدك",
            "step2": "الخطوة 2",
            "step2text": "دفع الرسوم" ,
            "step3": "الخطوة 3",
            "step3text": "سنلتقي بعد ذلك عبر الإنترنت في التاريخ والوقت المتفق عليهما لمدة 15 دقيقة.",
            "button":"جدولة زيارة المتابعة",
        },

        "annual":{
            "title":"الزيارة السنوية",
            "step1": "الخطوة 1",
            "step1text": "سوف تملأ الاستبيان وتوقعه مع نموذج الموافقة.",
            "step2": "الخطوة 2",
            "step2text": "احجز موعدك",
            "step3": "الخطوة 3",
            "step3text": "دفع الرسوم",
            "step4": "الخطوة 4",
            "step4text": "سنلتقي بعد ذلك عبر الإنترنت في التاريخ والوقت المتفق عليهما لمدة 15 دقيقة.",
        },

        "emergency":{
            "title":"استشارة طارئة",
            "step1": "الخطوة 1",
            "step1text": "اتصل بي عبر مكالمة هاتفية أو Whatsapp أو Zoom" ,
            "button":"جدولة الطوارئ",
        },

        "form":{
            "formtitle":"استمارة قبول المريض - التقييم الشامل",
            "formimportant":"هام: هذا استبيان سري لمساعدتنا في تحديد أفضل خطة علاج لك. يرجى ملئها بالكامل قدر الإمكان ، حتى إذا كنت لا تشعر ببعض الأسئلة المتعلقة بحالتك الحالية",
            "formthanks":"شكرًا لك.",
            "cfname":"الاسم الاول",
            "cmname":"الاسم الوسطى",
            "clname":"الكنية",
            "ctodaydate":"تاريخ اليوم",
            "ccgenders":"جنس",
            "ccmalegender":"ذكر",
            "cfemalegender":"أنثى",
            "caddress":"تبوك",
            "cstate":"حالة",
            "czip":"رمز بريدي",
            "cemail":"البريد الإلكتروني",
            "cdob":"تاريخ الولادة",
            "cbirthnatural":"ولدت بشكل طبيعي",
            "cbirthsection":"أو عملية قيصرية",
            "cage":"سن",
            "cunder18":"إذا كان عمره أقل من 18 عامًا ، يكون الشخص المسؤول عن حسابك",
            'chomephone':"هاتف المنزل",
            "cworkphone":"هاتف عمل",
            "ccellphone":"الهاتف الخلوي",
            "cmarital":"الحالة الحالة الإجتماعية: ",
            "csingle":"غير مرتبطة",
            "cmarried":"متزوج",
            "cdivorced":"مُطلّق",
            "cwidow":"الأرامل",
            "csignificant":"مع شخص مهم آخر",
            "ccaregiver":"هل أنت مقدم رعاية للمعالين؟",
            "ccaregiveryes":"نعم",
            "ccaregiverno":"رقم",
            "cchildrencare":"إذا كانت الإجابة نعم ، كم عدد الأطفال؟",
            "cadultcare":"كم عدد البالغين؟",
            "coccuptation":"إشغال",
            "coccupationlength":"عدد سنوات هذا النوع من العمل",

            "cpcpdisclaimer":"الأطباء / مقدمو الخدمات",
            "cpcpprovide":"طبيب الرعاية الأولية (PCP)",
            "cpcp":"يرجى تقديم اسم ولقب جميع الممارسين الآخرين ، والحالة (الحالات) التي يتم علاجها وطول الفترة الزمنية التي تلقيت فيها هذا العلاج. يرجى تضمين أي أخصائي علاج بالوخز بالإبر أو معالج بالتدليك أو معالج تجانسي.",
            "cpcpname":"اسم الممارس",
            "cpcpcondition":"حالات",
            "cpcpdot":"تاريخ العلاج",
            "cpcpphone":"هاتف #",
            "chealthreason":"سبب الزيارة اليوم",
            "chealthconcern":"<span class='disclaimer'>المخاوف الصحية الحالية</span> - يرجى سرد أهم 3 مخاوف صحية لديك بترتيب الأولوية",
            "chealthconcern2":"المستشفيات ، والجراحات ، والإجراءات ، وعمليات النقل ، والغيبوبة ، والأمراض النفسية ، و / أو الإصابات",
            "chealthconcerns2s":"(يرجى تضمين التواريخ)",

            "cmedictitle":"الأدوية",
            "cmeddisclaimer":"يرجى ذكر أي أدوية تتناولها حاليًا ، جنبًا إلى جنب مع الجرعات والأدوية التي تتناولها.",
            "cmedictitle3":"الأدوية",
            "cmedreason":"سبب",
            "cmeddatebegan":"بدأ التاريخ",
            "cmeddose":"جرعة",
            "chelps":"يساعد (نعم أو لا)",
            "csuppltitle":"المكملات",
            "csupp":"يرجى ذكر أي مكملات (بما في ذلك الفيتامينات والأعشاب والمعادن) جنبًا إلى جنب مع الجرعات والميدريسون الذي تتناوله.",
            "csuppsmall":"المكملات والفيتامينات وغيرها",
            "csuppreason":"سبب",
            "csuppdatebegan":"بدأ التاريخ",
            "csuppdose":"جرعة",
            "csupphelps":"يساعد؟ (نعم ام لا)",
            "callergy":"الحساسية",

            "cfamhisttitle":"تاريخ العائلة",
            "cfamhist":"يرجى وصف صحة عائلتك ، بما في ذلك العمر الحالي أو العمر عند الوفاة ، وتاريخ المرض الرئيسي (السكري ، القلب ، المرض ، هشاشة العظام ، السرطان ، الحساسية ، المرض العقلي ، إلخ.)",
            "cmember":"عضو",
            "cmember1":"الأم",
            "cmember2":"أب",
            "cmember3":"إخوة",
            "cmember4":"أطفال",
            "cmember5":"جدة الأمهات",
            "cmember6":"جده لأمه",
            "cmember7":"جدة لأب",
            "cmember8":"الجد لأب",
            "clivingage":"العيش؟ / العمر",
            "cdiceaseage":"متوفى؟ / العمر",
            "cmajorillness":"المرض الرئيسي أو الحالات المزمنة",

            "ccheck":"يرجى التحقق من الشروط الطبية التالية التي تنطبق عليك",
            "ccheck1":"إدمان الكحول أو تعاطي المخدرات",
            "ccheck2":"التهاب المفاصل / أمراض المفاصل",
            "ccheck3":"إغلاق الدم / الوريد",
            "ccheck4":"سرطان",
            "ccheck5":"مرض السكري 2",
            "ccheck6":"الجهاز الهضمي (التهاب القولون التقرحي ، كرون ، إلخ)",
            "ccheck7":"كثرة العدوى",
            "ccheck8":"الحساسية / الحساسيات (الأدوية والجلد والغذاء)",
            "ccheck9":"النوبة القلبية وأمراض القلب",
            "ccheck11":"فشل القلب",
            "ccheck12":"ضغط دم مرتفع",
            "ccheck13":"عالي الدهون",
            "ccheck14":"أمراض الكبد والتهاب الكبد",
            "ccheck15":"أمراض الرئة (الربو ومرض الانسداد الرئوي المزمن)",
            "ccheck16":"اضطراب عقلي / اكتئاب / قلق ، إلخ",
            "ccheck17":"مرض الغدة الدرقية",
            "ccheck18":"صعوبات في المسالك البولية (سلس ، انتفاخات ، إلخ.)",
            "ccheck19":"آخر",

            "cwomen":"صحة المرأة",
            "cwomen1":"العمر في الحيض الأول",
            "cwomen2":"مدة الحيض",
            "cwomen3":"شخصية غير عادية",
            "cwomen4":"ما قبل انقطاع الطمث؟",
            "cwomen5":"العمر في الحيض الأول",
            "cwomen6":"عدد حالات الحمل",
            "cwomen7":"عدد الولادات الطبيعية",
            "cwomen8":"عدد الولادات القيصرية",
            "cwomen9":"عدد حالات الإجهاض",
            "cwomen10":"عدد الولادات الصعبة",
            "cwomen11":"عدد حالات الإجهاض",
            "cwomen12":"تنظيم النسل؟",
            "cwomen13":"أي نوع؟",
            "cwomen14":"إفرازات مهبلية أو تقرحات",
            "cwomen15":"مشاكل الخصوبة",
            "cdateMenstrual":"أول موعد لآخر دورة شهرية",
            "cdatePapSmear":"تاريخ آخر مسحة عنق الرحم",
            "cabnormalfind":"هل كانت لديك أي نتائج غير طبيعية في اختباراتك الأخيرة أو في أي وقت في الماضي؟ يرجى إعطاء التفاصيل",

            "ccmen":"صحة الرجل",
            "ccmen1":"في أي تاريخ كان آخر فحص للبروستات",
            "ccmen2":"هل لديك: مشاكل البروستاتا",
            "ccmen3":"هل لديك: فراغ",
            "ccmen4":"اختبار PSA",
            "ccmen5":"Testicular cancer",
            "ccmen6":"العجز الجنسي أو العجز الجنسي",
            "ccmen7":"تنظير القولون؟",

            "cexp":"يرجى التحقق مما إذا كنت قد واجهت أيًا من هذه الأعراض <span class = 'nb'> (في العام الماضي) </ span>",
            "chidden":"مختفي",
            "cgen":"عام",
            "cgen1":"حمى",
            "cgen2":"الارتعاش",
            "cgen3": "تغيير في الشهية",
            "cgen4": "قشعريرة",
            "cgen5": "المضبوطات",
            "cgen6": "التعب",
            "cgen7": "تعرق ليلي",
            "cgen8": "قلة النوم / الأرق",
            "cgen9": "تعرق نهاري",
            "cgen10": "الصداع",
            "cgen11": "نزيف أو كدمات",
            "cgen12": "التغييرات العاطفية",

            "ccardio": "القلب والأوعية الدموية",
            "ccardio1": "دوار" ,
            "ccardio2": "تورم اليدين",
            "ccardio3": "عدم انتظام ضربات القلب",
            "ccardio4": "الإغماء" ,
            "ccardio5": "صعوبة في التنفس",
            "ccardio6": "الخفقان",
            "ccardio7": "ضغط دم منخفض",
            "ccardio8": "تعرق بارد",
            "ccardio9": "ألم في الصدر",
            "ccardio10": "تورم القدمين",
            "ccardio11": "وريد" ,
            "ccardio12": "أخرى",

            "cresp": "تنفسي",
            "cresp1": "سعال",
            "cresp2": "ألم مع أنفاس عميقة",
            "cresp3": "صعوبة في التنفس",
            "cresp4": "التهاب الشعب الهوائية",
            "cresp5": "ضيق التنفس",
            "cresp6": "ينفخ بسهولة مع بذل مجهود أو عند الاستلقاء" ,
            "cresp7": "سعال الدم" ,
            "cresp8": "إنتاج بلغم",

            "cgastro":"معدي",
            "cgastro1": "غثيان",
            "cgastro2": "ألم البطني / تقلصات",
            "cgastro3": "القيء" ,
            "cgastro4": "الإمساك" ,
            "cgastro5": "عسر الهضم / الارتجاع",
            "cgastro6": "الإسهال" ,
            "cgastro7": "دم في البراز",
            "cgastro8": "فتق",
            "cgastro9": "بواسير",

            "cgenito":"الجهاز البولي التناسلي",
            "cgenito1":"ألم عند التبول",
            "cgenito2":"انخفاض في البول",
            "cgenito3":"حصى الكلى",
            "cgenito4":"التبول العاجل",
            "cgenito5":"دم في البول",
            "cgenito6":"الاستيقاظ على البول.",
            "cgenito61":"كم مرة؟",
            "cgenito7":"كثرة التبول",
            "cgenito8":"غير قادر على حبس البول",

            "cneuro":"علم الأعصاب",
            "cneuro1 ":" مناطق الخدر ",
            "cneuro2": "القلق",
            "cneuro3": "نقص التنسيق" ,
            "cneuro4": "ذاكرة ضعيفة",
            "cneuro5": "دوار",
            "cneuro6": "فقدان التوازن",
            "cneuro7": "يغضب بسهولة",
            "cneuro8": "الصداع",
            "cneuro9": "الإغماء" ,
            "cneuro10": "الاكتئاب",
            "cneuro11": "الصداع النصفي",
            "cneuro12": "هوس",
            "cneuro13": "عرضة للإجهاد",

            "cmuskulo":"عضلي قلبي",
            "cmuskulo1": "ضعف عضلي" ,
            "cmuskulo2": "الالتواءات الأخيرة",
            "cmuskulo3": "تقلصات العضلات",
            "cmuskulo4": "تشنجات",
            "cmuskulo5": "آلام المفاصل",
            "cmuskulo6": "إصابات أو سقوط",
            "cmuskulo7": "ضعف محلي",
            "cmuskulo8": "آلام عامة",
            "cmuskulo9": "عدم الاستقرار المشترك",

            "chabit":"العادات وأسلوب الحياة",
            "chabit1":"1",
            "chabit2":"2",
            "chabit3":"3",
            "chabit4":"4",
            "chabit5":"5",
            "chabit6":"6",
            "chabit7":"7",
            "chabit8":"8",
            "chabit9":"9",
            "chabit10":"10",
            
            "csmoke": "هل تدخن؟",
            "cifsmoke": "إذا كانت الإجابة نعم ، فماذا؟",
            "chowmuchsmoke": "كم في اليوم؟",
            "csincesmoke": "منذ متى؟" ,
            "csmokeattempt": "كم عدد المحاولات التي قمت بها للإقلاع عن التدخين؟",
            "كحول": "هل تشرب الخمر؟",
            "cifalcohol": "إذا كان الجواب نعم ، فماذا؟" ,
            "chowmuchalcohol": "كم؟",
            "csincealcohol": "منذ متى؟" ,
            "التمرين": "تمرين",
            "cexerciseregular": "هل تمارس الرياضة بانتظام؟",
            "cifexercise": "إذا كانت الإجابة بنعم ، صف ما تفعله" ,

            "cnutri":"تَغذِيَة",
            "cnutriconcern": "ما هي أهم اهتماماتك الغذائية؟" ,
            "cnutriskip": "كم عدد الوجبات التي تتناولها عمومًا للحيوانات الأليفة؟ هل تتخطى الوجبات؟",
            "cnutrifruit": "كم عدد حصص الفاكهة التي تستهلكها يوميًا؟",
            "cnutriveg": "كم عدد حصص الخضار التي تتناولها يوميًا؟",
            "cnutridiet": "هل تتبع حاليًا نظامًا غذائيًا خاصًا؟ ما هي الأطعمة التي تتجنبها؟" ,
            "cnutrigluten": "هل أنت نباتي أم خالي من الغلوتين؟" ,
            "cnutricoffee": "هل تشرب القهوة؟",
            "cnutricoffeemuch": "إذا كانت الإجابة نعم ، فكم سعرها في اليوم؟",
            "csoda":"هل تشرب المشروبات الغازية؟",
            "csodareg": "عادي",
            "csodadiet": "حمية",
            "csodanone": "بلا",
            "cifsoda": "إذا كانت الإجابة بنعم ، فكم مرة؟" ,

            "ceatinghabit":"هل لديك عادات غذائية منتظمة؟",
            "ceatinghabityes":"نعم",
            "ceatinghabitno":"لا",
            "cappetite":"هل لديك شهية صحية؟",
            "cappetiteyes":"نعم",
            "cappetiteno":"لا",
            "ceatmore":"هل تأكل أكثر عندما تكون تحت الضغط أو تشعر بالاكتئاب؟",
            "ceatmoreyes":"نعم",
            "ceatmoreno":"لا",
            "cenergydrop":"هل تعاني من انخفاض مفاجئ في الطاقة؟",
            "cenergydropyes":"نعم",
            "cenergydropno":"لا",
            "cenergydropif":"إذا نعم متى؟",
            "cweightyearago":"ماذا كان وزنك قبل عام؟",
            "cweightmost":"ما هو أكبر وزن قمت به على الإطلاق؟",
            "cweightwhen":"متى؟",
            "cbowel":"كم مرة لديك حركة الأمعاء؟",

            "csleeprelax":"النوم / الاسترخاء",
            "csleephours":"كم ساعة تنام عادة كل ليلة؟ متى تخلد للنوم؟",
            "csleeprefresh":"هل تستيقظ وأنت تشعر بالانتعاش؟",
            
            "cwritten":"كل ما كتبته وأجبته في هذا النموذج صحيح على حد علمي. سوف أقوم بتحديث هذا المكتب عندما تكون هناك تغييرات كبيرة.",
            
            "ciagree":"أنا موافق",
            "csignature":"التوقيع",
            "cclear": "مسح",
            "csavesign": "احفظ التوقيع",
            "cprintname": "اسم الطباعة",

            "next":"التالي",

            "cconcenttitle":"نموذج الموافقة",
            "cconsentdisclaimer":"<span class = 'disclaimer'> إخلاء مسؤولية العميل: - </span> أفهم أن المعالجة المثلية وجميع أنواع وأشكال العلاجات التكميلية والشاملة ليست بديلاً عن التشخيص المناسب أو العلاج من قبل ممارس طبي مؤهل. أوافق على أن المعالج لا يمكنه ضمان أي نتائج محددة. أتحمل المسؤولية الكاملة عن سلامتي الشخصية والإبلاغ عن صحتي الجسدية والنفسية إلى طبيبي / استشاري / ممرضتي. أؤكد أن ما ورد أعلاه هو بيان صحيح. لقد قرأت وفهمت إخلاء المسؤولية. عمري 16+.",
            "cconsenttext1":"إذا كان عمرك أقل من 16 عامًا ، يجب على أحد الوالدين أو الوصي التوقيع على النموذج أدناه.",
            "cconsenttext2":"أفهم أن المعلومات التي أُعطيت لي هي الحقيقة. سأخبر المعالج / الممارس / المدرب على الفور بأي تغييرات تطرأ على حالتي الطبية. يعتبر الاستبيان الصحي للعلاج الشامل ، ونموذج الموافقة ، وجميع المعلومات سرية تمامًا ما لم أوافق على مشاركة هذه المعلومات عن طريق إصدار موقع. لقد وافقت ، بعد التشاور والنظر والمناقشة ، على الخضوع لهذا العلاج. إنني أدرك تمامًا أن الخدمات التي أتلقاها هي خدمات ذات طبيعة شاملة ولا تُستخدم كبديل للاستشارة الطبية المهنية والفحص والعلاج. لقد تم شرح الإجراء لي وفهمت طبيعة العلاج. أتفهم تمامًا أن هذا العلاج ليس بديلاً عن العلاج الطبي وقد يستغرق عدة جلسات قبل أن ألاحظ أي فائدة. سيعتمد هذا على نمط حياتي ، والدواء المستمر ، والصحة العامة. أفهم أنه إذا لم أكن صادقًا في التفاصيل الخاصة بي أو أخفقت في تقديم معلومات كافية ذات صلة ، فقد تتأثر نتيجة أي علاج / علاج / فئة سلبًا ، وقد تتعرض صحتي وسلامتي للخطر. أفهم أن المعالج / الممارس لا يدعي أنه يعالج أو يشخص أي حالة طبية بنفس الطريقة التي يستخدمها الطبيب / الطبيب. رأي الممارس هو أنه ذو طبيعة شاملة ومتكاملة وبديلة ، ولا تشكل آرائه المهنية وامتحاناته وتوصياته نصيحة طبية من طبيب / طبيب. أفهم أن الممارس سيحتفظ بجميع المستندات المتعلقة بي (بما في ذلك على سبيل المثال لا الحصر ، التقييمات ، مذكرات الطعام ، النماذج ، أوراق العمل ، الصوت ، النصوص ، الفيديو ، أو الصور) وأي ملاحظات تتعلق بي ، كسجل لـ عملنا معا. لا يمكننا تقديم أي علاج / علاج / فئة دون موافقتك.",
        
            "submit":"تقديم النموذج",
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
            "supplements":"Suppléments",
            "login":"Registrer/Connexion",
            "meetings":"Mes réunions",
            "appts":"Mes rendez-vous",
            "admin":"Admin",
            "account":"Compte",
            "qna":"FAQ",
            "logout":"Déconnecter",
        },

        "title":"Consultation",
        "selecopt":"Sélectionner une option:",
        "meetgreetvis":"Séance d'acceuil",
        "firstvis":"Première visite",
        "followupvis":"Visite de suivi",
        "annualvis":"Visite annuelle",
        "emergencyvis":"Consultation d'urgence",
        "changedelvis":"Modifier/supprimer un rendez-vous",

        "meetgreet":{
            "title":"Séance d'acceuil",
            "step1":"Étape 1",
            "step1text":"Prenez votre rendez-vous",
            "step2":"Étape 2",
            "step2text":"Payer les frais",
            "step3":"Étape 3",
            "step3text":"Nous nous rencontrerons ensuite en ligne à la date et à l'heure convenues pendant 15 minutes.",
            "button":"Programmer la séance d'acceuil",
        },

        "firstvisit":{
            "title":"Première visite",
            "step1":"Étape 1",
            "step1text":"Veuillez <br> remplir un questionnaire sur votre état de santé.",
            "step2":"Étape 2",
            "step2text":"Veuillez remplir le formulaire de consentement pour permettre la réservation de votre session.",
            "step3":"Étape 3",
            "step3text":"Réservez votre session en ligne et recevez une confirmation dans les 24 heures suivant le paiement.",
            "step4":"Étape 4",
            "step4text":"Nous analyserons les données que vous avez fournies dans le questionnaire ainsi que les informations supplémentaires recueillies lors de notre session de discussion Zoom. Dans les 24 heures, je vous prescrirai un traitement pour détoxifier votre corps et développerai un programme adapté à vos besoins de santé spécifiques. ",
        },

        "followup":{
            "title":"Visite de suivi",
            "step1":"Étape 1",
            "step1text":"Prenez votre rendez-vous",
            "step2":"Étape 2",
            "step2text":"Payer les frais",
            "step3":"Étape 3",
            "step3text":"Nous nous rencontrerons ensuite en ligne à la date et à l'heure convenues pendant 15 minutes.",
            "button":"Programmer la visite de suivi",
        },

        "annual":{
            "title":"Visite annuelle",
            "step1":"Étape 1",
            "step1text":"Vous remplirez le questionnaire et le signerez avec le formulaire de consentement.",
            "step2":"Étape 2",
            "step2text":"Prenez votre rendez-vous",
            "step3":"Étape 3",
            "step3text":"Payer les frais",
            "step4":"Étape 4",
            "step4text":"Nous nous rencontrerons ensuite en ligne à la date et à l'heure convenues pendant 15 minutes.",
        },

        "emergency":{
            "title":"Consultation d'urgence",
            "step1":"Étape 1",
            "step1text":"Contactez-moi via un appel téléphonique, ou Whatsapp, ou Zoom",
            "button":"Programmer la consultation d'urgence",
        },

        "form":{
            "formtitle":"FORMULAIRE D'ACCUEIL DU PATIENT - ÉVALUATION HOLISTIQUE",
            "formimportant":"Important : Ce questionnaire est CONFIDENTIEL pour nous aider à déterminer le meilleur plan de traitement pour vous. Veuillez le remplir aussi complètement que possible, même si vous pensez que certaines questions ne concernent pas votre état actuel",
            "formthanks":"Merci.",
            "cfname":"Prénom",
            "cmname":"Deuxième nom",
            "clname":"Nom de famille",
            "ctodaydate":"La date d'aujourd'hui",
            "ccgenders":"Le genre",
            "ccmalegender":"Mâle",
            "cfemalegender":"Femelle",
            "caddress":"Addresse",
            "cstate":"État",
            "czip":"Code Postal",
            "cemail":"E-mail",
            "cdob":"Date de naissance",
            "cbirthnatural":"Né naturellement",
            "cbirthsection":"Ou césarienne",
            "cage":"Âge",
            "cunder18":"Si moins de 18 ans, personne responsable de votre compte",
            'chomephone':"Téléphone fixe",
            "cworkphone":"Téléphone de travail",
            "ccellphone":"Téléphone portable",
            "cmarital":"État civil: ",
            "csingle":"Seul(e)",
            "cmarried":"Marié(e)",
            "cdivorced":"Divorcé(e)",
            "cwidow":"Veuve",
            "csignificant":"Avec un(e) autre significatif(ve)",
            "ccaregiver":"Vous êtes aidant de personnes à charge ?",
            "ccaregiveryes":"Oui",
            "ccaregiverno":"Non",
            "cchildrencare":"Si oui, combien d'enfants ?",
            "cadultcare":"Combien d'adultes ?",
            "coccuptation":"Profession",
            "coccupationlength":"Nombre d'années dans ce type de travail",

            "cpcpdisclaimer":"MÉDECINS / PRESTATAIRES",
            "cpcpprovide":"Médecin de soins primaires (PCP)",
            "cpcp":"Veuillez fournir le nom et le titre de tous les autres praticiens, la ou les affections traitées et la durée pendant laquelle vous avez reçu ce traitement. Veuillez inclure tous les acupuncteurs, massothérapeutes ou homéopathes.",
            "cpcpname":"Nom du praticien",
            "cpcpcondition":"Les conditions",
            "cpcpdot":"Date du traitement",
            "cpcpphone":"Téléphone #",
            "chealthreason":"RAISON DE LA VISITE D'AUJOURD'HUI",
            "chealthconcern":"<span class='disclaimer'>PROBLÈMES DE SANTÉ ACTUELS</span> - Veuillez énumérer vos 3 principaux problèmes de santé par ordre de priorité",
            "chealthconcern2":"HOSPITALISATIONS, CHIRURGIES, INTERVENTIONS, TRANSPLANTATIONS, COMA, PTHESES ET/OU BLESSURES",
            "chealthconcerns2s":"(veuillez inclure les dates)",

            "cmedictitle":"MÉDICAMENTS",
            "cmeddisclaimer":"Veuillez énumérer tous les médicaments que vous prenez actuellement, ainsi que les doses et les raisons médicales pour lesquelles vous les prenez.",
            "cmedictitle3":"Médicaments",
            "cmedreason":"Raison",
            "cmeddatebegan":"Date de début",
            "cmeddose":"Dose",
            "chelps":"Aide ? (Oui ou Non)",
            "csuppltitle":"SUPPLÉMENTS",
            "csupp":"Veuillez énumérer tous les suppléments (y compris les vitamines, les herbes et les minéraux) ainsi que les doses et la raison pour laquelle vous les prenez.",
            "csuppsmall":"Suppléments, vitamines, etc.",
            "csuppreason":"Raison",
            "csuppdatebegan":"Date de début",
            "csuppdose":"Dose",
            "csupphelps":"Aide ? (Oui ou Non)",
            "callergy":"Allergies",

            "cfamhisttitle":"HISTOIRE DE FAMILLE",
            "cfamhist":"Veuillez décrire l'état de santé de votre famille, y compris l'âge actuel ou l'âge au moment du décès, et les antécédents de maladies graves (diabète, maladie cardiaque, maladie, ostéoporose, cancer, allergies, maladie mentale, etc.)",
            "cmember":"Membre",
            "cmember1":"Mère",
            "cmember2":"Père",
            "cmember3":"Frères et sœurs",
            "cmember4":"Enfants",
            "cmember5":"Grand-mère maternelle",
            "cmember6":"Grand-père maternel",
            "cmember7":"Grand-mère paternelle",
            "cmember8":"Grand-père paternel",
            "clivingage":"Vivant ?/Âge",
            "cdiceaseage":"Décédé ?/Âge",
            "cmajorillness":"Maladie grave ou affection chronique",

            "ccheck":"VEUILLEZ VÉRIFIER LES CONDITIONS MÉDICALES SUIVANTES QUI S'APPLIQUENT À VOUS",
            "ccheck1":"Alcoolisme ou toxicomanie",
            "ccheck2":"Arthrite/Maladie articulaire",
            "ccheck3":"Fermeture du sang/Phlébite",
            "ccheck4":"Cancer",
            "ccheck5":"Diabète 2",
            "ccheck6":"Digestif (colite ulcéreuse, Chrohns, etc.)",
            "ccheck7":"Infections fréquentes",
            "ccheck8":"Allergies/Sensibilités (Médicaments, peau, aliments)",
            "ccheck9":"Crise cardiaque, maladie cardiaque",
            "ccheck11":"Insuffisance cardiaque",
            "ccheck12":"Hypertension artérielle",
            "ccheck13":" Élevé de cholestérol",
            "ccheck14":"Maladie du foie, Hépatite",
            "ccheck15":"Maladie pulmonaire (asthme, BPCO)",
            "ccheck16":"Troubles mentaux/ Dépression/ Anxiété, etc.",
            "ccheck17":"Maladie thyroïdienne",
            "ccheck18":"Difficultés urinaires (incontence, infarctus, etc.)",
            "ccheck19":"Autre",

            "cwomen":"SANTÉ DES FEMMES",
            "cwomen1":"Âge aux premières règles",
            "cwomen2":"Durée des règles",
            "cwomen3":"Personnage inhabituel",
            "cwomen4":"Préménopause ?",
            "cwomen5":"Âge aux premières règles",
            "cwomen6":"Nombre de grossesses",
            "cwomen7":"Nombre de naissances naturelles",
            "cwomen8":"Nombre de naissances par césarienne",
            "cwomen9":"Nombre de fausses couches",
            "cwomen10":"Nombre de naissances difficiles",
            "cwomen11":"Nombre d'avortements",
            "cwomen12":"Contrôle des naissances ?",
            "cwomen13":"Quel type ?",
            "cwomen14":"Pertes vaginales ou plaies",
            "cwomen15":"Problèmes de fertilité",
            "cdateMenstrual":"Première date du dernier cycle menstruel",
            "cdatePapSmear":"Date du dernier test Pap",
            "cabnormalfind":"Avez-vous eu des résultats anormaux lors de vos derniers tests ou à tout moment dans le passé ? Veuillez donner des détails",

            "ccmen":"SANTÉ DES HOMMES",
            "ccmen1":"À quelle date était votre dernier examen de la prostate",
            "ccmen2":"Avez-vous : des problèmes de prostate",
            "ccmen3":"Avez-vous : vacestomie",
            "ccmen4":"Test PSA",
            "ccmen5":"Cancer des testicules",
            "ccmen6":"Dysfonctionnement sexuel ou impuissance",
            "ccmen7":"Coloscopie ?",

            "cexp":"VEUILLEZ VÉRIFIER SI VOUS AVEZ ÉVÉNÉ L'UN DE CES SYMPTÔMES <span class='nb'>(PENDANT L'ANNÉE DERNIÈRE)</span>",
            "chidden":"caché",
            "cgen":"GÉNÉRAL",
            "cgen1":"Fièvres",
            "cgen2":"Tremblements",
            "cgen3":"Changement d'appétit",
            "cgen4":"Frissons",
            "cgen5":"Saisies",
            "cgen6":"Fatigue",
            "cgen7":"Sueurs nocturnes",
            "cgen8":"Mauvais sommeil/Insomnie",
            "cgen9":"Transpiration quotidienne",
            "cgen10":"Maux de tête",
            "cgen11":"Saignement ou ecchymose",
            "cgen12":"Changements émotionnels",

            "ccardio":"CARDIOVASCULAIRE",
            "ccardio1":"Étourdissements",
            "ccardio2":"Gonflement des mains",
            "ccardio3":"Physique irrégulier",
            "ccardio4":"Évanouissement",
            "ccardio5":"Difficulté à respirer",
            "ccardio6":"Palpitations",
            "ccardio7":"Hypertension artérielle",
            "ccardio8":"Sueurs froides",
            "ccardio9":"Douleur à la poitrine",
            "ccardio10":"Gonflement des pieds",
            "ccardio11":"Phlébite",
            "ccardio12":"Autre",

            "cresp":"RESPIRATOIRE",
            "cresp1":"Toux",
            "cresp2":"Douleur avec respirations profondes",
            "cresp3":"Difficulté à respirer",
            "cresp4":"Bronchite",
            "cresp5":"Essoufflement",
            "cresp6":"Facile à essouffler à l'effort ou en position allongée",
            "cresp7":"Tousser du sang",
            "cresp8":"Production de Phelgme",

            "cgastro":"GASTRO-INTESTINAL",
            "cgastro1":"Nausée",
            "cgastro2":"Douleurs/Crampes Adbominales",
            "cgastro3":"Vomissements",
            "cgastro4":"Constipation",
            "cgastro5":"Indigestion / reflux",
            "cgastro6":"Diarrhée",
            "cgastro7":"Sang dans les selles",
            "cgastro8":"Hernie",
            "cgastro9":"Hémarroïdes",

            "cgenito":"GENITO-RINAIRE",
            "cgenito1":"Douleur sur la miction",
            "cgenito2":"Diminution de l'urine",
            "cgenito3":"Calculs rénaux",
            "cgenito4":"Miction urgente",
            "cgenito5":"Sang dans l'urine",
            "cgenito6":"Se réveiller avec l'urine.",
            "cgenito61":"Fréquence ?",
            "cgenito7":"Miction fréquente",
            "cgenito8":"Impossible de retenir l'urine",

            "cneuro":"NEUROPSYCHOLOGIQUE",
            "cneuro1":"Zones d'engourdissement",
            "cneuro2":"Anxiété",
            "cneuro3":"Manque de coordination",
            "cneuro4":"Mauvaise mémoire",
            "cneuro5":"Étourdissements",
            "cneuro6":"Perte d'équilibre",
            "cneuro7":"Facile à mettre en colère",
            "cneuro8":"Maux de tête",
            "cneuro9":"Évanouissement",
            "cneuro10":"Dépression",
            "cneuro11":"Migraines",
            "cneuro12":"Manie",
            "cneuro13":"Susceptible au stress",

            "cmuskulo":"MUSCULO-SQUELETTIQUE",
            "cmuskulo1":"Faiblesse musculaire",
            "cmuskulo2":"Entorses récentes",
            "cmuskulo3":"Crampes musculaires",
            "cmuskulo4":"Spasmes",
            "cmuskulo5":"Douleurs articulaires",
            "cmuskulo6":"Blessures ou chutes",
            "cmuskulo7":"Faiblesse localisée",
            "cmuskulo8":"Maux généraux",
            "cmuskulo9":"Instabilité articulaire",

            "chabit":"HABITUDES ET MODE DE VIE",
            "chabit1":"1",
            "chabit2":"2",
            "chabit3":"3",
            "chabit4":"4",
            "chabit5":"5",
            "chabit6":"6",
            "chabit7":"7",
            "chabit8":"8",
            "chabit9":"9",
            "chabit10":"10",
            
            "csmoke":"Tu fumes ?",
            "cifsmoke":"Si oui, quoi ?",
            "chowmuchsmoke":"Combien par jour ?",
            "csincesmoke":"Depuis quand ?",
            "csmokeattempt":"Combien de tentatives avez-vous faites pour arrêter de fumer ?",
            "calcohol":"Buvez-vous de l'alcool ?",
            "cifalcohol":"Si oui, quoi ?",
            "chowmuchalcohol":"Combien?",
            "csincealcohol":"Depuis quand ?",
            "cexercise":"EXERCICE",
            "cexerciseregular":"Faites-vous du sport régulièrement ?",
            "cifexercise":"Si oui, décrivez ce que vous faites",

            "cnutri":"NUTRITION",
            "cnutriconcern":"Quelles sont vos principales préoccupations nutritionnelles ?",
            "cnutriskip":"Combien de repas mangez-vous généralement par jour avec votre animal de compagnie ? Sautez-vous des repas ?",
            "cnutrifruit":"Combien de portions de fruits consommez-vous par jour ?",
            "cnutriveg":"Combien de portions de légumes consommez-vous par jour ?",
            "cnutridiet":"Suivez-vous actuellement un régime particulier ? Quels aliments évitez-vous ?",
            "cnutrigluten":"Êtes-vous végétarien ou sans gluten ?",
            "cnutricoffee":"Tu bois du café ?",
            "cnutricoffeemuch":"Si oui, combien par jour ?",
            "csoda":"Tu bois des sodas ?",
            "csodareg":"Régulier",
            "csodadiet":"Régime",
            "csodanone":"Aucun",
            "cifsoda":"Si oui, à quelle fréquence ?",

            "ceatinghabit":"Avez-vous des habitudes alimentaires régulières ?",
            "ceatinghabityes":"Oui",
            "ceatinghabitno":"Non",
            "cappetite":"Avez-vous un bon appétit ?",
            "cappetiteyes":"Oui",
            "cappetiteno":"Non",
            "ceatmore":"Mangez-vous plus lorsque vous êtes stressé ou déprimé ?",
            "ceatmoreyes":"Oui",
            "ceatmoreno":"Non",
            "cenergydrop":"Ressentez-vous des baisses soudaines d'énergie ?",
            "cenergydropyes":"Oui",
            "cenergydropno":"Non",
            "cenergydropif":"Si oui, quand ?",
            "cweightyearago":"Quel était votre poids il y a un an ?",
            "cweightmost":"Quel est le maximum que vous ayez jamais pesé ?",
            "cweightwhen":"Quand ?",
            "cbowel":"À quelle fréquence allez-vous à la selle ?",

            "csleeprelax":"SOMMEIL / DETENTE",
            "csleephours":"Combien d'heures dormez-vous habituellement par nuit ? À quelle heure vous couchez-vous ?",
            "csleeprefresh":"Vous réveillez-vous reposé ?",
            
            "cwritten":"Tout ce que j'ai écrit et répondu dans ce formulaire est vrai au meilleur de ma connaissance. Je mettrai à jour ce bureau lorsqu'il y aura des changements importants.",
            
            "ciagree":"J'accepte",
            "csignature":"Signature",
            "cclear":"Effacer",
            "csavesign":"Enregistrer la signature",
            "cprintname":"Imprimer le nom",

            "next":"Suivant",

            "cconcenttitle":"Formulaire de consentement",
            "cconsentdisclaimer":"<span class='disclaimer'>AVIS DE NON-RESPONSABILITÉ : -</span> Je comprends que l'homéopathie et tous les types et formes de thérapies complémentaires et holistiques ne remplacent pas un diagnostic ou un traitement approprié par un médecin qualifié. J'accepte que le thérapeute ne puisse garantir aucun résultat spécifique. J'accepte l'entière responsabilité de mon propre bien-être et de signaler ma santé physique et psychologique à mon propre médecin généraliste/consultant/infirmier. Je confirme que ce qui précède est une affirmation véridique. J'ai lu et compris la clause de non-responsabilité. Je suis âgé de 16 ans et plus.",
            "cconsenttext1":"Si vous avez moins de 16 ans, un parent ou un tuteur doit signer ce formulaire ci-dessous.",
            "cconsenttext2":`Je comprends que les informations qui m'ont été données sont la vérité. J'informerai immédiatement mon thérapeute/praticien/formateur de tout changement de mon état de santé. La Santé Thérapie Holistique Le questionnaire, le formulaire de consentement et toutes les informations sont strictement confidentiels, sauf si je consens à partager ces informations au moyen d'une décharge signée. J'ai, après consultation, considération, et discussion, ont accepté de suivre cette thérapie. Je suis pleinement conscient que les services que je reçois sont ceux de nature holistique et ne se substituent pas à un avis médical professionnel, examen, traitement. On m'a expliqué la procédure et je comprends la nature du traitement. Je comprends parfaitement que ce traitement ne remplace pas un traitement médical et cela peut prendre plusieurs séances avant que je remarque un quelconque bénéfice. Cela dépendra de mon style de vie, sur-prendre des médicaments et l'état de santé général. Je comprends que si j'ai menti avec mes coordonnées ou n'ont pas fourni suffisamment d'informations pertinentes, le résultat de toute thérapie/traitement/classe pourrait être affectée négativement, et ma santé et mon bien-être pourraient être mis en danger. je comprends le thérapeute / praticien ne prétend pas guérir ou diagnostiquer une condition médicale dans le même manière en tant que médecin / médecin. L'avis du praticien est celui d'une approche holistique, complémentaire et caractère alternatif et ses avis, examens et recommandations professionnels ne NE constituent PAS l'avis médical d'un médecin. Je comprends que le praticien conserver tous les documents qui me concernent (y compris, mais sans s'y limiter, les évaluations, les journaux alimentaires, formulaires, feuilles de calcul, audio, transcriptions, vidéo ou images) et toutes les notes qui me concernent, en tant que compte rendu de notre collaboration. Nous ne sommes pas en mesure de fournir une thérapie/un traitement/un cours sans votre consentement.`,
        
            "submit":"Soumettre le formulaire",
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

    consult.getElementsByTagName("h1")[0].innerText = data[attr].title;
    consult.getElementsByTagName("h2")[0].innerText = data[attr].selecopt;
    consult.getElementsByTagName("a")[0].innerText = data[attr].meetgreetvis;
    consult.getElementsByTagName("a")[1].innerText = data[attr].firstvis;
    consult.getElementsByTagName("a")[2].innerText = data[attr].followupvis;
    consult.getElementsByTagName("a")[3].innerText = data[attr].annualvis;
    consult.getElementsByTagName("a")[4].innerText = data[attr].emergencyvis;
    consult.getElementsByTagName("a")[5].innerText = data[attr].changedelvis;

    if(meetvisit){
        meetvisit.getElementsByTagName("h2")[0].innerText = data[attr].meetgreet.title;

        meetvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].meetgreet.step1;
        meetvisit.getElementsByTagName("p")[0].innerHTML = data[attr].meetgreet.step1text;
        meetvisit.getElementsByTagName("h2")[2].innerHTML = data[attr].meetgreet.step2;
        meetvisit.getElementsByTagName("p")[1].innerHTML = data[attr].meetgreet.step2text;
        meetvisit.getElementsByTagName("h2")[3].innerHTML = data[attr].meetgreet.step3;
        meetvisit.getElementsByTagName("p")[2].innerHTML = data[attr].meetgreet.step3text;
        meetvisit.getElementsByTagName("a")[0].innerText = data[attr].meetgreet.button;
    }
   
    if(emergvisit){
        emergvisit.getElementsByTagName("h2")[0].innerText = data[attr].emergency.title;

        emergvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].emergency.step1;
        emergvisit.getElementsByTagName("p")[0].innerHTML = data[attr].emergency.step1text;
        emergvisit.getElementsByTagName("a")[0].innerText = data[attr].emergency.button;
    }

    if(annualvisit){
        annualvisit.getElementsByTagName("h2")[0].innerText = data[attr].annual.title;

        annualvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].annual.step1;
        annualvisit.getElementsByTagName("p")[0].innerHTML = data[attr].annual.step1text;
        annualvisit.getElementsByTagName("h2")[2].innerHTML = data[attr].annual.step2;
        annualvisit.getElementsByTagName("p")[1].innerHTML = data[attr].annual.step2text;
        annualvisit.getElementsByTagName("h2")[3].innerHTML = data[attr].annual.step3;
        annualvisit.getElementsByTagName("p")[2].innerHTML = data[attr].annual.step3text;
        annualvisit.getElementsByTagName("h2")[4].innerHTML = data[attr].annual.step4;
        annualvisit.getElementsByTagName("p")[3].innerHTML = data[attr].annual.step4text;

        annualvisit.getElementsByTagName("h2")[5].innerText = data[attr].form.formtitle;
        annualvisit.getElementsByTagName("p")[4].innerText = data[attr].form.formimportant;
        annualvisit.getElementsByTagName("p")[5].innerText = data[attr].form.formthanks;

        annualvisit.getElementsByTagName("p")[6].innerText = data[attr].form.cfname;
        annualvisit.getElementsByTagName("p")[7].innerText = data[attr].form.cmname;
        annualvisit.getElementsByTagName("p")[8].innerText = data[attr].form.clname;

        annualvisit.getElementsByTagName("p")[9].innerText = data[attr].form.ctodaydate;

        annualvisit.getElementsByTagName("p")[10].innerText = data[attr].form.ccgenders;
        annualvisit.getElementsByTagName("p")[11].innerText = data[attr].form.ccmalegender;
        annualvisit.getElementsByTagName("p")[12].innerText = data[attr].form.cfemalegender;

        annualvisit.getElementsByTagName("p")[13].innerText = data[attr].form.caddress;
        annualvisit.getElementsByTagName("p")[14].innerText = data[attr].form.cstate;
        annualvisit.getElementsByTagName("p")[15].innerText = data[attr].form.czip;
        annualvisit.getElementsByTagName("p")[16].innerText = data[attr].form.cemail;

        annualvisit.getElementsByTagName("p")[17].innerText = data[attr].form.cdob;
        annualvisit.getElementsByTagName("p")[18].innerText = data[attr].form.cbirthnatural;
        annualvisit.getElementsByTagName("p")[19].innerText = data[attr].form.cbirthsection;
        annualvisit.getElementsByTagName("p")[20].innerText = data[attr].form.cage;

        annualvisit.getElementsByTagName("p")[21].innerText = data[attr].form.cunder18;
        annualvisit.getElementsByTagName("p")[22].innerText = data[attr].form.chomephone;
        annualvisit.getElementsByTagName("p")[23].innerText = data[attr].form.cworkphone;
        annualvisit.getElementsByTagName("p")[24].innerText = data[attr].form.ccellphone;

        annualvisit.getElementsByTagName("p")[25].innerText = data[attr].form.cmarital;
        annualvisit.getElementsByTagName("p")[26].innerText = data[attr].form.csingle;
        annualvisit.getElementsByTagName("p")[27].innerText = data[attr].form.cmarried;
        annualvisit.getElementsByTagName("p")[28].innerText = data[attr].form.cdivorced;
        annualvisit.getElementsByTagName("p")[29].innerText = data[attr].form.cwidow;
        annualvisit.getElementsByTagName("p")[30].innerText = data[attr].form.csignificant;

        annualvisit.getElementsByTagName("p")[31].innerText = data[attr].form.ccaregiver;
        annualvisit.getElementsByTagName("p")[32].innerText = data[attr].form.ccaregiveryes;
        annualvisit.getElementsByTagName("p")[33].innerText = data[attr].form.ccaregiverno;
        annualvisit.getElementsByTagName("p")[34].innerText = data[attr].form.cchildrencare;
        annualvisit.getElementsByTagName("p")[35].innerText = data[attr].form.cadultcare;
        annualvisit.getElementsByTagName("p")[36].innerText = data[attr].form.coccuptation;
        annualvisit.getElementsByTagName("p")[37].innerText = data[attr].form.coccupationlength;

        annualvisit.getElementsByTagName("p")[38].innerText = data[attr].form.cpcpdisclaimer;
        annualvisit.getElementsByTagName("p")[39].innerText = data[attr].form.cpcpprovide;
        annualvisit.getElementsByTagName("p")[40].innerText = data[attr].form.cpcp;
        annualvisit.getElementsByTagName("p")[41].innerText = data[attr].form.cpcpname;
        annualvisit.getElementsByTagName("p")[42].innerText = data[attr].form.cpcpcondition;
        annualvisit.getElementsByTagName("p")[43].innerText = data[attr].form.cpcpdot;
        annualvisit.getElementsByTagName("p")[44].innerText = data[attr].form.cpcpphone;
        annualvisit.getElementsByTagName("p")[45].innerText = data[attr].form.chealthreason;
        annualvisit.getElementsByTagName("p")[46].innerHTML = data[attr].form.chealthconcern;
        annualvisit.getElementsByTagName("p")[47].innerHTML = data[attr].form.chealthconcern2;
        annualvisit.getElementsByClassName("nb")[0].innerText = data[attr].form.chealthconcerns2s;

        annualvisit.getElementsByTagName("p")[48].innerText = data[attr].form.cmedictitle;
        annualvisit.getElementsByTagName("p")[49].innerText = data[attr].form.cmeddisclaimer;
        annualvisit.getElementsByTagName("p")[50].innerText = data[attr].form.cmedictitle3;
        annualvisit.getElementsByTagName("p")[51].innerText = data[attr].form.cmedreason;
        annualvisit.getElementsByTagName("p")[52].innerText = data[attr].form.cmeddatebegan;
        annualvisit.getElementsByTagName("p")[53].innerText = data[attr].form.cmeddose;
        annualvisit.getElementsByTagName("p")[54].innerText = data[attr].form.chelps;
        annualvisit.getElementsByTagName("p")[55].innerText = data[attr].form.csuppltitle;
        annualvisit.getElementsByTagName("p")[56].innerText = data[attr].form.csupp;
        annualvisit.getElementsByTagName("p")[57].innerText = data[attr].form.csuppsmall;
        annualvisit.getElementsByTagName("p")[58].innerText = data[attr].form.csuppreason;
        annualvisit.getElementsByTagName("p")[59].innerText = data[attr].form.csuppdatebegan;
        annualvisit.getElementsByTagName("p")[60].innerText = data[attr].form.csuppdose;
        annualvisit.getElementsByTagName("p")[61].innerText = data[attr].form.csupphelps;
        annualvisit.getElementsByTagName("p")[62].innerText = data[attr].form.callergy;

        annualvisit.getElementsByTagName("p")[63].innerText = data[attr].form.cfamhisttitle;
        annualvisit.getElementsByTagName("p")[64].innerText = data[attr].form.cfamhist;
        annualvisit.getElementsByTagName("p")[65].innerText = data[attr].form.cmember;
        annualvisit.getElementsByTagName("input")[86].placeholder = data[attr].form.cmember1;
        annualvisit.getElementsByTagName("input")[87].placeholder = data[attr].form.cmember2;
        annualvisit.getElementsByTagName("input")[88].placeholder = data[attr].form.cmember3;
        annualvisit.getElementsByTagName("input")[89].placeholder = data[attr].form.cmember4;
        annualvisit.getElementsByTagName("input")[90].placeholder = data[attr].form.cmember5;
        annualvisit.getElementsByTagName("input")[91].placeholder = data[attr].form.cmember6;
        annualvisit.getElementsByTagName("input")[92].placeholder = data[attr].form.cmember7;
        annualvisit.getElementsByTagName("input")[93].placeholder = data[attr].form.cmember8;
        annualvisit.getElementsByTagName("p")[66].innerText = data[attr].form.clivingage;
        annualvisit.getElementsByTagName("p")[67].innerText = data[attr].form.cdiceaseage;
        annualvisit.getElementsByTagName("p")[68].innerText = data[attr].form.cmajorillness;

        annualvisit.getElementsByTagName("p")[69].innerText = data[attr].form.ccheck;
        annualvisit.getElementsByTagName("p")[70].innerText = data[attr].form.ccheck1;
        annualvisit.getElementsByTagName("p")[71].innerText = data[attr].form.ccheck2;
        annualvisit.getElementsByTagName("p")[72].innerText = data[attr].form.ccheck3;
        annualvisit.getElementsByTagName("p")[73].innerText = data[attr].form.ccheck4;
        annualvisit.getElementsByTagName("p")[74].innerText = data[attr].form.ccheck5;
        annualvisit.getElementsByTagName("p")[75].innerText = data[attr].form.ccheck6;
        annualvisit.getElementsByTagName("p")[76].innerText = data[attr].form.ccheck7;
        annualvisit.getElementsByTagName("p")[77].innerText = data[attr].form.ccheck8;
        annualvisit.getElementsByTagName("p")[78].innerText = data[attr].form.ccheck9;
        annualvisit.getElementsByTagName("p")[79].innerText = data[attr].form.ccheck10;
        annualvisit.getElementsByTagName("p")[80].innerText = data[attr].form.ccheck11;
        annualvisit.getElementsByTagName("p")[81].innerText = data[attr].form.ccheck12;
        annualvisit.getElementsByTagName("p")[82].innerText = data[attr].form.ccheck13;
        annualvisit.getElementsByTagName("p")[83].innerText = data[attr].form.ccheck14;
        annualvisit.getElementsByTagName("p")[84].innerText = data[attr].form.ccheck15;
        annualvisit.getElementsByTagName("p")[85].innerText = data[attr].form.ccheck16;
        annualvisit.getElementsByTagName("p")[86].innerText = data[attr].form.ccheck17;
        annualvisit.getElementsByTagName("p")[87].innerText = data[attr].form.ccheck18;
        annualvisit.getElementsByTagName("p")[88].innerText = data[attr].form.ccheck19;
        
        annualvisit.getElementsByTagName("p")[89].innerText = data[attr].form.cwomen;
        annualvisit.getElementsByTagName("p")[90].innerText = data[attr].form.cwomen1;
        annualvisit.getElementsByTagName("p")[91].innerText = data[attr].form.cwomen2;
        annualvisit.getElementsByTagName("p")[92].innerText = data[attr].form.cwomen3;
        annualvisit.getElementsByTagName("p")[93].innerText = data[attr].form.cwomen4;
        annualvisit.getElementsByTagName("p")[94].innerText = data[attr].form.cwomen5;
        annualvisit.getElementsByTagName("p")[95].innerText = data[attr].form.cwomen6;
        annualvisit.getElementsByTagName("p")[96].innerText = data[attr].form.cwomen7;
        annualvisit.getElementsByTagName("p")[97].innerText = data[attr].form.cwomen8;
        annualvisit.getElementsByTagName("p")[98].innerText = data[attr].form.cwomen9;
        annualvisit.getElementsByTagName("p")[99].innerText = data[attr].form.cwomen10;
        annualvisit.getElementsByTagName("p")[100].innerText = data[attr].form.cwomen11;
        annualvisit.getElementsByTagName("p")[101].innerText = data[attr].form.cwomen12;
        annualvisit.getElementsByTagName("p")[102].innerText = data[attr].form.cwomen13;
        annualvisit.getElementsByTagName("p")[103].innerText = data[attr].form.cwomen14;
        annualvisit.getElementsByTagName("p")[104].innerText = data[attr].form.cwomen15;
        annualvisit.getElementsByTagName("p")[105].innerText = data[attr].form.cdateMenstrual;
        annualvisit.getElementsByTagName("p")[106].innerText = data[attr].form.cdatePapSmear;
        annualvisit.getElementsByTagName("p")[107].innerText = data[attr].form.cabnormalfind;

        annualvisit.getElementsByTagName("p")[108].innerText = data[attr].form.ccmen;
        annualvisit.getElementsByTagName("p")[109].innerText = data[attr].form.ccmen1;
        annualvisit.getElementsByTagName("p")[110].innerText = data[attr].form.ccmen2;
        annualvisit.getElementsByTagName("p")[111].innerText = data[attr].form.ccmen3;
        annualvisit.getElementsByTagName("p")[112].innerText = data[attr].form.ccmen4;
        annualvisit.getElementsByTagName("p")[113].innerText = data[attr].form.ccmen5;
        annualvisit.getElementsByTagName("p")[114].innerText = data[attr].form.ccmen6;
        annualvisit.getElementsByTagName("p")[115].innerText = data[attr].form.ccmen7;

        annualvisit.getElementsByTagName("p")[116].innerHTML = data[attr].form.cexp;
        annualvisit.getElementsByTagName("p")[117].innerText = data[attr].form.cgen;
        annualvisit.getElementsByTagName("p")[118].innerText = data[attr].form.cgen1;
        annualvisit.getElementsByTagName("p")[119].innerText = data[attr].form.cgen2;
        annualvisit.getElementsByTagName("p")[120].innerText = data[attr].form.cgen3;
        annualvisit.getElementsByTagName("p")[121].innerText = data[attr].form.cgen4;
        annualvisit.getElementsByTagName("p")[122].innerText = data[attr].form.cgen5;
        annualvisit.getElementsByTagName("p")[123].innerText = data[attr].form.cgen6;
        annualvisit.getElementsByTagName("p")[124].innerText = data[attr].form.cgen7;
        annualvisit.getElementsByTagName("p")[125].innerText = data[attr].form.cgen8;
        annualvisit.getElementsByTagName("p")[126].innerText = data[attr].form.cgen9;
        annualvisit.getElementsByTagName("p")[127].innerText = data[attr].form.cgen10;
        annualvisit.getElementsByTagName("p")[128].innerText = data[attr].form.cgen11;
        annualvisit.getElementsByTagName("p")[129].innerText = data[attr].form.cgen12;

        annualvisit.getElementsByTagName("p")[130].innerText = data[attr].form.chidden;

        annualvisit.getElementsByTagName("p")[131].innerText = data[attr].form.ccardio;
        annualvisit.getElementsByTagName("p")[132].innerText = data[attr].form.ccardio1;
        annualvisit.getElementsByTagName("p")[133].innerText = data[attr].form.ccardio2;
        annualvisit.getElementsByTagName("p")[134].innerText = data[attr].form.ccardio3;
        annualvisit.getElementsByTagName("p")[135].innerText = data[attr].form.ccardio4;
        annualvisit.getElementsByTagName("p")[136].innerText = data[attr].form.ccardio5;
        annualvisit.getElementsByTagName("p")[137].innerText = data[attr].form.ccardio6;
        annualvisit.getElementsByTagName("p")[138].innerText = data[attr].form.ccardio7;
        annualvisit.getElementsByTagName("p")[139].innerText = data[attr].form.ccardio8;
        annualvisit.getElementsByTagName("p")[140].innerText = data[attr].form.ccardio9;
        annualvisit.getElementsByTagName("p")[141].innerText = data[attr].form.ccardio10;
        annualvisit.getElementsByTagName("p")[142].innerText = data[attr].form.ccardio11;
        annualvisit.getElementsByTagName("p")[143].innerText = data[attr].form.ccardio12;

        annualvisit.getElementsByTagName("p")[144].innerText = data[attr].form.chidden;

        annualvisit.getElementsByTagName("p")[145].innerText = data[attr].form.cresp;
        annualvisit.getElementsByTagName("p")[146].innerText = data[attr].form.cresp1;
        annualvisit.getElementsByTagName("p")[147].innerText = data[attr].form.cresp2;
        annualvisit.getElementsByTagName("p")[148].innerText = data[attr].form.cresp3;
        annualvisit.getElementsByTagName("p")[149].innerText = data[attr].form.cresp4;
        annualvisit.getElementsByTagName("p")[150].innerText = data[attr].form.cresp5;
        annualvisit.getElementsByTagName("p")[151].innerText = data[attr].form.cresp6;
        annualvisit.getElementsByTagName("p")[152].innerText = data[attr].form.cresp7;
        annualvisit.getElementsByTagName("p")[153].innerText = data[attr].form.cresp8;

        annualvisit.getElementsByTagName("p")[154].innerText = data[attr].form.chidden;

        annualvisit.getElementsByTagName("p")[155].innerText = data[attr].form.cgastro;
        annualvisit.getElementsByTagName("p")[156].innerText = data[attr].form.cgastro1;
        annualvisit.getElementsByTagName("p")[157].innerText = data[attr].form.cgastro2;
        annualvisit.getElementsByTagName("p")[158].innerText = data[attr].form.cgastro3;
        annualvisit.getElementsByTagName("p")[159].innerText = data[attr].form.cgastro4;
        annualvisit.getElementsByTagName("p")[160].innerText = data[attr].form.cgastro5;
        annualvisit.getElementsByTagName("p")[161].innerText = data[attr].form.cgastro6;
        annualvisit.getElementsByTagName("p")[162].innerText = data[attr].form.cgastro7;
        annualvisit.getElementsByTagName("p")[163].innerText = data[attr].form.cgastro8;
        annualvisit.getElementsByTagName("p")[164].innerText = data[attr].form.cgastro9;

        annualvisit.getElementsByTagName("p")[165].innerText = data[attr].form.chidden;

        annualvisit.getElementsByTagName("p")[166].innerText = data[attr].form.cgenito;
        annualvisit.getElementsByTagName("p")[167].innerText = data[attr].form.cgenito1;
        annualvisit.getElementsByTagName("p")[168].innerText = data[attr].form.cgenito2;
        annualvisit.getElementsByTagName("p")[169].innerText = data[attr].form.cgenito3;
        annualvisit.getElementsByTagName("p")[170].innerText = data[attr].form.cgenito4;
        annualvisit.getElementsByTagName("p")[171].innerText = data[attr].form.cgenito5;
        annualvisit.getElementsByTagName("p")[172].innerText = data[attr].form.cgenito6;
        annualvisit.getElementsByTagName("p")[173].innerText = data[attr].form.cgenito61;
        annualvisit.getElementsByTagName("p")[174].innerText = data[attr].form.cgenito7;
        annualvisit.getElementsByTagName("p")[175].innerText = data[attr].form.cgenito8;

        annualvisit.getElementsByTagName("p")[176].innerText = data[attr].form.chidden;

        annualvisit.getElementsByTagName("p")[177].innerText = data[attr].form.cneuro;
        annualvisit.getElementsByTagName("p")[178].innerText = data[attr].form.cneuro1;
        annualvisit.getElementsByTagName("p")[179].innerText = data[attr].form.cneuro2;
        annualvisit.getElementsByTagName("p")[180].innerText = data[attr].form.cneuro3;
        annualvisit.getElementsByTagName("p")[181].innerText = data[attr].form.cneuro4;
        annualvisit.getElementsByTagName("p")[182].innerText = data[attr].form.cneuro5;
        annualvisit.getElementsByTagName("p")[183].innerText = data[attr].form.cneuro6;
        annualvisit.getElementsByTagName("p")[184].innerText = data[attr].form.cneuro7;
        annualvisit.getElementsByTagName("p")[185].innerText = data[attr].form.cneuro8;
        annualvisit.getElementsByTagName("p")[186].innerText = data[attr].form.cneuro9;
        annualvisit.getElementsByTagName("p")[187].innerText = data[attr].form.cneuro10;
        annualvisit.getElementsByTagName("p")[188].innerText = data[attr].form.cneuro11;
        annualvisit.getElementsByTagName("p")[189].innerText = data[attr].form.cneuro12;
        annualvisit.getElementsByTagName("p")[190].innerText = data[attr].form.cneuro13;

        annualvisit.getElementsByTagName("p")[191].innerText = data[attr].form.chidden;

        annualvisit.getElementsByTagName("p")[192].innerText = data[attr].form.cmuskulo;
        annualvisit.getElementsByTagName("p")[193].innerText = data[attr].form.cmuskulo1;
        annualvisit.getElementsByTagName("p")[194].innerText = data[attr].form.cmuskulo2;
        annualvisit.getElementsByTagName("p")[195].innerText = data[attr].form.cmuskulo3;
        annualvisit.getElementsByTagName("p")[196].innerText = data[attr].form.cmuskulo4;
        annualvisit.getElementsByTagName("p")[197].innerText = data[attr].form.cmuskulo5;
        annualvisit.getElementsByTagName("p")[198].innerText = data[attr].form.cmuskulo6;
        annualvisit.getElementsByTagName("p")[199].innerText = data[attr].form.cmuskulo7;
        annualvisit.getElementsByTagName("p")[200].innerText = data[attr].form.cmuskulo8;
        annualvisit.getElementsByTagName("p")[201].innerText = data[attr].form.cmuskulo9;

        annualvisit.getElementsByTagName("p")[202].innerText = data[attr].form.chabit;
        annualvisit.getElementsByTagName("p")[203].innerText = data[attr].form.chabit1;
        annualvisit.getElementsByTagName("p")[204].innerText = data[attr].form.chabit2;
        annualvisit.getElementsByTagName("p")[205].innerText = data[attr].form.chabit3;
        annualvisit.getElementsByTagName("p")[206].innerText = data[attr].form.chabit4;
        annualvisit.getElementsByTagName("p")[207].innerText = data[attr].form.chabit5;
        annualvisit.getElementsByTagName("p")[208].innerText = data[attr].form.chabit6;
        annualvisit.getElementsByTagName("p")[209].innerText = data[attr].form.chabit7;
        annualvisit.getElementsByTagName("p")[210].innerText = data[attr].form.chabit8;
        annualvisit.getElementsByTagName("p")[211].innerText = data[attr].form.chabit9;
        annualvisit.getElementsByTagName("p")[212].innerText = data[attr].form.chabit10;

        annualvisit.getElementsByTagName("p")[213].innerText = data[attr].form.csmoke;
        annualvisit.getElementsByTagName("p")[214].innerText = data[attr].form.cifsmoke;
        annualvisit.getElementsByTagName("p")[215].innerText = data[attr].form.chowmuchsmoke;
        annualvisit.getElementsByTagName("p")[216].innerText = data[attr].form.csincesmoke;
        annualvisit.getElementsByTagName("p")[217].innerText = data[attr].form.csmokeattempt;
        annualvisit.getElementsByTagName("p")[218].innerText = data[attr].form.calcohol;
        annualvisit.getElementsByTagName("p")[219].innerText = data[attr].form.cifalcohol;
        annualvisit.getElementsByTagName("p")[220].innerText = data[attr].form.chowmuchalcohol;
        annualvisit.getElementsByTagName("p")[221].innerText = data[attr].form.csincealcohol;
        annualvisit.getElementsByTagName("p")[222].innerText = data[attr].form.cexercise;
        annualvisit.getElementsByTagName("p")[223].innerText = data[attr].form.cexerciseregular;
        annualvisit.getElementsByTagName("p")[224].innerText = data[attr].form.cifexercise;

        annualvisit.getElementsByTagName("p")[225].innerText = data[attr].form.cnutri;
        annualvisit.getElementsByTagName("p")[226].innerText = data[attr].form.cnutriconcern;
        annualvisit.getElementsByTagName("p")[227].innerText = data[attr].form.cnutriskip;
        annualvisit.getElementsByTagName("p")[228].innerText = data[attr].form.cnutrifruit;
        annualvisit.getElementsByTagName("p")[229].innerText = data[attr].form.cnutriveg;
        annualvisit.getElementsByTagName("p")[230].innerText = data[attr].form.cnutridiet;
        annualvisit.getElementsByTagName("p")[231].innerText = data[attr].form.cnutrigluten;
        annualvisit.getElementsByTagName("p")[232].innerText = data[attr].form.cnutricoffee;
        annualvisit.getElementsByTagName("p")[233].innerText = data[attr].form.cnutricoffeemuch;
        annualvisit.getElementsByTagName("p")[234].innerText = data[attr].form.csoda;
        annualvisit.getElementsByTagName("p")[235].innerText = data[attr].form.csodareg;
        annualvisit.getElementsByTagName("p")[236].innerText = data[attr].form.csodadiet;
        annualvisit.getElementsByTagName("p")[237].innerText = data[attr].form.csodanone;
        annualvisit.getElementsByTagName("p")[238].innerText = data[attr].form.cifsoda;

        annualvisit.getElementsByTagName("p")[239].innerText = data[attr].form.ceatinghabit;
        annualvisit.getElementsByTagName("p")[240].innerText = data[attr].form.ceatinghabityes;
        annualvisit.getElementsByTagName("p")[241].innerText = data[attr].form.ceatinghabitno;
        annualvisit.getElementsByTagName("p")[242].innerText = data[attr].form.cappetite;
        annualvisit.getElementsByTagName("p")[243].innerText = data[attr].form.cappetiteyes;
        annualvisit.getElementsByTagName("p")[244].innerText = data[attr].form.cappetiteno;
        annualvisit.getElementsByTagName("p")[245].innerText = data[attr].form.ceatmore;
        annualvisit.getElementsByTagName("p")[246].innerText = data[attr].form.ceatmoreyes;
        annualvisit.getElementsByTagName("p")[247].innerText = data[attr].form.ceatmoreno;
        annualvisit.getElementsByTagName("p")[248].innerText = data[attr].form.cenergydrop;
        annualvisit.getElementsByTagName("p")[249].innerText = data[attr].form.cenergydropyes;
        annualvisit.getElementsByTagName("p")[250].innerText = data[attr].form.cenergydropno;
        annualvisit.getElementsByTagName("p")[251].innerText = data[attr].form.cenergydropif;
        annualvisit.getElementsByTagName("p")[252].innerText = data[attr].form.cweightyearago;
        annualvisit.getElementsByTagName("p")[253].innerText = data[attr].form.cweightmost;
        annualvisit.getElementsByTagName("p")[254].innerText = data[attr].form.cweightwhen;
        annualvisit.getElementsByTagName("p")[255].innerText = data[attr].form.cbowel;

        annualvisit.getElementsByTagName("p")[256].innerText = data[attr].form.csleeprelax;
        annualvisit.getElementsByTagName("p")[257].innerText = data[attr].form.csleephours;
        annualvisit.getElementsByTagName("p")[258].innerText = data[attr].form.csleeprefresh;

        annualvisit.getElementsByTagName("p")[259].innerText = data[attr].form.cwritten;

        annualvisit.getElementsByTagName("p")[260].innerText = data[attr].form.ciagree;
        annualvisit.getElementsByTagName("h4")[0].innerText = data[attr].form.csignature;
        annualvisit.getElementsByTagName("h4")[1].innerText = data[attr].form.cclear;
        annualvisit.getElementsByTagName("h4")[2].innerText = data[attr].form.csavesign;
        annualvisit.getElementsByTagName("p")[261].innerText = data[attr].form.cprintname;

        annualvisit.getElementsByTagName("a")[2].innerText = data[attr].form.next;

        if(annualvisit.getElementsByTagName("legend")[0]){
            annualvisit.getElementsByTagName("legend")[0].innerText = data[attr].form.cconcenttitle;
            annualvisit.getElementsByTagName("h3")[0].innerHTML = data[attr].form.cconsentdisclaimer;
            annualvisit.getElementsByClassName("nb")[2].innerText = data[attr].form.cconsenttext1;
            annualvisit.getElementsByTagName("p")[262].innerText = data[attr].form.cconsenttext2;

            annualvisit.getElementsByTagName("p")[263].innerText = data[attr].form.ciagree;
            annualvisit.getElementsByTagName("h4")[3].innerText = data[attr].form.csignature;
            annualvisit.getElementsByTagName("h4")[4].innerText = data[attr].form.cclear;
            annualvisit.getElementsByTagName("h4")[5].innerText = data[attr].form.csavesign;
            annualvisit.getElementsByTagName("p")[264].innerText = data[attr].form.cprintname;

            annualvisit.getElementsByTagName("button")[0].innerText = data[attr].form.submit;
        }
    }
    
    if(followvisit){
        followvisit.getElementsByTagName("h2")[0].innerText = data[attr].followup.title;

        followvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].followup.step1;
        followvisit.getElementsByTagName("p")[0].innerHTML = data[attr].followup.step1text;
        followvisit.getElementsByTagName("h2")[2].innerHTML = data[attr].followup.step2;
        followvisit.getElementsByTagName("p")[1].innerHTML = data[attr].followup.step2text;
        followvisit.getElementsByTagName("h2")[3].innerHTML = data[attr].followup.step3;
        followvisit.getElementsByTagName("p")[2].innerHTML = data[attr].followup.step3text;
        followvisit.getElementsByTagName("a")[0].innerText = data[attr].followup.button;
    }

    if(firstvisit){
        firstvisit.getElementsByTagName("h2")[0].innerText = data[attr].firstvisit.title;

        firstvisit.getElementsByTagName("h2")[1].innerHTML = data[attr].firstvisit.step1;
        firstvisit.getElementsByTagName("p")[0].innerHTML = data[attr].firstvisit.step1text;
        firstvisit.getElementsByTagName("h2")[2].innerHTML = data[attr].firstvisit.step2;
        firstvisit.getElementsByTagName("p")[1].innerHTML = data[attr].firstvisit.step2text;
        firstvisit.getElementsByTagName("h2")[3].innerHTML = data[attr].firstvisit.step3;
        firstvisit.getElementsByTagName("p")[2].innerHTML = data[attr].firstvisit.step3text;
        firstvisit.getElementsByTagName("h2")[4].innerHTML = data[attr].firstvisit.step4;
        firstvisit.getElementsByTagName("p")[3].innerHTML = data[attr].firstvisit.step4text;

        firstvisit.getElementsByTagName("h2")[5].innerText = data[attr].form.formtitle;
        firstvisit.getElementsByTagName("p")[4].innerText = data[attr].form.formimportant;
        firstvisit.getElementsByTagName("p")[5].innerText = data[attr].form.formthanks;

        firstvisit.getElementsByTagName("p")[6].innerText = data[attr].form.cfname;
        firstvisit.getElementsByTagName("p")[7].innerText = data[attr].form.cmname;
        firstvisit.getElementsByTagName("p")[8].innerText = data[attr].form.clname;

        firstvisit.getElementsByTagName("p")[9].innerText = data[attr].form.ctodaydate;

        firstvisit.getElementsByTagName("p")[10].innerText = data[attr].form.ccgenders;
        firstvisit.getElementsByTagName("p")[11].innerText = data[attr].form.ccmalegender;
        firstvisit.getElementsByTagName("p")[12].innerText = data[attr].form.cfemalegender;

        firstvisit.getElementsByTagName("p")[13].innerText = data[attr].form.caddress;
        firstvisit.getElementsByTagName("p")[14].innerText = data[attr].form.cstate;
        firstvisit.getElementsByTagName("p")[15].innerText = data[attr].form.czip;
        firstvisit.getElementsByTagName("p")[16].innerText = data[attr].form.cemail;

        firstvisit.getElementsByTagName("p")[17].innerText = data[attr].form.cdob;
        firstvisit.getElementsByTagName("p")[18].innerText = data[attr].form.cbirthnatural;
        firstvisit.getElementsByTagName("p")[19].innerText = data[attr].form.cbirthsection;
        firstvisit.getElementsByTagName("p")[20].innerText = data[attr].form.cage;

        firstvisit.getElementsByTagName("p")[21].innerText = data[attr].form.cunder18;
        firstvisit.getElementsByTagName("p")[22].innerText = data[attr].form.chomephone;
        firstvisit.getElementsByTagName("p")[23].innerText = data[attr].form.cworkphone;
        firstvisit.getElementsByTagName("p")[24].innerText = data[attr].form.ccellphone;

        firstvisit.getElementsByTagName("p")[25].innerText = data[attr].form.cmarital;
        firstvisit.getElementsByTagName("p")[26].innerText = data[attr].form.csingle;
        firstvisit.getElementsByTagName("p")[27].innerText = data[attr].form.cmarried;
        firstvisit.getElementsByTagName("p")[28].innerText = data[attr].form.cdivorced;
        firstvisit.getElementsByTagName("p")[29].innerText = data[attr].form.cwidow;
        firstvisit.getElementsByTagName("p")[30].innerText = data[attr].form.csignificant;

        firstvisit.getElementsByTagName("p")[31].innerText = data[attr].form.ccaregiver;
        firstvisit.getElementsByTagName("p")[32].innerText = data[attr].form.ccaregiveryes;
        firstvisit.getElementsByTagName("p")[33].innerText = data[attr].form.ccaregiverno;
        firstvisit.getElementsByTagName("p")[34].innerText = data[attr].form.cchildrencare;
        firstvisit.getElementsByTagName("p")[35].innerText = data[attr].form.cadultcare;
        firstvisit.getElementsByTagName("p")[36].innerText = data[attr].form.coccuptation;
        firstvisit.getElementsByTagName("p")[37].innerText = data[attr].form.coccupationlength;

        firstvisit.getElementsByTagName("p")[38].innerText = data[attr].form.cpcpdisclaimer;
        firstvisit.getElementsByTagName("p")[39].innerText = data[attr].form.cpcpprovide;
        firstvisit.getElementsByTagName("p")[40].innerText = data[attr].form.cpcp;
        firstvisit.getElementsByTagName("p")[41].innerText = data[attr].form.cpcpname;
        firstvisit.getElementsByTagName("p")[42].innerText = data[attr].form.cpcpcondition;
        firstvisit.getElementsByTagName("p")[43].innerText = data[attr].form.cpcpdot;
        firstvisit.getElementsByTagName("p")[44].innerText = data[attr].form.cpcpphone;
        firstvisit.getElementsByTagName("p")[45].innerText = data[attr].form.chealthreason;
        firstvisit.getElementsByTagName("p")[46].innerHTML = data[attr].form.chealthconcern;
        firstvisit.getElementsByTagName("p")[47].innerHTML = data[attr].form.chealthconcern2;
        firstvisit.getElementsByClassName("nb")[0].innerText = data[attr].form.chealthconcerns2s;

        firstvisit.getElementsByTagName("p")[48].innerText = data[attr].form.cmedictitle;
        firstvisit.getElementsByTagName("p")[49].innerText = data[attr].form.cmeddisclaimer;
        firstvisit.getElementsByTagName("p")[50].innerText = data[attr].form.cmedictitle3;
        firstvisit.getElementsByTagName("p")[51].innerText = data[attr].form.cmedreason;
        firstvisit.getElementsByTagName("p")[52].innerText = data[attr].form.cmeddatebegan;
        firstvisit.getElementsByTagName("p")[53].innerText = data[attr].form.cmeddose;
        firstvisit.getElementsByTagName("p")[54].innerText = data[attr].form.chelps;
        firstvisit.getElementsByTagName("p")[55].innerText = data[attr].form.csuppltitle;
        firstvisit.getElementsByTagName("p")[56].innerText = data[attr].form.csupp;
        firstvisit.getElementsByTagName("p")[57].innerText = data[attr].form.csuppsmall;
        firstvisit.getElementsByTagName("p")[58].innerText = data[attr].form.csuppreason;
        firstvisit.getElementsByTagName("p")[59].innerText = data[attr].form.csuppdatebegan;
        firstvisit.getElementsByTagName("p")[60].innerText = data[attr].form.csuppdose;
        firstvisit.getElementsByTagName("p")[61].innerText = data[attr].form.csupphelps;
        firstvisit.getElementsByTagName("p")[62].innerText = data[attr].form.callergy;

        firstvisit.getElementsByTagName("p")[63].innerText = data[attr].form.cfamhisttitle;
        firstvisit.getElementsByTagName("p")[64].innerText = data[attr].form.cfamhist;
        firstvisit.getElementsByTagName("p")[65].innerText = data[attr].form.cmember;
        firstvisit.getElementsByTagName("input")[86].placeholder = data[attr].form.cmember1;
        firstvisit.getElementsByTagName("input")[87].placeholder = data[attr].form.cmember2;
        firstvisit.getElementsByTagName("input")[88].placeholder = data[attr].form.cmember3;
        firstvisit.getElementsByTagName("input")[89].placeholder = data[attr].form.cmember4;
        firstvisit.getElementsByTagName("input")[90].placeholder = data[attr].form.cmember5;
        firstvisit.getElementsByTagName("input")[91].placeholder = data[attr].form.cmember6;
        firstvisit.getElementsByTagName("input")[92].placeholder = data[attr].form.cmember7;
        firstvisit.getElementsByTagName("input")[93].placeholder = data[attr].form.cmember8;
        firstvisit.getElementsByTagName("p")[66].innerText = data[attr].form.clivingage;
        firstvisit.getElementsByTagName("p")[67].innerText = data[attr].form.cdiceaseage;
        firstvisit.getElementsByTagName("p")[68].innerText = data[attr].form.cmajorillness;

        firstvisit.getElementsByTagName("p")[69].innerText = data[attr].form.ccheck;
        firstvisit.getElementsByTagName("p")[70].innerText = data[attr].form.ccheck1;
        firstvisit.getElementsByTagName("p")[71].innerText = data[attr].form.ccheck2;
        firstvisit.getElementsByTagName("p")[72].innerText = data[attr].form.ccheck3;
        firstvisit.getElementsByTagName("p")[73].innerText = data[attr].form.ccheck4;
        firstvisit.getElementsByTagName("p")[74].innerText = data[attr].form.ccheck5;
        firstvisit.getElementsByTagName("p")[75].innerText = data[attr].form.ccheck6;
        firstvisit.getElementsByTagName("p")[76].innerText = data[attr].form.ccheck7;
        firstvisit.getElementsByTagName("p")[77].innerText = data[attr].form.ccheck8;
        firstvisit.getElementsByTagName("p")[78].innerText = data[attr].form.ccheck9;
        firstvisit.getElementsByTagName("p")[79].innerText = data[attr].form.ccheck10;
        firstvisit.getElementsByTagName("p")[80].innerText = data[attr].form.ccheck11;
        firstvisit.getElementsByTagName("p")[81].innerText = data[attr].form.ccheck12;
        firstvisit.getElementsByTagName("p")[82].innerText = data[attr].form.ccheck13;
        firstvisit.getElementsByTagName("p")[83].innerText = data[attr].form.ccheck14;
        firstvisit.getElementsByTagName("p")[84].innerText = data[attr].form.ccheck15;
        firstvisit.getElementsByTagName("p")[85].innerText = data[attr].form.ccheck16;
        firstvisit.getElementsByTagName("p")[86].innerText = data[attr].form.ccheck17;
        firstvisit.getElementsByTagName("p")[87].innerText = data[attr].form.ccheck18;
        firstvisit.getElementsByTagName("p")[88].innerText = data[attr].form.ccheck19;
        
        firstvisit.getElementsByTagName("p")[89].innerText = data[attr].form.cwomen;
        firstvisit.getElementsByTagName("p")[90].innerText = data[attr].form.cwomen1;
        firstvisit.getElementsByTagName("p")[91].innerText = data[attr].form.cwomen2;
        firstvisit.getElementsByTagName("p")[92].innerText = data[attr].form.cwomen3;
        firstvisit.getElementsByTagName("p")[93].innerText = data[attr].form.cwomen4;
        firstvisit.getElementsByTagName("p")[94].innerText = data[attr].form.cwomen5;
        firstvisit.getElementsByTagName("p")[95].innerText = data[attr].form.cwomen6;
        firstvisit.getElementsByTagName("p")[96].innerText = data[attr].form.cwomen7;
        firstvisit.getElementsByTagName("p")[97].innerText = data[attr].form.cwomen8;
        firstvisit.getElementsByTagName("p")[98].innerText = data[attr].form.cwomen9;
        firstvisit.getElementsByTagName("p")[99].innerText = data[attr].form.cwomen10;
        firstvisit.getElementsByTagName("p")[100].innerText = data[attr].form.cwomen11;
        firstvisit.getElementsByTagName("p")[101].innerText = data[attr].form.cwomen12;
        firstvisit.getElementsByTagName("p")[102].innerText = data[attr].form.cwomen13;
        firstvisit.getElementsByTagName("p")[103].innerText = data[attr].form.cwomen14;
        firstvisit.getElementsByTagName("p")[104].innerText = data[attr].form.cwomen15;
        firstvisit.getElementsByTagName("p")[105].innerText = data[attr].form.cdateMenstrual;
        firstvisit.getElementsByTagName("p")[106].innerText = data[attr].form.cdatePapSmear;
        firstvisit.getElementsByTagName("p")[107].innerText = data[attr].form.cabnormalfind;

        firstvisit.getElementsByTagName("p")[108].innerText = data[attr].form.ccmen;
        firstvisit.getElementsByTagName("p")[109].innerText = data[attr].form.ccmen1;
        firstvisit.getElementsByTagName("p")[110].innerText = data[attr].form.ccmen2;
        firstvisit.getElementsByTagName("p")[111].innerText = data[attr].form.ccmen3;
        firstvisit.getElementsByTagName("p")[112].innerText = data[attr].form.ccmen4;
        firstvisit.getElementsByTagName("p")[113].innerText = data[attr].form.ccmen5;
        firstvisit.getElementsByTagName("p")[114].innerText = data[attr].form.ccmen6;
        firstvisit.getElementsByTagName("p")[115].innerText = data[attr].form.ccmen7;

        firstvisit.getElementsByTagName("p")[116].innerHTML = data[attr].form.cexp;
        firstvisit.getElementsByTagName("p")[117].innerText = data[attr].form.cgen;
        firstvisit.getElementsByTagName("p")[118].innerText = data[attr].form.cgen1;
        firstvisit.getElementsByTagName("p")[119].innerText = data[attr].form.cgen2;
        firstvisit.getElementsByTagName("p")[120].innerText = data[attr].form.cgen3;
        firstvisit.getElementsByTagName("p")[121].innerText = data[attr].form.cgen4;
        firstvisit.getElementsByTagName("p")[122].innerText = data[attr].form.cgen5;
        firstvisit.getElementsByTagName("p")[123].innerText = data[attr].form.cgen6;
        firstvisit.getElementsByTagName("p")[124].innerText = data[attr].form.cgen7;
        firstvisit.getElementsByTagName("p")[125].innerText = data[attr].form.cgen8;
        firstvisit.getElementsByTagName("p")[126].innerText = data[attr].form.cgen9;
        firstvisit.getElementsByTagName("p")[127].innerText = data[attr].form.cgen10;
        firstvisit.getElementsByTagName("p")[128].innerText = data[attr].form.cgen11;
        firstvisit.getElementsByTagName("p")[129].innerText = data[attr].form.cgen12;

        firstvisit.getElementsByTagName("p")[130].innerText = data[attr].form.chidden;

        firstvisit.getElementsByTagName("p")[131].innerText = data[attr].form.ccardio;
        firstvisit.getElementsByTagName("p")[132].innerText = data[attr].form.ccardio1;
        firstvisit.getElementsByTagName("p")[133].innerText = data[attr].form.ccardio2;
        firstvisit.getElementsByTagName("p")[134].innerText = data[attr].form.ccardio3;
        firstvisit.getElementsByTagName("p")[135].innerText = data[attr].form.ccardio4;
        firstvisit.getElementsByTagName("p")[136].innerText = data[attr].form.ccardio5;
        firstvisit.getElementsByTagName("p")[137].innerText = data[attr].form.ccardio6;
        firstvisit.getElementsByTagName("p")[138].innerText = data[attr].form.ccardio7;
        firstvisit.getElementsByTagName("p")[139].innerText = data[attr].form.ccardio8;
        firstvisit.getElementsByTagName("p")[140].innerText = data[attr].form.ccardio9;
        firstvisit.getElementsByTagName("p")[141].innerText = data[attr].form.ccardio10;
        firstvisit.getElementsByTagName("p")[142].innerText = data[attr].form.ccardio11;
        firstvisit.getElementsByTagName("p")[143].innerText = data[attr].form.ccardio12;

        firstvisit.getElementsByTagName("p")[144].innerText = data[attr].form.chidden;

        firstvisit.getElementsByTagName("p")[145].innerText = data[attr].form.cresp;
        firstvisit.getElementsByTagName("p")[146].innerText = data[attr].form.cresp1;
        firstvisit.getElementsByTagName("p")[147].innerText = data[attr].form.cresp2;
        firstvisit.getElementsByTagName("p")[148].innerText = data[attr].form.cresp3;
        firstvisit.getElementsByTagName("p")[149].innerText = data[attr].form.cresp4;
        firstvisit.getElementsByTagName("p")[150].innerText = data[attr].form.cresp5;
        firstvisit.getElementsByTagName("p")[151].innerText = data[attr].form.cresp6;
        firstvisit.getElementsByTagName("p")[152].innerText = data[attr].form.cresp7;
        firstvisit.getElementsByTagName("p")[153].innerText = data[attr].form.cresp8;

        firstvisit.getElementsByTagName("p")[154].innerText = data[attr].form.chidden;

        firstvisit.getElementsByTagName("p")[155].innerText = data[attr].form.cgastro;
        firstvisit.getElementsByTagName("p")[156].innerText = data[attr].form.cgastro1;
        firstvisit.getElementsByTagName("p")[157].innerText = data[attr].form.cgastro2;
        firstvisit.getElementsByTagName("p")[158].innerText = data[attr].form.cgastro3;
        firstvisit.getElementsByTagName("p")[159].innerText = data[attr].form.cgastro4;
        firstvisit.getElementsByTagName("p")[160].innerText = data[attr].form.cgastro5;
        firstvisit.getElementsByTagName("p")[161].innerText = data[attr].form.cgastro6;
        firstvisit.getElementsByTagName("p")[162].innerText = data[attr].form.cgastro7;
        firstvisit.getElementsByTagName("p")[163].innerText = data[attr].form.cgastro8;
        firstvisit.getElementsByTagName("p")[164].innerText = data[attr].form.cgastro9;

        firstvisit.getElementsByTagName("p")[165].innerText = data[attr].form.chidden;

        firstvisit.getElementsByTagName("p")[166].innerText = data[attr].form.cgenito;
        firstvisit.getElementsByTagName("p")[167].innerText = data[attr].form.cgenito1;
        firstvisit.getElementsByTagName("p")[168].innerText = data[attr].form.cgenito2;
        firstvisit.getElementsByTagName("p")[169].innerText = data[attr].form.cgenito3;
        firstvisit.getElementsByTagName("p")[170].innerText = data[attr].form.cgenito4;
        firstvisit.getElementsByTagName("p")[171].innerText = data[attr].form.cgenito5;
        firstvisit.getElementsByTagName("p")[172].innerText = data[attr].form.cgenito6;
        firstvisit.getElementsByTagName("p")[173].innerText = data[attr].form.cgenito61;
        firstvisit.getElementsByTagName("p")[174].innerText = data[attr].form.cgenito7;
        firstvisit.getElementsByTagName("p")[175].innerText = data[attr].form.cgenito8;

        firstvisit.getElementsByTagName("p")[176].innerText = data[attr].form.chidden;

        firstvisit.getElementsByTagName("p")[177].innerText = data[attr].form.cneuro;
        firstvisit.getElementsByTagName("p")[178].innerText = data[attr].form.cneuro1;
        firstvisit.getElementsByTagName("p")[179].innerText = data[attr].form.cneuro2;
        firstvisit.getElementsByTagName("p")[180].innerText = data[attr].form.cneuro3;
        firstvisit.getElementsByTagName("p")[181].innerText = data[attr].form.cneuro4;
        firstvisit.getElementsByTagName("p")[182].innerText = data[attr].form.cneuro5;
        firstvisit.getElementsByTagName("p")[183].innerText = data[attr].form.cneuro6;
        firstvisit.getElementsByTagName("p")[184].innerText = data[attr].form.cneuro7;
        firstvisit.getElementsByTagName("p")[185].innerText = data[attr].form.cneuro8;
        firstvisit.getElementsByTagName("p")[186].innerText = data[attr].form.cneuro9;
        firstvisit.getElementsByTagName("p")[187].innerText = data[attr].form.cneuro10;
        firstvisit.getElementsByTagName("p")[188].innerText = data[attr].form.cneuro11;
        firstvisit.getElementsByTagName("p")[189].innerText = data[attr].form.cneuro12;
        firstvisit.getElementsByTagName("p")[190].innerText = data[attr].form.cneuro13;

        firstvisit.getElementsByTagName("p")[191].innerText = data[attr].form.chidden;

        firstvisit.getElementsByTagName("p")[192].innerText = data[attr].form.cmuskulo;
        firstvisit.getElementsByTagName("p")[193].innerText = data[attr].form.cmuskulo1;
        firstvisit.getElementsByTagName("p")[194].innerText = data[attr].form.cmuskulo2;
        firstvisit.getElementsByTagName("p")[195].innerText = data[attr].form.cmuskulo3;
        firstvisit.getElementsByTagName("p")[196].innerText = data[attr].form.cmuskulo4;
        firstvisit.getElementsByTagName("p")[197].innerText = data[attr].form.cmuskulo5;
        firstvisit.getElementsByTagName("p")[198].innerText = data[attr].form.cmuskulo6;
        firstvisit.getElementsByTagName("p")[199].innerText = data[attr].form.cmuskulo7;
        firstvisit.getElementsByTagName("p")[200].innerText = data[attr].form.cmuskulo8;
        firstvisit.getElementsByTagName("p")[201].innerText = data[attr].form.cmuskulo9;

        firstvisit.getElementsByTagName("p")[202].innerText = data[attr].form.chabit;
        firstvisit.getElementsByTagName("p")[203].innerText = data[attr].form.chabit1;
        firstvisit.getElementsByTagName("p")[204].innerText = data[attr].form.chabit2;
        firstvisit.getElementsByTagName("p")[205].innerText = data[attr].form.chabit3;
        firstvisit.getElementsByTagName("p")[206].innerText = data[attr].form.chabit4;
        firstvisit.getElementsByTagName("p")[207].innerText = data[attr].form.chabit5;
        firstvisit.getElementsByTagName("p")[208].innerText = data[attr].form.chabit6;
        firstvisit.getElementsByTagName("p")[209].innerText = data[attr].form.chabit7;
        firstvisit.getElementsByTagName("p")[210].innerText = data[attr].form.chabit8;
        firstvisit.getElementsByTagName("p")[211].innerText = data[attr].form.chabit9;
        firstvisit.getElementsByTagName("p")[212].innerText = data[attr].form.chabit10;

        firstvisit.getElementsByTagName("p")[213].innerText = data[attr].form.csmoke;
        firstvisit.getElementsByTagName("p")[214].innerText = data[attr].form.cifsmoke;
        firstvisit.getElementsByTagName("p")[215].innerText = data[attr].form.chowmuchsmoke;
        firstvisit.getElementsByTagName("p")[216].innerText = data[attr].form.csincesmoke;
        firstvisit.getElementsByTagName("p")[217].innerText = data[attr].form.csmokeattempt;
        firstvisit.getElementsByTagName("p")[218].innerText = data[attr].form.calcohol;
        firstvisit.getElementsByTagName("p")[219].innerText = data[attr].form.cifalcohol;
        firstvisit.getElementsByTagName("p")[220].innerText = data[attr].form.chowmuchalcohol;
        firstvisit.getElementsByTagName("p")[221].innerText = data[attr].form.csincealcohol;
        firstvisit.getElementsByTagName("p")[222].innerText = data[attr].form.cexercise;
        firstvisit.getElementsByTagName("p")[223].innerText = data[attr].form.cexerciseregular;
        firstvisit.getElementsByTagName("p")[224].innerText = data[attr].form.cifexercise;

        firstvisit.getElementsByTagName("p")[225].innerText = data[attr].form.cnutri;
        firstvisit.getElementsByTagName("p")[226].innerText = data[attr].form.cnutriconcern;
        firstvisit.getElementsByTagName("p")[227].innerText = data[attr].form.cnutriskip;
        firstvisit.getElementsByTagName("p")[228].innerText = data[attr].form.cnutrifruit;
        firstvisit.getElementsByTagName("p")[229].innerText = data[attr].form.cnutriveg;
        firstvisit.getElementsByTagName("p")[230].innerText = data[attr].form.cnutridiet;
        firstvisit.getElementsByTagName("p")[231].innerText = data[attr].form.cnutrigluten;
        firstvisit.getElementsByTagName("p")[232].innerText = data[attr].form.cnutricoffee;
        firstvisit.getElementsByTagName("p")[233].innerText = data[attr].form.cnutricoffeemuch;
        firstvisit.getElementsByTagName("p")[234].innerText = data[attr].form.csoda;
        firstvisit.getElementsByTagName("p")[235].innerText = data[attr].form.csodareg;
        firstvisit.getElementsByTagName("p")[236].innerText = data[attr].form.csodadiet;
        firstvisit.getElementsByTagName("p")[237].innerText = data[attr].form.csodanone;
        firstvisit.getElementsByTagName("p")[238].innerText = data[attr].form.cifsoda;

        firstvisit.getElementsByTagName("p")[239].innerText = data[attr].form.ceatinghabit;
        firstvisit.getElementsByTagName("p")[240].innerText = data[attr].form.ceatinghabityes;
        firstvisit.getElementsByTagName("p")[241].innerText = data[attr].form.ceatinghabitno;
        firstvisit.getElementsByTagName("p")[242].innerText = data[attr].form.cappetite;
        firstvisit.getElementsByTagName("p")[243].innerText = data[attr].form.cappetiteyes;
        firstvisit.getElementsByTagName("p")[244].innerText = data[attr].form.cappetiteno;
        firstvisit.getElementsByTagName("p")[245].innerText = data[attr].form.ceatmore;
        firstvisit.getElementsByTagName("p")[246].innerText = data[attr].form.ceatmoreyes;
        firstvisit.getElementsByTagName("p")[247].innerText = data[attr].form.ceatmoreno;
        firstvisit.getElementsByTagName("p")[248].innerText = data[attr].form.cenergydrop;
        firstvisit.getElementsByTagName("p")[249].innerText = data[attr].form.cenergydropyes;
        firstvisit.getElementsByTagName("p")[250].innerText = data[attr].form.cenergydropno;
        firstvisit.getElementsByTagName("p")[251].innerText = data[attr].form.cenergydropif;
        firstvisit.getElementsByTagName("p")[252].innerText = data[attr].form.cweightyearago;
        firstvisit.getElementsByTagName("p")[253].innerText = data[attr].form.cweightmost;
        firstvisit.getElementsByTagName("p")[254].innerText = data[attr].form.cweightwhen;
        firstvisit.getElementsByTagName("p")[255].innerText = data[attr].form.cbowel;

        firstvisit.getElementsByTagName("p")[256].innerText = data[attr].form.csleeprelax;
        firstvisit.getElementsByTagName("p")[257].innerText = data[attr].form.csleephours;
        firstvisit.getElementsByTagName("p")[258].innerText = data[attr].form.csleeprefresh;

        firstvisit.getElementsByTagName("p")[259].innerText = data[attr].form.cwritten;

        firstvisit.getElementsByTagName("p")[260].innerText = data[attr].form.ciagree;
        firstvisit.getElementsByTagName("h4")[0].innerText = data[attr].form.csignature;
        firstvisit.getElementsByTagName("h4")[1].innerText = data[attr].form.cclear;
        firstvisit.getElementsByTagName("h4")[2].innerText = data[attr].form.csavesign;
        firstvisit.getElementsByTagName("p")[261].innerText = data[attr].form.cprintname;

        firstvisit.getElementsByTagName("a")[2].innerText = data[attr].form.next;

        if(firstvisit.getElementsByTagName("legend")[0]){
            firstvisit.getElementsByTagName("legend")[0].innerText = data[attr].form.cconcenttitle;
            firstvisit.getElementsByTagName("h3")[0].innerHTML = data[attr].form.cconsentdisclaimer;
            firstvisit.getElementsByClassName("nb")[2].innerText = data[attr].form.cconsenttext1;
            firstvisit.getElementsByTagName("p")[262].innerText = data[attr].form.cconsenttext2;

            firstvisit.getElementsByTagName("p")[263].innerText = data[attr].form.ciagree;
            firstvisit.getElementsByTagName("h4")[3].innerText = data[attr].form.csignature;
            firstvisit.getElementsByTagName("h4")[4].innerText = data[attr].form.cclear;
            firstvisit.getElementsByTagName("h4")[5].innerText = data[attr].form.csavesign;
            firstvisit.getElementsByTagName("p")[264].innerText = data[attr].form.cprintname;

            firstvisit.getElementsByTagName("button")[0].innerText = data[attr].form.submit;
        }
    }

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
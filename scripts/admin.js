let acc_nav = document.getElementsByTagName("main")[0].getElementsByTagName("li");
let get = "Patients";
let search = window.location.search;


//Set Cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Get Cookie
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

//Get setting name
if(search.split("=")[0] == "?setting") {
    get = search.split("=")[1];
}

//Add a listener to each button when clicking to load the appropriate setting page
for(let i=0; i < acc_nav.length; i++) {

    acc_nav[i].addEventListener("click", ()=>{
        
        $location = "../admin/admin.php?setting=" + acc_nav[i].getElementsByTagName("p")[0].innerText;
        window.location.href = $location;

    });

    /* active button */
    if(get != "" && acc_nav[i].getElementsByTagName("p")[0].innerText == get) {
        if(!acc_nav[i].classList.contains("activelink2")) {
            acc_nav[i].classList.add("activelink2");
        }
    /* unactive button */
    } else {
        if(acc_nav[i].classList.contains("activelink2")) {
            acc_nav[i].classList.remove("activelink2");
        }
    }
}


window.addEventListener("load", (e)=> {

    //TimeZones
    let timezoneList = Intl.supportedValuesOf('timeZone');
    let selectTimezone = document.getElementById("timezone");
    let addUnavailable = document.getElementById("submit_addUnavailable");

    //Load timezone every second into options
    function loadTimeZone(){
        selectIndex = selectTimezone.selectedIndex;
        selectTimezone.innerHTML = " ";

        let timezoneDate = new Date;
        
        timezoneList.forEach((timezone) => {
            let strTime = timezoneDate.toLocaleString("en-US", {timeZone: `${timezone}`});

            //Get the time only from the date format
            strTime = strTime.split(", ")[1];

            let opt = document.createElement("option");
            opt.text = timezone + " " + strTime;
            opt.value = timezone;
            selectTimezone.options.add(opt);
        });

        selectTimezone.selectedIndex = selectIndex;
    }
    /*
    addUnavailable.addEventListener("click", (e)=>{
        e.preventDefault();

        //Get Local Date
        let startDate = document.getElementById("addUnavailable1").value;
        let endDate = document.getElementById("addUnavailable2").value;

        console.log(startDate);
        let startYear = parseInt(startDate.split("-")[0]);
        let startMonth = parseInt(startDate.split("-")[1]) - 1;
        let startDay = parseInt(startDate.split("-")[2]);

        let endYear = parseInt(endDate.split("-")[0]);
        let endMonth = parseInt(endDate.split("-")[1]) - 1;
        let endDay = parseInt(endDate.split("-")[2]);

        let localeStart = new Date(startYear, startMonth, startDay);
        console.log("Pulled date is in OS time(Toronto): " + localeStart);
        let UTCStart = new Date(Date.UTC(startYear,startMonth,startDay));
        console.log("Pulled date is in UTC: " + UTCStart);
        console.log("Pulled date is in selected timezone time: " + new Date(UTCStart.toLocaleString("en-US", {timeZone: selectTimezone.value})));

    });*/



    selectTimezone.addEventListener("change", (e)=>{

        //Set Timezone in cookie for 30 days
        setCookie("timezoneValue", selectTimezone.value, 30);
        setCookie("timezoneName", selectTimezone.selectedOptions[0], 30);
        setCookie("timezoneOption", selectTimezone.selectedOptions, 30);
    });

    //Get Timezone cookie
    let cTZ = getCookie("timezoneValue");
    let cTZN = getCookie("timezoneName");
    let cTZO = getCookie("timezoneOption");

    loadTimeZone()

    //Load Timezone Cookie
    if(cTZ != "" && cTZN != "") {
        selectTimezone.value = cTZ;
        selectTimezone.dispatchEvent(new Event('change', {bubbles: true}));
    }

    setInterval(loadTimeZone, 1000);

});
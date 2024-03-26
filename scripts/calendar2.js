let eTitles = document.getElementsByName("ev0");
let timeBox = document.getElementById('timeBox');
let detailBox = document.getElementsByClassName('info-details')[0];
let daysInCal = [];
let selectedDay;
let selectedTiming;

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


//TimeZones
let timezoneList = Intl.supportedValuesOf('timeZone');
let selectTimezone = document.getElementsByTagName("select")[0];

//Set the dates in blue color if they contain events
function displayEventOnCalendar(){
    let k = 0;
    for(let i = 0; i < eTitles.length; i++){

        if(eTitles[i].parentElement.classList.contains("hasevent") == false){
            eTitles[i].parentElement.classList.add("hasevent");
            daysInCal[k] = eTitles[i].parentElement;
            k++;
        }
        
    }
}

//Display event days first when calendar is loaded
displayEventOnCalendar();
 
//Display event times when selecting a date
for(let i = 0; i < daysInCal.length; i++){

    daysInCal[i].addEventListener("click", (e)=>{

        if(selectedDay != undefined){selectedDay.classList.remove("selectedDay");}
        selectedDay = daysInCal[i];
        selectedDay.classList.add("selectedDay");

        events = daysInCal[i].getElementsByTagName("input");

        timeBox.innerHTML = " ";
        
        for(let j = 0; j < events.length; j++){

            let eventText = events[j].value;
            let eventInfo = eventText.split("/n/");
            let eventTitle = eventInfo[0];
            let eventName = eventInfo[1];
            let eventPrice = eventInfo[2];
            let eventHour = eventInfo[3];
            let eventID = eventInfo[4];
            let eventTime = eventInfo[5];

            let eventDate = events[j+1].value;
            let eventLength = events[j+2].value;
            let eventColor = events[j+3].value;
            j+=3;
            
            /* 12:00 is PM  11:00 is AM*/
            if(eventTime.split(":")[0] > 11){
                eventTime += " PM";
            } else {
                eventTime += " AM";
            }

            var MonthName = {
                1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"
            }

            let monthN = parseInt(eventDate.split("-")[1]);
            monthN = MonthName[monthN];

            let eventDateName = eventDate.split("-")[2] + " " + monthN + " " + eventDate.split("-")[0];

            //Change displayed time to local time
            let dateSplit = eventDate.split("-");
            let timeSplit = eventTime.split(":");
    
            //Set as UTC programmically
            let newDate = new Date(Date.UTC(dateSplit[0],dateSplit[1]-1,dateSplit[2],timeSplit[0],timeSplit[1].split(" ")[0],00));
    
            // Set to Local TimeZone
            let fullDate = newDate.toLocaleString("en-US", {timeZone: selectTimezone.value}).split(" ");
            let fullTime = fullDate[1].split(":");
            let localDate = fullTime[0] + ":" + fullTime[1] + " " + fullDate[2];
         
            let eventDetails = "<div class='timing'><p>" + localDate + "</p>" 
            + "<input type='hidden' name='eTitle' value='" + eventTitle + "'>" 
            + "<input type='hidden' name='eName' value='" + eventName + "'>" 
            + "<input type='hidden' name='ePrice' value='" + eventPrice + "'>" 
            + "<input type='hidden' name='eHour' value='" + eventHour + "'>" 
            + "<input type='hidden' name='eID' value='" + eventID + "'>" 
            + "<input type='hidden' name='eTime' value='" + eventTime + "'>" 
            + "<input type='hidden' name='eDate' value='" + eventDate + "'>" 
            + "<input type='hidden' name='eLength' value='" + eventLength + "'>" 
            +"</div>";
            timeBox.insertAdjacentHTML('beforeend', eventDetails);

            //When selecting a time, display event details on the left
            let addedTiming = timeBox.getElementsByClassName("timing")[timeBox.getElementsByClassName("timing").length-1];
            addedTiming.addEventListener("click", (e)=>{
                if(selectedTiming){selectedTiming.classList.remove("selectedTiming");}
                selectedTiming = addedTiming;
                addedTiming.classList.add("selectedTiming");
                eventDetails = '<h1>'+eventTitle+'</h1>'
                             + '<p><i class="fa-solid fa-user"></i>'+eventName+'</p>'
                             + '<p><i class="fa-solid fa-clock"></i>'+eventHour+'</p>'
                             + '<p><i class="fa-solid fa-credit-card"></i>$'+eventPrice+'</p>'
                             + '<p><i class="fa-solid fa-calendar-days"></i>'+eventDateName +" @ "+localDate+'</p>'
                             + '<a href="#payment" class="detailbutton"><i class="fa-solid fa-book"></i>Confirm Schedule</a>'
                
                detailBox.innerHTML = eventDetails;
            });
        }

    });
}

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

//Make necessary changes to calendar when changing timezone such as offkeyed days/months
selectTimezone.addEventListener('change', (e)=>{

    let currentTimezone = e.target.value;

    //Change timings on the right side based on timezone when selected

    let timeBoxInner = timeBox.getElementsByTagName("div"); //Array of all timings in the timeBox div
    for(let i = 0; i < timeBox.childElementCount; i++){ //For each timing
        let info = timeBoxInner[i].getElementsByTagName("input"); //Get all information inputs
        let fullDate = [info[6].value,info[5].value].join(" "); 

        let dateSplit = info[6].value.split("-");
        let timeSplit = info[5].value.split(":");

        //Set as UTC programmically
        let newDate = new Date(Date.UTC(dateSplit[0],dateSplit[1]-1,dateSplit[2],timeSplit[0],timeSplit[1].split(" ")[0],00));

        // Set to Local TimeZone
        let localDate = newDate.toLocaleString("en-US", {timeZone: currentTimezone, timeZoneName: 'long'});
        // Set Back to UTC TimeZone
        let UTCDate = newDate.toLocaleString("en-US", {timeZone: 'UTC', timeZoneName: 'long'});

        //Get XX:XX to display
        LocalHour = localDate.split(",")[1].split(":")[0];
        LocalMin = localDate.split(",")[1].split(":")[1];

        //Rename time
        timeBoxInner[i].getElementsByTagName("p")[0].innerText = LocalHour + ":" + LocalMin;   
        
        //Remove Timing from timebox if timezone changed the day
        LocalDay = localDate.split(",")[0].split("/")[1];
        if(parseInt(LocalDay) != parseInt(dateSplit[2])){
            timeBoxInner[i].remove();
        }
    }

    
    //Change timings in the calendar

    let Odays = document.getElementsByClassName("day_num");
    let OdaysE = [];
    // Get the days with event with the index position within the entire month schedule
    for(let i = 0; i < Odays.length; i++){
        if(Odays[i].classList.contains("hasevent")){
            OdaysE[i] = Odays[i];
        }
    }

    //Get all the events of the day and check their timezone

    //For each day that has event(s)
    Object.keys(OdaysE).forEach(key => {
        
        let dEv = OdaysE[key].getElementsByTagName("input");
        
        //Get each event of the day
        for(let j = 0; j < dEv.length; j++){
            /*
            //If empty
            if(j >= dEv.length){return};
            */


            //Get the UTC date and time
            let eventText = dEv[j].value;
            let eventInfo = eventText.split("/n/");
            let eventTime = eventInfo[5];
            let eventDate = dEv[j+1].value;
            let eventLength = dEv[j+2].value;
            let eventColor = dEv[j+3].value;
            let UTCTime = [eventDate, eventTime + ":00"].join(" ");

            let dateSplit = eventDate.split("-");
            let timeSplit = eventTime.split(":");

            //Set as UTC programmically
            let newDate = new Date(Date.UTC(dateSplit[0],dateSplit[1]-1,dateSplit[2],timeSplit[0],timeSplit[1].split(" ")[0],00));

            // Set to Local TimeZone
            let localDate = newDate.toLocaleString("en-US", {timeZone: currentTimezone});

            // Set Back to UTC TimeZone
            let UTCDate = newDate.toLocaleString("en-US", {timeZone: 'UTC'});

            
            //Remove and add to next or previous day if within month
            let LocalDay = parseInt(localDate.split(",")[0].split("/")[1]);
            let LocalMonth = localDate.split(",")[0].split("/")[0];
            let assignedDay = parseInt(Odays[key].getElementsByTagName("span")[0].innerText);

            //Get accurate currentMonth
            let currentMonth = dateSplit[1];
            if(Odays[key].classList.contains("ignore") && key < Odays.length/2){
                currentMonth--;
            } else if(Odays[key].classList.contains("ignore") && key > Odays.length/2){
                currentMonth++;
            }

            //If timezoned day is not equal to currently assigned day
            if(parseInt(LocalDay) != assignedDay){

                //If changed date is withing Month +/- 1 day
                if(parseInt(LocalMonth) == parseInt(dateSplit[1]) || (parseInt(LocalMonth) == parseInt(dateSplit[1])-1 && (parseInt(LocalDay) == 30 || parseInt(LocalDay) == 31 || parseInt(LocalDay) == 29 || parseInt(LocalDay) == 28)) || (parseInt(LocalMonth) == parseInt(dateSplit[1])+1 && parseInt(LocalDay) == 1)){

                    //If smaller than UTC date
                    if((parseInt(LocalDay) < parseInt(dateSplit[2]) || parseInt(LocalMonth) < parseInt(currentMonth))){

                        let dayIndex = (parseInt(key)-1);
                        let dayPrev = Odays[dayIndex];

                        //Add event to appropriate day in ascending order
                        eventValues1 = "<input type='hidden' value='" + dEv[j].value + "'>";
                        eventValues2 = "<input type='hidden' value='" + dEv[j+1].value + "'>";
                        eventValues3 = "<input type='hidden' value='" + dEv[j+2].value + "'>";
                        eventValues4 = "<input type='hidden' value='" + dEv[j+3].value + "'>";

                        if(dayPrev.getElementsByTagName("input").length > 0){
                            for(let l = 0; l < dayPrev.getElementsByTagName("input").length; l+=4){
                                timingE = dayPrev.getElementsByTagName("input")[l];
                                //Get the hour of the timing we are looking at and the timing we want to add
                                toAddHour = dEv[j].value.split("/n/")[5].split(":")[0];
                                timingHour = timingE.value.split("/n/")[5].split(":")[0];

                                //Get the minute of the timing we are looking at and the timing we want to add
                                toAddMin = dEv[j].value.split("/n/")[5].split(":")[1];
                                timingMin = timingE.value.split("/n/")[5].split(":")[1];

                                //Add before timing if correct order
                                if( toAddHour < timingHour || (toAddHour == timingHour && toAddMin <= timingMin) ){
                                    timingE.insertAdjacentHTML('beforebegin', eventValues1);
                                    timingE.insertAdjacentHTML('beforebegin', eventValues2);
                                    timingE.insertAdjacentHTML('beforebegin', eventValues3);
                                    timingE.insertAdjacentHTML('beforebegin', eventValues4);
                                    //Get out of loop
                                    break;
                                }
                            }
                        } else {
                            dayPrev.innerHTML += eventValues1;
                            dayPrev.innerHTML += eventValues2;
                            dayPrev.innerHTML += eventValues3;
                            dayPrev.innerHTML += eventValues4;
                        }

                        //Check day as has event
                        if(dayPrev.classList.contains("hasevent") == false){
                            dayPrev.classList.add("hasevent");
                        }

                        //Add listener to new event day when selected
                        dayPrev.addEventListener("click", (e)=>{

                            if(selectedDay != undefined){selectedDay.classList.remove("selectedDay");}
                            selectedDay = dayPrev;
                            selectedDay.classList.add("selectedDay");

                            Nevents = dayPrev.getElementsByTagName("input");
                    
                            timeBox.innerHTML = " ";
                            
                            for(let h = 0; h < Nevents.length; h++){
                    
                                let NeventText = Nevents[h].value;
                                let NeventInfo = NeventText.split("/n/");
                                let NeventTitle = NeventInfo[0];
                                let NeventName = NeventInfo[1];
                                let NeventPrice = NeventInfo[2];
                                let NeventHour = NeventInfo[3];
                                let NeventID = NeventInfo[4];
                                let NeventTime = NeventInfo[5];
                    
                                let NeventDate = Nevents[h+1].value;
                                let NeventLength = Nevents[h+2].value;
                                let NeventColor = Nevents[h+3].value;
                                h+=3;
                                
                                /* 12:00 is PM  11:00 is AM*/
                                if(NeventTime.split(":")[0] > 11){
                                    NeventTime += " PM";
                                } else {
                                    NeventTime += " AM";
                                }

                                
                                //Change displayed time to local time
                                let NdateSplit = NeventDate.split("-");
                                let NtimeSplit = NeventTime.split(":");
                        
                                //Set as UTC programmically
                                let NnewDate = new Date(Date.UTC(NdateSplit[0],NdateSplit[1]-1,NdateSplit[2],NtimeSplit[0],NtimeSplit[1].split(" ")[0],00));
                        
                                // Set to Local TimeZone
                                let NfullDate = NnewDate.toLocaleString("en-US", {timeZone: currentTimezone}).split(" ");
                                let NfullTime = NfullDate[1].split(":");
                                let NlocalDate = NfullTime[0] + ":" + NfullTime[1] + " " + NfullDate[2];

                                NeventTime = "<div class='timing'><p>" + NlocalDate + "</p>" 
                                + "<input type='hidden' name='eTitle' value='" + NeventTitle + "'>" 
                                + "<input type='hidden' name='eName' value='" + NeventName + "'>" 
                                + "<input type='hidden' name='ePrice' value='" + NeventPrice + "'>" 
                                + "<input type='hidden' name='eHour' value='" + NeventHour + "'>" 
                                + "<input type='hidden' name='eID' value='" + NeventID + "'>" 
                                + "<input type='hidden' name='eTime' value='" + NeventTime + "'>" 
                                + "<input type='hidden' name='eDate' value='" + NeventDate + "'>" 
                                + "<input type='hidden' name='eLength' value='" + NeventLength + "'>" 
                                +"</div>";

                                timeBox.insertAdjacentHTML('beforeend', NeventTime);

                                    //When selecting a time, display event details on the left
                                    let addedTiming = timeBox.getElementsByClassName("timing")[timeBox.getElementsByClassName("timing").length-1];
                                    addedTiming.addEventListener("click", (e)=>{
                                        if(selectedTiming){selectedTiming.classList.remove("selectedTiming");}
                                        selectedTiming = addedTiming;
                                        addedTiming.classList.add("selectedTiming");

                                        NeventDetails = '<h1>'+NeventTitle+'</h1>'
                                                    + '<p><i class="fa-solid fa-user"></i>'+NeventName+'</p>'
                                                    + '<p><i class="fa-solid fa-clock"></i>'+NeventHour+'</p>'
                                                    + '<p><i class="fa-solid fa-credit-card"></i>$'+NeventPrice+'</p>'
                                                    + '<a href="#" class="detailbutton"><i class="fa-solid fa-book"></i>Questionnaire</a>'
                                                    + '<a href="#" class="detailbutton"><i class="fa-solid fa-file"></i>Notes</a>'
                                                    + '<a href="#" class="detailbutton"><i class="fa-solid fa-calendar-days"></i>Reschedule</a>'
                                                    + '<a href="#" class="detailbutton"><i class="fa-solid fa-ban"></i>Cancel</a>';
                                        
                                        detailBox.innerHTML = NeventDetails;
                                    });
                            }
                            
                        });
                        

                    //If bigger than UTC date
                    } else {

                        let dayIndex = (parseInt(key)+1);
                        let dayNext = Odays[dayIndex];

                        //Add event to appropriate day in ascending order
                        eventValues1 = "<input type='hidden' value='" + dEv[j].value + "'>";
                        eventValues2 = "<input type='hidden' value='" + dEv[j+1].value + "'>";
                        eventValues3 = "<input type='hidden' value='" + dEv[j+2].value + "'>";
                        eventValues4 = "<input type='hidden' value='" + dEv[j+3].value + "'>";

                        if(dayNext.getElementsByTagName("input").length > 0){
                            for(let l = 0; l < dayNext.getElementsByTagName("input").length; l+=4){
                                timingE = dayNext.getElementsByTagName("input")[l];
                                //Get the hour of the timing we are looking at and the timing we want to add
                                toAddHour = dEv[j].value.split("/n/")[5].split(":")[0];
                                timingHour = timingE.value.split("/n/")[5].split(":")[0];

                                //Get the minute of the timing we are looking at and the timing we want to add
                                toAddMin = dEv[j].value.split("/n/")[5].split(":")[1];
                                timingMin = timingE.value.split("/n/")[5].split(":")[1];

                                //Add before timing if correct order
                                if( toAddHour < timingHour || (toAddHour == timingHour && toAddMin <= timingMin) ){
                                    timingE.insertAdjacentHTML('beforebegin', eventValues1);
                                    timingE.insertAdjacentHTML('beforebegin', eventValues2);
                                    timingE.insertAdjacentHTML('beforebegin', eventValues3);
                                    timingE.insertAdjacentHTML('beforebegin', eventValues4);
                                    //Get out of loop
                                    break;
                                }
                            }
                        } else {
                            dayNext.innerHTML += eventValues1;
                            dayNext.innerHTML += eventValues2;
                            dayNext.innerHTML += eventValues3;
                            dayNext.innerHTML += eventValues4;
                        }
                        //Check day as has event
                        if(dayNext.classList.contains("hasevent") == false){
                            dayNext.classList.add("hasevent");
                        }

                        //Add listener to new event day when selected
                        dayNext.addEventListener("click", (e)=>{

                            if(selectedDay != undefined){selectedDay.classList.remove("selectedDay");}
                            selectedDay = dayNext;
                            selectedDay.classList.add("selectedDay");

                            Nevents = dayNext.getElementsByTagName("input");
                    
                            timeBox.innerHTML = " ";
                            
                            for(let h = 0; h < Nevents.length; h++){
                    
                                let NeventText = Nevents[h].value;
                                let NeventInfo = NeventText.split("/n/");
                                let NeventTitle = NeventInfo[0];
                                let NeventName = NeventInfo[1];
                                let NeventPrice = NeventInfo[2];
                                let NeventHour = NeventInfo[3];
                                let NeventID = NeventInfo[4];
                                let NeventTime = NeventInfo[5];
                    
                                let NeventDate = Nevents[h+1].value;
                                let NeventLength = Nevents[h+2].value;
                                let NeventColor = Nevents[h+3].value;
                                h+=3;
                                
                                /* 12:00 is PM  11:00 is AM*/
                                if(NeventTime.split(":")[0] > 11){
                                    NeventTime += " PM";
                                } else {
                                    NeventTime += " AM";
                                }

                                //Change displayed time to local time
                                let NdateSplit = NeventDate.split("-");
                                let NtimeSplit = NeventTime.split(":");
                        
                                //Set as UTC programmically
                                let NnewDate = new Date(Date.UTC(NdateSplit[0],NdateSplit[1]-1,NdateSplit[2],NtimeSplit[0],NtimeSplit[1].split(" ")[0],00));
                        
                                // Set to Local TimeZone
                                let NfullDate = NnewDate.toLocaleString("en-US", {timeZone: currentTimezone}).split(" ");
                                let NfullTime = NfullDate[1].split(":");
                                let NlocalDate = NfullTime[0] + ":" + NfullTime[1] + " " + NfullDate[2];

                                NeventTime = "<div class='timing'><p>" + NlocalDate + "</p>" 
                                + "<input type='hidden' name='eTitle' value='" + NeventTitle + "'>" 
                                + "<input type='hidden' name='eName' value='" + NeventName + "'>" 
                                + "<input type='hidden' name='ePrice' value='" + NeventPrice + "'>" 
                                + "<input type='hidden' name='eHour' value='" + NeventHour + "'>" 
                                + "<input type='hidden' name='eID' value='" + NeventID + "'>" 
                                + "<input type='hidden' name='eTime' value='" + NeventTime + "'>" 
                                + "<input type='hidden' name='eDate' value='" + NeventDate + "'>" 
                                + "<input type='hidden' name='eLength' value='" + NeventLength + "'>" 
                                +"</div>";
                                timeBox.insertAdjacentHTML('beforeend', NeventTime);

                                //When selecting a time, display event details on the left
                                let addedTiming = timeBox.getElementsByClassName("timing")[timeBox.getElementsByClassName("timing").length-1];
                                addedTiming.addEventListener("click", (e)=>{
                                    if(selectedTiming){selectedTiming.classList.remove("selectedTiming");}
                                    selectedTiming = addedTiming;
                                    addedTiming.classList.add("selectedTiming");

                                    NeventDetails = '<h1>'+NeventTitle+'</h1>'
                                                + '<p><i class="fa-solid fa-user"></i>'+NeventName+'</p>'
                                                + '<p><i class="fa-solid fa-clock"></i>'+NeventHour+'</p>'
                                                + '<p><i class="fa-solid fa-credit-card"></i>$'+NeventPrice+'</p>'
                                                + '<a href="#" class="detailbutton"><i class="fa-solid fa-book"></i>Questionnaire</a>'
                                                + '<a href="#" class="detailbutton"><i class="fa-solid fa-file"></i>Notes</a>'
                                                + '<a href="#" class="detailbutton"><i class="fa-solid fa-calendar-days"></i>Reschedule</a>'
                                                + '<a href="#" class="detailbutton"><i class="fa-solid fa-ban"></i>Cancel</a>';
                                    
                                    detailBox.innerHTML = NeventDetails;
                                });
                            }

                        });
                    }
                }
                
                // Remove event from outdated day
                dEv[j].remove();
                dEv[j].remove();
                dEv[j].remove();
                dEv[j].remove();

                //If by removing the event we emptied the day, uncheck it as "has event"
                if(OdaysE[key].getElementsByTagName("input").length <= 0) {
                    if(OdaysE[key].classList.contains("hasevent") == true){
                        OdaysE[key].classList.remove("hasevent");
                    }
                }
                
                j -= 4;
            }
            
            j+= 3;
        }
    });

    //Change today's select day if offkeyed by timezone and unselect if another month is displayed

    //Get today's day date in UTC
    let todayUTCday = document.getElementsByClassName("selected")[0].getElementsByTagName("span")[0].innerText;

    //Get today's day date in local time
    let todayLocalday = new Date().toLocaleString("en-US", {timeZone: currentTimezone}).split("/")[1];

    if(parseInt(todayUTCday) != parseInt(todayLocalday)){
        let oldTodayDay = document.getElementsByClassName("selected")[0];
        oldTodayDay.classList.remove("selected");
        
        if(todayLocalday < todayUTCday){oldTodayDay.previousElementSibling.classList.add("selected");}
        else{oldTodayDay.nextElementSibling.classList.add("selected");}
    }

    setCookie("timezoneValue", selectTimezone.value, 30);
    setCookie("timezoneName", selectTimezone.selectedOptions[0], 30);
    setCookie("timezoneOption", selectTimezone.selectedOptions, 30);

    changeMonth();
    
    changeTimeZone();
    
});

//Function to update the right side ONLY to timezone appropriate 
//Changes current day offset too
function changeTimeZone(){
    //Refresh timeBox
    if(selectedDay != undefined){
        selectedDay.click();
    }

    let currentTimezone = selectTimezone.value;

    //Change timings on the right side based on timezone when selected

    let timeBoxInner = timeBox.getElementsByTagName("div"); //Array of all timings in the timeBox div
    for(let i = 0; i < timeBox.childElementCount; i++){ //For each timing
        let info = timeBoxInner[i].getElementsByTagName("input"); //Get all information inputs
        let fullDate = [info[6].value,info[5].value].join(" "); 

        let dateSplit = info[6].value.split("-");
        let timeSplit = info[5].value.split(":");

        //Set as UTC programmically
        let newDate = new Date(Date.UTC(dateSplit[0],dateSplit[1]-1,dateSplit[2],timeSplit[0],timeSplit[1].split(" ")[0],00));

        // Set to Local TimeZone
        let localDate = newDate.toLocaleString("en-US", {timeZone: currentTimezone, timeZoneName: 'long'});
        // Set Back to UTC TimeZone
        let UTCDate = newDate.toLocaleString("en-US", {timeZone: 'UTC', timeZoneName: 'long'});

        //Get XX:XX AM/PM to display
        LocalHour = localDate.split(",")[1].split(":")[0];
        LocalMin = localDate.split(",")[1].split(":")[1];
        LocalPMAM = localDate.split(" ")[2];

        //Rename time
        timeBoxInner[i].getElementsByTagName("p")[0].innerText = LocalHour + ":" + LocalMin + " " + LocalPMAM;   
        
        //Remove Timing from timebox if timezone changed the day
        LocalDay = localDate.split(",")[0].split("/")[1];
        if(parseInt(LocalDay) != parseInt(dateSplit[2])){
            timeBoxInner[i].remove();
        }
    }
}

//Remove selected day display if displayed month is not live month
function changeMonth(){
    //Get the currently displayed month in number
    let month = document.getElementsByClassName("month-year")[0].getElementsByTagName("h2")[0].innerText.toLowerCase();
    let Months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    month = Months.indexOf(month);

    //Get current month in number
    let liveMonth = new Date().getMonth();

    //If displayed month is not current live month, unselect today's day number
    if(liveMonth != month) {
        let oldTodayDay = document.getElementsByClassName("selected")[0];
        oldTodayDay.classList.remove("selected");
    }

}

let cTZ = getCookie("timezoneValue");
let cTZN = getCookie("timezoneName");
let cTZO = getCookie("timezoneOption");


loadTimeZone();

if(cTZ != "" && cTZN != "") {
    selectTimezone.value = cTZ;
    selectTimezone.dispatchEvent(new Event('change', {bubbles: true}));
}

changeMonth();

setInterval(loadTimeZone, '1000');
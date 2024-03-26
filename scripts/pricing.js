let consults = document.getElementsByTagName("main")[0].getElementsByTagName("a");
let consult = [];
for(let i = 0; i < consults.length; i++) {
    if(consults[i].href == "https://chanone7.com/pricing.php") {
        consult.push(consults[i]);
    }
}

for(let i = 0; i < consult.length; i++) {
    consult[i].addEventListener("click", (ev)=>{
        ev.preventDefault();
        if(consult[i].href == "https://chanone7.com/pricing.php") {
            switch (consult[i].id) {
                case "meetgreet":
                    alert("You must be a brand new patient to opt for a meet & greet.");
                    break;
                case "firstvisit":
                    alert("You must be a new patient to opt for a first visit consultation.");
                    break;
                case "followup":
                    alert("You must schedule a first visit before opting for a follow up consultation.");
                    break;
                case "annual":
                    break;
                default:
                    alert("Functionality coming soon");
            }
        }
    });
}
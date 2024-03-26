let options = document.getElementsByTagName("main")[0].getElementsByTagName("section")[0].getElementsByTagName("a");
let ids = window.location.hash.split("#").pop();

for(let i = 0; i < options.length; i++) {
    /* active button */
    if(options[i].getAttribute("href").split("#").pop() == ids) {
        if(!options[i].classList.contains("activelink2")) {
            options[i].classList.add("activelink2");
        }
    /* unactive button */
    } else {
        if(options[i].classList.contains("activelink2")) {
            options[i].classList.remove("activelink2");
        }
    }
}
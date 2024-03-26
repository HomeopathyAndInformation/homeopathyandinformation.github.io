let path  = window.location.pathname;
let page = path.split("/").pop();
let nav = document.getElementsByTagName("a");

for(let i=0; i < nav.length; i++) {
    /* active button */
    if(nav[i].getAttribute("href").split("/").pop() == page) {
        if(!nav[i].classList.contains("activelink")) {
            nav[i].classList.add("activelink");
        }
    /* unactive button */
    } else {
        if(nav[i].classList.contains("activelink")) {
            nav[i].classList.remove("activelink");
        }
    }
}

/* if none == page, then default homepage */ /*
for(let i=0; i < nav.length; i++) {
    if(page == nav[i].getAttribute("href").split("/").pop()) {
        break;
    }
    else {
        if(!nav[0].classList.contains("activelink")) {
            nav[0].classList.add("activelink");
        }
    }
}*/

/* minimenu setting */
let menubox = document.getElementById("menubox");
let navbar = document.getElementsByTagName("nav");
let query = window.matchMedia("(max-width: 600px)")

menubox.addEventListener("click", () => {
    if(navbar[0].classList.contains("mini-menu")) {
        navbar[0].classList.remove("mini-menu");
    }
    else {
        navbar[0].classList.add("mini-menu");
    }
});

/*

let langmenu = document.getElementsByTagName("nav")[0].getElementsByTagName("img")[0];
let languages = document.getElementsByTagName("nav")[0].getElementsByTagName("section")[0];

langmenu.addEventListener("click", () => {
    if(languages.style.display == "none"){
        languages.style.display = "block";
    } else {
        languages.style.display = "none";
    }
});*/
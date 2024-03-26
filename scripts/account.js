let acc_path  = window.location.acc_pathname;
let acc_nav = document.getElementsByTagName("main")[0].getElementsByTagName("li");
let get = "Profile";
let search = window.location.search;

if(search.split("=")[0] == "?setting") {
    get = search.split("=")[1];
}

for(let i=0; i < acc_nav.length; i++) {

    acc_nav[i].addEventListener("click", ()=>{
        
        $location = "/account/account.php?setting=" + acc_nav[i].getElementsByTagName("p")[0].innerText;
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
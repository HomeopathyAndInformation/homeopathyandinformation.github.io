let eye1 = document.getElementsByTagName("i")[1];
let eye2 = document.getElementsByTagName("i")[2];
let eye3 = document.getElementsByTagName("i")[3];

let pass1 = document.getElementsByTagName("main")[0].getElementsByTagName("input")[1];
let pass2 = document.getElementsByTagName("main")[1].getElementsByTagName("input")[6];
let pass3 = document.getElementsByTagName("main")[1].getElementsByTagName("input")[7];


eye1.addEventListener("click", ()=>{
    if(eye1.classList.contains("fa-eye")){
        eye1.classList.remove("fa-eye");
        eye1.classList.add("fa-eye-slash");
        pass1.setAttribute("type", "password");

    } else {
        eye1.classList.remove("fa-eye-slash");
        eye1.classList.add("fa-eye");
        pass1.setAttribute("type", "text");
    }
});

eye2.addEventListener("click", ()=>{
    if(eye2.classList.contains("fa-eye")){
        eye2.classList.remove("fa-eye");
        eye2.classList.add("fa-eye-slash");
        pass2.setAttribute("type", "password");

    } else {
        eye2.classList.remove("fa-eye-slash");
        eye2.classList.add("fa-eye");
        pass2.setAttribute("type", "text");
    }
});

eye3.addEventListener("click", ()=>{
    if(eye3.classList.contains("fa-eye")){
        eye3.classList.remove("fa-eye");
        eye3.classList.add("fa-eye-slash");
        pass3.setAttribute("type", "password");
    } else {
        eye3.classList.remove("fa-eye-slash");
        eye3.classList.add("fa-eye");
        pass3.setAttribute("type", "text");
    }
});
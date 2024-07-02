
const typed = new Typed('.auto-type', {
    strings: ['FULL-STACK-DEVELOPER','FRONT-END-DEVELOPER','BACK-END-DEVELOPER' ,'WEB DEVELOPER'],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true,
});


let icon = document.querySelector(".icon");
let shownav = document.querySelector(".navbar2");

icon.addEventListener("click" , function() {
    if(shownav.style.display === "block"){
        shownav.style.display = "none"
    }
    else{
        shownav.style.display = "block";
    }
})


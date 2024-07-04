
const typed = new Typed('.auto-type', {
    strings: ['FULL-STACK-DEVELOPER','FRONT-END-DEVELOPER','BACK-END-DEVELOPER' ,'WEB DEVELOPER'],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true,
});

 // side nav
let main = document.querySelector(".home");
let Sidebar =  document.getElementById("sidebar");
let btn2 = document.getElementById("btn2");
let btn1 = document.getElementById("icon");
// social media links
let github = document.getElementById("github");
let Instragram = document.getElementById("instragram");
let Linkdin = document.getElementById("linkdin");
let Twitter = document.getElementById("twitter");
//project links
let Project1 = document.getElementById("project1");
let Project2 = document.getElementById("project2");
let Project3 = document.getElementById("project3");
let Project4 = document.getElementById("project4");
let Project5 = document.getElementById("project5");
let Project6 = document.getElementById("project6");
//form

let form = document.querySelector(".form");
let btn = document.querySelector("button")

btn.addEventListener("click", function(event){
  event.preventDefault();

  // let btn = document.querySelector("button");
let username = document.getElementById("name");
let email = document.getElementById("email");
let sub = document.getElementById("Subject");
let msg = document.getElementById("Massage");

  
   if(username.value === "" || email.value === "" || sub.value === "" || msg.value === ""){
    alert( " input correct Email and Password");
 } else{
    alert("your form succesfully submitted");
    console.log(` Username:${username.value} , Userpassword: ${email.value} , Useraddress: ${sub.value}, userAge:${msg.value}, `);
 }
    
})


value = 0;
btn1.addEventListener("click" , function(){
  if(btn1.value === 0){
  Sidebar.style.display = none;
  value = 1;
}else {
  Sidebar.style.display = "block";
  Sidebar.style.left= 0;
  Sidebar.style.width = "15%";
  value = 0;
  Sidebar.style.transition = "all 1s ease-in-out"
}
});

btn2.addEventListener("click", function(e){
  // Sidebar.style.display = "none"
  Sidebar.style.transition = "all 0.5s linear"
  Sidebar.style.left = "-400px"
  console.log(e);
})

function githubOpen(){
  let url = "https://github.com/Vikashchopde";
  window.open(url,"_blank")
}

function InstragramOpen(){
  let url = "https://ig.me/1Y0tjttoe71lZ2n"
  window.open(url,"_blank")
}

function LinkdinOpen(){
   url = "http://www.linkedin.com/in/vikas-chopde";
  window.open(url,"_blank")
}

function TwitterOpen(){
  let url = "https://github.com/Vikashchopde";
  window.open(url,"_blank")
}

github.addEventListener("click", function(){
  githubOpen();
       console.log("vikas")
})

Instragram.addEventListener("click", function(){
      InstragramOpen();
       console.log("vikas")
})

Linkdin.addEventListener("click", function(){
      LinkdinOpen();
       console.log("vikas")
})

Twitter.addEventListener("click", function(){
  TwitterOpen();
       console.log("vikas")
})


// project section

function project1Open(){
  let url = "https://github.com/Vikashchopde/Image-Generator-Project.git";
 window.open(url,"_blank");
}



Project1.addEventListener("click", function(){
  project1Open();
})

function project2Open(){
  let url = "https://github.com/Vikashchopde/Sticky-Notes.git";
 window.open(url,"_blank");
}



Project2.addEventListener("click", function(){
  project2Open();
})

function project3Open(){
  let url = "https://github.com/Vikashchopde/Youtube-Clone.git";
 window.open(url,"_blank");
}



Project3.addEventListener("click", function(){
  project3Open();
})

function project4Open(){
  let url = "https://github.com/Vikashchopde/Random-Jokes-Generator.git";
 window.open(url,"_blank");
}



Project4.addEventListener("click", function(){
  project4Open();
})

function project5Open(){
  let url = "https://github.com/Vikashchopde/Spotify-Clone.git";
 window.open(url,"_blank");
}



Project5.addEventListener("click", function(){
  project5Open();
})

function project6Open(){
  let url = "https://github.com/Vikashchopde/ToDo-List.git";
 window.open(url,"_blank");
}



Project6.addEventListener("click", function(){
  project6Open();
})

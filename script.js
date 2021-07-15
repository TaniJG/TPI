
let inicio = document.querySelector("#iN");
let SM = document.querySelector("#sM");
let footer = document.querySelector("#foot");
let bt1 = document.querySelector("#inbt");
let bt2 = document.querySelector("#smbt");
let bt3 = document.querySelector("#ftbt");

bt1.addEventListener("click", iniciar, false);
bt2.addEventListener("click", SobreMi,false);
bt3.addEventListener("click", Footer, false);


function iniciar(e) {
  inicio.scrollIntoView({behavior: "smooth"});
};
function SobreMi(e) {
  SM.scrollIntoView({behavior: "smooth"})
};
function Footer(e) {
  footer.scrollIntoView({behavior: "smooth"})
};

let github = document.getElementById("github");
let gmail = document.getElementById("gmail");

github.addEventListener("click", gitlink);
gmail.addEventListener("click", gmlink);

function gitlink() {
  github = window.open("https://github.com/TaniJG")
};

function gmlink() {
  gmail = window.open("mailto:<tanigade@gmail.com>")
};
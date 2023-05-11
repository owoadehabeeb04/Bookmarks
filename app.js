"use strict";

// email verification
const btnEmail = document.querySelector(".contactus");
console.log(btnEmail);
const email = document.querySelector(".MAIL").value;
console.log(email);
const theerror = document.querySelector(".theerror");
console.log(theerror);
const error = document.querySelector(".error");
console.log(error);
const congrats = document.querySelector(".congrats");

const maill = btnEmail.addEventListener("click", function () {
  const email = document.querySelector(".MAIL").value;
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  if (validateEmail(email)) {
    congrats.style.display = "inline-flex";
    error.style.border = "4px solid green";
  } else {
    theerror.style.display = "inline-flex";
    error.style.border = "4px solid hsl(0, 94%, 66%)";
  }
});

// FAQS accordion

const Questions = document.querySelectorAll(".question1");
const answer = document.getElementsByClassName("theanswer");
const answerss = document.getElementsByClassName("answer");
const active = document.getElementsByClassName("actives");
const icon = document.getElementsByClassName("svg");
const icon2 = document.getElementsByClassName("svg2");
const icon3 = document.getElementsByClassName("svg3");
const headerquestion = document.getElementsByClassName("original-question");
console.log(headerquestion);

for (let i = 0; i < Questions.length; i++) {
  // const e = function () {};
  Questions[i].addEventListener("click", function () {
    if (Questions[i]) {
    }
    answerss[i].classList.toggle("actives");
    icon[i].classList.toggle("activing");
    icon2[i].classList.toggle("activesvg");
    icon3[i].classList.toggle("activesvg");
    headerquestion[i].classList.toggle("colorchanging");
  });
}

// TABBED

const tabs = document.querySelectorAll(".tabs");
const features = document.querySelectorAll(".bookmarkingfeatures");

tabs.forEach((tab, feature) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    features.forEach((content) => {
      content.classList.remove("active");
    });
    features[feature].classList.add("active");
  });
});

// NAVBAR

const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
const hamburgered = document.querySelector(".hamburgered");
console.log(hamburgered);
const closeee = document.querySelector(".close");
console.log(closeee);
const closeeed = document.querySelector(".closed");
console.log(closeeed);
const navbar = document.querySelector(".navbar");
console.log(navbar);
const Linkitems = document.querySelector(".LinkItems");
const logoimg = document.querySelector(".logo_img");
const logoheader = document.querySelector(".logoheader");
console.log(logoheader);

hamburgered.addEventListener("click", function () {
  navbar.classList.toggle("navbarActive");
  logoimg.classList.toggle("activeeslogo");
  logoheader.style.fill = "white";
  closeeed.style.display = "inline-flex";
  closeee.style.fill = "white";
  hamburgered.style.display = "none";
  Linkitems.style.display = "inline-flex";
  Linkitems.classList.add("LinkItemsActive");
});

closeeed.addEventListener("click", function () {
  Linkitems.style.display = "none";
  logoheader.style.fill = "#242A45";
  hamburgered.style.display = "inline-flex";
  navbar.classList.remove("navbarActive");
  closeeed.style.display = "none";
});

// navlink
const nav_link = document.querySelectorAll(".nav_link");
nav_link.forEach((links) => {
  links.addEventListener("click", function () {
    Linkitems.style.display = "none";
    logoheader.style.fill = "#242A45";
    hamburgered.style.display = "inline-flex";
    navbar.classList.remove("navbarActive");
    closeeed.style.display = "none";
  });
});

// login
const navlogin = document.querySelector(".LoginButton");
console.log(navlogin);
const overlay = document.querySelector(".overlay");
console.log(overlay);
const loginpage = document.querySelector(".LOG-IN");
console.log(loginpage);
const backSign = document.querySelector(".backSign");
console.log(backSign);
const backlogin = document.querySelector(".gologin");
const Signup = document.querySelector(".SIGNUP");

navlogin.addEventListener("click", function () {
  overlay.style.display = "inline-flex";
  loginpage.style.display = "block";
});
overlay.addEventListener("click", function () {
  loginpage.style.display = "none";
  overlay.style.display = "none";
  Signup.style.display = "none";
});
backSign.addEventListener("click", function () {
  Signup.style.display = "inline-flex";
  loginpage.style.display = "none";
});
backlogin.addEventListener("click", function () {
  Signup.style.display = "none";
  loginpage.style.display = "inline-flex";
});

const closelogin = document.querySelectorAll(".close-login");

closelogin.forEach((login) => {
  login.addEventListener("click", function () {
    Signup.style.display = "none";
    loginpage.style.display = "none";
    overlay.style.display = "none";
  });
});

// verifying login and  signup page

const formsign = document.querySelector(".formsign");
const formlogin = document.querySelector(".formlogin");


const emaillogin = document.querySelector('.input_email_login');
const passwordlogin = document.querySelector('.input_password_login');
const namesign = document.querySelector('.input_name_sign');
const emailsign = document.querySelector('.input_email_sign');
const passwordsign = document.querySelector('.input_password_sign');
const passwordsign2 = document.querySelector('.input_password2_sign');



// formsign.forEach((forms) => forms.addEventListener("submit", function (e) {
//   e.preventDefault();


//   validateInputs();
// }));


formlogin.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs2();
});
formsign.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = function(){
  namesignValue = namesign.value.trim()
  emailsignValue = emailsign.value.trim()
  passwordsignValue =passwordsign.value.trim()
  passwordsign2Value =passwordsign2.value.trim()

}
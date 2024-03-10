const darkModeBTN = document.querySelector("#dark-theme");
const themeIcon = document.querySelector("#theme-icon");
const heroImg = document.querySelector(".hero-img");
const heroTextLightz = document.querySelector(".hero-text-lightz");
const featuresHeadline = document.querySelector(".features-headline");
const featuresIcon = document.querySelectorAll(".features-icon");
const featuresIconDiv = document.querySelectorAll(".features-icon-div");
const menuBTN = document.querySelector(".menu");

function changeFeaturesIcon(featuresIcon,src_1st,src_2nd,src_3rd,src_4th) {
  // This function change features icon when clicked button change Mode
  // It change src of the img
  featuresIcon[0].src = src_1st;
  featuresIcon[1].src = src_2nd;
  featuresIcon[2].src = src_3rd;
  featuresIcon[3].src = src_4th;
}

function changFeaturesIconDiv(featuresIconDiv, borderColor) {
  // Function change the border color when clicked button change Mode
  for (let i of featuresIconDiv){
    i.style.borderColor = borderColor; 
  }
}
function changeOmbreText(heroTextLightz,featuresHeadline,heroColor,featuresColor,addOrRemove) {
  // Function change hero section text Lightz.js and Features section headline
  heroTextLightz.style.color = heroColor;
  heroTextLightz.classList[`${addOrRemove}`]("ombre-text");
  featuresHeadline.style.color = featuresColor;
  featuresHeadline.classList[`${addOrRemove}`]("ombre-text");
}
function changeButtonIcon(btnImg,src,alt) {
  // function change src in Img tag when clicked button change Mode
  btnImg.src = src;
  btnImg.alt = alt;
}

darkModeBTN.addEventListener("click", (e) => {
  if (e.target.classList.contains("light")) {
    e.target.classList.remove("light");
    e.target.classList.add("dark");
    changeButtonIcon(themeIcon,"assets/icon-sun-white.png","sun")
    heroImg.src = "assets/hero-dark-mode.png";
    changeOmbreText(heroTextLightz, featuresHeadline,"transparent", "transparent","add");
    changeFeaturesIcon(featuresIcon,
                      "assets/icon-lightning-gradient.png",
                      "assets/icon-syntax-gradient.png",
                      "assets/icon-wand-gradient.png",
                      "assets/icon-phone-gradient.png")
    changFeaturesIconDiv(featuresIconDiv, "var(--primary)");
    document.body.classList.add("dark-mode");

  } else if (e.target.classList.contains("dark")) {
    e.target.classList.remove("dark");
    e.target.classList.add("light");
    changeButtonIcon(themeIcon, "assets/icon-moon-white.png", "moon")
    heroImg.src = "assets/hero-light-mode.png";
    changeOmbreText(heroTextLightz, featuresHeadline,"var(--primary)","var(--text-primary)","remove");
    changeFeaturesIcon(featuresIcon,
                        "assets/icon-lightning-gray.png",
                        "assets/icon-syntax-gray.png",
                        "assets/icon-wand-gray.png",
                        "assets/icon-phone-gray.png")
    changFeaturesIconDiv(featuresIconDiv, "#a8b4bc");
    document.body.classList.remove("dark-mode");
  }
});
menuBTN.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu") || e.target.tagName === "svg") {
    menuBTN.firstElementChild.classList.add("close");
    menuBTN.lastElementChild.classList.remove("close");
  }
 });
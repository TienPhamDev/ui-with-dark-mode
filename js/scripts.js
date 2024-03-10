const darkModeBTN = document.querySelector("#dark-theme");
const themeIcon = document.querySelector("#theme-icon");
const heroImg = document.querySelector(".hero-img");
const heroTextLightz = document.querySelector(".hero-text-lightz");
const featuresHeadline = document.querySelector(".features-headline");
const featuresIcon = document.querySelectorAll(".features-icon");
const featuresIconDiv = document.querySelectorAll(".features-icon-div");

function changeFeaturesIcon(featuresIcon,src_1st,src_2nd,src_3rd,src_4th) {
  featuresIcon[0].src = src_1st;
  featuresIcon[1].src = src_2nd;
  featuresIcon[2].src = src_3rd;
  featuresIcon[3].src = src_4th;
}
function changFeaturesIconDiv(featuresIconDiv, borderColor) {
  for (let i of featuresIconDiv){
    i.style.borderColor = "var(--primary)"; 
  }
}
function changeOmbreText(heroTextLightz,featuresHeadline,heroColor,featuresColor,addOrRemove) {
  heroTextLightz.style.color = heroColor;
  heroTextLightz.classList[`${addOrRemove}`]("ombre-text");
  featuresHeadline.style.color = featuresColor;
  featuresHeadline.classList[`${addOrRemove}`]("ombre-text");
}
function changeButtonIcon(btnImg,src,alt) {
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
    
    changFeaturesIconDiv(featuresIconDiv, "var(--features-bg)");
    document.body.classList.remove("dark-mode");
  }
 });
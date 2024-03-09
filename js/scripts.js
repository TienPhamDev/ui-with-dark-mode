const darkMode = document.querySelector("#dark-theme");
darkModeChild = darkMode.children;
const themeIcon = document.querySelector("#theme-icon");
darkMode.addEventListener("click", (e) => {
  if (e.target.id === "dark-theme" || e.target.id === "theme-icon") {
    const themeIcon = document.querySelector("#theme-icon");
    themeIcon.src = "assets/icon-sun-white.png";
    themeIcon.alt = "sun";
  }
 });
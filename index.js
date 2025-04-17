
/**********************************
 * 
 * 
 * TODO: Make the regular content of the page appear
 * 
 */

/**********************************
 * 
 * 
 * TODO: Make the content of the projects appear
 * 
 */

/**********************************
 * 
 * 
 * BUTTON TO SWITCH THE LANGUAGE OF THE PAGE
 * TODO: Make the code cleaner
 * 
 */
const switchButton = document.getElementById("switch-lang");

function setLanguage() {
  if (localStorage.getItem("myLang") === "eng") {
    document
      .querySelectorAll('[mylang="spa"]')
      .forEach((x) => (x.style.display = "none"));
    document
      .querySelectorAll('[mylang="eng"]')
      .forEach((x) => (x.style.display = ""));
  } else {
    document
      .querySelectorAll('[mylang="eng"]')
      .forEach((x) => (x.style.display = "none"));
    document
      .querySelectorAll('[mylang="spa"]')
      .forEach((x) => (x.style.display = ""));
  }
}

setLanguage();

if (!localStorage.getItem("myLang")) {
  localStorage.setItem("myLang", "eng");
}

switchButton.addEventListener("click", (e) => {
  let currentLang = localStorage.getItem("myLang");

  if (currentLang === "eng") {
    console.log("ahora spa");
    localStorage.setItem("myLang", "spa");
    setLanguage();
  } else {
    console.log("ahora eng");
    localStorage.setItem("myLang", "eng");
    setLanguage();
  }
});


/**********************************
 * 
 * 
 * BUTTON TO SWITCH THE MODE OF THE PAGE
 * TODO: Make the code cleaner
 * 
 */
const modeButton = document.getElementById("switch-mode");

function setMode() {
  let mode = localStorage.getItem("lightMode");
  if (!mode) document.body.classList.remove("lightmode");
  else document.body.classList.add("lightmode");
}

setMode();

modeButton.addEventListener("click", (e) => {
  let mode = localStorage.getItem("lightMode");
  if (!mode) localStorage.setItem("lightMode", "true");
  else localStorage.removeItem("lightMode", "true");
  setMode();
});

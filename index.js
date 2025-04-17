// switch lang button
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

// switch mode button
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

// fade in scroll about me

/*function splitTextWords (element)  {
  const myWords = 
}*/

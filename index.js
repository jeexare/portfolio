
/**********************************
 * 
 * 
 * TODO: Make the regular content of the page appear
 * 
 */

// Grab the header
const myHeader = document.getElementById('posheader');

/**
 * Creates an HTML heading element (e.g., <h1>) where each letter of the given words
 * is wrapped in a <span> with a staggered fade-in animation.
 *
 * @param {string} myElement - The type of heading element to create (e.g., 'h1', 'h2').
 * @param {string} myWords - The text content to split into animated words and letters.
 * @returns {HTMLElement} - The heading element with animated spans for each letter.
 */
function addFadeWords(myElement, myWords) {
    const h1 = document.createElement(myElement);
    const words = myWords.split(' ');
    words.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('word');
        [...word].forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            wordSpan.appendChild(span);
            span.style.animation = 'fadeWords 0.5s ease forwards';
            span.style.animationDelay = `${index * 0.1}s`; 
        });
        h1.appendChild(wordSpan);
        h1.appendChild(document.createTextNode(' '));
    });
    return h1;
}

/**
 * Creates a language-specific header section containing an animated title and a subtitle.
 * Only runs if the provided language matches the value stored in localStorage ("myLang").
 *
 * @param {string} lang - The language code to match against localStorage (e.g., 'eng', 'spa').
 * @param {string} title - The main title text to animate, split letter by letter.
 * @param {string} subtitle - The secondary text displayed below the title.
 * @returns {HTMLElement|null} - The constructed header <div> element, or null if the language doesn't match.
 */

function createHeaderInfo(lang, title, subtitle) {
    const currentLang = localStorage.getItem("myLang");
    if (currentLang !== lang) return null;
    const div = document.createElement('div');
    div.classList.add('container', 'fade-text');
    div.setAttribute('mylang', lang);
    const h1 = addFadeWords('h1', title);
    const h2 = document.createElement('h2');
    h2.textContent = subtitle;
    div.appendChild(h1);
    div.appendChild(h2);
    return div;
  }  

  /**
 * Generates and appends the appropriate language-specific header (English or Spanish) 
 * based on the current language stored in localStorage ("myLang").
 * Only the matching language's header is added to the page.
 *
 * @param {string} title1 - English title text.
 * @param {string} subtitle1 - English subtitle text.
 * @param {string} title2 - Spanish title text.
 * @param {string} subtitle2 - Spanish subtitle text.
 */

  function createHeader(title1, subtitle1, title2, subtitle2) {
    myHeader.innerHTML = "";
    const engHeader = createHeaderInfo('eng', title1, subtitle1);
    const spaHeader = createHeaderInfo('spa', title2, subtitle2);
    if (engHeader) myHeader.appendChild(engHeader);
    if  (spaHeader)  myHeader.appendChild(spaHeader);
  }

  const myAboutMe = document.getElementById('posaboutme');
  console.log(myAboutMe);

  /**
 * Creates an <h1> element containing a paragraph of "about me" text for a specific language.
 * Only generates the element if the provided language matches the current language in localStorage ("myLang").
 *
 * @param {string} lang - Language code for the content (e.g., 'eng' or 'spa').
 * @param {string} paragraph - The text content to be displayed in the <h1>.
 * @returns {HTMLElement|null} The generated <h1> element or null if the language doesn't match.
 */

  function createAboutMeInfo(lang, paragraph) {
    const currentLang = localStorage.getItem("myLang");
    if (currentLang !== lang) return null;

    const h1 = document.createElement('h1');
    h1.setAttribute('mylang', lang);
    h1.textContent = paragraph;

    return h1;
  }

  /**
 * Creates and appends "About Me" sections for both English and Spanish,
 * depending on the current language set in localStorage ("myLang").
 * Only the matching language section will be created and appended to the #myAboutMe element.
 *
 * @param {string} paragraph1 - The English "About Me" paragraph.
 * @param {string} paragraph2 - The Spanish "About Me" paragraph.
 */

  function createAboutMe(paragraph1, paragraph2) {
    myAboutMe.innerHTML = "";
    const engAboutMe = createAboutMeInfo('eng', paragraph1);
    const spaAboutMe = createAboutMeInfo('spa', paragraph2);
    if (engAboutMe) myAboutMe.appendChild(engAboutMe);
    if  (spaAboutMe)  myAboutMe.appendChild(spaAboutMe);
  }
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
  // Re-create only the header for the selected language
  createHeader("web development", "and then this", "desarrollo web", "y luego esto");
  createAboutMe("Hi there! I'm Gabriela Rubio — a CS student at the University of Utah who’s passionate about making programming both aesthetic and functional. I'm a proud hobby-hopper who loves trying all sorts of things, and I think my code should reflect that creative chaos. So here’s my portfolio — check it out if you think we can twin! bye world!", "¡Hola! Soy Gabriela Rubio, estudiante de CS en la Universidad de Utah, y me apasiona hacer que la programación sea tanto estética como funcional. Me encanta probar de todo como hobby, y creo que mi código debe reflejar ese caos creativo. Así que aquí está mi portafolio, ¡échale un vistazo si crees que podemos match! Bye world!")
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

import content from './content.js';
import projects from './projects.js';

const myNav = document.getElementById('navlinks');
const myHeader = document.getElementById('posheader');
const myAboutMe = document.getElementById('posaboutme');
const myContactMe = document.getElementById('rightside');
const myProjects = document.getElementById("thiswillbetheslideshow");
const switchButton = document.getElementById("switch-lang");


/**
 * Creates navigation links based on the provided language and array of links.
 * This function will only create links if the current language (from localStorage) matches the provided `lang`.
 * 
 * @param {string} lang - The language ('eng' or 'spa') for which to create the navigation links.
 * @param {Array} links - An array of objects representing the navigation items, where each object has:
 *   - title (string): The text content of the link.
 *   - link (string): The href attribute for the link.
 * 
 * This function clears the existing navigation, sets the language attribute, and appends the new links.
 */

function createNavInfo(lang, links) {
    const currentLang = localStorage.getItem("myLang");
    if (currentLang !== lang) return null;
    myNav.innerHTML = '';
    links.forEach(({ title, link }) => {
        const a = document.createElement('a');
         a.href = link;
          a.textContent = title;
          myNav.appendChild(a);
        });
}

/**
 * Calls `createNavInfo` for both English and Spanish navigation links.
 * This function generates the navigation links for both languages based on the passed arrays.
 * 
 * @param {Array} array1 - An array of objects representing the navigation items in English.
 *   Each object should have:
 *   - title (string): The text content of the link.
 *   - link (string): The href attribute for the link.
 * 
 * @param {Array} array2 - An array of objects representing the navigation items in Spanish.
 *   Each object should have:
 *   - title (string): The text content of the link.
 *   - link (string): The href attribute for the link.
 * 
 * This function calls `createNavInfo` for both English and Spanish, passing the corresponding arrays and language code.
 */
function createNav(array1, array2) {
    createNavInfo('eng', array1);
    createNavInfo('spa', array2);
}

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

  /** Creates a <div> element containing an <h3> and <h1> text for a specific language.
   * Only generates de element  if the provided language matches  the current language in localStorage ("myLang"),
   * 
   * @param {string}  lang - Languague code for the content
   * @param  {string} h1 - The text content to be displayed in the <h1>
   * @param {string} h3 - The text content to be displayed in the <h3>
   * @returns {HTMLElement|null} The generated <div> element or null if the language doesn't mach
   */

  function createContactMeInfo (lang, h1, h3) {
    const currentLang = localStorage.getItem("myLang");
    if (currentLang != lang) return null;

    const div = document.createElement('div');

    const h1Elem = document.createElement('h1');
    h1Elem.textContent = h1;

    const h3Elem = document.createElement('h3');
    h3Elem.textContent = h3;

    div.appendChild(h3Elem);
    div.appendChild(h1Elem);

    return div;
  }

  /** Creates and appends "Contact Me" sections for both English and Spanish,
   * dependind on the current language set in localStorage ("myLang").
   * Only the matching section will be created and appended to the myContactMe element.
   * 
   * @param {string} title1 - The English title.
   * @param {string} subtitle1 - The English subtitle.
   * @param {string} title2 - The Spanish title.
   * @param {string} subtitle2 - The Spanish subtitle.
   */

  function createContactMe (title1, subtitle1, title2, subtitle2) {
    myContactMe.innerHTML =  "";
    const engContactMe = createContactMeInfo("eng", title1, subtitle1);
    const spaContactMe = createContactMeInfo("spa", title2, subtitle2);
    if (engContactMe) myContactMe.appendChild(engContactMe);
    if (spaContactMe) myContactMe.appendChild(spaContactMe);
  }

/**
 * Generates and injects project cards into the DOM based on the selected language.
 * 
 * @param {string} lang - The language key to select which set of projects to display (e.g., 'eng', 'spa').
 * 
 * This function:
 * - Clears the current contents of the `myProjects` container.
 * - Loops through the projects array for the specified language.
 * - Dynamically creates HTML for each project, including name, image, description, and link.
 * - Appends each project card to the DOM.
 */
function createProjects(lang) {
    myProjects.innerHTML = '';
    const projectList = projects[lang];

    projectList.forEach(project => {
        const projectHTML = `
          <div class="aproject ${project.kind}">
            <img src="${project.img}" alt="${project.name}">
            <h1><a href="${project.link}">${project.name}</a></h1>
            <p>${project.description}</p>
          </div>
        `;
        myProjects.innerHTML += projectHTML;
      });
}

/**
 * Switches the language of the page between English and Spanish.
 * When the button is clicked, the language preference is saved in localStorage,
 * and the page content is updated accordingly based on the selected language.
 * 
 * @event switchButton - Triggers when the language switch button is clicked.
 * It checks the current language in localStorage:
 *   - If it's set to "eng", it switches to "spa".
 *   - If it's set to "spa", it switches to "eng".
 * Then, it reloads the content of the page using the updated language setting.
 */

switchButton.addEventListener("click", (e) => {
  let currentLang = localStorage.getItem("myLang");

  if (currentLang === "eng") localStorage.setItem("myLang", "spa");
   else localStorage.setItem("myLang", "eng");

  loadContent();
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


async function loadContent() {
     let currentLang = localStorage.getItem("myLang");
      createNav(content.eng.navLinks, content.spa.navLinks);
      createHeader(content.eng.header.title, content.eng.header.subtitle, content.spa.header.title, content.spa.header.subtitle);
      createAboutMe(content.eng.aboutMe.paragraph, content.spa.aboutMe.paragraph);
      createContactMe(content.eng.contactMe.title, content.eng.contactMe.subtitle, content.spa.contactMe.title, content.spa.contactMe.subtitle);
      createProjects(currentLang);
  }

  if (!localStorage.getItem("myLang")) {
    localStorage.setItem("myLang", "eng");
  }
  
  loadContent();
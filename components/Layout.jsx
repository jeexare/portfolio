
import Hero from "/components/Hero.jsx";
import About from "/components/About.jsx";
import Projects from "/components/Projects.jsx";
import Skills from "/components/Skills.jsx";
import Contact from "/components/Contact.jsx";
import Footer from "/components/Footer.jsx";

export default function Layout({ heroRef, showLogo }) {
    return (
        <>
        <Hero heroRef={heroRef} showLogo={showLogo}  />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        </>
    );
}
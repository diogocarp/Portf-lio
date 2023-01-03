import { useState } from "react";
import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiesContainer from "./TechnologiesContainer";
import "../styles/components/buttons.sass";
import "../styles/components/change.css";
import "../styles/components/mobile.css";

const MainContent = () => {
  const [about, setAbout] = useState(true);
  const [tech, setTech] = useState(false);
  const [projects, setProjects] = useState(false);



  function Responsive() {
    
    return (
      <nav class="nav">
        <button
          class="btn-menu"
          aria-label="Abrir Menu"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
          onClick={handleButtonClick}
        >
        <span class="hamburger"></span>
        </button>
        <ul class="menu" id="menu" role="menu">
          <li>
            <a onClick={()=>{setAbout(true), setTech(false), setProjects(false)}}>Sobre</a>
          </li>
          <li>
            <a onClick={()=>{setAbout(false), setTech(true), setProjects(false)}}>Tecnologias</a>
          </li>
          <li>
            <a onClick={()=>{setAbout(false), setTech(false), setProjects(true)}}>Projetos</a>
          </li>
        </ul>
      </nav>
    );
  }

  function setAria() {
    const nav = document.querySelector('.nav')
    const btnMenu = document.querySelector('.btn-menu')
    const isActive = nav.classList.contains("active");
    btnMenu.setAttribute("aria-expanded", isActive);
    if (isActive) {
      btnMenu.setAttribute("aria-label", "Fechar Menu");
    } else {
      btnMenu.setAttribute("aria-label", "Abrir Menu");
    }
  }

  function handleButtonClick(event) {
    const nav = document.querySelector('.nav')
    const menu = document.querySelector('.menu');
    if (event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle("active");
    handleClickOutside(menu, () => {
      nav.classList.remove("active");
      setAria();
    });
    setAria();
  }

  function handleClickOutside(targetElement, callback) {
    const html = document.documentElement;
    function handleHTMLClick(event) {
      if (!targetElement.contains(event.target)) {
        targetElement.removeAttribute("data-target");
        html.removeEventListener("click", handleHTMLClick);
        html.removeEventListener("touchstart", handleHTMLClick);
        callback();
      }
    }
    if (!targetElement.hasAttribute("data-target")) {
      html.addEventListener("click", handleHTMLClick);
      html.addEventListener("touchstart", handleHTMLClick);
      targetElement.setAttribute("data-target", "");
    }
  }

  function Main() {
    return (
      <>
        {about ? <AboutContainer /> : null}
        {tech ? <TechnologiesContainer /> : null}
        {projects ? <ProjectsContainer /> : null}
      </>
    );
  } 
  
  return (
    <main id="main-content">
      <Responsive />
      <Main />
    </main>
  );
};

export default MainContent;


import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiJava,
  DiAndroid,
  DiEclipse,
  DiGit,
  DiSass,
  
  

} from "react-icons/di";
import {SiTypescript} from 'react-icons/all'
import "../styles/components/technologiescontainer.sass";
import '../styles/components/technologies.css'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "ts", name: "Typescript", icon: <SiTypescript /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "android", name: "Android", icon: <DiAndroid /> },
  { id: "eclipse", name: "Eclipse", icon: <DiEclipse /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Linguagens e Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;

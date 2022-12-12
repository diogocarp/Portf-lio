import { useEffect, useState } from 'react'
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'
import '../styles/components/buttons.sass'
import '../styles/components/buttons.css'

const MainContent = () => {

    const [about, setAbout] = useState(true)
    const [tech, setTech] = useState(false)
    const [projects, setProjects] = useState(false)

    function Main(){
        return(
            <>
                {about ? <AboutContainer/> : null}
                {tech ? <TechnologiesContainer/> :null}
                {projects ? <ProjectsContainer/> : null}      
            </>
        )
    }

    return(
        <main id='main-content'>
            <div id="buttons">
            <button className="btn-bt" onClick={() => {setAbout(true), setTech(false),setProjects(false)}}>Sobre mim</button>
            <button className="btn-bt" onClick={() => {setAbout(false), setTech(true),setProjects(false)}}>Tecnologias</button>
            <button className="btn-bt" onClick={() => {setAbout(false), setTech(false),setProjects(true)}}>Projetos</button>
        </div>
            {<Main/>} 
        </main>
    )


}

export default MainContent
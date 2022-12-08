import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import Projects from './Projects'
import TechnologiesContainer from './TechnologiesContainer'
 const MainContent = () => {

    return(
        <main id='main-content'>
            <AboutContainer/>
            <TechnologiesContainer/>
            <Projects/>
        </main>
    )


}

export default MainContent
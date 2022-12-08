import Avatar from '../images/perfil.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'
 const Sidebar = () => {

    return(
        <aside id='sidebar'>
            <img src={Avatar} alt='Diogo Carpinelli'/>
            <p className="title">Full Stack Developer</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">
                Download curriculo
            </a>
        </aside>
    )


}

export default Sidebar
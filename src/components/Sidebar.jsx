import Avatar from '../images/Perfil.png'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'
 const Sidebar = () => {

    return(
        <aside id='sidebar'>
            <img src={Avatar} alt='Diogo Carpinelli'/>
            <p className="title">Desevolvedor Full Stack</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href='https://drive.google.com/file/d/1iADL_CZHbJcKIrYeqGmOwqTjCvPfzWXS/view?usp=sharing' className="btn" target='_blank'>
                Download curriculo
            </a>
        </aside>
    )


}

export default Sidebar

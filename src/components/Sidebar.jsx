import Avatar from '../images/perfil.jpg'
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
            <a href='https://drive.google.com/file/d/1H5c4HbqXZZZyzrBhRr6LkGxjpwr_5w5t/view?usp=share_link' className="btn">
                Download curriculo
            </a>
        </aside>
    )


}

export default Sidebar
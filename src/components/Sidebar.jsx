import Avatar from '../images/Perfil.jpeg'
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
            <a href='https://drive.google.com/file/d/1C6rvp5nkHmfArq_GZYGooO90QD_y8H4V/view?usp=sharing' className="btn">
                Download curriculo
            </a>
        </aside>
    )


}

export default Sidebar

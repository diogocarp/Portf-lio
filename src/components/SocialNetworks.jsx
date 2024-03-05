import '../styles/components/socialnetworks.sass'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const socialNetworks = [
    
    { name: 'linkedin', icon: <FaLinkedinIn/>, link:'https://www.linkedin.com/in/diogo-carpinelli-95ba131b6/' },
    { name: 'github', icon: <FaGithub/>, link:'https://github.com/diogocarp'  }

]
const SocialNetworks = () => {

    return(
        <section id='social-networks'>
            {socialNetworks.map((network) => (<a href={network.link} className='social-btn' id={network.name} key={network.name}> {network.icon}</a>))}
        </section>
         
    )

    }
export default SocialNetworks;
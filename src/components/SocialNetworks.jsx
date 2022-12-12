import '../styles/components/socialnetworks.sass'
import '../styles/components/buttons.css'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const socialNetworks = [
    
    { name: 'linkedin', icon: <FaLinkedinIn/>, link:'https://www.linkedin.com/in/diogo-carpinelli-95ba131b6/' },
    { name: 'github', icon: <FaGithub/>, link:'https://github.com/diogocarp'  },
    { name: 'instagram', icon: <FaInstagram/>, link:'https://www.instagram.com/invites/contact/?i=oslnfjqkfnps&utm_content=404osc1'  }

]
const SocialNetworks = () => {

    return(
        <section id='social-networks'>
            {socialNetworks.map((network) => (<a href={network.link} className='social-btn' id={network.name} key={network.name}> {network.icon}</a>))}
        </section>
         
    )

    }
export default SocialNetworks;
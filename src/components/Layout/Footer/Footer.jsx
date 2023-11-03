import MidiaLinks from './MidiaLinks/MidiaLinks.jsx';
import './style.css';

const Footer = () => {
    return (
        <footer className='layout_footer_container'>
            <div>
                <blockquote>  Vitor Gabriel Nunes Cesarino </blockquote>
                <MidiaLinks />
            </div>
        </footer>
    );
}

export default Footer;
import logo_small from '../../images/logo_small.svg';
import './Footer.css';
import fb from '../../images/FB.svg';
import tw from '../../images/Tw.svg';
import mail from '../../images/Mail.svg';

function index() {
  return (
    <footer>
        <div className="footer-wrapper">
            <img src={logo_small} alt="" className="footer-logo" />
            <div className="footer-content">
                <p>Cím: <span>Siculeni 106, 537295, HR.</span></p>
                <p>Telefon: <span>0266 379107</span></p>
                <p>Fax: <span>0266 316951</span></p>
                <p>Email: <span>madefalva@yahoo.com</span></p>
            </div>
            <div className="socials">
                <a href="https://www.facebook.com/madefalvigyumolcs/" target="_blank" rel="noopener noreferrer">
                    <img src={fb} alt="" className="social-icon" />
                </a>
                <a href="https://twitter.com/madefalvigyumolcs" target="_blank" rel="noopener noreferrer">
                    <img src={tw} alt="" className="social-icon" />
                </a>
                <a href="mailto:madefalva@yahoo.com" target="_blank" rel="noopener noreferrer">
                    <img src={mail} alt="" className="social-icon" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default index
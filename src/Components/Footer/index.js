import logo_small from '../../images/logo_small.svg';
import './Footer.css';

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
        </div>
    </footer>
  )
}

export default index
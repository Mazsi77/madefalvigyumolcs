import icon1 from '../../images/icon1.svg';
import './Grant.css'

function Grant() {
  return (
    <div className="grant-wrapper">
        <div className="grant-content">
            <h3>A Madéfalvi Gyümölcs</h3>
            <div className="grant-graphic">
                <div className="line"></div>
                <img src={icon1} alt="" className="grant-icon" />
                <h3 className="graphic-text">Garantálja</h3>
                <img src={icon1} alt="" className="grant-icon flipped" />
                <div className="line"></div>
            </div>
            <p>Helyi alapanyagból. Helyi erőforrásokkal. Helyi munkaerővel. Helyieknek.</p>
        </div>
    </div>
  )
}

export default Grant
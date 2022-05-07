import {NavLink} from 'react-router-dom'
import './ImageSection.css'

function index(props) {

  return (
    <div className={`section-wrapper ${props.float}`}>
        <img className="img" src={props.img} alt="" />
        <div className="section-content">
          <div className="text-wrapper">
              <h2>{props.title}</h2>
              <h5>{props.text}</h5>
              <NavLink to='/asd' className='btn'>TOVÁBB</NavLink>
          </div>
        </div>
    </div>
  )
}

export default index
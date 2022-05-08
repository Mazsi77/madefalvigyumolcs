import './TextSection.css';

function TextSection(props) {
  return (
    <div className="text-section-wrapper">
        <img src={props.img} className="section-icon" />
        <h2>{props.title}</h2>
        {
            props.texts.map((text, index) => {
                return (
                    <p key={index}>{text}</p>
                )
            })
        }
        <div className="circle"></div>
    </div>
  )
}

export default TextSection
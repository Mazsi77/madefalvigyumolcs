import React from 'react'
import './LangSwitch.css'
import { usState } from 'react'; 
function LangSwitch() {

    const [lang, setLang] = React.useState('hu');

  return (
    <div className="language-wrapper">
        <button className={`lang-btn ${lang == 'hu' ? 'selected' :''}`} onClick={() => setLang('hu')}>HU</button>
        <button className={`lang-btn ${lang == 'ro' ? 'selected': ''}`} onClick={() => setLang('ro')}>RO</button>
    </div>
  )
}

export default LangSwitch
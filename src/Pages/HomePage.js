import React from 'react'
import { faTwitter, faGithub, faGitlab, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage () {
  return (
    <div className='HomePage'>
      <header className='hero'>
        <h1 className='hero-text'>
          Guude! bin de
          <span> †hørs†en</span>,
        </h1>
        <p className='h-sub-text'>
          und gerad bissi im Umschulungstress (FI-Anwendungsentwicklung).
        </p><br />
        <p className='h-sub-text'>
          Aber ich bin der Überzeugung, dass durch meine seit bereits Jahrzehnten und niemals endenden autodidaktisch erlernten
          Kenntnissen, in Bereich der Systemintegration nach der Umschulung diese beiden Synergien (ganz im Sinne von <a href='https://www.42heilbronn.de/de/' target='_blank' rel='noopener noreferrer'>42</a> [sorry IHK]) bündeln zu können um die Welt zu retten. Was sonst ?
        </p>
        <div className='icons'>
          <a href='https://twitter.com/0berfoerster' className='icon-holder' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
          </a>
          <a href='https://github.com/oje-edu' className='icon-holder' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </a>
          <a href='https://gitlab.com/noconcept-design' className='icon-holder' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGitlab} className='icon gh' />
          </a>
          <a href='https://youtube.com/channel/UC-p7KMht2kokesM0O9Q5tyg' className='icon-holder' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faYoutube} className='icon yt' />
          </a>
        </div>
      </header>
    </div>
  )
}

export default HomePage

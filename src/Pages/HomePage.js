import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TwitterIcon from '@material-ui/icons/Twitter'
import GithubIcon from '@material-ui/icons/GitHub'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import YoutubeIcon from '@material-ui/icons/YouTube'
import styled from 'styled-components'
import Particle from '../Components/Particle'

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all .4s ease-in-out;
        cursor: pointer;

        &:hover {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
        }

        &:not(:last-child) {
            margin-right: 1rem;
        }
        svg {
            margin: .5rem;
        }
      }
      .i-youtube {
          &:hover{
              border: 2px solid red;
              color: red;
          }
      }
      .i-twitter {
          &:hover{
              border: 2px solid red;
              color: red;
          }
      }
      .i-github {
          &:hover {
            border: 2px solid #5F4687;
            color: #5F4687;
          }
      }
    }
  }
`

function HomePage () {
  return (
    <HomePageStyled>
      <div className='particle-con'>
        <Particle />
      </div>
      <div className='typography'>
        <h1>Guude! bin de <span> †hørs†en</span>,</h1>
        <p>
          und gerad bissi im Umschulungstress (FI-Anwendungsentwicklung).
        </p><br />
        <p>
          Dennoch bin ich der Überzeugung, dass durch meine seit bereits Jahrzehnten andauernden und niemals endenden autodidaktisch erlernten
          Kenntnissen, im Bereich der Systemintegration, erst nach der Umschulung, diese beiden Synergien (ganz im Sinne von <a href='https://www.42heilbronn.de/de/' target='_blank' rel='noopener noreferrer'>42</a> [sorry IHK]) ihre ganze Pracht entfalten können, um die Welt zu retten. Was sonst ?
        </p>
        <div className='icons'>
          <a href='https://twitter.com/0berfoerster' className='icon i-twitter' target='_blank' rel='noopener noreferrer'>
            <TwitterIcon />
          </a>
          <a href='https://github.com/oje-edu' className='icon i-github' target='_blank' rel='noopener noreferrer'>
            <GithubIcon />
          </a>
          <a href='https://youtube.com/channel/UC-p7KMht2kokesM0O9Q5tyg' className='icon i-youtube' target='_blank' rel='noopener noreferrer'>
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  )
}

export default HomePage

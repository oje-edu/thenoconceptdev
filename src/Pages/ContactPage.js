import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ContactItem from '../Components/ContactItem'

function ContactPage () {
  const phone = <PhoneIcon />
  const email = <EmailIcon />
  const location = <LocationOnIcon />
  return (
    <MainLayout>
      <Title title={'Kontakt'} span={'reklamieren gibts net!'} />
      <ContactPageStyled>
        <InnerLayout className={'contact-section'}>
          <div className='left-content'>
            <div className='contact-title'>
              <h4>Formular (z.Zt inaktiv)</h4>
            </div>
            <form className='form'>
              <div className='form-field'>
                <label htmlFor='name'>Dein Name*</label>
                <input type='text' id='name' />
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Deine Email*</label>
                <input type='email' id='email' />
              </div>
              <div className='form-field'>
                <label htmlFor='subject'>Betreff:</label>
                <input type='text' id='subject' />
              </div>
              <div className='form-field'>
                <label htmlFor='text-area'>Deine Nachrict*</label>
                <textarea name='textarea' id='textarea' cols='30' rows='10' />
              </div>
              <div className='form-field f-button'>
                <PrimaryButton title={'Email senden'} />
              </div>
            </form>
          </div>
          <div className='right-content'>
            <ContactItem title={'Tel.:'} icon={phone} cont1={'+49 (0) 62618995117'} cont2={'+49 (0) 151 +=guess'} />
            <ContactItem title={'Email'} icon={email} cont1='&#105;&#110;&#102;&#111;&#064;&#110;&#111;&#099;&#111;&#110;&#099;&#101;&#112;&#116;&#046;&#100;&#101;&#118;' cont2='&#105;&#110;&#102;&#111;&#064;&#110;&#111;&#099;&#111;&#110;&#099;&#101;&#112;&#116;&#046;&#100;&#101;&#118;' />
            <ContactItem title={'Addresse'} icon={location} cont1={'Im Luss 40a, 74847 Obrigheim, Baden'} cont2={'- Germany -'} />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  )
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button{
        margin-bottom: 3rem;
      }
    }

    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }

    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }

    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
          width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding:0 .5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding:0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: .8rem 1rem;
        }
      }
    }
  }
`
export default ContactPage

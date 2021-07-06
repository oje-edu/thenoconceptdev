import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../assets/img/contact/phone.svg'
import email from '../assets/img/contact/emailme.svg'
import location from '../assets/img/contact/location.svg'
import Title from '../Components/Title'

function ContactPage () {
  return (
    <div>
      <div className='title'>
        <Title title='Über mich' span='Reklamieren?, gibts NED!' />
      </div>
      <div className='ContactPage'>
        <div className='map-sect'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8741.856333728854!2d9.09327410164645!3d49.35272701634928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1625553385972!5m2!1sde!2sde' width='600' height='450' frameBorder='0' style={{ border: 0 }} allowFullScreen='' aria-hidden='false' tabIndex='0' />
        </div>
        <div className='contact-sect'>
          <ContactItem icon={phone} text1='+49 (0) 6261 8995117' text2='+49 (0) 151 -' title='Telefon' />
          <ContactItem icon={email} text1='&#105;&#110;&#102;&#111;&#064;&#110;&#111;&#099;&#111;&#110;&#099;&#101;&#112;&#116;&#046;&#100;&#101;&#118;' title='Email' />
          <ContactItem icon={location} text1='Im Luss 40a, 74847 Obrigheim, Baden' text2='- Germany -' title='Adresse' />
        </div>
      </div>
    </div>
  )
}

export default ContactPage

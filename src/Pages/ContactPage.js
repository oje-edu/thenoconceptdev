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
          <iframe src='' width='600' height='450' frameBorder='0' style={{ border: 0 }} allowFullScreen='' aria-hidden='false' tabIndex='0' />
        </div>
        <div className='contact-sect'>
          <ContactItem icon={phone} text1='+49 (0) 6261 8995117' text2='+49 (0) 151 -' title='Telefon' />
          <ContactItem icon={email} text1='&#105;&#110;&#102;&#111;&#064;&#110;&#111;&#099;&#111;&#110;&#099;&#101;&#112;&#116;&#046;&#100;&#101;&#118;' title='Email' />
          <ContactItem icon={location} text1='Im Luss 40a, 74847 Obrigheim, Baden' text2='- Germany- ' title='Adresse' />
        </div>
      </div>
    </div>
  )
}

export default ContactPage

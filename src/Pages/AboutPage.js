import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
import ServicesSection from '../Components/ServicesSection'
import design from '../assets/img/about/design.svg'
import intelligence from '../assets/img/about/intelligence.svg'
import gamedev from '../assets/img/about/game-dev.svg'

function AboutPage () {
  return (
    <div className='AboutPage'>
      <Title title='Über mich:' span='Ah yo, geht ned, gibts ned!' />
      <ImageSection />
      <Title title='Fähigkeiten' span='Kann doch jeder!' />
      <div className='skillsContainer'>
        <SkillsSection skill='Windows OS Familie' progress='90%' width='90%' />
        <SkillsSection skill='Linux' progress='75%' width='75%' />
        <SkillsSection skill='Virtualisierung' progress='82.7%' width='82.7%' />
        <SkillsSection skill='Netzwerk' progress='77.7%' width='77.7%' />
        <SkillsSection skill='DNS' progress='90%' width='90%' />
        <SkillsSection skill='nginx' progress='80%' width='80%' />
        <SkillsSection skill='HTML' progress='99.001%' width='99.001%' />
        <SkillsSection skill='CSS' progress='10%' width='10%' />
        <SkillsSection skill='Javascript' progress='35%' width='35%' />
        <SkillsSection skill='Rust' progress='0.25%' width='0.25%' />
        <SkillsSection skill='Julia' progress='0.2%' width='0.2%' />
        <SkillsSection skill='WASM' progress='0.5%' width='0.5%' />
        <SkillsSection skill='ReactJS' progress='30%' width='30%' />
        <SkillsSection skill='NodeJS' progress='40%' width='40%' />
        <SkillsSection skill='Python' progress='2%' width='2%' />
        <SkillsSection skill='Ruby' progress='15%' width='15%' />
        <SkillsSection skill='Java' progress='3%' width='3%' />
        <SkillsSection skill='Web Design' progress='45%' width='45%' />
        <SkillsSection skill='UI/Ux Design' progress='0.5%' width='0.5%' />
        <SkillsSection skill='Git' progress='10%' width='10%' />
      </div>

      <Title title='Dienste' span='Da geht was' />
      <div className='services-container'>
        <ServicesSection
          image={design}
          title='Webdesign'
          text='Beschreibung: folgt'
        />
        <ServicesSection
          image={intelligence}
          title='Artificial Intelligence'
          text='Beschreibung: folgt.'
        />
        <ServicesSection
          image={gamedev}
          title='Game Development'
          text='Beschreibung: folgt.'
        />
      </div>

    </div>
  )
}

export default AboutPage

import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import SmallTitle from '../Components/SmallTitle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from '../Components/ResumeItem'

function Resume () {
  const briefcase = <BusinessCenterIcon />
  const school = <SchoolIcon />
  return (
    <ResumeStyled>
      <Title title={'Lebenslauf'} span={'vollbracht'} />
      <InnerLayout>
        <div className='small-title'>
          <SmallTitle icon={briefcase} title={'Berufserfahrung'} />
        </div>
        <div className='resume-content'>
          <ResumeItem
            year={'2021 - jetzt'}
            title={'Umschulung'}
            subTitle={'FIAE'}
            text={'FachInformatiker - Fachrichtung Anwendungsentwicklung '}
          />
          <ResumeItem
            year={'2019 - 2019'}
            title={'Umschulung'}
            subTitle={'Landwirt'}
            text={'Vorzeitiger Abbruch wegen Krankheit (unvorhersehbare Operation) '}
          />
          <ResumeItem
            year={'1996 - 2019'}
            title={'Sachbearbeiter, Seniorsachbearbeiter, Spezialist'}
            subTitle={'Deutsche Bank AG, e.t.b, Xchanging, db Investment-Services GmbH'}
            text={'IN 20 JAHREN VOM EINFACHEN SACHBEARBEITER ÜBER SENIOR SACHBEARBEITER ZUM SPEZIALISTEN in der effektiven Wetpapierabwicklung. NOTHING WORTH!. '}
          />
          <ResumeItem
            year={'1992 - 1996'}
            title={'Ausbildung zum Elektroinstallateur'}
            subTitle={'Bester! mit Therorie 4 und Gesellenstück 2, von 44 haben auch nur 4 bestanden. NOTHING WORTH!'}
            text={'DIE AUSBILDUNG ZUM ELEKTROINSTALLATEUR IST IN DEUTSCHLAND SEIT DEM 1. AUGUST 2004 NICHT MEHR MÖGLICH, DIE BERUFSBEZEICHNUNG WURDE DURCH ELEKTRONIKER/IN FÜR ENERGIE- UND GEBÄUDETECHNIK ERSETZT. '}
          />
        </div>
        <div className='small-title u-small-title-margin'>
          <SmallTitle icon={school} title={'Schulbildung'} />
        </div>
        <div className='resume-content '>
          <ResumeItem
            year={' - 1992'}
            title={'Brettergymnasium'}
            subTitle={'Weibelfeldschule (Dreieich/Sprendlingen)'}
            text={'Hauptschulabschluss. '}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  )
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }

  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`

export default Resume

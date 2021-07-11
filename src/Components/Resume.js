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
      <Title title={'Lebenslauf'} span={'Grandmaster Kasper'} />
      <InnerLayout>
        <div className='small-title'>
          <SmallTitle icon={briefcase} title={'Berufserfahrung'} />
        </div>
        <div className='resume-content'>
          <ResumeItem
            year={'Feb. 2021 - jetzt'}
            title={'Umschulung'}
            subTitle={'FIAE'}
            text={'FachInformatik - Fachrichtung Anwendungsentwicklung '}
          />
          <ResumeItem
            year={'Okt. 2020 - Feb. 2021'}
            title={'Arbeitsamt'}
            subTitle={'Arbeitssuchend '}
            text={'Deutsche Firmen wollen noch immer einen IHK-Zettel... '}
          />
          <ResumeItem
            year={'Feb. 2020 - Okt. 2020'}
            title={'Jobcenter'}
            subTitle={'Nicht verfügbar'}
            text={'Krank '}
          />
          <ResumeItem
            year={'Okt. 2019 - Feb. 2020'}
            title={'Umschulung'}
            subTitle={'Landwirt'}
            text={'Vorzeitiger Abbruch wegen Krankheit (unvorhersehbare Operation) '}
          />
          <ResumeItem
            year={'1996 - Okt. 2019'}
            title={'SachSchnitzel, SeniorSchnitzel, Spezialist'}
            subTitle={'Deutsche Bank AG, e.t.b, Xchanging, db Investment-Services GmbH'}
            text={'In 20 Jahren vom einfachen Schnitzel, über Senior Schnitzel zu Spezial(merkste was?)I S T E N in der effektiven Wertpapierabwicklung. NIX WERT! '}
          />
          <ResumeItem
            year={'1992 - 1996'}
            title={'Ausbildung zum Elektroinstallateur'}
            subTitle={'Bester! mit Therorie 4 und Gesellenstück 2, von 44 haben auch nur 4 bestanden. NIX WERT! '}
            text={'Die Ausbildung zum Elektroinstallateur ist in Deutschland seit dem 01.08.2004 nicht mehr möglich, die Berufsbezeichung wurde durch Elektrik/er/in/schnitzel für Energie- und Gebäudetechnik ersetzt. '}
          />
        </div>
        <div className='small-title u-small-title-margin'>
          <SmallTitle icon={school} title={'Schulbildung'} />
        </div>
        <div className='resume-content '>
          <ResumeItem
            year={'1986 - 1992'}
            title={'Brettergymnasium'}
            subTitle={'Weibelfeldschule (Dreieich/Sprendlingen)'}
            text={'Hauptschulabschluss. Inkl. dem Klassenkasper Cum-Laude '}
          />
          <ResumeItem
            year={'1978 - 1986'}
            title={'div. Kindergärten...'}
            subTitle={'Kasperle Theater'}
            text={'Den Klassenkasper Abschluss jeweils mit bravour bestanden. '}
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

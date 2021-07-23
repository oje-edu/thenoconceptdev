import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../styles/Layouts'

function Impressum() {
  return (
    <MainLayout>
      <ImpressumStyled>
        <Title title={ 'Impressum' } span={ '§ Rechtliches' } />
        <InnerLayout className={ 'impressum-section' }>
          <h2>Angaben gemäß § 5 TMG</h2>
          <address>
            Thorsten OJE<br />
            Im Luss 40a<br />
            74847 Obrigheim
          </address>
          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 6261 8995117<br />
            Telefax: +49 (0) 6261 8995118<br />
            E-Mail: &#105;&#110;&#102;&#111;&#064;&#110;&#111;&#099;&#111;&#110;&#099;&#101;&#112;&#116;&#046;&#100;&#101;&#118;
          </p>
        </InnerLayout>
      </ImpressumStyled>
    </MainLayout>
  )
}

const ImpressumStyled = styled.section`
  .impressum-section {

    h2 {
      font-size: 1.5em;
      margin: 1em;
    }
    address {
      font-size: 1em;
      margin: 1.5em;
      line-height: 1.5em;
    }
    p {
      font-size: 1em;
      margin: 1.5em;
      line-height: 1.5em;
    }
  }
`

export default Impressum

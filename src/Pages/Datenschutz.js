import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout } from '../styles/Layouts'

function Datenschutz() {
  return (
    <MainLayout>
      <DatenschutzStyled>
        <Title title={ 'Datenschutz' } span={ '§ Rechtliches' } />


      </DatenschutzStyled>
    </MainLayout>
  )
}

const DatenschutzStyled = styled.section`

`

export default Datenschutz

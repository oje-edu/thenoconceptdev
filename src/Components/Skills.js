import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import ProgressBar from './ProgressBar'

function Skills () {
  return (
    <SkillsStyled>
      <Title title={'Fähigkeiten'} span={'nix besonderes...'} />
      <InnerLayout>
        <div className='skills'>
          <ProgressBar
            title={'Windows OS Familie'}
            width={'90%'}
            text={'90%'}
          />
          <ProgressBar
            title={'Linux'}
            width={'75%'}
            text={'75%'}
          />
          <ProgressBar
            title={'Virtualisierung'}
            width={'82.7%'}
            text={'82.7%'}
          />
          <ProgressBar
            title={'Netzwerk'}
            width={'77.7%'}
            text={'77.7%'}
          />
          <ProgressBar
            title={'DNS'}
            width={'90.0%'}
            text={'90.0%'}
          />
          <ProgressBar
            title={'nginx'}
            width={'80.0%'}
            text={'80.0%'}
          />
          <ProgressBar
            title={'HTML5'}
            width={'99.8%'}
            text={'99.8%'}
          />
          <ProgressBar
            title={'CSS3'}
            width={'40%'}
            text={'40%'}
          />
          <ProgressBar
            title={'JS'}
            width={'35%'}
            text={'35%'}
          />
          <ProgressBar
            title={'Rust'}
            width={'0.25%'}
            text={'0.25%'}
          />
          <ProgressBar
            title={'Julia'}
            width={'0.25%'}
            text={'0.25%'}
          />
          <ProgressBar
            title={'WASM'}
            width={'0.5%'}
            text={'0.5%'}
          />
          <ProgressBar
            title={'ReactJS'}
            width={'30%'}
            text={'30.0%'}
          />
          <ProgressBar
            title={'NodeJS'}
            width={'40%'}
            text={'40.0%'}
          />
          <ProgressBar
            title={'Python3'}
            width={'2%'}
            text={'2.0%'}
          />
          <ProgressBar
            title={'Ruby'}
            width={'20%'}
            text={'20.0%'}
          />
          <ProgressBar
            title={'JAVA'}
            width={'3%'}
            text={'3%'}
          />
          <ProgressBar
            title={'Web Design'}
            width={'45%'}
            text={'45%'}
          />
          <ProgressBar
            title={'UI/UX Design'}
            width={'0.5%'}
            text={'0.5%'}
          />
          <ProgressBar
            title={'Git'}
            width={'10%'}
            text={'10%'}
          />
        </div>
      </InnerLayout>
    </SkillsStyled>
  )
}

const SkillsStyled = styled.section`
  .skills{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default Skills

import React from 'react'
import styled from 'styled-components'
// import resume from '../img/resume.jpg'
// import PrimaryButton from './PrimaryButton'

function ImageSection () {
  return (
    <ImageSectionStyled>
      <div className='left-content'>
        {/* <img src={resume} alt='' /> */}
        <img src='' alt='' />
      </div>
      <div className='right-content'>
        <h4>†hørs†en ØJE<span> The NoConcept Dev(eloper)</span></h4>
        <p className='paragraph'>
          Sie haben ein Problem, und suchen eine Lösung gemäß neuesten offiziellen Sicherheitsstandards oder besser, besser?
        </p>
        <p className='paragraph'>
          Mein Grundsatz lautet: P R I V A C Y - FIRST! Keine Schlupflöcher, Backdoors oder anderer Stasi-Shit! Erst dann gehts (natürlich ohne Konzept) volle Kanne los.
        </p>
        <p className='paragraph'>
          Dafür stehe ich mit meinem Namen:
        </p>
        <div className='about-info'>
          <div className='info-title'>
            <p>Name</p>
            <p>Alter ca.</p>
            <p>NAZIonalität</p>
            <p>Sprachen</p>
            <p>Adresse</p>
            <p>Status</p>
          </div>
          <div className='info'>
            <p>: †hørs†en ØJE</p>
            <p>: 45</p>
            <p>: noch Deutsch</p>
            <p>: Hessisch, Deutsch, Englisch</p>
            <p>: 74847 Obrigheim, Baden</p>
            <p>: Umschüler, Freiberufler</p>
          </div>
        </div>
        {/* <PrimaryButton title={'Download Cv'} /> */}
      </div>
    </ImageSectionStyled>
  )
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;

  @media screen and (max-width:1000px) {
    flex-direction: column;
    .left-content{
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;

    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;

    h4 {
      font-size: 2rem;
      color: var(--white-color);

      span {
        font-size: 2rem;
      }
    }

    .paragraph {
        padding: 1rem 0;
    }

    .about-info {
      display: flex;
      padding-bottom: 1.4rem;

      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }

      .info-title, .info {
        p {
          padding: .3rem 0;
        }
      }
    }
  }
`

export default ImageSection

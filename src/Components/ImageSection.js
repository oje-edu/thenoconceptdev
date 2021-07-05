import React from 'react'
import about from '../assets/img/about/about.webp'

function ImageSection () {
  return (
    <div className='ImageSection'>
      <div className='img'>
        <img src={about} alt='' />
      </div>
      <div className='about-info'>
        <h4>†hørs†en ØJE<span> The NoConcept Dev(eloper)</span></h4>
        <p className='about-text'>
          Sie haben ein Problem, und suchen eine Lösung gemäß neuesten offiziellen Sicherheitsstandards oder besser, besser?
        </p>
        <p className='about-text'>
          Mein Grundsatz lautet: P R I V A C Y - FIRST! Keine Schlupflöcher, Backdoors oder anderer Stasi-Shit! Erst dann gehts (natürlich ohne Konzept) volle Kanne los.
        </p>
        <p className='about-text'>
          Dafür stehe ich mit meinem Namen:
        </p>
        <div className='about-details'>
          <div className='left-section'>
            <p>Name</p>
            <p>Alter</p>
            <p>NAZIonalität</p>
            <p>Sprachen</p>
            <p>Adresse</p>
            <p>Länder</p>
          </div>
          <div className='right-section'>
            <p>: †hørs†en ØJE</p>
            <p>: ~45</p>
            <p>: noch Deutsch</p>
            <p>: Hessisch, Deutsch, Englisch</p>
            <p>: Im Luss 40a, 74847 Obrigheim, Baden</p>
            <p>: Deutschland, Island, Dev(i)lopland</p>
          </div>
        </div>
        <button className='btn'>Download Cv</button>
      </div>
    </div>
  )
}

export default ImageSection

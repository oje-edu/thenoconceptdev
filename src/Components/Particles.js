import React from 'react'
import Particles from 'react-particles-js'
import ParticleMainConfig from '../config/particle-main-config'
import ParticleAboutConfig from '../config/particle-about-config'

export function ParticleMainBackground () {
  return (
    <Particles params={ParticleMainConfig} />
  )
}
export function ParticleAboutBackground () {
  return (
    <Particles params={ParticleAboutConfig} />
  )
}

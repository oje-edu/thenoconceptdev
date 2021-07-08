import React, { useRef } from 'react'
import Webcam from 'react-webcam'

const videoContraints = {
  width: 250,
  height: 400,
  facingMode: 'user'
}

function WebcamCapture () {
  const webcamRef = useRef(null)
  return (
    <div className='snap__webcam'>
      <Webcam
        audio={false}
        height={videoContraints.height}
        width={videoContraints.width}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        videoContraints={videoContraints}
      />
    </div>
  )
}

export default WebcamCapture

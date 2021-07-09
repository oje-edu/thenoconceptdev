import React, { useRef, useCallback, useState } from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import Webcam from 'react-webcam'

const videoContraints = {
  width: 250,
  height: 400,
  facingMode: 'user'
}

function WebcamCapture () {
  const webcamRef = useRef(null)
  const [image, setImage] = useState(null)

  const capture = useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot()
    setImage(imgSrc)
  }, [webcamRef])

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

      <RadioButtonUncheckedIcon
        className='snap__button'
        onClick={capture}
        fontSize='large'
      />
      <img src={image} alt='' />
    </div>
  )
}

export default WebcamCapture

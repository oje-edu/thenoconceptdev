import React, { useRef, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCameraImage } from '../features/cameraSlice'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import Webcam from 'react-webcam'

const videoContraints = {
  width: 250,
  height: 400,
  facingMode: 'user'
}

function WebcamCapture () {
  const webcamRef = useRef(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const capture = useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot()
    dispatch(setCameraImage(imgSrc))
    history.push('/preview')
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

    </div>
  )
}

export default WebcamCapture

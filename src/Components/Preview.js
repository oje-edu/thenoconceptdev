import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetCameraImage, selectCameraImage } from '../features/cameraSlice'
import { v4 as uuid } from 'uuid'
import { db, storage } from '../firebase'
import firebase from 'firebase'

import CloseIcon from '@material-ui/icons/Close'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import CreateIcon from '@material-ui/icons/Create'
import NoteIcon from '@material-ui/icons/Note'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import CropIcon from '@material-ui/icons/Crop'
import TimerIcon from '@material-ui/icons/Timer'
import SendIcon from '@material-ui/icons/Send'

function Preview () {
  const cameraImage = useSelector(selectCameraImage)
  const history = useHistory()
  const dispatch = useDispatch()

  const closePreview = () => {
    dispatch(resetCameraImage())
  }

  const sendPost = () => {
    const id = uuid()
    const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, 'data_url')

    uploadTask.on('state_changed', null, (error) => {
      console.log(error)
    }, () => {
      storage.ref('posts').child(id).getDownloadURL().then((url) => {
        db.collection('posts').add({
          imageUrl: url,
          username: 'YO',
          read: false,
          // profilePic,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        history.replace('/chats')
      })
    })
  }

  useEffect(() => {
    if (!cameraImage) {
      history.replace('/snap')
    }
  }, [cameraImage, history])

  return (
    <div className='snap__preview'>
      <h2>Vorschau</h2>
      <CloseIcon className='snap__preview__close' onClick={closePreview} />
      <div className='snap__preview__toolbar__right'>
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraImage} alt='' />
      <div className='snap__preview__footer' onClick={sendPost}>
        <h2>Senden</h2>
        <SendIcon fontSize='small' className='snap__preview__footer__sendIcon' />
      </div>
    </div>
  )
}

export default Preview

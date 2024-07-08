import React from 'react'
import './AppDownlaod.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>For Better Experience Download <br></br> Foondu App</p>
      <div className='app-download-platform'>
        <img src={assets.play_store}></img>
        <img src={assets.app_store}></img>
      </div>
    </div>
  )
}

export default AppDownload

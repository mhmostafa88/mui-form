import { LogoDev } from '@mui/icons-material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React, { useState } from 'react'
import './style.css'
const  SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  return (
    <div className={`side-menu ${inactive ? 'inactive' : ""}`}>
      <div className='top-section'>
            <ArrowCircleLeftIcon className='toggle-btn' onClick={() => setInactive(!inactive)}/>
            <LogoDev className='logo'/>
      </div>
      </div>
  )
}

export default SideMenu
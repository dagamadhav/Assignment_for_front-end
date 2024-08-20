import React from 'react'
import './SideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MailIcon from '@mui/icons-material/Mail';
import Mail from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import InboxIcon from '@mui/icons-material/Inbox';
import EqualizerIcon from '@mui/icons-material/Equalizer';

function SideBar() {
  return (
    <div className='Sidebar'>
      <div className='logo'>
        <img src='..src/component/image.jpg' height={50} width={300}/>
      </div>
      <div className='icons'>
        <a href='#'><HomeIcon/></a>
        <a href='#'><PersonSearchIcon /></a>
        <a href='#'><Mail/></a>
        <a href='#'><TelegramIcon /></a>
        <a href='#'><InboxIcon /></a>
        <a href='#'><EqualizerIcon /></a>
      </div>
    </div>
  )
}

export default SideBar

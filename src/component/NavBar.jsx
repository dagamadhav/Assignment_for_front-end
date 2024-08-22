import React from 'react'
import './NavBar.css'
import { MdOutlineDarkMode } from "react-icons/md";

function NavBar() {
  return (
    <div className='navbar'>
        <div className='title'>
            OneBox
        </div>
        <div className='logos'>
            <div className='theme-change'>
            <MdOutlineDarkMode size={30}/>
            </div>
            <div className='user'>
                <h4>User</h4>
            </div>
        </div>
      
    </div>
  )
}

export  default NavBar

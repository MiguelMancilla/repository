import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiWhiteBook} from 'react-icons/gi'
import {MdHomeRepairService} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'
 
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      <a href="#home" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active'  : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experiences' ? 'active' : ''}><GiWhiteBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdHomeRepairService/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </div>
  )
}

export default Nav
import React from 'react'
import {NavLink, Outlet } from 'react-router-dom'
import '../Styles/Navbar.scss'
import {BiSolidUser} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {FaToolbox} from 'react-icons/fa'
import {IoMdMailOpen} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='navbar'>
    <nav>
      <ul>
        <li>
             <NavLink className={"nav-link"} style={({isActive}) =>({boxShadow:isActive? "0px 0px 16px 0px rgba(37,47,160,1)":"none"})} to={"/"} ><AiFillHome className='nav-icon' /> </NavLink>
        </li>
        <li>
             <NavLink className={"nav-link"} style={({isActive}) =>({boxShadow:isActive? "0px 0px 16px 0px rgba(37,47,160,1)":"none"})} to={"about"} ><BiSolidUser className='nav-icon'/> </NavLink>
        </li>
        <li>
             <NavLink  className={"nav-link"} style={({isActive}) =>({boxShadow:isActive? "0px 0px 16px 0px rgba(37,47,160,1)":"none"})} to={"portfolio"} > <FaToolbox className='nav-icon'/> </NavLink>
        </li>
        <li>
             <NavLink  className={"nav-link"} style={({isActive}) =>({boxShadow:isActive? "0px 0px 16px 0px rgba(37,47,160,1)":"none"})} to={"contact"} ><IoMdMailOpen className='nav-icon'/> </NavLink>
        </li>
      </ul>

    </nav>
    <Outlet />
    </div>
  )
}

export default Navbar

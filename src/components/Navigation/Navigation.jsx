import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import './Navigation.scss'
// component requiremets [react-router-dom, react-icons, sass]
// npm install sass react-router-dom react-icons --save

const Navigation = () => {
  const showList = () => {
    const navBg = document.querySelector('.nav_bg')
    const navList = document.querySelector('.nav_list')
    navBg.style.display = 'block'
    navList.style.display = 'block'
    setTimeout(() => {
      navList.style.left = 0
    }, 100);
  }
  const hideList = () => {
    const navBg = document.querySelector('.nav_bg')
    const navList = document.querySelector('.nav_list')
    navList.style.left = '-250px'
    setTimeout(() => {
      navBg.style.display = 'none'
      navList.style.display = 'none'
    }, 500);
  }
  return (
    <>
      <div className="nav_toolbar">
        <div className="nav_toolbar_start">
          <span className="nav_toolbar_start_menu" onClick={()=> showList()}>
            <FiMenu />
          </span>
          <img src="/yrstyle.png" alt="yrstyle logo" aria-label='yrstyle logo image' className="logo" />
        </div>
        <div className="nav_toolbar_end">
          <NavLink to='/' className={`nav_end_link`}>Home</NavLink>
          <NavLink to='/about' className={`nav_end_link`}>About</NavLink>
          <NavLink to='/contact' className={`nav_end_link`}>Contact</NavLink>
          <NavLink to='/blog' className={`nav_end_link`}>Blog</NavLink>
        </div>
      </div>

      <div className="nav_list">
        <NavLink to='/' className={`nav_list_link`} onClick={()=> hideList()}>Home</NavLink>
        <NavLink to='/about' className={`nav_list_link`} onClick={()=> hideList()}>About</NavLink>
        <NavLink to='/contact' className={`nav_list_link`} onClick={()=> hideList()}>Contact</NavLink>
        <NavLink to='/blog' className={`nav_list_link`} onClick={()=> hideList()}>Blog</NavLink>
      </div>
      <div className="nav_bg" onClick={()=> hideList()}></div>
    </>
  )
}

export default Navigation
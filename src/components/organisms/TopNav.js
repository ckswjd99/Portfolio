import { useState } from 'react'

import style from './TopNav.module.css'

import Logo from "../atoms/Logo"
import TopNavMenu from "../molecules/TopNavMenu"
import TopNavMenuToggle from '../atoms/TopNavMenuToggle'
import { Link } from 'react-router-dom'

const TopNav = (props) => {
  const { menu } = props
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const toggleMenu = () => setMenuVisibility(former => !former)
  return (
    <div className={style.topNav}>
      <div className={style.contentWrapper}>
        <Link to='/' style={{ color: 'black' }}><Logo /></Link>
        <TopNavMenu menu={menu} visibility={isMenuVisible} />
        <TopNavMenuToggle onClick={toggleMenu} />
      </div>
    </div>
  )
}

export default TopNav
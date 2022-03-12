import { Link } from 'react-router-dom'
import style from './TopNavMenuButton.module.css'

const TopNavMenu = (props) => {
  const { children, to } = props
  return (
    <Link to={to}>
      <button className={style.buttonArea}>{children}</button>
    </Link>
  )
}

export default TopNavMenu
import style from './Logo.module.css'
import { toHome } from '../pageLinkers'

const Logo = (props) => {
  return (
    <div className={style.logo} onClick={toHome}>
      <p className={style.logoComponent}>{'> ckswjd99'}</p>
      <p className={`${style.logoComponent} ${style.cursor}`}>_</p>
    </div>
  )
}

export default Logo
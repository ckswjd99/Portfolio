import style from './TopNavMenuToggle.module.css'

import Icon from '../../icons/bars-svgrepo-com.svg'

const TopNavMenuToggle = (props) => {
  const { onClick } = props
  return (
    <div className={style.wrapper} onClick={onClick}>
      <img src={Icon} alt="menuFolder" className={style.icon} />
    </div>
  )
}

export default TopNavMenuToggle
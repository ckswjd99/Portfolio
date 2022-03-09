import style from './TopNavMenu.module.css'

import TopNavMenuButton from '../atoms/TopNavMenuButton'

const TopNavMenu = (props) => {
  const { menu, visibility } = props
  return (
    <div className={`${style.menuContainer} ${visibility ? null : style.hidden}`}>
      {
        Object.entries(menu).map(([menuName, onClick]) => {
          return (
            <TopNavMenuButton onClick={onClick} key={menuName}>{menuName}</TopNavMenuButton>
          )
        })
      }
    </div>
  )
}

export default TopNavMenu
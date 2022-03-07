import style from './TopNavMenuButton.module.css'

const TopNavMenu = (props) => {
  const { children, onClick } = props
  return (
    <button onClick={onClick} className={style.buttonArea}>{children}</button>
  )
}

export default TopNavMenu
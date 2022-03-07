import style from './MainContent.module.css'

const MainContent = (props) => {
  const { children } = props
  return (
    <div className={style.contentWrapper}>{children}</div>
  )
}

export default MainContent
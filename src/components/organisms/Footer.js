import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.contentWrapper}>
        <div className={style.leftParagraph}>
          Hello
        </div>
        <div className={style.rightParagraph}>
          World!
        </div>
      </div>
    </div>
  )
}

export default Footer
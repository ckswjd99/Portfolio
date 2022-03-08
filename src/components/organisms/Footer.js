import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.contentWrapper}>
        <div className={style.leftParagraph}>
          Copyright ⓒ 2022. ckswjd99 All Rights Reserved.<br />
          This page is all written by ckswjd99. All codes can be found <a href='https://github.com/ckswjd99/Portfolio' target='_blank' rel="noreferrer">here</a>.<br />
          You can contact me by <a href='mailto:ckswjd99@gmail.com'>ckswjd99@gmail.com</a>.
        </div>
        <div className={style.rightParagraph}>
          <a href='https://github.com/ckswjd99'>GitHub</a><br />
          <a href='https://velog.io/@ckswjd99'>velog</a><br />
          <a href='https://instagram.com/ckswjd99'>instagram</a><br />
          <a href='https://www.youtube.com/channel/UCpgFtS2yVgbtk5qgThNAv1Q'>YouTube</a><br />
        </div>
      </div>
    </div>
  )
}

export default Footer
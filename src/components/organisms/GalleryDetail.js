import Overlay from '../molecules/Overlay'
import styles from './GalleryDetail.module.css'

const GalleryDetail = (props) => {
  const { children, src, visible, onBackgroundClick } = props
  const imageOriginal = () => {
    window.location.href = src
  }
  return (
    <Overlay visible={visible} onBackgroundClick={onBackgroundClick}>
      <div className={styles.widthLimiter}>
        <div className={styles.heightLimiter}>
          <div className={styles.imageArea}>
            <img className={styles.imageItself} src={src} alt='detailImage' onClick={imageOriginal}/>
          </div>
          <div className={styles.textArea}>
            {children}
          </div>
        </div>
      </div>
    </Overlay>
  )
}

export default GalleryDetail
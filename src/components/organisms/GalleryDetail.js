import ImageSquare from '../atoms/ImageSquare'
import Overlay from '../molecules/Overlay'
import styles from './GalleryDetail.module.css'

const GalleryDetail = (props) => {
  const { children, src, visible, onBackgroundClick } = props
  return (
    <Overlay visible={visible} onBackgroundClick={onBackgroundClick}>
      <div className={styles.ratioBox}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageArea}>
            <ImageSquare src={src} />
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
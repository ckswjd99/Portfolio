import ImageCaptioned from '../atoms/ImageCaptioned'
import style from './ParagraphWithImage.module.css'

const ParagraphWithImage = (params) => {
  const { src, caption, children, imagePosition = 'left' } = params
  return (
    <div
      className={`${style.contentWrapper} ${imagePosition === 'left' ? style.imageLeft : style.imageRight}`}
    >
      <div className={style.imageArea}>
        <ImageCaptioned src={src} caption={caption} />
      </div>
      <div className={style.paragraphArea}>
        {children}
      </div>
    </div>
  )
}

export default ParagraphWithImage
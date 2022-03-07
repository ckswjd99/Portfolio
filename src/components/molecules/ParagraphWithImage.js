import ImageCaptioned from '../atoms/ImageCaptioned'
import style from './ParagraphWithImage.module.css'

const ParagraphWithImage = (params) => {
  const { src, caption, children, imageSize = 'medium', imagePosition = 'left', alignText = 'left' } = params
  return (
    <div
      className={`${style.contentWrapper} ${imagePosition === 'right' ? style.imageRight : style.imageLeft}`}
    >
      <div
        className={`
          ${imagePosition === 'right' ? style.imageAreaRight : style.imageAreaLeft}
          ${imageSize === 'small' ? style.imageAreaSmall : imageSize === 'big' ? style.imageAreaBig : style.imageAreaMedium}
        `}
      >
        <ImageCaptioned src={src} caption={caption} />
      </div>
      <div className={`
      ${style.paragraphArea}
      ${alignText === 'right' ? style.alignRight : alignText === 'left' ? style.alignLeft : null}
      `}>
        {children}
      </div>
    </div>
  )
}

export default ParagraphWithImage
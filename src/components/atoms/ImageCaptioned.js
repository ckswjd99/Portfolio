import style from './ImageCaptioned.module.css'

const ImageCaptioned = (props) => {
  const { src, caption } = props
  return (
    <div className={style.container}>
      <img className={style.imageArea} src={src} alt='CaptionedImage' />
      {caption ? <text className={style.captionArea}>{caption}</text> : null}
    </div>
  )
}

export default ImageCaptioned
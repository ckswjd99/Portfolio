import ImageSquare from '../atoms/ImageSquare'
import style from './ImageRow.module.css'

const ImageRow = (props) => {
  const { images, colNum } = props
  images.push(...(new Array(parseInt(colNum))).fill(0).map(_ => { return {} }))
  return (
    <div className={style.row}>
      {
        images.slice(0, colNum).map((imageData, index) => {
          const { src, onClick } = imageData
          return (
            <div className={`${style.cell} ${onClick ? null : style.falseCell}`} onClick={onClick} key={`${imageData}${index}`}>
              <ImageSquare src={src} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ImageRow
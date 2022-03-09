import ImageRow from "../molecules/ImageRow"

const ImageGrid = (props) => {
  const { images, colNum } = props
  const rowNum = Math.ceil(images.length / colNum)
  const imageBundles = []
  for (let i = 0; i < rowNum; i++) {
    imageBundles.push(images.slice(colNum * i, colNum * (i + 1)))
  }
  return (
    imageBundles.map((images, index) => {
      return (
        <ImageRow images={images} colNum={colNum} key={`${images}${index}`} />
      )
    })
  )
}

export default ImageGrid
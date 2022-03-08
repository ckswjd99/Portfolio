const ImageSquare = (props) => {
  const { src } = props
  const container = {
    width: '100%',
    paddingBottom: '100%',
    position: 'relative'
  }
  const image = {
    objectFit: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }

  return (
    <div style={container}>
      <img src={src} style={image} alt='squaredImage' />
    </div>
  )
}

export default ImageSquare
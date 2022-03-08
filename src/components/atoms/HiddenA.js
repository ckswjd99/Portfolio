const HiddenA = (props) => {
  const { children, href } = props
  return (
    <a style={{ color: "black" }} href={href}>{children}</a>
  )
}

export default HiddenA
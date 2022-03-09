import styles from './Overlay.module.css'

const hidden = { display: 'none' }

const Overlay = (props) => {
  const { children, visible, onBackgroundClick, contentStyle } = props
  return (
    <div style={visible ? null : hidden} className={styles.contentWrapper}>
      <div className={styles.contentArea} style={contentStyle}>
        {children}
      </div>
      <div className={styles.background} onClick={onBackgroundClick}></div>
    </div>
  )
}

export default Overlay
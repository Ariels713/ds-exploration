import styles from './ds-styles.module.css'
function GridLayout({ children, styleProps, utilityClass = ""}) {
  
  return (
    <div className={`${styles['grid-layout']} ${utilityClass}`} style={styleProps}>
        {children}
    </div>
  )
}

export default GridLayout
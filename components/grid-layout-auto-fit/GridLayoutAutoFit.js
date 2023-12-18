import styles from './ds-styles.module.css'

function GridLayoutAutoFit({ children, styleProps, utilityClass = ''}) {
  return (
    <div className={`${styles['grid-layout--autofit']} ${utilityClass}`} style={styleProps}>
        {children}
    </div>
  )
}

export default GridLayoutAutoFit;
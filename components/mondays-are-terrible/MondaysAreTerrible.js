import styles from './ds-styles.module.css'

function MondaysAreTerrible({ children, styleProps, utilityClass = ''}) {
  return (
    <div className={`${styles['g']} ${utilityClass}`} style={styleProps}>
        {children}
    </div>
  )
}

export default MondaysAreTerrible;
import styles from './ds-styles.module.css'

function GridLayoutBreakout({ children, styleProps, utilityClass = '' }) {

  return (
    <div className={`${styles['grid-layout-breakout']} ${utilityClass}`} style={styleProps}>
        {children}
    </div>
  )
}

export default GridLayoutBreakout;
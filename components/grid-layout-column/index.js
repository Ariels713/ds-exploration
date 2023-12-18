import styles from "./ds-styles.module.css";
function GridLayoutColumn({ children, styleProps, utilityClass = "" }) {
  return (
    <div
      className={`${styles["grid-layout--column"]} ${utilityClass}`}
      style={styleProps}
    >
      {children}
    </div>
  );
}

export default GridLayoutColumn;

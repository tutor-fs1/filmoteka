import "./Container.css";
export const Container = props => {
  const { children, solidColor } = props;
  const classes = `outer-section`;
  const styles = {};
  if (solidColor) {
    styles.backgroundColor = solidColor;
  }
  return (
    <section className={classes} style={styles}>
      <div className="inner-section">{children}</div>
    </section>
  );
};

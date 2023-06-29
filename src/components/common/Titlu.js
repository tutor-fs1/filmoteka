import PropTypes from "prop-types";

export const Titlu = ({ titlu, tag }) => {
  const fontSize = {
    h1: "46px",
    h2: "38px",
    h3: "30px",
    h4: "26px",
  };
  const styles = {
    color: "white",
    backgroundColor: "Black",
    fontSize: fontSize[tag],
  };

  if (tag === "h1") {
    return <h1 style={styles}>{titlu}</h1>;
  }
  if (tag === "h2") {
    return <h2 style={styles}>{titlu}</h2>;
  }
  if (tag === "h3") {
    return <h3 style={styles}>{titlu}</h3>;
  }
  if (tag === "h4") {
    return <h4 style={styles}>{titlu}</h4>;
  }
};

Titlu.propTypes = {
  titlu: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4"]).isRequired,
};

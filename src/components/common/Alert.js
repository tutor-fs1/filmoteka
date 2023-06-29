import "./Alert.css";

export const Alert = ({ children, type, modificatori = [] }) => {
  let classes = "alert " + type;
  for (let i = 0; i < modificatori.length; i++) {
    const mod = modificatori[i];
    classes = classes + " " + mod;
  }

  return <p className={classes}>{children}</p>;
};

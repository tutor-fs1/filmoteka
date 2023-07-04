let deCateOri = 0;
const handleClick = () => {
  console.log(deCateOri);
  deCateOri++;
};

export const Numarator = () => {
  return <button onClick={handleClick}>Apasa-ma! ({deCateOri})</button>;
};

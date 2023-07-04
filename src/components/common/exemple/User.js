import PropTypes from "prop-types";

export const User = props => {
  const ceva = 0;
  ceva++;
  console.log("se ruleaza");
  return (
    <div>
      {ceva}
      <img src={props.avatar} width={"50"} />
      <h2>{props.username}</h2>
    </div>
  );
};

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

//   pokemon: PropTypes.shape({
//     name: PropTypes.string,
//     id: PropTypes.number,
//     base_stamina: PropTypes.number,
//     base_defense: PropTypes.number,
//   }),

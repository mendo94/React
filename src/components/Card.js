import "./Card.scss";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

//acts as a shell around expenses content or expense item content
export default Card;

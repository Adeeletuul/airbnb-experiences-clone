import star from "../images/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--photo" src={props.coverImg} alt="" />
      <div className="card--stats">
        <img className="card--star " src={star} alt="" />
        <span>{props.rating}</span>
        <span className="grey">({props.stats.reviewCount}) .</span>
        <span className="grey">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        {" "}
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
export default Card;

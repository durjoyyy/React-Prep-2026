export default function ResCard({ name, costForTwo, rating, deliveryTime }) {
  const styleCard = {
    backgroundColor: "lightGray",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/e0vvulfbahjxjz6k4uwi"
      />
      <h4>{name} </h4>
      <h4>Rs {costForTwo} for 2</h4>
      <h4>{rating} ⭐</h4>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
}

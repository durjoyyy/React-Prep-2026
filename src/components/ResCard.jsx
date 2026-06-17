export default function ResCard({ name, costForTwo, avgRating, sla,cloudinaryImageId }) {
  const styleCard = {
    backgroundColor: "lightGray",
  };


  const imgSrc =
    typeof cloudinaryImageId === "string" && cloudinaryImageId.startsWith("http")
      ? cloudinaryImageId
      : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <div data-testid='resCard' className="res-card" style={styleCard}>
      <img
        className="res-img"
        src={imgSrc}
        alt={name}
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=660&q=80";
        }}
      />
      <h4>{name} </h4>
      <h4>Rs {costForTwo}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
}
//Higher-Order-Component
//input-> ResCard, output-> ResCard Promoted

export const withPromotedLabel=(ResCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-amber-200 text-black m-5 rounded-lg p-5">Top Rated</label>
        <ResCard {...props}/>
      </div>
    )

  }
}
export default function ResCard({ name, costForTwo, avgRating, sla,cloudinaryImageId }) {
  const styleCard = {
    backgroundColor: "lightGray",
  };


  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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
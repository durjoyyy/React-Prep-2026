import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofR, setListofR] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.70840&lng=88.43180&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const jsonData = await data.json();
    const res =
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    setListofR(res);
    console.log(res);
  };

  if(listofR.length==0){
    return(<Shimmer/>
    )
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const topRated = listofR.filter((x) => x.info.avgRating > 4.5);
            setListofR(topRated);
          }}
          onMouseOver={() => console.log("Mouse Hover")}
          className="filter-btn"
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listofR.map((res) => {
          return <ResCard {...res.info} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;

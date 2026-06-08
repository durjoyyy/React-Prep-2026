import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { withPromotedLabel } from "./ResCard";

const Body = () => {
  const [listofR, setListofR] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const ResCarPromoted = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.70840&lng=88.43180&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const jsonData = await data.json();

      console.log(jsonData);

      const restaurantCard = jsonData?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      const res =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      setListofR(res);
      setFilteredData(res);

      console.log(res);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) return <h1>You are offline! </h1>;

  return listofR.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            console.log("hii");
            const filteredR = listofR.filter((f) =>
              f.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredData(filteredR);
          }}
        >
          Search
        </button>

        <button
          onMouseOver={() => console.log("Mouse Hover")}
          className="filter-btn"
          onClick={() => {
            const topRated = listofR.filter((x) => x.info.avgRating > 4.5);
            setFilteredData(topRated);
          }}
        >
          Top-Rated Restaurant
        </button>

        <button
          className="search-btn"
          onClick={() => {
            setFilteredData(listofR);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((res) => {
          console.log(res.info);
          return(
          <Link
            key={res.info.id}
            to={`/restaurants/${res.info.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {/**IF Res is promoted, add a promoted card to it*/}
            {res.info.avgRating>4.35 ? <ResCarPromoted  {...res.info} /> : <ResCard {...res.info} />}
          </Link>
        );
      })}
      </div>
    </div>
  );
};

export default Body;

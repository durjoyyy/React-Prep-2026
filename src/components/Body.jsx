import ResCard from "./ResCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { withPromotedLabel } from "./ResCard";
import FALLBACK_RES_DATA from "../../utils/fallbackData";
import UserContext from "../../utils/UserContext";

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

      const restaurantCard = jsonData?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      const res =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      // If the API responds but has no usable restaurants, fall back to mock data.
      const finalData = res.length > 0 ? res : FALLBACK_RES_DATA;

      setListofR(finalData);
      setFilteredData(finalData);
    } catch (err) {

      // API failed for any reason -> serve fallback mock data so the UI still works.
      setListofR(FALLBACK_RES_DATA);
      setFilteredData(FALLBACK_RES_DATA);
    }
  };

  const isOnline = useOnlineStatus();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  if (!isOnline) return <h1>You are offline! </h1>;

  return listofR.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          data-testid = "searchInput"
          type="text"
          placeholder="Search restaurants..."
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filteredR = listofR.filter((f) =>
              f.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredData(filteredR);
          }}
        >
          Search
        </button>

        <button
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

        <input
          type="text"
          placeholder="UserName"
          className="search-box"
          value={loggedInUser}
          onChange={(e) => setLoggedInUser(e.target.value)}
        />
      </div>
      <div className="res-container">
        {filteredData.map((res) => {
          return (
            <Link
              key={res.info.id}
              to={`/restaurants/${res.info.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {/**IF Res is promoted, add a promoted card to it*/}
              {res.info.avgRating > 4.35 ? (
                <ResCarPromoted {...res.info} />
              ) : (
                <ResCard {...res.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { createBrowserRouter } from "react-router-dom";

const Body = () => {
  const [listofR, setListofR] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.70840&lng=88.43180&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const jsonData = await data.json();
    const res =
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setListofR(res);
    setFilteredData(res);
    console.log(res);
  };

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
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((res) => {
          return <ResCard {...res.info} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;

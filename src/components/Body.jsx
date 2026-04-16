import ResCard from "./ResCard";
import { resData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofR, setListofR] = useState(resData);
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const topRated = resData.filter((x) => x.rating > 4.5);
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
          return <ResCard {...res} key={res.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;

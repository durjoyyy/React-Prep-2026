import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useResMenu";

const ResMenu = () => {
  const { resId } = useParams();

  // const [resInfo, setResInfo] = useState(null);

  const resInfo=useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.70840&lng=88.43180&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //     );

  //     const jsonData = await data.json();

  //     const restaurantCard = jsonData?.data?.cards?.find(
  //       (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
  //     );

  //     const restaurants =
  //       restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
  //       [];

  //     const restaurant = restaurants.find((r) => r?.info?.id === resId);

  //     setResInfo(restaurant?.info);
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo, cloudinaryImageId } = resInfo;
  const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

  return (
    <div className="menu">
      <img className="menu-img" src={IMG_URL + cloudinaryImageId} alt={name} />
      <h1>{name}</h1>

      <div className="menu-info">
        <p>{cuisines?.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>

      <h2>Recommended</h2>

      <ul>
        <li>
          <span>Biryani</span>
          <span className="menu-item-price">₹299</span>
        </li>

        <li>
          <span>Burger</span>
          <span className="menu-item-price">₹199</span>
        </li>

        <li>
          <span>Diet Coke</span>
          <span className="menu-item-price">₹60</span>
        </li>
      </ul>
    </div>
  );
};

export default ResMenu;

import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  //fetch data for the restaurant menu using the resId
  const [resInfo, setResInfo] = useState(null);

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

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      const restaurant = restaurants.find((r) => r?.info?.id === resId);
      setResInfo(restaurant?.info);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;

import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    console.info(resInfo);
    return <Shimmer />;
  }

  const restaurantInfo =
    resInfo?.cards?.[2]?.card?.card?.info;

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
  } = restaurantInfo;

  const regularCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Build a flat, normalized list of accordion categories from the menu data.
  // Two shapes exist:
  //   - ItemCategory:       { title, itemCards: [...] }
  //   - NestedItemCategory: { title, categories: [{ title, itemCards }, ...] }
  const categories = regularCards.flatMap((card) => {
    const c = card?.card?.card;
    if (!c?.title) return [];

    if (c.itemCards?.length) {
      return [{ title: c.title, itemCards: c.itemCards }];
    }

    if (c.categories?.length) {
      return c.categories
        .filter((sub) => sub?.itemCards?.length)
        .map((sub) => ({
          title: `${c.title} - ${sub.title}`,
          itemCards: sub.itemCards,
        }));
    }

    return [];
  });

  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/";

  return (
    <div className="menu">
      <img
        className="menu-img"
        src={IMG_URL + cloudinaryImageId}
        alt={name}
      />

      <h1>{name}</h1>

      <div className="menu-info">
        <p>{cuisines?.join(", ")}</p>
        <p>{costForTwoMessage}</p>
      </div>

      {categories.map((category, index) => (
        <ResCategory
          key={category.title}
          data={category}
          showItems={index === showIndex}
          setShowItems={() =>
            setShowIndex(
              index === showIndex ? null : index
            )
          }
        />
      ))}
    </div>
  );
};

export default ResMenu;
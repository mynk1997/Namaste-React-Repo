import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResInfo from "../utils/useResInfo";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResInfo(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("category");
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {categories.map((category, index) => {
        return (
          <RestaurentCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwoString,
  deliveryTime,
  cloudinaryImageId,
}) => {
  return (
    <>
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img src={IMG_URL + cloudinaryImageId} alt="logo" />
        <h3>{name}</h3>
        <p>{cuisines?.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwoString}</p>
        <p>{deliveryTime} mins</p>
      </div>
    </>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 rounded-md bg-gray-950 text-slate-100">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

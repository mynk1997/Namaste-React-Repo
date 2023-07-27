import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSclice";

const ItemList = ({ item }) => {
  const dispatcher = useDispatch();
  const handleAddItem =(item)=>{
    dispatcher(addItems(item));
  }

  return (
    <div>
      {item?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs pr-10">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add +
              </button>
            </div>
            <div>
              <img
                className="w-full"
                src={IMG_URL + item.card.info.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

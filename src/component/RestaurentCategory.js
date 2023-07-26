import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className=" flex justify-between">
          {/* {Header} */}
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <button onClick={() => clickHandler()}>V</button>
          </span>
        </div>
        <div>
          {/* {Body} */}
          {showItems && <ItemList item={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurentCategory;

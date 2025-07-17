import { useState } from "react";
import CategoryItem from "./CategoryItem";

const RestaurantCategory = ({ data, setShowIndex, showItem }) => {
  console.log("data", data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-full my-5 rounded-md py-2">
        <div
          className="flex justify-between  pb-4 border-b-gray-300 border-b-6"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data?.title} {`(${data?.itemCards?.length})`}
          </span>
          <span>{showItem ? "🔼" : "🔽"}</span>
        </div>

        {showItem &&
          data?.itemCards?.map((item) => <CategoryItem item={item?.card} />)}
      </div>
    </div>
  );
};

export default RestaurantCategory;

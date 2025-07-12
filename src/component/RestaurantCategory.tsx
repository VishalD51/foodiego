import { useState } from "react";
import CategoryItem from "./CategoryItem";

const RestaurantCategory = ({ data }) => {
  console.log("data", data);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="w-full my-5 rounded-md py-2">
        <div
          className="flex justify-between  pb-4 border-b-gray-300 border-b-6"
          onClick={handleClick}
        >
          <span className="font-bold">{data?.title}</span>
          <span>{open ? "🔼" : "🔽"}</span>
        </div>

        {open &&
          data?.itemCards?.map((item) => <CategoryItem item={item?.card} />)}
      </div>
    </div>
  );
};

export default RestaurantCategory;

import { useDispatch } from "react-redux";
import ratingLogo from "../assets/rating.png";
import { CATEGORY_ITEM_CDN_URL } from "../utils/constant";
import { addItem } from "../utils/CartSlice";

const CategoryItem = ({ item }) => {
  console.log(item);
  const { info } = item;
  const disptch = useDispatch();
  const handleAdd = (item) => {
    disptch(addItem(item));
  };
  return (
    <div className="flex gap-5 items-center bg-white my-5 border-b-2 pb-5 border-b-gray-300">
      <div className="w-9/12">
        <p className="font-medium">{info?.name}</p>
        <p>
          ₹{info?.defaultPrice ? info?.defaultPrice / 100 : info?.price / 100}
        </p>
        <div className="flex gap-1 items-center">
          <img
            className="w-[20px] h-[20px]"
            alt="rating"
            src={ratingLogo}
          ></img>
          <span>
            {info?.ratings?.aggregatedRating?.rating} (
            {info?.ratings?.aggregatedRating?.ratingCountV2})
          </span>
        </div>
        <p className="text-sm text-gray-600">{info?.description}</p>
      </div>
      <div className="flex flex-col ">
        <img
          className="w-[150PX] "
          alt="rse-logo"
          src={`${CATEGORY_ITEM_CDN_URL}${info?.imageId}`}
        />
        <button
          className="p-2 bg-black text-white  opacity-50 border-2 rounded cursor-pointer"
          onClick={() => {
            handleAdd(item);
          }}
        >
          {" "}
          Add +
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;

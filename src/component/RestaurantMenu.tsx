import ratingLogo from "../assets/rating.png";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const params = useParams();

  const restInfo = useRestaurantMenu(params);
  const [showIndex, setShowIndex] = useState(1);

  if (restInfo === null) return;

  const { info } = restInfo && restInfo?.cards?.[2]?.card?.card;
  const categoryData =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="p-4 mx-auto w-6/12 flex flex-col">
      <h1 className="font-bold text-2xl">{info?.name}</h1>
      <div className="flex gap-1.5">
        <img className="w-7 h-7" alt="rating" src={ratingLogo}></img>
        <span>
          {info?.avgRating} {`(${info?.totalRatingsString})`}
        </span>
      </div>
      <span>
        {info?.costForTwoMessage}, {info?.sla?.slaString?.toLowerCase()}
      </span>
      <div className="mt-8">
        {categoryData?.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            setShowIndex={() => {
              showIndex === index ? setShowIndex(-1) : setShowIndex(index);
            }}
            showItem={index === showIndex ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

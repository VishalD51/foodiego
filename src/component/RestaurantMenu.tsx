import ratingLogo from "../assets/rating.png";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();

  const restInfo = useRestaurantMenu(params);

  if (restInfo === null) return;

  const { info } = restInfo && restInfo?.cards?.[2]?.card?.card;
  const categoryData =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card;
  console.log(restInfo?.cards?.[4]?.groupedCard?.cardGroupMap);

  return (
    <div className="p-4 mx-auto w-full flex flex-col max-w-[600px]">
      <h1 className="font-bold text-2xl">{info?.name}</h1>
      <div className="flex gap-1.5">
        <img className="w-7 h-7" alt="rating" src={ratingLogo}></img>
        <span>
          {info?.avgRating} {`(${info?.totalRatingsString})`}
        </span>
      </div>
      <span>{info?.costForTwoMessage}</span>
      <p>{info?.sla?.slaString?.toLowerCase()}</p>
      <div className="mt-8">
        <p className="font-bold p-2 border rounded">
          {categoryData?.title}
          {`(${categoryData?.itemCards?.length})`}
        </p>
        {categoryData?.itemCards?.length > 0 &&
          categoryData?.itemCards?.map(({ card }) => (
            <div className="my-3 border rounded p-3 border-gray-400">
              <p className="vegNonveg">{card?.info?.vegClassifier}</p>
              <p className="font-medium">{card?.info?.name}</p>
              <p className="pric">₹{card?.info?.defaultPrice / 100}</p>
              <p className="rating">
                {card?.info?.ratings?.aggregatedRating?.rating}
                {`(${card?.info?.ratings?.aggregatedRating?.ratingCountV2})`}
              </p>
              <p
                className="description"
                style={{ width: "500px", lineClamp: "3" }}
              >
                {card?.info?.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

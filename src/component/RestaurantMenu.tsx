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
    <div>
      <h1>{info?.name}</h1>
      <div className="rating-container">
        <img className="rating-logo" alt="rating" src={ratingLogo}></img>
        <span>
          {info?.avgRating} {`(${info?.totalRatingsString})`}
        </span>
        <span>{info?.costForTwoMessage}</span>
      </div>
      <p>{info?.sla?.slaString?.toLowerCase()}</p>
      <div className="category-container">
        <p className="title">
          {categoryData?.title}
          {`(${categoryData?.itemCards?.length})`}
        </p>
        {categoryData?.itemCards?.length > 0 &&
          categoryData?.itemCards?.map(({ card }) => (
            <div className="itemCard">
              <p className="vegNonveg">{card?.info?.vegClassifier}</p>
              <p className="name">{card?.info?.name}</p>
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

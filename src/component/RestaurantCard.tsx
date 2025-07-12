import { Link } from "react-router-dom";
import ratingLogo from "../assets/rating.png";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props: any) => {
  const { restData } = props;
  const { info } = restData;
  const trimString = (str: string, maxLength: number): string => {
    if (str?.length <= maxLength) return str;
    return str?.slice(0, maxLength) + "...";
  };
  console.log("info", info);

  return (
    <Link to={`/restaurant/${info?.id}`} className="flex">
      <div className="res-card-in">
        <div className="img-container">
          <img
            className="w-[300px] h-[200px] object-cover  hover:rounded-xl hover:scale-95 duration-200 transition-all shadow-gray-500 shadow-md rounded"
            alt="rse-logo"
            src={`${CDN_URL}${info?.cloudinaryImageId}`}
          />
          <div className="bottom-2.5 z-10">
            <span className="font-bold">
              {info?.aggregatedDiscountInfoV3?.header}{" "}
              {info?.aggregatedDiscountInfoV3?.subHeader}
            </span>
          </div>
        </div>
        <div className="detail-container">
          <span className="res-name">{info?.name}</span>
          <div className="flex gap-1.5">
            <img className="w-[25px]" alt="rating" src={ratingLogo}></img>
            <span>{info?.avgRating}</span>
            <span>{info?.sla?.slaString}</span>
          </div>
          <span className="cuisine">
            {trimString(info?.cuisines.join(", "), 35)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;

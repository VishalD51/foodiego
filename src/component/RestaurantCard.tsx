import ratingLogo from "../assets/rating.png";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props: any) => {
  const { restData } = props;
  const { info } = restData;
  const trimString = (str: string, maxLength: number): string => {
    if (str?.length <= maxLength) return str;
    return str?.slice(0, maxLength) + "...";
  };

  return (
    <a className="res-card">
      <div className="res-card-in">
        <div className="img-container">
          <img
            className="res-logo"
            alt="rse-logo"
            src={`${CDN_URL}${info?.cloudinaryImageId}`}
          />
          <div className="img-text-container">
            <span className="img-text">
              {info?.aggregatedDiscountInfoV3?.header}{" "}
              {info?.aggregatedDiscountInfoV3?.subHeader}
            </span>
          </div>
        </div>
        <div className="detail-container">
          <span className="res-name">{info?.name}</span>
          <div className="rating-container">
            <img className="rating-logo" alt="rating" src={ratingLogo}></img>
            <span>{info?.avgRating}</span>
            <span>{info?.sla?.slaString}</span>
          </div>
          <span className="cuisine">
            {trimString(info?.cuisines.join(", "), 35)}
          </span>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;

import { useEffect, useState } from "react";
import { restData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "react-shimmer";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [search, setSearch] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let updatedList = [...restList];

    if (isTopRated) {
      updatedList = updatedList?.filter((item) => item.info.avgRating > 4.4);
    }

    if (search.trim() !== "") {
      updatedList = updatedList?.filter((item) =>
        item?.info?.name.toLowerCase().includes(search)
      );
    }

    setFilterList(updatedList);
  }, [restList, search, isTopRated]);

  const fetchData = async () => {
    const responce = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0365437&lng=72.5611395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await responce.json();
    setRestList(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterList(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const handleTopRated = () => {
    setIsTopRated(!isTopRated);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="body">
      <div className="search">
        <div>
          Search:
          <input onChange={(e) => handleSearch(e)} value={search} />
        </div>
        <button onClick={handleTopRated}>Top Rated</button>
      </div>
      <div className="res-container">
        {filterList.length > 0 ? (
          filterList.map((item) => (
            <RestaurantCard restData={item} key={item.info.id} />
          ))
        ) : (
          <>
            <Shimmer height={130} width={350} className="shimmer" />
            <Shimmer height={130} width={350} className="shimmer" />
            <Shimmer height={130} width={350} className="shimmer" />
            <Shimmer height={130} width={350} className="shimmer" />
            <Shimmer height={130} width={350} className="shimmer" />
            <Shimmer height={130} width={350} className="shimmer" />
            <Shimmer height={130} width={350} className="shimmer" />
          </>
        )}
      </div>
    </div>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { restData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restList, setRestList] = useState(restData);
  const [filterList, setFilterList] = useState(restData);
  const [search, setSearch] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    fetchData();

    let updatedList = [...restList];

    if (isTopRated) {
      updatedList = updatedList?.filter((item) => item.info.avgRating > 4.4);
    }

    if (search.trim() !== "") {
      updatedList = updatedList?.filter((item) =>
        item.info.name.toLowerCase().includes(search)
      );
    }

    setFilterList(updatedList);
  }, [restList, search, isTopRated]);

  const fetchData = async () => {
    const responce = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0365437&lng=72.5611395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await responce.json();
    console.log("responce", data);
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
        Search:
        <input onChange={(e) => handleSearch(e)} value={search} />
      </div>
      <button onClick={handleTopRated}>Top Rated</button>
      <div className="res-container">
        {filterList.map((item) => (
          <RestaurantCard restData={item} key={item.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

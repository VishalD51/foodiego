import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "react-shimmer";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [search, setSearch] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Ensure restList is an array before spreading
    let updatedList = Array.isArray(restList) ? [...restList] : [];

    if (isTopRated) {
      updatedList = updatedList.filter((item) => item?.info?.avgRating > 4.4);
    }

    if (search.trim() !== "") {
      updatedList = updatedList.filter((item) =>
        item?.info?.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterList(updatedList);
  }, [restList, isTopRated, search]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0365437&lng=72.5611395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants =
        data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestList(Array.isArray(restaurants) ? restaurants : []);
      setFilterList(Array.isArray(restaurants) ? restaurants : []);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setRestList([]);
      setFilterList([]);
    }
  };

  const handleTopRated = () => {
    setIsTopRated(!isTopRated);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    let updatedList = Array.isArray(restList) ? [...restList] : [];

    if (isTopRated) {
      updatedList = updatedList.filter((item) => item?.info?.avgRating > 4.4);
    }

    if (search.trim() !== "") {
      updatedList = updatedList.filter((item) =>
        item?.info?.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterList(updatedList);
  };

  if (onlineStatus === false) {
    return <h1>You are offline. Please check your internet connection.</h1>;
  }

  return (
    <div className="body">
      <div className="m-2.5 flex gap-12">
        <div className="flex gap-1.5 items-center">
          <input
            onChange={(e) => handleInput(e)}
            value={search}
            className="border rounded h-8 px-1"
            data-testid="search"
          />
          <button
            className="border-2 py-1 px-2 rounded mx-2"
            onClick={handleSearch}
            data-testid="searchBtn"
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="border px-2 rounded bg-red-600 text-white py-1.5 hover:cursor-pointer hover:bg-red-800"
            onClick={handleTopRated}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex gap-2.5 flex-wrap mx-[50px] items-center">
        {filterList?.length > 0 ? (
          filterList?.map((item) => (
            <RestaurantCard restData={item} key={item?.info?.id} />
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

import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0365437&lng=72.5611395&restaurantId=47589"
    );

    const json = await data.json();
    setRestInfo(json?.data);
  };

  const { text } = restInfo?.cards?.[0]?.card?.card;
  return (
    <div>
      <h1>{text}</h1>
      <p>Menu item</p>
    </div>
  );
};

export default RestaurantMenu;

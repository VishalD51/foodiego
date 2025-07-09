import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constant";

function useRestaurantMenu(params) {
  const [restInfo, setRestInfo] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${RESTAURANT_MENU_URL}${params?.id}`);

    const json = await data.json();
    setRestInfo(json?.data);
  };

  return restInfo;
}

export default useRestaurantMenu;

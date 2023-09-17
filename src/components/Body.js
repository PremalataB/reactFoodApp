import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  return (
    <div className="body">
      <div className="search">search</div>
      <div className="filter">
      <button
        className="filter_btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}
      ></button>
      <div className="res-container ">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Body;

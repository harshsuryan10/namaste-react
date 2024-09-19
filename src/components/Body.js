import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
    //local state variable - super powerful variable
    let [listOfResturant,setlistOfResturant] = useState([]);
    let [filteredResturant,setfilteredResturant] = useState([]);
    const [searchText,setsearchText] = useState("");
    useEffect(async () => {
       fetchdata()
    } , []);
    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0010518&lng=77.5510903&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); 
        setlistOfResturant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredResturant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
        <h1>
            Looks like you`re offline!! <br/> Please Check your internet connecion
            </h1>
        );
    }
    if(listOfResturant.length === 0){
        return <Shimmer/>;
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        const filteredRest = listOfResturant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredResturant(filteredRest);
                    }}>Seach</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    listOfResturant = listOfResturant.filter((resturant ) => resturant.info.avgRating>4.5);
                    setlistOfResturant(listOfResturant);
                }}>Top-Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredResturant.map((resturant) => 
                    <Link
                    key={resturant.info.id}
                    to={"/restaurants/"+resturant.info.id}>
                        <RestaurantCard  resData={resturant}/>
                    </Link>)
                }
            </div>
        </div>
    );
}
export default Body;
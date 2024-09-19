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
            <div className="flex items-center">
                <div className="m-4 p-4">
                    <input type="text" className="border border-soli border-black rounded-lg" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}/>
                </div>
                <div className="m-4 p-4">
                <button className="px-4 py-2 bg-green-100 m-4 rounded-sm" onClick={() => {
                        const filteredRest = listOfResturant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredResturant(filteredRest);
                    }}>Seach</button>
                </div>
                <button className="px-4 py-2 bg-green-100 rounded-sm" onClick={()=>{
                    listOfResturant = listOfResturant.filter((resturant ) => resturant.info.avgRating>4.5);
                    setlistOfResturant(listOfResturant);
                }}>Top-Rated Restaurant</button>
            </div>
            <div className="flex flex-wrap">
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
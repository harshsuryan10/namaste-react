import resobj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
    //local state variable - super powerful variable
    let [listOfResturant,setlistOfResturant] = useState(resobj);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    listOfResturant = listOfResturant.filter((resturant ) => resturant.avgRating>4);
                    setlistOfResturant(listOfResturant);
                }}>Top-Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfResturant.map(resturant => <RestaurantCard key={resturant.id} resData={resturant}/>)
                }
            </div>
        </div>
    );
}
export default Body;
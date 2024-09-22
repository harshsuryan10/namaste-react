import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ResCategory from './ResCategory';
import { useState } from 'react';
export const RestaurantMenu = () => {
    const {resId} = useParams();
    const data = useRestaurantMenu(resId);
    const [showIndex ,setShowIndex] = useState(null);
    if(data === null) {return <Shimmer/>}
    const {name,cuisines,costForTwoMessage,avgRating,sla} = data?.cards[2]?.card?.card?.info;
    const {itemCards} = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    return (
        <div className="text-center ">
            {/* <img className="w-48 h-48 rounded-lg self-center" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/> */}
            <h1 className="font-extrabold text-3xl my-10">{name}</h1>
            <p className="font-semibold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* {categories accordiens} */}
            <div>
                {categories.map((category,index) => (
                    //controlled component
                    <ResCategory key={category?.card?.card.title} data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}/>
                ))}
            </div>
            
        </div>
    );
}
export default RestaurantMenu;
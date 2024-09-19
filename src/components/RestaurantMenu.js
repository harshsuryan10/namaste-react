import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurantMenu';
export const RestaurantMenu = () => {
    const {resId} = useParams();
    const data = useRestaurantMenu(resId);
    if(menu === null) {return <Shimmer/>}
    const {name,cuisines,costForTwoMessage,avgRating,sla} = menu?.cards[2]?.card?.card?.info;
    const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{sla.deliveryTime} mins</p>
            <div>
                {itemCards.map(res => 
                    <li key={res.card.info.id}>
                        {res.card.info.name} {" "}<br/>
                        {res.card.info.price/100}
                    </li>
                )}
            </div>
        </div>
    );
}
export default RestaurantMenu;
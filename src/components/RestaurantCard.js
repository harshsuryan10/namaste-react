const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,avgRating,costfortwo,sla} = resData.info;
    return (
        <div className="flex flex-col  m-4 p-4 w-[300px] h-[500px] bg-gray-100 border border-solid border-black hover:bg-gray-200 ">
            <img className="w-48 h-48 rounded-lg self-center" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="text-wrap">{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costfortwo} rupees</h4>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
    );
}


//Higher Order Component

//input - ResturantCard => ResturantCardPromoted

export const withPromtedLabel = (RestaurantCard) =>{
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;
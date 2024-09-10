const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,costfortwo} = resData;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costfortwo} rupees</h4>
            <h5>38mins</h5>
        </div>
    );
}
export default RestaurantCard;
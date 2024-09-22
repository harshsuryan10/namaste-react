import React from 'react'

const CartItemList = (items) => {
    return (
        <div>
                {items.items.map((item) => (
                    <div key={item?.card?.info?.id} className="p-4 m-4 border-gray-200 border-b-2 text-left flex justify-between">
                        <div>
                            <div className="py-2 mx-4">
                                <span className="font-semibold">{item?.card?.info?.name}</span>
                                <span> - ₹{item?.card?.info?.price/100}</span>
                            </div>
                            <p className="text-xs w-[400px] mx-4">{item?.card?.info?.description}</p>
                        </div>
                        <div>
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item?.card?.info?.imageId} className="w-[80px] h-auto m-4"/>
                        </div>
                    </div>
                ))}
            
        </div>
      )
}

export default CartItemList
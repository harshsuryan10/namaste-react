import React from "react";
import ReactDOM from "react-dom/client";
//part-02
/*
Header
-logo
-navitems
Body
-search
-Restaurant container
--restaurant cards
---img
---name or res ,star rating,cuisine,delivery time
Footer
-copyright
-links
-address
-contact
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiCb5hx4mPqXFLWJg85zt0-UgSO7ZFY27Jg&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
const styleCard={
    backgroundColor:"lightgrey"
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,costfortwo} = resData;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costfortwo} rupees</h4>
            <h5>38mins</h5>
        </div>
    );
}
const resobj = [
    {
        id:"1234",
        name: "Cafe Amudham",
        costfortwo: "₹400 for two",
        cuisines: ["South Indian","Snacks"],
        avgRating: 4.6,
    },
    {
        id:"1235",
        name: "Meghna Foods",
        costfortwo: "₹350 for two",
        cuisines: ["North Indian","Snacks"],
        avgRating: 4.5,
    }
];
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resobj.map(resturant => <RestaurantCard key={resturant.id} resData={resturant}/>)
                }
            </div>
        </div>
    );
}
const AppLayout = () => {
    return (
      <div className="app">
        <Header/>
        <Body/>
      </div>  
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);









//part-02
//React Components
//two types of components
//1. Functional Components - new
//2. Class Components - old
//React Functional Components
//in javascript below both function define is same
// const fn = () => {
//     return true;
// }
// const fn2 = () => true;
// const Title = ()=> {
//     return <div>
//                 <h1>XYZ Company Title Component</h1>
//             </div>;
// }
// const title =  (
//      <div>
//         <h1>XYZ Company Title Component</h1>
//     </div>
// );
// //Component composition
// const number = 12/0;
// const HeadingComponent = ()=> {
//     return (<div className="container">
//                 <Title/> 
//                 {title};
//                 <h1>{number}</h1>
//                 <h1>Heading Component</h1>
//             </div>);
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);
//React element => Object =>(after render) HTML-element
// const heading = React.createElement("h1",{id:"heading"},"Namaste React")
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX - is not HTML in js
//JSX - is a syntax extension for JavaScript
// const jsxHeading = <h1 id="heading" className="heading">React using JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);



//part - 01
// //Nested create h1 in react
// const parent = React.createElement("div",
//     {id:"parent"}
//     ,[React.createElement("div",{id:"child"},
//         [React.createElement("h1",
//             {},
//             'Hello, world!1'
//         ),React.createElement("h2",
//             {},
//             'Hello, world!2'
//         )]
//     ),
//     React.createElement("div",{id:"child1"},
//         [React.createElement("h1",
//             {},
//             'Hello, world!3'
//         ),React.createElement("h2",
//             {},
//             'Hello, world!4'
//         )]
//     )]
// );

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

//part-03
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


// const styleCard={
//     backgroundColor:"lightgrey"
// }



// const AppLayout = () => {
//     return (
//       <div className="app">
//         <Header/>
//         <Body/>
//       </div>  
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);









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
//Component composition
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
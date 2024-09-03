import React from "react";
import ReactDOM from "react-dom/client";
//Nested create h1 in react
const parent = React.createElement("div",
    {id:"parent"}
    ,[React.createElement("div",{id:"child"},
        [React.createElement("h1",
            {},
            'Hello, world!1'
        ),React.createElement("h2",
            {},
            'Hello, world!2'
        )]
    ),
    React.createElement("div",{id:"child1"},
        [React.createElement("h1",
            {},
            'Hello, world!3'
        ),React.createElement("h2",
            {},
            'Hello, world!4'
        )]
    )]
);

const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
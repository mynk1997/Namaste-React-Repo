import React from "react";
import ReactDOM from "react-dom/client";

const heading= React.createElement("h1",{id:"heading"},"Hello from React");

const parent= React.createElement("div",{class:"parent"},[heading,
React.createElement("div",{class:"child1"},React.createElement("div",{class:"child"},"This is the child of 1st child"),
React.createElement("div",{class:'child2'},"this is the 2nd child"))])

console.log(parent); //React Element is an object and its attributes are props.
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  
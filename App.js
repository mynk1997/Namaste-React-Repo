import React from "react";
import ReactDOM from "react-dom/client";

const Title =()=>{
    return <h1 id="heading">This is our Title component</h1>
}
const Heading= () =>{
    return <><></> <h1 id="heading">Namaste React🚀</h1>
    <Title/> 
    </>
} 

console.log(Heading); //React Element is an object and its attributes are props.
const root=ReactDOM.createRoot(document.getElementById("root"));
const root2=ReactDOM.createRoot(document.getElementById("root2"));

root.render(<Heading/>);  
root2.render(<Heading/>);  
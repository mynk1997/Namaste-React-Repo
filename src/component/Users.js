import { useState } from "react"

const Users=({name, location, contact})=>{
    let [count,setCount]=useState(0)
    return(
        <div className="user-cards">
            <h2>Count:{count}</h2>
            <h2>{name}</h2>
            <h2>{location}</h2>
            <h2>{contact}</h2>
        </div>
    )
}
export default Users
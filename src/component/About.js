import Users from "./Users"
import UserClass from "./UserClass"
import React from "react"
// const About=()=>{
//     return(
//         <>
//         <div>
//             <h1>This is About Us page</h1>
//         </div>
//         {/* <Users name="Mayank(function)" location="Noida" contact="asd@gmail.com" /> */}
//         <UserClass name="Mayank(class)" location="Noida" contact="asd@gmail.com" />
//         </>
//     )
// }

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("parent constructor called")
    }
    render(){
        console.log("Parent render Called")
        return(
        <>
            <div>
                <h1>This is About Us page</h1>
            </div>
            <UserClass name="First" location="Noida" contact="asd@gmail.com" />
            <UserClass name="Second" location="Noida" contact="asd@gmail.com" />
            <UserClass name="Third" location="Noida" contact="asd@gmail.com" />
        </>
    )}
    componetDidMount() {
        console.log(" Parent Component DidMount");
    }
}

export default About

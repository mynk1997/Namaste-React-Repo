import UserContext from "../utils/UserContext"
import UserClass from "./UserClass"
import React from "react"


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
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                         <h1>This is About Us page. My Name is {loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <UserClass name="First" location="Noida" contact="asd@gmail.com" />
        </>
    )}
    componetDidMount() {
        console.log(" Parent Component DidMount");
    }
}

export default About


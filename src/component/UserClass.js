import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            count1: 1,
        };
        console.log(this.props.name+" Child constructor called")
    }
    render(){
        console.log(this.props.name+" Child component rendered")
        const{name,location,contact}=this.props;
        const{count}=this.state;
        return (
        <div className="user-cards">
            <button onClick={()=>this.setState({count:count+1})}>Increase Count</button>
            <h2>Count:{count}</h2>
            <h2>{name}</h2>
            <h2>{location}</h2>
            <h2>{contact}</h2>
        </div>)
    }
    componentDidMount() {
        console.log(this.props.name+" Child Component DidMount");
    }
}
export default UserClass;
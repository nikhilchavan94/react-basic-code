import React from "react";

class UserRenderLifecycle extends React.Component {

 constructor()
 {
    super();
    this.state={
    email:"n@gmail.com"
    }
 }
    render() {
        console.log("render method",this.props);
        return <div><h1> User Component for Render Life Cycle</h1>
        <button onClick={()=>this.setState={email:"agmail.com"}}>Update</button></div>
    }
}
export default UserRenderLifecycle;
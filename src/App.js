import "./App.css";
import React from "react";
import Login from "./Login";
import Student from "./Student";
import BasicFormValidation from "./BasicFormValidation";
import FunctionasProps from "./FunctionasProps";
import Child from "./Child";
import UserRenderLifecycle from "./UserRenderLifecycle";
import { useState } from "react";

// function App() {
// // function data_fun()
// // {
// //   alert("hi data")
// // }

//   return (
//     <div className="App">
//       <h1>adadaddada</h1>
//    {/* <Login></Login> */}
//    {/* <Student/> */}
//    {/* <BasicFormValidation/> */}
//    <FunctionasProps data={data_fun}/>
//    <Child data={data_fun} />
//     </div>
//   );
// }

// Constructor Life Cycle Method

// class App extends React.Component
// {
//   constructor()

//   {
//     super();  // super is uded to call constructor of React.Component Class
//     console.log("constructor");
//     this.state=
//     {

//       data:"nick"
//     }

//   }
//     render()
//     { console.log("render");
//       return (<div>React Class Component  {this.state.data} </div>)
//     }
// }

// render Life cycle method
// function App()
// {
//   const [name,steName]=React.useState("nick")
//   return (
//   <div className="App">
//     <h1>App Component</h1>
//     <UserRenderLifecycle name={name}/>
//     {/* <button onClick={()=>steName("Vick")}>click</button> */}
//   </div>);
// }

// componentDidMount Life cycle method is called when html and dom are ready.use - api call ,hide show operation,

// class App extends React.Component
// {
//   constructor()
//   {
//     super();
//     console.log("constructor");

//     this.state="nick"

//   }

//   render()
//   {
//     console.log("render Function ");
//     return <div>
//       <h1>{this.state.name} </h1><br />
//       <button onClick={()=>this.setState({name:"vick"})}>Update</button>

//     </div>
//   }

//   componentDidMount()    //only call once it updated next time only render method invoke
//   {
//     console.log("Component Did Mount");
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    //  this.state={name:"vick"}
    //  console.log(this.state.name);
    this.state = { count: 0 };
  }

  componentDidUpdate(
    preProps,
    preState,
    snapshot
  ) 
  //this method calls whanever state is change in lif cycle or code all time
  //  3 parameters [preState]- gives previous value or state ,used to checck previous and current state are same or not
  {
    console.log("component did update", this.state, preState);
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
      console.log("count are up to 10");
    }
  }
  render() {
    console.log("render");
    return (
      <div>
        {/* <button onClick={()=>this.setState({name:"nick"})}>Update</button> */}
        <button onClick={() => this.setState({ count: 1 })}>count</button>
        {/* <div>  {this.state.name}</div> */}
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default App;

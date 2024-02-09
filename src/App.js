import "./App.css";
import React, { useEffect } from "react";
import Login from "./Login";
import Student from "./Student";
import BasicFormValidation from "./BasicFormValidation";
import FunctionasProps from "./FunctionasProps";
import Child from "./Child";
import UserRenderLifecycle from "./UserRenderLifecycle";
import { useState } from "react";
import Componentwillunmount from "./Componentwillunmount"
import Use_effect_using_state from "./Use_effect_using_state";
import {Button}  from 'react-bootstrap'
 
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

// componentDidUpdate Life Cycle Method

// class App extends React.Component {
//   constructor() {
//     super();
//     console.log("constructor");
//     //  this.state={name:"vick"}
//     //  console.log(this.state.name);
//     this.state = { count: 0 };
//   }

//   componentDidUpdate(
//     preProps,
//     preState,
//     snapshot
//   )
//   //this method calls whanever state is change in lif cycle or code all time
//   //  3 parameters [preState]- gives previous value or state ,used to checck previous and current state are same or not
//   //               [snapshhot]-
//   {
//     console.log("component did update", this.state, preState,snapshot);
//     if (this.state.count < 10) {
//       this.setState({ count: this.state.count + 1 });
//       console.log("count are up to 10");
//     }
//   }
//   render() {
//     console.log("render");
//     return (
//       <div>
//         {/* <button onClick={()=>this.setState({name:"nick"})}>Update</button> */}
//         <button onClick={() => this.setState({ count: 1 })}>count</button>
//         {/* <div>  {this.state.name}</div> */}
//         <div>{this.state.count}</div>
//       </div>
//     );
//   }
// }

// shouldComponentUpdate Life Cycle Method -  Its is used to stop default rendering.
// it renders but doesn't display so if it returns true them it will appear on display
// it used to avoid unwanted rendering
// class App extends React.Component
// {
//   constructor()
//   {
//     super();
//     console.log("constructor");
//     this.state={count:0}
//   }

//   render()
//   {
//     console.log("render");
//     return  <div>
//       <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
//       <h1>{this.state.count}</h1>
//     </div>
//   }

//   shouldComponentUpdate()
//   {
//     console.log("should component update");
//     console.log(this.state.count);
//     return true;
//   }
// }




// componentWillUnmount Life Cycle Method

// class App extends React.Component
// {
 
//  constructor()
//  {
//   super();
//   this.state={
//     show:true
  
//   }
  
//  }
//   render()
//   {
//     return(
//       <div className="App">
//         {
//           this.state.show ? <Componentwillunmount/> : ""
//         }
//         <button onClick={()=>this.setState({show :!this.state.show})}>Toddle To Child Component</button>
//       </div>
//     )
//   }

// }




// Hooks in React Js 
// Usestate


// function App()
// {
//   const[name,setname]=useState("Nick")
//   return(
//     <div className="App">
//       <button onClick={()=>setname("vick")}>click</button>
//      <h1> {name}</h1>
//     </div>
//   )
// }



// Hooks In React Js

//useEffect

// function App()
// {  const [count,setcount]=useState(0)
//   React.useEffect(()=>
//   {
//     console.log("UseEffect");
//   })
//   return(

//     <div className="App"><button onClick={()=>setcount(count+1)}>count</button>
//          <div>{count}</div></div>
    
//   )
// }



// useeffect with  state and props

// function App()
// {
// const[data,setdata]=useState(10)
// const[count,setcount]=useState(100)


  
//   // if u want to use  useEffect on only one button or function pass it as parametr in useEffect

//   return(
 
//     <div className="App">  
// {/* use effect using props   */}
//             <Use_effect_using_state  data={data} count={count}/> 
//       {data}
//       <button onClick={()=>setdata(data+1)}>data</button>
//       <br />
//       {count}
//       <button onClick={()=>setcount(count+1)}>count</button>
//     </div>

//   )

// }



// styling in react js

function App()
{
  const arraylis=[{
    name:"nick",email:"n@gmail.com"
  },{
    name:"nick",email:"n@gmail.com"
  },{
    name:"nick",email:"n@gmail.com"
  }]
  arraylis.map((item)=>
  {
    console.log("arraylist",item);
  })
//     arraylis.map((item)=>{
// console.log("map function",item);
//     });
  // for(let i=0;i<arraylis.length;i++)
  // {
  //   console.log("array list :",arraylis[i]);
  // }
  return (
    
    <div className="App">   
      {/* <h1 style={{color:'red',backgroundColor:'blue'}}>Inline Css</h1>
      <Button>click</Button> */}
    
    {arraylis.map((item)=>
  

    <tr>
      <td>{item.name}</td>
    </tr>
  )}
    </div>
  )

  
}                 




export default App;
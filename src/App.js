import "./App.css";
import React, { useEffect, useMemo, useRef } from "react";
import Login from "./Login";
import Student from "./Student";
import BasicFormValidation from "./BasicFormValidation";
import FunctionasProps from "./FunctionasProps";
import Child from "./Child";
import UserRenderLifecycle from "./UserRenderLifecycle";
import { useState } from "react";
import Componentwillunmount from "./Componentwillunmount";
import Use_effect_using_state from "./Use_effect_using_state";
import { Button } from "react-bootstrap";

import Reuse_component from "./Reuse_component";
import Child_to_pareants from "./Child_to_parents";
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

// // styling in react js

// function App()
// {
//   const array=[{id:1,name:"nick",address:"pune",email:"a@gmail.com"},
//   {id:2,name:"vivk",address:"aaaa",email:"a@asas.com"},
//   {id:3,name:"micm",address:"cfcfc",email:"a@sas.com"}]

// //  in react js we use map function instead of for loop because ,,,,
// // the return fnction does not support for looop but siupport map function
//   return(
//   <div className="App">
//  <div>{array.map((data)=>
//  <table>
//   <tbody>
//  <tr>
//   <td>{data.id}</td>
//   <td>{data.name}</td>
//   <td>{data.address}</td>
//   <td>{data.email}</td>
//  </tr></tbody></table>)
// }</div>
//   </div>);
// }

// function App() {
//   const array = [
//     { name: "ala", adress: "snx" },
//     { name: "13", adress: "snxsx" },
//     { name: "qq", adress: "snxsx" },
//   ];
//   return (
//     <div className="App">
//       {array.map((item,i) =>
//         item.adress === "snxsx"?(   // herer we use ternary operators to show specific data
//           <table>
//             {/* key is used for uniqueness in tables row react act like that the rows contetns must have unique key like id */}
//             <tr key={i}>
//             <td>{item.name}</td>
//             <td>{item.adress}</td>
//           </tr>
//           </table>
//         ) : null // ternary operator null
//       )}
//     </div>
//   );
// }

// list of array in react js with nested list

// function App() {
//   const student = [
//     {
//       name: "nick",
//       address: "pune",
//       email: "a@gmail.com",
//       dest: [
//         { a: "sa", b: "b" }
//       ]
//     },
//     { name: "vivk", address: "aaaa", email: "a@asas.com" },
//     { name: "micm", address: "cfcfc", email: "a@sas.com" },
//   ];
//   return (
//     <div className="App">
//       {student.map((item)=>
//       <table>
//         <tr>
//           <td>{item.name}</td>
//           <td>{item.address}</td>
//           <td>{item.email}</td>
//           <td>{item.dest.map((itemq)=>
//           <tr>
//             <td>{itemq.a}</td>
//           </tr>
//           )}</td>
//         </tr>
//       </table>)}
//     </div>
//   );
// }

// reuse component using props and list array

// function App() {
//   const user = [
//     {
//       name: "nick",
//       address: "pune",
//     },
//     {
//       name: "nick",
//       address: "pune",
//     },
//     {
//       name: "nick",
//       address: "pune",
//     },
//   ];
//   return (<div className="App">
//       <div>
//         {user.map((item)=>

//            <Reuse_component  data={item}/>
//            )}
//       </div>

//   </div>);
// }

// react Fragment  : generally we have to wrapped up elements in one section to avoid this fragment used.
//  so we can write muktiple elements without wrapping.
// <React.Fragment></React.Fragment>  or <> </>

// function App()
// {
//   return(
//     <div  className="App">
//       <React.Fragment>
//         <h1>kbskkd</h1>
//         <h2>snlcsc</h2>
//       </React.Fragment>
//     </div>
//   )
// }

// sending data child component to parent component

//  function App()
//  {
//   const name="nick";
//   function parentalert(surname)
//   {
//     alert(surname);
//   }
//   return(
//     <div className="App">
//    <Child_to_pareants alert={parentalert} ></Child_to_pareants>
//     </div>
//   )
// }

// pure component : it is used to avoid unwanted rendering of the class component
// it is used only in class component for fucntional component .

// class App extends React.PureComponent
// {constructor()
//   {
//     super();
//     this.state={
//       count:0
//     }
//   }

//   render()

//   {console.log(this.state.count);
//     return  <button onClick={()=>this.setState({count:this.state.count})}>click</button>
//   }
// }

// recat js useMemo :it is used to avoid unwanted rendering of the function component

// function App() {

//   const [count,setcount]=useState(0);
//   const[item,setitem]=useState(10)

//    const usememofun=useMemo(
//     function funmemo()
//     {
//       console.log("funmemo");
//       return count*10;
//     }

//    ,[item])
//   return(
//     <div className="App">

//       <button onClick={()=>setcount(count+1)}>count</button>
//       <button onClick={()=>setitem(item*10)}>Item</button>
//       <div>{usememofun}</div>
//       <div>{count}</div>
//       <div>{item}</div>
//     </div>
//   )
// }

// useRef in react js : React does not allow to manipulate DOM because it will make slower to application,
// but useRef used to manipulate react DOM in only an emergency. it has authority to stop anyy fucniton ,to change style,hide show

function App() {
const inputref=useRef(null)

function inputfucvn()
{
  inputref.current.style.color="red"
}

return <div className="App">
  <input type="text"  ref={inputref} />
  <button onClick={inputfucvn}>click</button>
</div>
}

export default App;
